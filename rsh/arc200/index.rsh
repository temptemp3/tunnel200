"reach 0.1";

const Channel = Struct([
  ["inTokenId", Contract],
  ["outTokenId", Contract],
  ["channelerAddress", Address],
]);

const BaseState = Struct([["manager", Address]]);

const TunnelState = Struct([
  ...Struct.fields(BaseState),
  ["channelCount", UInt256],
]);

export const supportsInterface = (interfaces) => (interfaceSelector) => {
  return interfaces.includes(interfaceSelector);
};

// TN200 - Tunnel

const TN200 = (State) =>
  Reach.App(() => {
    setOptions({ connectors: [ALGO] });
    const supportedInterfaces = [];
    const Params = Object({
      zeroAddress: Address,
    });
    const D = Participant("Deployer", {
      params: Params,
      ready: Fun([Contract], Null),
    });
    const ARC200A = API({
      arc200_transfer: Fun([Contract, Address, UInt256], Null), // (Contract, to, value)Null
    });
    const AdminA = API("a_admin", {
      grant: Fun([Address], Null), // (Address)Null
    });
    const A = API({
      touch: Fun([], Null), // ()Null
      nop: Fun([], Null), // ()Null
    });
    const ChannelerA = API("a_channeler", {
      createChannel: Fun([Contract, Contract], UInt256), // inTokenId,outTokenId,tokenAmount->chId
      useChannel: Fun([UInt256, UInt256], Null), // chId,tokenAmt->Null
      deleteChannel: Fun([UInt256], Null), // chId->Null
    });
    const V = View({
      state: Fun([], State),
      manager: Fun([], Address),
      constructor: Fun([], Address),
      zeroAddress: Fun([], Address),
      supportsInterface: Fun([Bytes(4)], Bool),
    });
    init();
    const checkInput = (p) => {};
    D.only(() => {
      const p = declassify(interact.params);
    });
    D.publish(p).check(() => {
      checkInput(p);
    });

    const channels = new Map(UInt256, Channel);

    const { zeroAddress } = p;
    const initialState = {
      manager: D,
      channelCount: UInt256(0),
    };
    const [s] = parallelReduce([initialState])
      .define(() => {
        V.constructor.set(() => D);
        V.manager.set(() => s.manager);
        V.zeroAddress.set(() => zeroAddress);
        V.state.set(() => State.fromObject(s));
        V.supportsInterface.set(supportsInterface(supportedInterfaces));
      })
      .invariant(balance() == 0, "balance accurate")
      .while(true)
      .define(() => {
        const arc200 = {
          transfer: (ctc, pmt, to_, value_) => {
            const from_ = getAddress();
            const r = remote(ctc, {
              arc200_transfer: Fun([Bytes(4), Address, UInt256], Bool),
            });
            return r.arc200_transfer.pay(pmt).ALGO({
              rawCall: true,
              fees: 1,
              apps: [ctc],
              boxes: [
                [ctc, 0, from_],
                [ctc, 0, to_],
              ],
            })(Bytes.fromHex("0xda7025b9"), to_, value_); // sha256(arc200_transfer(address,uint256)bool)
          },
          transferFrom: (ctc, pmt, from_, to_, value_) => {
            const spender_ = getAddress();
            const r = remote(ctc, {
              arc200_transferFrom: Fun(
                [Bytes(4), Address, Address, UInt256],
                Bool
              ),
            });
            return r.arc200_transferFrom.pay(pmt).ALGO({
              rawCall: true,
              fees: 1,
              apps: [ctc],
              boxes: [
                [ctc, 0, from_],
                [ctc, 0, to_],
                [ctc, 1, [from_, spender_]],
              ],
            })(Bytes.fromHex("0x4a968f8f"), from_, to_, value_); // sha256(arc200_transferFrom(address,address,uint256)bool)
          },
        };
      })
      // api: createChannel
      // - create token channel
      .api_(ChannelerA.createChannel, (tokIn, tokOut) => {
        check(tokIn !== tokOut, "must be different token");
        return [
          (k) => {
            const chIdP = s.channelCount + UInt256(1);
            channels[chIdP] = Channel.fromObject({
              inTokenId: tokIn,
              outTokenId: tokOut,
              channelerAddress: this,
            });
            k(chIdP);
            return [
              {
                ...s,
                channelCount: chIdP,
              },
            ];
          },
        ];
      })
      .api_(ChannelerA.useChannel, (chId, amt) => {
        check(isSome(channels[chId]), "must exist");
        const [inTokenId, outTokenId, channelerAddress] = fromSome(
          channels[chId],
          Channel.fromObject({
            // invalid channel
            inTokenId: getContract(),
            outTokenId: getContract(),
            channelerAddress: getAddress(),
          })
        );
        return [
          (k) => {
            void arc200.transferFrom(inTokenId, 0, this, getAddress(), amt); // transfer in from user
            void arc200.transferFrom(
              outTokenId,
              0,
              channelerAddress,
              this,
              amt
            ); // transfer out to user from channeler
            k(null);
            return [s];
          },
        ];
      })
      // api: delete channel
      // - deletes token channel
      .api_(ChannelerA.deleteChannel, (chId) => {
        check(isSome(channels[chId]), "must exist");
        check(this === s.manager, "must be manager");
        return [
          (k) => {
            k(null);
            return [s];
          },
        ];
      })
      // api: grant
      // - grants manager (manager only)
      .api_(AdminA.grant, (addr) => {
        check(s.manager === this, "must be manager");
        return [
          (k) => {
            k(null);
            return [
              {
                ...s,
                manager: addr,
              },
            ];
          },
        ];
      })
      // api: touch
      // - transfers untracked funds to manager
      .api_(A.touch, () => {
        return [
          (k) => {
            const ut = getUntrackedFunds();
            transfer(ut).to(s.manager);
            k(null);
            return [s];
          },
        ];
      })
      // api: nop
      // - no operation
      .api_(A.nop, () => {
        return [
          (k) => {
            k(null);
            return [s];
          },
        ];
      })
      // api: arc200_transfer (manager only)
      // - transfer arc200
      .api_(ARC200A.arc200_transfer, (ctc, to_, value_) => {
        check(this === s.manager, "must be manager");
        return [
          (k) => {
            k(null);
            void arc200.transfer(ctc, 0, to_, value_);
            return [s];
          },
        ];
      });
    commit();
    exit();
  });

export const TUNNEL200 = TN200(TunnelState);
