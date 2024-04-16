// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Object({
    channelCount: ctc1,
    manager: ctc0
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['manager', ctc0], ['channelCount', ctc1]]);
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Contract;
  const ctc9 = stdlib.T_Struct([['inTokenId', ctc8], ['outTokenId', ctc8], ['channelerAddress', ctc0]]);
  const ctc10 = stdlib.T_Data({
    None: ctc7,
    Some: ctc9
    });
  const map0_ctc = ctc10;
  
  
  const _constructor = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v891, v896, v898, v902] = svs;
      return (await ((async () => {
        
        
        return v891;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _manager = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v891, v896, v898, v902] = svs;
      return (await ((async () => {
        
        const v905 = v898.manager;
        
        return v905;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v891, v896, v898, v902] = svs;
      return (await ((async () => {
        
        const v906 = v898.manager;
        const v907 = v898.channelCount;
        const v908 = {
          channelCount: v907,
          manager: v906
          };
        
        return v908;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _supportsInterface = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v891, v896, v898, v902] = svs;
      return (await ((async (_v910 ) => {
          const v910 = stdlib.protect(ctc5, _v910, null);
        
        
        return false;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _zeroAddress = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v891, v896, v898, v902] = svs;
      return (await ((async () => {
        
        
        return v896;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      constructor: {
        decode: _constructor,
        dom: [],
        rng: ctc0
        },
      manager: {
        decode: _manager,
        dom: [],
        rng: ctc0
        },
      state: {
        decode: _state,
        dom: [],
        rng: ctc4
        },
      supportsInterface: {
        decode: _supportsInterface,
        dom: [ctc5],
        rng: ctc6
        },
      zeroAddress: {
        decode: _zeroAddress,
        dom: [],
        rng: ctc0
        }
      },
    views: {
      3: [ctc0, ctc0, ctc2, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Struct([['inTokenId', ctc1], ['outTokenId', ctc1], ['channelerAddress', ctc2]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc4]);
  return {
    mapDataTy: ctc5
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Struct([['inTokenId', ctc1], ['outTokenId', ctc1], ['channelerAddress', ctc2]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Object({
    zeroAddress: ctc2
    });
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc2, ctc8]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    a_admin_grant0_86: ctc6,
    a_channeler_createChannel0_86: ctc7,
    a_channeler_deleteChannel0_86: ctc9,
    a_channeler_useChannel0_86: ctc10,
    arc200_transfer0_86: ctc11,
    nop0_86: ctc12,
    touch0_86: ctc12
    });
  const ctc14 = stdlib.T_UInt;
  const ctc15 = stdlib.T_Bool;
  const ctc16 = stdlib.T_Tuple([ctc14, ctc15]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  
  const v886 = stdlib.protect(ctc5, interact.params, 'for Deployer\'s interact field params');
  
  const txn1 = await (ctc.sendrecv({
    args: [v886],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:60:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:60:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v892], secs: v894, time: v893, didSend: v31, from: v891 } = txn1;
      
      ;
      const v896 = v892.zeroAddress;
      const v897 = {
        channelCount: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        manager: v891
        };
      const v898 = v897;
      const v899 = v893;
      const v902 = stdlib.checkedBigNumberify('./index.rsh:55:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v892], secs: v894, time: v893, didSend: v31, from: v891 } = txn1;
  ;
  const v896 = v892.zeroAddress;
  const v897 = {
    channelCount: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    manager: v891
    };
  let v898 = v897;
  let v899 = v893;
  let v902 = stdlib.checkedBigNumberify('./index.rsh:55:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc13],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1042], secs: v1044, time: v1043, didSend: v562, from: v1041 } = txn3;
    switch (v1042[0]) {
      case 'a_admin_grant0_86': {
        const v1045 = v1042[1];
        undefined /* setApiDetails */;
        ;
        const v1057 = v1045[stdlib.checkedBigNumberify('./index.rsh:181:12:spread', stdlib.UInt_max, '0')];
        const v1058 = v898.manager;
        const v1059 = stdlib.addressEq(v1058, v1041);
        stdlib.assert(v1059, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:182:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:184:15:application call to [unknown function] (defined at: ./index.rsh:184:15:function exp)'],
          msg: 'must be manager',
          who: 'Deployer'
          });
        const v1062 = null;
        await txn3.getOutput('a_admin_grant', 'v1062', ctc0, v1062);
        const v1069 = v898.channelCount;
        const v1071 = {
          channelCount: v1069,
          manager: v1057
          };
        const cv898 = v1071;
        const cv899 = v1043;
        const cv902 = v902;
        
        v898 = cv898;
        v899 = cv899;
        v902 = cv902;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'a_channeler_createChannel0_86': {
        const v1244 = v1042[1];
        undefined /* setApiDetails */;
        ;
        const v1274 = v1244[stdlib.checkedBigNumberify('./index.rsh:121:12:spread', stdlib.UInt_max, '0')];
        const v1275 = v1244[stdlib.checkedBigNumberify('./index.rsh:121:12:spread', stdlib.UInt_max, '1')];
        const v1276 = stdlib.digest([ctc1], [v1274]);
        const v1277 = stdlib.digest([ctc1], [v1275]);
        const v1278 = stdlib.digestEq(v1276, v1277);
        const v1279 = v1278 ? false : true;
        stdlib.assert(v1279, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:122:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:124:15:application call to [unknown function] (defined at: ./index.rsh:124:15:function exp)'],
          msg: 'must be different token',
          who: 'Deployer'
          });
        const v1283 = v898.channelCount;
        const v1284 = stdlib.safeAdd256(v1283, stdlib.checkedBigNumberify('./index.rsh:125:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        const v1285 = {
          channelerAddress: v1041,
          inTokenId: v1274,
          outTokenId: v1275
          };
        await stdlib.mapSet(map0, ctc8, v1284, ctc3, v1285);
        await txn3.getOutput('a_channeler_createChannel', 'v1284', ctc8, v1284);
        const v1294 = v898.manager;
        const v1295 = {
          channelCount: v1284,
          manager: v1294
          };
        const cv898 = v1295;
        const cv899 = v1043;
        const cv902 = v902;
        
        v898 = cv898;
        v899 = cv899;
        v902 = cv902;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'a_channeler_deleteChannel0_86': {
        const v1443 = v1042[1];
        undefined /* setApiDetails */;
        ;
        const v1498 = v1443[stdlib.checkedBigNumberify('./index.rsh:169:12:spread', stdlib.UInt_max, '0')];
        const v1499 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v1498, ctc3), null);
        const v1500 = {
          None: 0,
          Some: 1
          }[v1499[0]];
        const v1501 = stdlib.eq(v1500, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v1501, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:170:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:15:application call to [unknown function] (defined at: ./index.rsh:173:15:function exp)'],
          msg: 'must exist',
          who: 'Deployer'
          });
        const v1503 = v898.manager;
        const v1504 = stdlib.addressEq(v1041, v1503);
        stdlib.assert(v1504, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:171:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:15:application call to [unknown function] (defined at: ./index.rsh:173:15:function exp)'],
          msg: 'must be manager',
          who: 'Deployer'
          });
        const v1507 = null;
        await txn3.getOutput('a_channeler_deleteChannel', 'v1507', ctc0, v1507);
        const cv898 = v898;
        const cv899 = v1043;
        const cv902 = v902;
        
        v898 = cv898;
        v899 = cv899;
        v902 = cv902;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'a_channeler_useChannel0_86': {
        const v1642 = v1042[1];
        undefined /* setApiDetails */;
        ;
        const v1715 = v1642[stdlib.checkedBigNumberify('./index.rsh:141:12:spread', stdlib.UInt_max, '0')];
        const v1716 = v1642[stdlib.checkedBigNumberify('./index.rsh:141:12:spread', stdlib.UInt_max, '1')];
        const v1717 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v1715, ctc3), null);
        const v1718 = {
          None: 0,
          Some: 1
          }[v1717[0]];
        const v1719 = stdlib.eq(v1718, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v1719, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:142:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:153:15:application call to [unknown function] (defined at: ./index.rsh:153:15:function exp)'],
          msg: 'must exist',
          who: 'Deployer'
          });
        const v1722 = await ctc.getContractInfo();
        const v1724 = await ctc.getContractAddress();
        const v1725 = {
          channelerAddress: v1724,
          inTokenId: v1722,
          outTokenId: v1722
          };
        const v1726 = stdlib.fromSome(v1717, v1725);
        const v1727 = v1726.inTokenId;
        const v1728 = v1726.outTokenId;
        const v1729 = v1726.channelerAddress;
        const v1734 = [v1727, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1041];
        const v1735 = [v1727, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1724];
        const v1736 = [v1041, v1724];
        const v1737 = [v1727, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v1736];
        const v1740 = [];
        const v1741 = stdlib.bytesFromHex("0x4a968f8f");
        const v1742 = undefined /* Remote */;
        const v1743 = await txn3.getOutput('internal', 'v1742', ctc16, v1742);
        const v1745 = v1743[stdlib.checkedBigNumberify('./index.rsh:115:15:application', stdlib.UInt_max, '0')];
        const v1750 = stdlib.add(v902, v1745);
        const v1751 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1745);
        stdlib.assert(v1751, {
          at: './index.rsh:115:15:application',
          fs: ['at ./index.rsh:154:37:application call to [unknown function] (defined at: ./index.rsh:98:56:function exp)', 'at ./index.rsh:153:15:application call to [unknown function] (defined at: ./index.rsh:153:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v1753 = [v1728, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1729];
        const v1754 = [v1728, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1041];
        const v1755 = [v1729, v1724];
        const v1756 = [v1728, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v1755];
        const v1761 = undefined /* Remote */;
        const v1762 = await txn3.getOutput('internal', 'v1761', ctc16, v1761);
        const v1764 = v1762[stdlib.checkedBigNumberify('./index.rsh:115:15:application', stdlib.UInt_max, '0')];
        const v1769 = stdlib.add(v1750, v1764);
        const v1770 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1764);
        stdlib.assert(v1770, {
          at: './index.rsh:115:15:application',
          fs: ['at ./index.rsh:155:37:application call to [unknown function] (defined at: ./index.rsh:98:56:function exp)', 'at ./index.rsh:153:15:application call to [unknown function] (defined at: ./index.rsh:153:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v1771 = null;
        await txn3.getOutput('a_channeler_useChannel', 'v1771', ctc0, v1771);
        const cv898 = v898;
        const cv899 = v1043;
        const cv902 = v1769;
        
        v898 = cv898;
        v899 = cv899;
        v902 = cv902;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc200_transfer0_86': {
        const v1841 = v1042[1];
        undefined /* setApiDetails */;
        ;
        const v1980 = v1841[stdlib.checkedBigNumberify('./index.rsh:219:12:spread', stdlib.UInt_max, '0')];
        const v1981 = v1841[stdlib.checkedBigNumberify('./index.rsh:219:12:spread', stdlib.UInt_max, '1')];
        const v1982 = v1841[stdlib.checkedBigNumberify('./index.rsh:219:12:spread', stdlib.UInt_max, '2')];
        const v1983 = v898.manager;
        const v1984 = stdlib.addressEq(v1041, v1983);
        stdlib.assert(v1984, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:220:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:222:15:application call to [unknown function] (defined at: ./index.rsh:222:15:function exp)'],
          msg: 'must be manager',
          who: 'Deployer'
          });
        const v1989 = null;
        await txn3.getOutput('arc200_transfer', 'v1989', ctc0, v1989);
        const v1998 = await ctc.getContractAddress();
        const v1999 = [v1980, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1998];
        const v2000 = [v1980, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1981];
        const v2003 = [];
        const v2004 = stdlib.bytesFromHex("0xda7025b9");
        const v2005 = undefined /* Remote */;
        const v2006 = await txn3.getOutput('internal', 'v2005', ctc16, v2005);
        const v2008 = v2006[stdlib.checkedBigNumberify('./index.rsh:96:15:application', stdlib.UInt_max, '0')];
        const v2013 = stdlib.add(v902, v2008);
        const v2014 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2008);
        stdlib.assert(v2014, {
          at: './index.rsh:96:15:application',
          fs: ['at ./index.rsh:224:33:application call to [unknown function] (defined at: ./index.rsh:83:45:function exp)', 'at ./index.rsh:222:15:application call to [unknown function] (defined at: ./index.rsh:222:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const cv898 = v898;
        const cv899 = v1043;
        const cv902 = v2013;
        
        v898 = cv898;
        v899 = cv899;
        v902 = cv902;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'nop0_86': {
        const v2040 = v1042[1];
        undefined /* setApiDetails */;
        ;
        const v2216 = null;
        await txn3.getOutput('nop', 'v2216', ctc0, v2216);
        const cv898 = v898;
        const cv899 = v1043;
        const cv902 = v902;
        
        v898 = cv898;
        v899 = cv899;
        v902 = cv902;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'touch0_86': {
        const v2239 = v1042[1];
        undefined /* setApiDetails */;
        ;
        const v2424 = (stdlib.le(await ctc.getBalance(), v902) ? stdlib.checkedBigNumberify('./index.rsh:200:41:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v902));
        const v2425 = stdlib.safeAdd(v2424, v902);
        const v2426 = v898.manager;
        const v2430 = stdlib.sub(v2425, v2424);
        ;
        const v2431 = null;
        await txn3.getOutput('touch', 'v2431', ctc0, v2431);
        const cv898 = v898;
        const cv899 = v1043;
        const cv902 = v2430;
        
        v898 = cv898;
        v899 = cv899;
        v902 = cv902;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _a_admin_grant3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _a_admin_grant3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _a_admin_grant3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Struct([['inTokenId', ctc1], ['outTokenId', ctc1], ['channelerAddress', ctc2]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Object({
    channelCount: ctc5,
    manager: ctc2
    });
  const ctc7 = stdlib.T_UInt;
  const ctc8 = stdlib.T_Tuple([ctc2]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc5]);
  const ctc11 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc2, ctc5]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Data({
    a_admin_grant0_86: ctc8,
    a_channeler_createChannel0_86: ctc9,
    a_channeler_deleteChannel0_86: ctc10,
    a_channeler_useChannel0_86: ctc11,
    arc200_transfer0_86: ctc12,
    nop0_86: ctc13,
    touch0_86: ctc13
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v891, v896, v898, v902] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc2, ctc6, ctc7]);
  const v980 = ctc.selfAddress();
  const v982 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:181:34:application call to [unknown function] (defined at: ./index.rsh:181:34:function exp)', 'at ./index.rsh:71:31:application call to "runa_admin_grant0_86" (defined at: ./index.rsh:181:12:function exp)', 'at ./index.rsh:71:31:application call to [unknown function] (defined at: ./index.rsh:71:31:function exp)'],
    msg: 'in',
    who: 'a_admin_grant'
    });
  const v985 = v898.manager;
  const v986 = stdlib.addressEq(v985, v980);
  stdlib.assert(v986, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:182:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:34:application call to [unknown function] (defined at: ./index.rsh:181:34:function exp)', 'at ./index.rsh:71:31:application call to "runa_admin_grant0_86" (defined at: ./index.rsh:181:12:function exp)', 'at ./index.rsh:71:31:application call to [unknown function] (defined at: ./index.rsh:71:31:function exp)'],
    msg: 'must be manager',
    who: 'a_admin_grant'
    });
  const v993 = ['a_admin_grant0_86', v982];
  
  const txn1 = await (ctc.sendrecv({
    args: [v891, v896, v898, v902, v993],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:181:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1042], secs: v1044, time: v1043, didSend: v562, from: v1041 } = txn1;
      
      switch (v1042[0]) {
        case 'a_admin_grant0_86': {
          const v1045 = v1042[1];
          sim_r.txns.push({
            kind: 'api',
            who: "a_admin_grant"
            });
          ;
          const v1057 = v1045[stdlib.checkedBigNumberify('./index.rsh:181:12:spread', stdlib.UInt_max, '0')];
          const v1062 = null;
          const v1063 = await txn1.getOutput('a_admin_grant', 'v1062', ctc0, v1062);
          
          const v1069 = v898.channelCount;
          const v1071 = {
            channelCount: v1069,
            manager: v1057
            };
          const v3405 = v1071;
          const v3407 = v902;
          sim_r.isHalt = false;
          
          break;
          }
        case 'a_channeler_createChannel0_86': {
          const v1244 = v1042[1];
          
          break;
          }
        case 'a_channeler_deleteChannel0_86': {
          const v1443 = v1042[1];
          
          break;
          }
        case 'a_channeler_useChannel0_86': {
          const v1642 = v1042[1];
          
          break;
          }
        case 'arc200_transfer0_86': {
          const v1841 = v1042[1];
          
          break;
          }
        case 'nop0_86': {
          const v2040 = v1042[1];
          
          break;
          }
        case 'touch0_86': {
          const v2239 = v1042[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc6, ctc7, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1042], secs: v1044, time: v1043, didSend: v562, from: v1041 } = txn1;
  switch (v1042[0]) {
    case 'a_admin_grant0_86': {
      const v1045 = v1042[1];
      undefined /* setApiDetails */;
      ;
      const v1057 = v1045[stdlib.checkedBigNumberify('./index.rsh:181:12:spread', stdlib.UInt_max, '0')];
      const v1058 = v898.manager;
      const v1059 = stdlib.addressEq(v1058, v1041);
      stdlib.assert(v1059, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:182:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:184:15:application call to [unknown function] (defined at: ./index.rsh:184:15:function exp)'],
        msg: 'must be manager',
        who: 'a_admin_grant'
        });
      const v1062 = null;
      const v1063 = await txn1.getOutput('a_admin_grant', 'v1062', ctc0, v1062);
      if (v562) {
        stdlib.protect(ctc0, await interact.out(v1045, v1063), {
          at: './index.rsh:181:13:application',
          fs: ['at ./index.rsh:181:13:application call to [unknown function] (defined at: ./index.rsh:181:13:function exp)', 'at ./index.rsh:185:14:application call to "k" (defined at: ./index.rsh:184:15:function exp)', 'at ./index.rsh:184:15:application call to [unknown function] (defined at: ./index.rsh:184:15:function exp)'],
          msg: 'out',
          who: 'a_admin_grant'
          });
        }
      else {
        }
      
      const v1069 = v898.channelCount;
      const v1071 = {
        channelCount: v1069,
        manager: v1057
        };
      const v3405 = v1071;
      const v3407 = v902;
      return;
      
      break;
      }
    case 'a_channeler_createChannel0_86': {
      const v1244 = v1042[1];
      return;
      break;
      }
    case 'a_channeler_deleteChannel0_86': {
      const v1443 = v1042[1];
      return;
      break;
      }
    case 'a_channeler_useChannel0_86': {
      const v1642 = v1042[1];
      return;
      break;
      }
    case 'arc200_transfer0_86': {
      const v1841 = v1042[1];
      return;
      break;
      }
    case 'nop0_86': {
      const v2040 = v1042[1];
      return;
      break;
      }
    case 'touch0_86': {
      const v2239 = v1042[1];
      return;
      break;
      }
    }
  
  
  };
export async function _a_channeler_createChannel3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _a_channeler_createChannel3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _a_channeler_createChannel3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Struct([['inTokenId', ctc1], ['outTokenId', ctc1], ['channelerAddress', ctc2]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Object({
    channelCount: ctc5,
    manager: ctc2
    });
  const ctc7 = stdlib.T_UInt;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc2]);
  const ctc10 = stdlib.T_Tuple([ctc5]);
  const ctc11 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc2, ctc5]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Data({
    a_admin_grant0_86: ctc9,
    a_channeler_createChannel0_86: ctc8,
    a_channeler_deleteChannel0_86: ctc10,
    a_channeler_useChannel0_86: ctc11,
    arc200_transfer0_86: ctc12,
    nop0_86: ctc13,
    touch0_86: ctc13
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v891, v896, v898, v902] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc2, ctc6, ctc7]);
  const v913 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:121:55:application call to [unknown function] (defined at: ./index.rsh:121:55:function exp)', 'at ./index.rsh:71:31:application call to "runa_channeler_createChannel0_86" (defined at: ./index.rsh:121:12:function exp)', 'at ./index.rsh:71:31:application call to [unknown function] (defined at: ./index.rsh:71:31:function exp)'],
    msg: 'in',
    who: 'a_channeler_createChannel'
    });
  const v914 = v913[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v915 = v913[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v918 = stdlib.digest([ctc1], [v914]);
  const v919 = stdlib.digest([ctc1], [v915]);
  const v920 = stdlib.digestEq(v918, v919);
  const v921 = v920 ? false : true;
  stdlib.assert(v921, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:122:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:121:55:application call to [unknown function] (defined at: ./index.rsh:121:55:function exp)', 'at ./index.rsh:71:31:application call to "runa_channeler_createChannel0_86" (defined at: ./index.rsh:121:12:function exp)', 'at ./index.rsh:71:31:application call to [unknown function] (defined at: ./index.rsh:71:31:function exp)'],
    msg: 'must be different token',
    who: 'a_channeler_createChannel'
    });
  const v930 = ['a_channeler_createChannel0_86', v913];
  
  const txn1 = await (ctc.sendrecv({
    args: [v891, v896, v898, v902, v930],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:121:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1042], secs: v1044, time: v1043, didSend: v562, from: v1041 } = txn1;
      
      switch (v1042[0]) {
        case 'a_admin_grant0_86': {
          const v1045 = v1042[1];
          
          break;
          }
        case 'a_channeler_createChannel0_86': {
          const v1244 = v1042[1];
          sim_r.txns.push({
            kind: 'api',
            who: "a_channeler_createChannel"
            });
          ;
          const v1274 = v1244[stdlib.checkedBigNumberify('./index.rsh:121:12:spread', stdlib.UInt_max, '0')];
          const v1275 = v1244[stdlib.checkedBigNumberify('./index.rsh:121:12:spread', stdlib.UInt_max, '1')];
          const v1283 = v898.channelCount;
          const v1284 = stdlib.safeAdd256(v1283, stdlib.checkedBigNumberify('./index.rsh:125:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v1285 = {
            channelerAddress: v1041,
            inTokenId: v1274,
            outTokenId: v1275
            };
          await stdlib.simMapSet(sim_r, 0, ctc5, v1284, ctc3, v1285);
          const v1286 = await txn1.getOutput('a_channeler_createChannel', 'v1284', ctc5, v1284);
          
          const v1294 = v898.manager;
          const v1295 = {
            channelCount: v1284,
            manager: v1294
            };
          const v3429 = v1295;
          const v3431 = v902;
          sim_r.isHalt = false;
          
          break;
          }
        case 'a_channeler_deleteChannel0_86': {
          const v1443 = v1042[1];
          
          break;
          }
        case 'a_channeler_useChannel0_86': {
          const v1642 = v1042[1];
          
          break;
          }
        case 'arc200_transfer0_86': {
          const v1841 = v1042[1];
          
          break;
          }
        case 'nop0_86': {
          const v2040 = v1042[1];
          
          break;
          }
        case 'touch0_86': {
          const v2239 = v1042[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc6, ctc7, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1042], secs: v1044, time: v1043, didSend: v562, from: v1041 } = txn1;
  switch (v1042[0]) {
    case 'a_admin_grant0_86': {
      const v1045 = v1042[1];
      return;
      break;
      }
    case 'a_channeler_createChannel0_86': {
      const v1244 = v1042[1];
      undefined /* setApiDetails */;
      ;
      const v1274 = v1244[stdlib.checkedBigNumberify('./index.rsh:121:12:spread', stdlib.UInt_max, '0')];
      const v1275 = v1244[stdlib.checkedBigNumberify('./index.rsh:121:12:spread', stdlib.UInt_max, '1')];
      const v1276 = stdlib.digest([ctc1], [v1274]);
      const v1277 = stdlib.digest([ctc1], [v1275]);
      const v1278 = stdlib.digestEq(v1276, v1277);
      const v1279 = v1278 ? false : true;
      stdlib.assert(v1279, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:122:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:124:15:application call to [unknown function] (defined at: ./index.rsh:124:15:function exp)'],
        msg: 'must be different token',
        who: 'a_channeler_createChannel'
        });
      const v1283 = v898.channelCount;
      const v1284 = stdlib.safeAdd256(v1283, stdlib.checkedBigNumberify('./index.rsh:125:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v1285 = {
        channelerAddress: v1041,
        inTokenId: v1274,
        outTokenId: v1275
        };
      await stdlib.mapSet(map0, ctc5, v1284, ctc3, v1285);
      const v1286 = await txn1.getOutput('a_channeler_createChannel', 'v1284', ctc5, v1284);
      if (v562) {
        stdlib.protect(ctc0, await interact.out(v1244, v1286), {
          at: './index.rsh:121:13:application',
          fs: ['at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:13:function exp)', 'at ./index.rsh:131:14:application call to "k" (defined at: ./index.rsh:124:15:function exp)', 'at ./index.rsh:124:15:application call to [unknown function] (defined at: ./index.rsh:124:15:function exp)'],
          msg: 'out',
          who: 'a_channeler_createChannel'
          });
        }
      else {
        }
      
      const v1294 = v898.manager;
      const v1295 = {
        channelCount: v1284,
        manager: v1294
        };
      const v3429 = v1295;
      const v3431 = v902;
      return;
      
      break;
      }
    case 'a_channeler_deleteChannel0_86': {
      const v1443 = v1042[1];
      return;
      break;
      }
    case 'a_channeler_useChannel0_86': {
      const v1642 = v1042[1];
      return;
      break;
      }
    case 'arc200_transfer0_86': {
      const v1841 = v1042[1];
      return;
      break;
      }
    case 'nop0_86': {
      const v2040 = v1042[1];
      return;
      break;
      }
    case 'touch0_86': {
      const v2239 = v1042[1];
      return;
      break;
      }
    }
  
  
  };
export async function _a_channeler_deleteChannel3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _a_channeler_deleteChannel3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _a_channeler_deleteChannel3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Struct([['inTokenId', ctc1], ['outTokenId', ctc1], ['channelerAddress', ctc2]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Object({
    channelCount: ctc5,
    manager: ctc2
    });
  const ctc7 = stdlib.T_UInt;
  const ctc8 = stdlib.T_Tuple([ctc5]);
  const ctc9 = stdlib.T_Tuple([ctc2]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc2, ctc5]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Data({
    a_admin_grant0_86: ctc9,
    a_channeler_createChannel0_86: ctc10,
    a_channeler_deleteChannel0_86: ctc8,
    a_channeler_useChannel0_86: ctc11,
    arc200_transfer0_86: ctc12,
    nop0_86: ctc13,
    touch0_86: ctc13
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v891, v896, v898, v902] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc2, ctc6, ctc7]);
  const v961 = ctc.selfAddress();
  const v963 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:169:46:application call to [unknown function] (defined at: ./index.rsh:169:46:function exp)', 'at ./index.rsh:71:31:application call to "runa_channeler_deleteChannel0_86" (defined at: ./index.rsh:169:12:function exp)', 'at ./index.rsh:71:31:application call to [unknown function] (defined at: ./index.rsh:71:31:function exp)'],
    msg: 'in',
    who: 'a_channeler_deleteChannel'
    });
  const v964 = v963[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v966 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc5, v964, ctc3), null);
  const v967 = {
    None: 0,
    Some: 1
    }[v966[0]];
  const v968 = stdlib.eq(v967, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v968, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:170:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:169:46:application call to [unknown function] (defined at: ./index.rsh:169:46:function exp)', 'at ./index.rsh:71:31:application call to "runa_channeler_deleteChannel0_86" (defined at: ./index.rsh:169:12:function exp)', 'at ./index.rsh:71:31:application call to [unknown function] (defined at: ./index.rsh:71:31:function exp)'],
    msg: 'must exist',
    who: 'a_channeler_deleteChannel'
    });
  const v970 = v898.manager;
  const v971 = stdlib.addressEq(v961, v970);
  stdlib.assert(v971, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:171:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:169:46:application call to [unknown function] (defined at: ./index.rsh:169:46:function exp)', 'at ./index.rsh:71:31:application call to "runa_channeler_deleteChannel0_86" (defined at: ./index.rsh:169:12:function exp)', 'at ./index.rsh:71:31:application call to [unknown function] (defined at: ./index.rsh:71:31:function exp)'],
    msg: 'must be manager',
    who: 'a_channeler_deleteChannel'
    });
  const v978 = ['a_channeler_deleteChannel0_86', v963];
  
  const txn1 = await (ctc.sendrecv({
    args: [v891, v896, v898, v902, v978],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:169:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1042], secs: v1044, time: v1043, didSend: v562, from: v1041 } = txn1;
      
      switch (v1042[0]) {
        case 'a_admin_grant0_86': {
          const v1045 = v1042[1];
          
          break;
          }
        case 'a_channeler_createChannel0_86': {
          const v1244 = v1042[1];
          
          break;
          }
        case 'a_channeler_deleteChannel0_86': {
          const v1443 = v1042[1];
          sim_r.txns.push({
            kind: 'api',
            who: "a_channeler_deleteChannel"
            });
          ;
          const v1498 = v1443[stdlib.checkedBigNumberify('./index.rsh:169:12:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc5, v1498, ctc3), null);
          const v1507 = null;
          const v1508 = await txn1.getOutput('a_channeler_deleteChannel', 'v1507', ctc0, v1507);
          
          const v3453 = v898;
          const v3455 = v902;
          sim_r.isHalt = false;
          
          break;
          }
        case 'a_channeler_useChannel0_86': {
          const v1642 = v1042[1];
          
          break;
          }
        case 'arc200_transfer0_86': {
          const v1841 = v1042[1];
          
          break;
          }
        case 'nop0_86': {
          const v2040 = v1042[1];
          
          break;
          }
        case 'touch0_86': {
          const v2239 = v1042[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc6, ctc7, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1042], secs: v1044, time: v1043, didSend: v562, from: v1041 } = txn1;
  switch (v1042[0]) {
    case 'a_admin_grant0_86': {
      const v1045 = v1042[1];
      return;
      break;
      }
    case 'a_channeler_createChannel0_86': {
      const v1244 = v1042[1];
      return;
      break;
      }
    case 'a_channeler_deleteChannel0_86': {
      const v1443 = v1042[1];
      undefined /* setApiDetails */;
      ;
      const v1498 = v1443[stdlib.checkedBigNumberify('./index.rsh:169:12:spread', stdlib.UInt_max, '0')];
      const v1499 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc5, v1498, ctc3), null);
      const v1500 = {
        None: 0,
        Some: 1
        }[v1499[0]];
      const v1501 = stdlib.eq(v1500, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1501, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:170:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:15:application call to [unknown function] (defined at: ./index.rsh:173:15:function exp)'],
        msg: 'must exist',
        who: 'a_channeler_deleteChannel'
        });
      const v1503 = v898.manager;
      const v1504 = stdlib.addressEq(v1041, v1503);
      stdlib.assert(v1504, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:171:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:15:application call to [unknown function] (defined at: ./index.rsh:173:15:function exp)'],
        msg: 'must be manager',
        who: 'a_channeler_deleteChannel'
        });
      const v1507 = null;
      const v1508 = await txn1.getOutput('a_channeler_deleteChannel', 'v1507', ctc0, v1507);
      if (v562) {
        stdlib.protect(ctc0, await interact.out(v1443, v1508), {
          at: './index.rsh:169:13:application',
          fs: ['at ./index.rsh:169:13:application call to [unknown function] (defined at: ./index.rsh:169:13:function exp)', 'at ./index.rsh:174:14:application call to "k" (defined at: ./index.rsh:173:15:function exp)', 'at ./index.rsh:173:15:application call to [unknown function] (defined at: ./index.rsh:173:15:function exp)'],
          msg: 'out',
          who: 'a_channeler_deleteChannel'
          });
        }
      else {
        }
      
      const v3453 = v898;
      const v3455 = v902;
      return;
      
      break;
      }
    case 'a_channeler_useChannel0_86': {
      const v1642 = v1042[1];
      return;
      break;
      }
    case 'arc200_transfer0_86': {
      const v1841 = v1042[1];
      return;
      break;
      }
    case 'nop0_86': {
      const v2040 = v1042[1];
      return;
      break;
      }
    case 'touch0_86': {
      const v2239 = v1042[1];
      return;
      break;
      }
    }
  
  
  };
export async function _a_channeler_useChannel3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _a_channeler_useChannel3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _a_channeler_useChannel3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Struct([['inTokenId', ctc1], ['outTokenId', ctc1], ['channelerAddress', ctc2]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Object({
    channelCount: ctc5,
    manager: ctc2
    });
  const ctc7 = stdlib.T_UInt;
  const ctc8 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc9 = stdlib.T_Tuple([ctc2]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc5]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc2, ctc5]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Data({
    a_admin_grant0_86: ctc9,
    a_channeler_createChannel0_86: ctc10,
    a_channeler_deleteChannel0_86: ctc11,
    a_channeler_useChannel0_86: ctc8,
    arc200_transfer0_86: ctc12,
    nop0_86: ctc13,
    touch0_86: ctc13
    });
  const ctc15 = stdlib.T_Bool;
  const ctc16 = stdlib.T_Tuple([ctc7, ctc15]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc7, ctc2]);
  const ctc18 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc19 = stdlib.T_Tuple([ctc1, ctc7, ctc18]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v891, v896, v898, v902] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc2, ctc6, ctc7]);
  const v934 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:141:48:application call to [unknown function] (defined at: ./index.rsh:141:48:function exp)', 'at ./index.rsh:71:31:application call to "runa_channeler_useChannel0_86" (defined at: ./index.rsh:141:12:function exp)', 'at ./index.rsh:71:31:application call to [unknown function] (defined at: ./index.rsh:71:31:function exp)'],
    msg: 'in',
    who: 'a_channeler_useChannel'
    });
  const v935 = v934[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v939 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc5, v935, ctc3), null);
  const v940 = {
    None: 0,
    Some: 1
    }[v939[0]];
  const v941 = stdlib.eq(v940, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v941, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:142:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:141:48:application call to [unknown function] (defined at: ./index.rsh:141:48:function exp)', 'at ./index.rsh:71:31:application call to "runa_channeler_useChannel0_86" (defined at: ./index.rsh:141:12:function exp)', 'at ./index.rsh:71:31:application call to [unknown function] (defined at: ./index.rsh:71:31:function exp)'],
    msg: 'must exist',
    who: 'a_channeler_useChannel'
    });
  const v959 = ['a_channeler_useChannel0_86', v934];
  
  const txn1 = await (ctc.sendrecv({
    args: [v891, v896, v898, v902, v959],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:141:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1042], secs: v1044, time: v1043, didSend: v562, from: v1041 } = txn1;
      
      switch (v1042[0]) {
        case 'a_admin_grant0_86': {
          const v1045 = v1042[1];
          
          break;
          }
        case 'a_channeler_createChannel0_86': {
          const v1244 = v1042[1];
          
          break;
          }
        case 'a_channeler_deleteChannel0_86': {
          const v1443 = v1042[1];
          
          break;
          }
        case 'a_channeler_useChannel0_86': {
          const v1642 = v1042[1];
          sim_r.txns.push({
            kind: 'api',
            who: "a_channeler_useChannel"
            });
          ;
          const v1715 = v1642[stdlib.checkedBigNumberify('./index.rsh:141:12:spread', stdlib.UInt_max, '0')];
          const v1716 = v1642[stdlib.checkedBigNumberify('./index.rsh:141:12:spread', stdlib.UInt_max, '1')];
          const v1717 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc5, v1715, ctc3), null);
          const v1722 = await ctc.getContractInfo();
          const v1724 = await ctc.getContractAddress();
          const v1725 = {
            channelerAddress: v1724,
            inTokenId: v1722,
            outTokenId: v1722
            };
          const v1726 = stdlib.fromSome(v1717, v1725);
          const v1727 = v1726.inTokenId;
          const v1728 = v1726.outTokenId;
          const v1729 = v1726.channelerAddress;
          const v1734 = [v1727, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1041];
          const v1735 = [v1727, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1724];
          const v1736 = [v1041, v1724];
          const v1737 = [v1727, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v1736];
          const v1740 = [];
          const v1741 = stdlib.bytesFromHex("0x4a968f8f");
          const v1742 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1727,
              remote: ({
                accs: [v1041, v1724],
                apps: [v1727],
                bills: stdlib.checkedBigNumberify('./index.rsh:115:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc17, v1734], [ctc17, v1735], [ctc19, v1737]],
                fees: stdlib.checkedBigNumberify('./index.rsh:108:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:115:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc15.defaultValue /* simReturnVal */];})();
          const v1743 = await txn1.getOutput('internal', 'v1742', ctc16, v1742);
          const v1745 = v1743[stdlib.checkedBigNumberify('./index.rsh:115:15:application', stdlib.UInt_max, '0')];
          const v1750 = stdlib.add(v902, v1745);
          const v1753 = [v1728, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1729];
          const v1754 = [v1728, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1041];
          const v1755 = [v1729, v1724];
          const v1756 = [v1728, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v1755];
          const v1761 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1728,
              remote: ({
                accs: [v1729, v1041],
                apps: [v1728],
                bills: stdlib.checkedBigNumberify('./index.rsh:115:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc17, v1753], [ctc17, v1754], [ctc19, v1756]],
                fees: stdlib.checkedBigNumberify('./index.rsh:108:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:115:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc15.defaultValue /* simReturnVal */];})();
          const v1762 = await txn1.getOutput('internal', 'v1761', ctc16, v1761);
          const v1764 = v1762[stdlib.checkedBigNumberify('./index.rsh:115:15:application', stdlib.UInt_max, '0')];
          const v1769 = stdlib.add(v1750, v1764);
          const v1771 = null;
          const v1772 = await txn1.getOutput('a_channeler_useChannel', 'v1771', ctc0, v1771);
          
          const v3477 = v898;
          const v3479 = v1769;
          sim_r.isHalt = false;
          
          break;
          }
        case 'arc200_transfer0_86': {
          const v1841 = v1042[1];
          
          break;
          }
        case 'nop0_86': {
          const v2040 = v1042[1];
          
          break;
          }
        case 'touch0_86': {
          const v2239 = v1042[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc6, ctc7, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1042], secs: v1044, time: v1043, didSend: v562, from: v1041 } = txn1;
  switch (v1042[0]) {
    case 'a_admin_grant0_86': {
      const v1045 = v1042[1];
      return;
      break;
      }
    case 'a_channeler_createChannel0_86': {
      const v1244 = v1042[1];
      return;
      break;
      }
    case 'a_channeler_deleteChannel0_86': {
      const v1443 = v1042[1];
      return;
      break;
      }
    case 'a_channeler_useChannel0_86': {
      const v1642 = v1042[1];
      undefined /* setApiDetails */;
      ;
      const v1715 = v1642[stdlib.checkedBigNumberify('./index.rsh:141:12:spread', stdlib.UInt_max, '0')];
      const v1716 = v1642[stdlib.checkedBigNumberify('./index.rsh:141:12:spread', stdlib.UInt_max, '1')];
      const v1717 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc5, v1715, ctc3), null);
      const v1718 = {
        None: 0,
        Some: 1
        }[v1717[0]];
      const v1719 = stdlib.eq(v1718, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1719, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:142:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:153:15:application call to [unknown function] (defined at: ./index.rsh:153:15:function exp)'],
        msg: 'must exist',
        who: 'a_channeler_useChannel'
        });
      const v1722 = await ctc.getContractInfo();
      const v1724 = await ctc.getContractAddress();
      const v1725 = {
        channelerAddress: v1724,
        inTokenId: v1722,
        outTokenId: v1722
        };
      const v1726 = stdlib.fromSome(v1717, v1725);
      const v1727 = v1726.inTokenId;
      const v1728 = v1726.outTokenId;
      const v1729 = v1726.channelerAddress;
      const v1734 = [v1727, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1041];
      const v1735 = [v1727, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1724];
      const v1736 = [v1041, v1724];
      const v1737 = [v1727, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v1736];
      const v1740 = [];
      const v1741 = stdlib.bytesFromHex("0x4a968f8f");
      const v1742 = undefined /* Remote */;
      const v1743 = await txn1.getOutput('internal', 'v1742', ctc16, v1742);
      const v1745 = v1743[stdlib.checkedBigNumberify('./index.rsh:115:15:application', stdlib.UInt_max, '0')];
      const v1750 = stdlib.add(v902, v1745);
      const v1751 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1745);
      stdlib.assert(v1751, {
        at: './index.rsh:115:15:application',
        fs: ['at ./index.rsh:154:37:application call to [unknown function] (defined at: ./index.rsh:98:56:function exp)', 'at ./index.rsh:153:15:application call to [unknown function] (defined at: ./index.rsh:153:15:function exp)'],
        msg: 'remote bill check',
        who: 'a_channeler_useChannel'
        });
      const v1753 = [v1728, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1729];
      const v1754 = [v1728, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1041];
      const v1755 = [v1729, v1724];
      const v1756 = [v1728, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v1755];
      const v1761 = undefined /* Remote */;
      const v1762 = await txn1.getOutput('internal', 'v1761', ctc16, v1761);
      const v1764 = v1762[stdlib.checkedBigNumberify('./index.rsh:115:15:application', stdlib.UInt_max, '0')];
      const v1769 = stdlib.add(v1750, v1764);
      const v1770 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1764);
      stdlib.assert(v1770, {
        at: './index.rsh:115:15:application',
        fs: ['at ./index.rsh:155:37:application call to [unknown function] (defined at: ./index.rsh:98:56:function exp)', 'at ./index.rsh:153:15:application call to [unknown function] (defined at: ./index.rsh:153:15:function exp)'],
        msg: 'remote bill check',
        who: 'a_channeler_useChannel'
        });
      const v1771 = null;
      const v1772 = await txn1.getOutput('a_channeler_useChannel', 'v1771', ctc0, v1771);
      if (v562) {
        stdlib.protect(ctc0, await interact.out(v1642, v1772), {
          at: './index.rsh:141:13:application',
          fs: ['at ./index.rsh:141:13:application call to [unknown function] (defined at: ./index.rsh:141:13:function exp)', 'at ./index.rsh:162:14:application call to "k" (defined at: ./index.rsh:153:15:function exp)', 'at ./index.rsh:153:15:application call to [unknown function] (defined at: ./index.rsh:153:15:function exp)'],
          msg: 'out',
          who: 'a_channeler_useChannel'
          });
        }
      else {
        }
      
      const v3477 = v898;
      const v3479 = v1769;
      return;
      
      break;
      }
    case 'arc200_transfer0_86': {
      const v1841 = v1042[1];
      return;
      break;
      }
    case 'nop0_86': {
      const v2040 = v1042[1];
      return;
      break;
      }
    case 'touch0_86': {
      const v2239 = v1042[1];
      return;
      break;
      }
    }
  
  
  };
export async function _arc200_transfer3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _arc200_transfer3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _arc200_transfer3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Struct([['inTokenId', ctc1], ['outTokenId', ctc1], ['channelerAddress', ctc2]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Object({
    channelCount: ctc5,
    manager: ctc2
    });
  const ctc7 = stdlib.T_UInt;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc2, ctc5]);
  const ctc9 = stdlib.T_Tuple([ctc2]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc5]);
  const ctc12 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Data({
    a_admin_grant0_86: ctc9,
    a_channeler_createChannel0_86: ctc10,
    a_channeler_deleteChannel0_86: ctc11,
    a_channeler_useChannel0_86: ctc12,
    arc200_transfer0_86: ctc8,
    nop0_86: ctc13,
    touch0_86: ctc13
    });
  const ctc15 = stdlib.T_Bool;
  const ctc16 = stdlib.T_Tuple([ctc7, ctc15]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc7, ctc2]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v891, v896, v898, v902] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc2, ctc6, ctc7]);
  const v1011 = ctc.selfAddress();
  const v1013 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:219:57:application call to [unknown function] (defined at: ./index.rsh:219:57:function exp)', 'at ./index.rsh:71:31:application call to "runarc200_transfer0_86" (defined at: ./index.rsh:219:12:function exp)', 'at ./index.rsh:71:31:application call to [unknown function] (defined at: ./index.rsh:71:31:function exp)'],
    msg: 'in',
    who: 'arc200_transfer'
    });
  const v1020 = v898.manager;
  const v1021 = stdlib.addressEq(v1011, v1020);
  stdlib.assert(v1021, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:220:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:219:57:application call to [unknown function] (defined at: ./index.rsh:219:57:function exp)', 'at ./index.rsh:71:31:application call to "runarc200_transfer0_86" (defined at: ./index.rsh:219:12:function exp)', 'at ./index.rsh:71:31:application call to [unknown function] (defined at: ./index.rsh:71:31:function exp)'],
    msg: 'must be manager',
    who: 'arc200_transfer'
    });
  const v1032 = ['arc200_transfer0_86', v1013];
  
  const txn1 = await (ctc.sendrecv({
    args: [v891, v896, v898, v902, v1032],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:219:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1042], secs: v1044, time: v1043, didSend: v562, from: v1041 } = txn1;
      
      switch (v1042[0]) {
        case 'a_admin_grant0_86': {
          const v1045 = v1042[1];
          
          break;
          }
        case 'a_channeler_createChannel0_86': {
          const v1244 = v1042[1];
          
          break;
          }
        case 'a_channeler_deleteChannel0_86': {
          const v1443 = v1042[1];
          
          break;
          }
        case 'a_channeler_useChannel0_86': {
          const v1642 = v1042[1];
          
          break;
          }
        case 'arc200_transfer0_86': {
          const v1841 = v1042[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_transfer"
            });
          ;
          const v1980 = v1841[stdlib.checkedBigNumberify('./index.rsh:219:12:spread', stdlib.UInt_max, '0')];
          const v1981 = v1841[stdlib.checkedBigNumberify('./index.rsh:219:12:spread', stdlib.UInt_max, '1')];
          const v1982 = v1841[stdlib.checkedBigNumberify('./index.rsh:219:12:spread', stdlib.UInt_max, '2')];
          const v1989 = null;
          const v1990 = await txn1.getOutput('arc200_transfer', 'v1989', ctc0, v1989);
          
          const v1998 = await ctc.getContractAddress();
          const v1999 = [v1980, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1998];
          const v2000 = [v1980, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1981];
          const v2003 = [];
          const v2004 = stdlib.bytesFromHex("0xda7025b9");
          const v2005 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1980,
              remote: ({
                accs: [v1981],
                apps: [v1980],
                bills: stdlib.checkedBigNumberify('./index.rsh:96:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc17, v1999], [ctc17, v2000]],
                fees: stdlib.checkedBigNumberify('./index.rsh:90:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:96:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc15.defaultValue /* simReturnVal */];})();
          const v2006 = await txn1.getOutput('internal', 'v2005', ctc16, v2005);
          const v2008 = v2006[stdlib.checkedBigNumberify('./index.rsh:96:15:application', stdlib.UInt_max, '0')];
          const v2013 = stdlib.add(v902, v2008);
          const v3501 = v898;
          const v3503 = v2013;
          sim_r.isHalt = false;
          
          break;
          }
        case 'nop0_86': {
          const v2040 = v1042[1];
          
          break;
          }
        case 'touch0_86': {
          const v2239 = v1042[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc6, ctc7, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1042], secs: v1044, time: v1043, didSend: v562, from: v1041 } = txn1;
  switch (v1042[0]) {
    case 'a_admin_grant0_86': {
      const v1045 = v1042[1];
      return;
      break;
      }
    case 'a_channeler_createChannel0_86': {
      const v1244 = v1042[1];
      return;
      break;
      }
    case 'a_channeler_deleteChannel0_86': {
      const v1443 = v1042[1];
      return;
      break;
      }
    case 'a_channeler_useChannel0_86': {
      const v1642 = v1042[1];
      return;
      break;
      }
    case 'arc200_transfer0_86': {
      const v1841 = v1042[1];
      undefined /* setApiDetails */;
      ;
      const v1980 = v1841[stdlib.checkedBigNumberify('./index.rsh:219:12:spread', stdlib.UInt_max, '0')];
      const v1981 = v1841[stdlib.checkedBigNumberify('./index.rsh:219:12:spread', stdlib.UInt_max, '1')];
      const v1982 = v1841[stdlib.checkedBigNumberify('./index.rsh:219:12:spread', stdlib.UInt_max, '2')];
      const v1983 = v898.manager;
      const v1984 = stdlib.addressEq(v1041, v1983);
      stdlib.assert(v1984, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:220:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:222:15:application call to [unknown function] (defined at: ./index.rsh:222:15:function exp)'],
        msg: 'must be manager',
        who: 'arc200_transfer'
        });
      const v1989 = null;
      const v1990 = await txn1.getOutput('arc200_transfer', 'v1989', ctc0, v1989);
      if (v562) {
        stdlib.protect(ctc0, await interact.out(v1841, v1990), {
          at: './index.rsh:219:13:application',
          fs: ['at ./index.rsh:219:13:application call to [unknown function] (defined at: ./index.rsh:219:13:function exp)', 'at ./index.rsh:223:14:application call to "k" (defined at: ./index.rsh:222:15:function exp)', 'at ./index.rsh:222:15:application call to [unknown function] (defined at: ./index.rsh:222:15:function exp)'],
          msg: 'out',
          who: 'arc200_transfer'
          });
        }
      else {
        }
      
      const v1998 = await ctc.getContractAddress();
      const v1999 = [v1980, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1998];
      const v2000 = [v1980, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1981];
      const v2003 = [];
      const v2004 = stdlib.bytesFromHex("0xda7025b9");
      const v2005 = undefined /* Remote */;
      const v2006 = await txn1.getOutput('internal', 'v2005', ctc16, v2005);
      const v2008 = v2006[stdlib.checkedBigNumberify('./index.rsh:96:15:application', stdlib.UInt_max, '0')];
      const v2013 = stdlib.add(v902, v2008);
      const v2014 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2008);
      stdlib.assert(v2014, {
        at: './index.rsh:96:15:application',
        fs: ['at ./index.rsh:224:33:application call to [unknown function] (defined at: ./index.rsh:83:45:function exp)', 'at ./index.rsh:222:15:application call to [unknown function] (defined at: ./index.rsh:222:15:function exp)'],
        msg: 'remote bill check',
        who: 'arc200_transfer'
        });
      const v3501 = v898;
      const v3503 = v2013;
      return;
      
      break;
      }
    case 'nop0_86': {
      const v2040 = v1042[1];
      return;
      break;
      }
    case 'touch0_86': {
      const v2239 = v1042[1];
      return;
      break;
      }
    }
  
  
  };
export async function _nop3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _nop3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _nop3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Struct([['inTokenId', ctc1], ['outTokenId', ctc1], ['channelerAddress', ctc2]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Object({
    channelCount: ctc5,
    manager: ctc2
    });
  const ctc7 = stdlib.T_UInt;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc2]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc5]);
  const ctc12 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc2, ctc5]);
  const ctc14 = stdlib.T_Data({
    a_admin_grant0_86: ctc9,
    a_channeler_createChannel0_86: ctc10,
    a_channeler_deleteChannel0_86: ctc11,
    a_channeler_useChannel0_86: ctc12,
    arc200_transfer0_86: ctc13,
    nop0_86: ctc8,
    touch0_86: ctc8
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v891, v896, v898, v902] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc2, ctc6, ctc7]);
  const v1005 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)', 'at ./index.rsh:71:31:application call to "runnop0_86" (defined at: ./index.rsh:209:12:function exp)', 'at ./index.rsh:71:31:application call to [unknown function] (defined at: ./index.rsh:71:31:function exp)'],
    msg: 'in',
    who: 'nop'
    });
  const v1009 = ['nop0_86', v1005];
  
  const txn1 = await (ctc.sendrecv({
    args: [v891, v896, v898, v902, v1009],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:209:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1042], secs: v1044, time: v1043, didSend: v562, from: v1041 } = txn1;
      
      switch (v1042[0]) {
        case 'a_admin_grant0_86': {
          const v1045 = v1042[1];
          
          break;
          }
        case 'a_channeler_createChannel0_86': {
          const v1244 = v1042[1];
          
          break;
          }
        case 'a_channeler_deleteChannel0_86': {
          const v1443 = v1042[1];
          
          break;
          }
        case 'a_channeler_useChannel0_86': {
          const v1642 = v1042[1];
          
          break;
          }
        case 'arc200_transfer0_86': {
          const v1841 = v1042[1];
          
          break;
          }
        case 'nop0_86': {
          const v2040 = v1042[1];
          sim_r.txns.push({
            kind: 'api',
            who: "nop"
            });
          ;
          const v2216 = null;
          const v2217 = await txn1.getOutput('nop', 'v2216', ctc0, v2216);
          
          const v3525 = v898;
          const v3527 = v902;
          sim_r.isHalt = false;
          
          break;
          }
        case 'touch0_86': {
          const v2239 = v1042[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc6, ctc7, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1042], secs: v1044, time: v1043, didSend: v562, from: v1041 } = txn1;
  switch (v1042[0]) {
    case 'a_admin_grant0_86': {
      const v1045 = v1042[1];
      return;
      break;
      }
    case 'a_channeler_createChannel0_86': {
      const v1244 = v1042[1];
      return;
      break;
      }
    case 'a_channeler_deleteChannel0_86': {
      const v1443 = v1042[1];
      return;
      break;
      }
    case 'a_channeler_useChannel0_86': {
      const v1642 = v1042[1];
      return;
      break;
      }
    case 'arc200_transfer0_86': {
      const v1841 = v1042[1];
      return;
      break;
      }
    case 'nop0_86': {
      const v2040 = v1042[1];
      undefined /* setApiDetails */;
      ;
      const v2216 = null;
      const v2217 = await txn1.getOutput('nop', 'v2216', ctc0, v2216);
      if (v562) {
        stdlib.protect(ctc0, await interact.out(v2040, v2217), {
          at: './index.rsh:209:13:application',
          fs: ['at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)', 'at ./index.rsh:212:14:application call to "k" (defined at: ./index.rsh:211:15:function exp)', 'at ./index.rsh:211:15:application call to [unknown function] (defined at: ./index.rsh:211:15:function exp)'],
          msg: 'out',
          who: 'nop'
          });
        }
      else {
        }
      
      const v3525 = v898;
      const v3527 = v902;
      return;
      
      break;
      }
    case 'touch0_86': {
      const v2239 = v1042[1];
      return;
      break;
      }
    }
  
  
  };
export async function _touch3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _touch3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _touch3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Struct([['inTokenId', ctc1], ['outTokenId', ctc1], ['channelerAddress', ctc2]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Object({
    channelCount: ctc5,
    manager: ctc2
    });
  const ctc7 = stdlib.T_UInt;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc2]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc5]);
  const ctc12 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc2, ctc5]);
  const ctc14 = stdlib.T_Data({
    a_admin_grant0_86: ctc9,
    a_channeler_createChannel0_86: ctc10,
    a_channeler_deleteChannel0_86: ctc11,
    a_channeler_useChannel0_86: ctc12,
    arc200_transfer0_86: ctc13,
    nop0_86: ctc8,
    touch0_86: ctc8
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v891, v896, v898, v902] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc2, ctc6, ctc7]);
  const v997 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:197:25:application call to [unknown function] (defined at: ./index.rsh:197:25:function exp)', 'at ./index.rsh:71:31:application call to "runtouch0_86" (defined at: ./index.rsh:197:12:function exp)', 'at ./index.rsh:71:31:application call to [unknown function] (defined at: ./index.rsh:71:31:function exp)'],
    msg: 'in',
    who: 'touch'
    });
  const v1001 = ['touch0_86', v997];
  
  const txn1 = await (ctc.sendrecv({
    args: [v891, v896, v898, v902, v1001],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:197:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1042], secs: v1044, time: v1043, didSend: v562, from: v1041 } = txn1;
      
      switch (v1042[0]) {
        case 'a_admin_grant0_86': {
          const v1045 = v1042[1];
          
          break;
          }
        case 'a_channeler_createChannel0_86': {
          const v1244 = v1042[1];
          
          break;
          }
        case 'a_channeler_deleteChannel0_86': {
          const v1443 = v1042[1];
          
          break;
          }
        case 'a_channeler_useChannel0_86': {
          const v1642 = v1042[1];
          
          break;
          }
        case 'arc200_transfer0_86': {
          const v1841 = v1042[1];
          
          break;
          }
        case 'nop0_86': {
          const v2040 = v1042[1];
          
          break;
          }
        case 'touch0_86': {
          const v2239 = v1042[1];
          sim_r.txns.push({
            kind: 'api',
            who: "touch"
            });
          ;
          const v2424 = (stdlib.le(await ctc.getBalance(), v902) ? stdlib.checkedBigNumberify('./index.rsh:200:41:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v902));
          const v2425 = stdlib.safeAdd(v2424, v902);
          const v2426 = v898.manager;
          const v2430 = stdlib.sub(v2425, v2424);
          sim_r.txns.push({
            kind: 'from',
            to: v2426,
            tok: undefined /* Nothing */
            });
          const v2431 = null;
          const v2432 = await txn1.getOutput('touch', 'v2431', ctc0, v2431);
          
          const v3549 = v898;
          const v3551 = v2430;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc6, ctc7, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1042], secs: v1044, time: v1043, didSend: v562, from: v1041 } = txn1;
  switch (v1042[0]) {
    case 'a_admin_grant0_86': {
      const v1045 = v1042[1];
      return;
      break;
      }
    case 'a_channeler_createChannel0_86': {
      const v1244 = v1042[1];
      return;
      break;
      }
    case 'a_channeler_deleteChannel0_86': {
      const v1443 = v1042[1];
      return;
      break;
      }
    case 'a_channeler_useChannel0_86': {
      const v1642 = v1042[1];
      return;
      break;
      }
    case 'arc200_transfer0_86': {
      const v1841 = v1042[1];
      return;
      break;
      }
    case 'nop0_86': {
      const v2040 = v1042[1];
      return;
      break;
      }
    case 'touch0_86': {
      const v2239 = v1042[1];
      undefined /* setApiDetails */;
      ;
      const v2424 = (stdlib.le(await ctc.getBalance(), v902) ? stdlib.checkedBigNumberify('./index.rsh:200:41:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v902));
      const v2425 = stdlib.safeAdd(v2424, v902);
      const v2426 = v898.manager;
      const v2430 = stdlib.sub(v2425, v2424);
      ;
      const v2431 = null;
      const v2432 = await txn1.getOutput('touch', 'v2431', ctc0, v2431);
      if (v562) {
        stdlib.protect(ctc0, await interact.out(v2239, v2432), {
          at: './index.rsh:197:13:application',
          fs: ['at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)', 'at ./index.rsh:202:14:application call to "k" (defined at: ./index.rsh:199:15:function exp)', 'at ./index.rsh:199:15:application call to [unknown function] (defined at: ./index.rsh:199:15:function exp)'],
          msg: 'out',
          who: 'touch'
          });
        }
      else {
        }
      
      const v3549 = v898;
      const v3551 = v2430;
      return;
      
      break;
      }
    }
  
  
  };
export async function a_admin_grant(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for a_admin_grant expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for a_admin_grant expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _a_admin_grant3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function a_channeler_createChannel(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for a_channeler_createChannel expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for a_channeler_createChannel expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _a_channeler_createChannel3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function a_channeler_deleteChannel(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for a_channeler_deleteChannel expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for a_channeler_deleteChannel expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _a_channeler_deleteChannel3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function a_channeler_useChannel(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for a_channeler_useChannel expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for a_channeler_useChannel expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _a_channeler_useChannel3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function arc200_transfer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for arc200_transfer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for arc200_transfer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _arc200_transfer3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function nop(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for nop expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for nop expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _nop3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function touch(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for touch expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for touch expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _touch3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64,(address)))void`, `_reachp_2((uint64,(byte,byte[72])))void`, `a_admin_grant(address)void`, `a_channeler_createChannel(uint64,uint64)uint256`, `a_channeler_deleteChannel(uint256)void`, `a_channeler_useChannel(uint256,uint256)void`, `arc200_transfer(uint64,address,uint256)void`, `nop()void`, `touch()void`],
    pure: [`constructor()address`, `manager()address`, `state()(address,uint256)`, `supportsInterface(byte[4])byte`, `zeroAddress()address`],
    sigs: [`_reachp_0((uint64,(address)))void`, `_reachp_2((uint64,(byte,byte[72])))void`, `a_admin_grant(address)void`, `a_channeler_createChannel(uint64,uint64)uint256`, `a_channeler_deleteChannel(uint256)void`, `a_channeler_useChannel(uint256,uint256)void`, `arc200_transfer(uint64,address,uint256)void`, `constructor()address`, `manager()address`, `nop()void`, `state()(address,uint256)`, `supportsInterface(byte[4])byte`, `touch()void`, `zeroAddress()address`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CSAHAAgDAQYwKCYEAAEAAQEFYXBwSUQxGEEGJShkSSJbNQEjWzUCKWQqZFCCDgQEUiXTBDNujV8EUh4tYQRYdZ+iBGdDQDEEbOPkEARxXWDdBKQK4HQEpONJzgTBuyHyBNhR3icE31O63ATjPYBSBPCeCD82GgCODgV1BmcGJgYgBh0GIwVjBcwFgAWIBd8FlwYuBZ8ANBBXICAxABJEKDULgAgAAAAAAAAEJjQLULA0CzUENBBXACA0DVcBIFAyBjUPNRA0EjQRUDQQUDQOFlAkMgY1AjUBKUsBVwB/ZypMV38JZyg0ARY0AhZQZzEZIhJEiAY2NANAAAqABBUffHU0BFCwJUM0CyJbNQ00CyNbNQw0DRYBNAwWARNENBBXACCAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoEkVgSBMCa9MUDULgdSQAik0C1A0DRY0DBZQMQBQiAXogAgAAAAAAAAFBDQLULA0CzUENAs0EFcgIFAyBjUPNRBC/z0oIQWvKTQNVwEgUIgFpiJVJRJEMQA0EFcgIBJEKDULgAgAAAAAAAAF4zQLULA0CzUEMgY1D0L/BTQLVyAgNQ0oIQWvKTQLVwAgUIgFZ0k1DCJVJRJEMRg1FDIKNRM0FBY0FBZQNBNQNAxJVwEATCJVTUk1CyJbNRU0CyNbNRQ0C1cQIDUMKDUXgARKlo+PNRYrNBUWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBLIQNBWyGDQWshoxAEmyHLIaNBNJshyyGjQNsho0FbIyszIKYDQJCTQKFwkWtwA+VwQAUDULgAgAAAAAAAAGzjQLULA0C0k1FSJbNQsiNAsSRCs0FBZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEEshA0FLIYNBayGjQMSbIcshoxAEmyHLIaNA2yGjQUsjKzMgpgNAkJNAoXCRa3AD5XBABQNRWACAAAAAAAAAbhNBVQsDQVSTUMIls1DSI0DRJEKDUMgAgAAAAAAAAG6zQMULA0DDUEMgY0DjQLCDQNCDUONQ9C/as0CyJbNRM0C1cIIDUNMQA0EFcgIBJEKDUMgAgAAAAAAAAHxTQMULA0DDUEKzQTFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQSyEDQTshiABNpwJbmyGjQNSbIcsho0C1coILIaNBOyMrMyCmA0CQk0ChcJFrcAPlcEAFA1DIAIAAAAAAAAB9U0DFCwNAxJNQsiWzUMIjQMEkQyBjQONAwINQ41D0L9BCg1C4AIAAAAAAAACKg0C1CwNAs1BDIGNQ9C/OgyCmAyCngJNA4JSTUMNBBXICCIA0YoNQuACAAAAAAAAAl/NAtQsDQLNQQyBjQMNA4INAwJNQ41D0L8rSOvKTQLUCEGr1BQNQskNAESRIgC0jQLIls1DDQLVwhJNQ2ABPmfKRU0DBZQNA1QsDQMiALPNA0iVY0HAioCLQI3AjoCRAJOAhZC/DEjryo0DBY0CxZQUIE4r1BQNQtC/6wjr4ABAjQLUCEGr1BQNQtC/5ojr4ABAzQMNAtQUCOvUFA1C0L/hiOvgAEENA0WNAxQNAtQUFA1C0L/cTQBJBJEiAJDNBI1BDEZIhJEQvwzNAEkEkSIAi80EFcgIDUEQv/mgFEAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L+8zQBJBJEiAHFNBBXICA0EFcAIFA1BEL/djQBJBJEiAGtKTUEQv9ogFEAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L+dTQBJBJEiAFHNBE1BEL/ATEANRI0DCJbNQ00DFcIIDULgATeOvChNA0WUDQLULA0DYgBOTQLNREyAzQSUDIGIjUONQ81EEL6zYgBHYGgjQaIASQ2GgE1DEL/tYgBCzYaATULQv4QNhoBNQtC/fs2GgEXNhoCFzULNQxC/jg2GgE1C0L+RTYaATYaAjULNQxC/koiMTQSRCQxNRJEIjE2EkQiMTcSRIgAwIGIAa8iIkL6czYaARc2GgI2GgM1CzUMNQ1C/itC/j1C/WNITL9IiSKyASWyELIHsgiziUL6CDQNVwEQNQtC+m9C+u00DVcBQDULQvsbNA1XAUg1C0L8a0L9D0L+E0L+IkL+dzYaATULQv6HQv6SSIlMCUk1BjIJiABmiQlJQf/uSTUGMRY0ACUISTUACUcCiTEZgQUSRIgAOyIyCjIJiABOQvn6Qv6xSVcAIDUSSVcgIDURSVdAQDUQgYABWzUOiSU1A4lJIhJMNAISEUSJNAYINQaJNAY0B0oPQf+TQv+bsUL/Q75JFlEHCEUETVCJsbIJQv8yTEm9QP8nSwOI/85C/x8=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `557`,
    1001: `557`,
    1002: `559`,
    1003: `559`,
    1004: `560`,
    1005: `560`,
    1006: `560`,
    1007: `561`,
    1008: `561`,
    1009: `561`,
    101: `21`,
    1010: `562`,
    1011: `563`,
    1012: `563`,
    1013: `564`,
    1014: `564`,
    1015: `564`,
    1016: `564`,
    1017: `564`,
    1018: `564`,
    1019: `564`,
    102: `21`,
    1020: `564`,
    1021: `564`,
    1022: `564`,
    1023: `565`,
    1024: `565`,
    1025: `566`,
    1026: `567`,
    1027: `568`,
    1028: `568`,
    1029: `569`,
    103: `21`,
    1030: `569`,
    1031: `570`,
    1032: `570`,
    1033: `571`,
    1034: `571`,
    1035: `572`,
    1036: `572`,
    1037: `573`,
    1038: `574`,
    1039: `574`,
    104: `21`,
    1040: `575`,
    1041: `576`,
    1042: `576`,
    1043: `577`,
    1044: `577`,
    1045: `578`,
    1046: `578`,
    1047: `578`,
    1048: `580`,
    1049: `581`,
    105: `21`,
    1050: `582`,
    1051: `583`,
    1052: `583`,
    1053: `584`,
    1054: `585`,
    1055: `585`,
    1056: `586`,
    1057: `587`,
    1058: `588`,
    1059: `589`,
    106: `21`,
    1060: `589`,
    1061: `591`,
    1062: `592`,
    1063: `592`,
    1064: `593`,
    1065: `594`,
    1066: `595`,
    1067: `595`,
    1068: `595`,
    1069: `596`,
    107: `21`,
    1070: `596`,
    1071: `597`,
    1072: `598`,
    1073: `599`,
    1074: `599`,
    1075: `600`,
    1076: `600`,
    1077: `601`,
    1078: `601`,
    1079: `601`,
    108: `21`,
    1080: `602`,
    1081: `602`,
    1082: `603`,
    1083: `603`,
    1084: `603`,
    1085: `603`,
    1086: `603`,
    1087: `603`,
    1088: `604`,
    1089: `604`,
    109: `21`,
    1090: `605`,
    1091: `606`,
    1092: `607`,
    1093: `607`,
    1094: `608`,
    1095: `609`,
    1096: `611`,
    1097: `611`,
    1098: `612`,
    1099: `612`,
    11: `2`,
    110: `21`,
    1100: `612`,
    1101: `613`,
    1102: `613`,
    1103: `614`,
    1104: `615`,
    1105: `616`,
    1106: `616`,
    1107: `616`,
    1108: `616`,
    1109: `616`,
    111: `21`,
    1110: `616`,
    1111: `616`,
    1112: `616`,
    1113: `616`,
    1114: `616`,
    1115: `616`,
    1116: `616`,
    1117: `616`,
    1118: `616`,
    1119: `616`,
    112: `21`,
    1120: `616`,
    1121: `617`,
    1122: `617`,
    1123: `617`,
    1124: `619`,
    1125: `620`,
    1126: `621`,
    1127: `622`,
    1128: `622`,
    1129: `623`,
    113: `21`,
    1130: `624`,
    1131: `624`,
    1132: `625`,
    1133: `626`,
    1134: `627`,
    1135: `628`,
    1136: `628`,
    1137: `629`,
    1138: `630`,
    1139: `631`,
    114: `21`,
    1140: `632`,
    1141: `632`,
    1142: `633`,
    1143: `633`,
    1144: `633`,
    1145: `635`,
    1146: `636`,
    1147: `637`,
    1148: `637`,
    1149: `637`,
    115: `21`,
    1150: `638`,
    1151: `638`,
    1152: `639`,
    1153: `640`,
    1154: `640`,
    1155: `641`,
    1156: `642`,
    1157: `643`,
    1158: `644`,
    1159: `644`,
    116: `22`,
    1160: `645`,
    1161: `645`,
    1162: `645`,
    1163: `647`,
    1164: `648`,
    1165: `649`,
    1166: `649`,
    1167: `649`,
    1168: `650`,
    1169: `650`,
    117: `22`,
    1170: `651`,
    1171: `651`,
    1172: `652`,
    1173: `653`,
    1174: `654`,
    1175: `655`,
    1176: `656`,
    1177: `657`,
    1178: `658`,
    1179: `658`,
    118: `22`,
    1180: `659`,
    1181: `659`,
    1182: `659`,
    1183: `661`,
    1184: `662`,
    1185: `663`,
    1186: `663`,
    1187: `663`,
    1188: `664`,
    1189: `664`,
    119: `23`,
    1190: `665`,
    1191: `666`,
    1192: `666`,
    1193: `667`,
    1194: `668`,
    1195: `668`,
    1196: `669`,
    1197: `670`,
    1198: `671`,
    1199: `672`,
    12: `2`,
    120: `23`,
    1200: `672`,
    1201: `673`,
    1202: `673`,
    1203: `673`,
    1204: `675`,
    1205: `675`,
    1206: `676`,
    1207: `677`,
    1208: `678`,
    1209: `681`,
    121: `23`,
    1210: `681`,
    1211: `681`,
    1212: `682`,
    1213: `682`,
    1214: `683`,
    1215: `683`,
    1216: `685`,
    1217: `685`,
    1218: `686`,
    1219: `687`,
    122: `23`,
    1220: `688`,
    1221: `690`,
    1222: `690`,
    1223: `690`,
    1224: `692`,
    1225: `692`,
    1226: `693`,
    1227: `694`,
    1228: `695`,
    1229: `698`,
    123: `23`,
    1230: `698`,
    1231: `698`,
    1232: `699`,
    1233: `699`,
    1234: `700`,
    1235: `700`,
    1236: `700`,
    1237: `701`,
    1238: `701`,
    1239: `702`,
    124: `23`,
    1240: `702`,
    1241: `702`,
    1242: `704`,
    1243: `704`,
    1244: `704`,
    1245: `704`,
    1246: `704`,
    1247: `704`,
    1248: `704`,
    1249: `704`,
    125: `23`,
    1250: `704`,
    1251: `704`,
    1252: `704`,
    1253: `704`,
    1254: `704`,
    1255: `704`,
    1256: `704`,
    1257: `704`,
    1258: `704`,
    1259: `704`,
    126: `23`,
    1260: `704`,
    1261: `704`,
    1262: `704`,
    1263: `704`,
    1264: `704`,
    1265: `704`,
    1266: `704`,
    1267: `704`,
    1268: `704`,
    1269: `704`,
    127: `23`,
    1270: `704`,
    1271: `704`,
    1272: `704`,
    1273: `704`,
    1274: `704`,
    1275: `704`,
    1276: `704`,
    1277: `704`,
    1278: `704`,
    1279: `704`,
    128: `23`,
    1280: `704`,
    1281: `704`,
    1282: `704`,
    1283: `704`,
    1284: `704`,
    1285: `704`,
    1286: `704`,
    1287: `704`,
    1288: `704`,
    1289: `704`,
    129: `23`,
    1290: `704`,
    1291: `704`,
    1292: `704`,
    1293: `704`,
    1294: `704`,
    1295: `704`,
    1296: `704`,
    1297: `704`,
    1298: `704`,
    1299: `704`,
    13: `2`,
    130: `23`,
    1300: `704`,
    1301: `704`,
    1302: `704`,
    1303: `704`,
    1304: `704`,
    1305: `704`,
    1306: `704`,
    1307: `704`,
    1308: `704`,
    1309: `704`,
    131: `23`,
    1310: `704`,
    1311: `704`,
    1312: `704`,
    1313: `704`,
    1314: `704`,
    1315: `704`,
    1316: `704`,
    1317: `704`,
    1318: `704`,
    1319: `704`,
    132: `23`,
    1320: `704`,
    1321: `704`,
    1322: `704`,
    1323: `704`,
    1324: `704`,
    1325: `705`,
    1326: `705`,
    1327: `706`,
    1328: `706`,
    1329: `706`,
    133: `23`,
    1330: `708`,
    1331: `708`,
    1332: `709`,
    1333: `710`,
    1334: `711`,
    1335: `714`,
    1336: `714`,
    1337: `714`,
    1338: `715`,
    1339: `715`,
    134: `23`,
    1340: `716`,
    1341: `716`,
    1342: `716`,
    1343: `717`,
    1344: `717`,
    1345: `718`,
    1346: `718`,
    1347: `718`,
    1348: `719`,
    1349: `720`,
    135: `23`,
    1350: `720`,
    1351: `721`,
    1352: `721`,
    1353: `721`,
    1354: `723`,
    1355: `723`,
    1356: `724`,
    1357: `725`,
    1358: `726`,
    1359: `729`,
    136: `23`,
    1360: `729`,
    1361: `729`,
    1362: `730`,
    1363: `731`,
    1364: `731`,
    1365: `732`,
    1366: `732`,
    1367: `732`,
    1368: `734`,
    1369: `734`,
    137: `23`,
    1370: `734`,
    1371: `734`,
    1372: `734`,
    1373: `734`,
    1374: `734`,
    1375: `734`,
    1376: `734`,
    1377: `734`,
    1378: `734`,
    1379: `734`,
    138: `23`,
    1380: `734`,
    1381: `734`,
    1382: `734`,
    1383: `734`,
    1384: `734`,
    1385: `734`,
    1386: `734`,
    1387: `734`,
    1388: `734`,
    1389: `734`,
    139: `23`,
    1390: `734`,
    1391: `734`,
    1392: `734`,
    1393: `734`,
    1394: `734`,
    1395: `734`,
    1396: `734`,
    1397: `734`,
    1398: `734`,
    1399: `734`,
    14: `2`,
    140: `23`,
    1400: `734`,
    1401: `734`,
    1402: `734`,
    1403: `734`,
    1404: `734`,
    1405: `734`,
    1406: `734`,
    1407: `734`,
    1408: `734`,
    1409: `734`,
    141: `23`,
    1410: `734`,
    1411: `734`,
    1412: `734`,
    1413: `734`,
    1414: `734`,
    1415: `734`,
    1416: `734`,
    1417: `734`,
    1418: `734`,
    1419: `734`,
    142: `23`,
    1420: `734`,
    1421: `734`,
    1422: `734`,
    1423: `734`,
    1424: `734`,
    1425: `734`,
    1426: `734`,
    1427: `734`,
    1428: `734`,
    1429: `734`,
    143: `23`,
    1430: `734`,
    1431: `734`,
    1432: `734`,
    1433: `734`,
    1434: `734`,
    1435: `734`,
    1436: `734`,
    1437: `734`,
    1438: `734`,
    1439: `734`,
    144: `23`,
    1440: `734`,
    1441: `734`,
    1442: `734`,
    1443: `734`,
    1444: `734`,
    1445: `734`,
    1446: `734`,
    1447: `734`,
    1448: `734`,
    1449: `734`,
    145: `23`,
    1450: `734`,
    1451: `735`,
    1452: `735`,
    1453: `736`,
    1454: `736`,
    1455: `736`,
    1456: `738`,
    1457: `738`,
    1458: `739`,
    1459: `740`,
    146: `23`,
    1460: `741`,
    1461: `744`,
    1462: `744`,
    1463: `744`,
    1464: `745`,
    1465: `745`,
    1466: `746`,
    1467: `746`,
    1468: `747`,
    1469: `747`,
    147: `23`,
    1470: `747`,
    1471: `749`,
    1472: `749`,
    1473: `750`,
    1474: `750`,
    1475: `751`,
    1476: `751`,
    1477: `752`,
    1478: `753`,
    1479: `754`,
    148: `23`,
    1480: `754`,
    1481: `755`,
    1482: `755`,
    1483: `756`,
    1484: `756`,
    1485: `756`,
    1486: `757`,
    1487: `757`,
    1488: `758`,
    1489: `758`,
    149: `25`,
    1490: `758`,
    1491: `758`,
    1492: `758`,
    1493: `758`,
    1494: `759`,
    1495: `759`,
    1496: `760`,
    1497: `761`,
    1498: `762`,
    1499: `762`,
    15: `2`,
    150: `27`,
    1500: `763`,
    1501: `764`,
    1502: `766`,
    1503: `766`,
    1504: `767`,
    1505: `767`,
    1506: `767`,
    1507: `768`,
    1508: `768`,
    1509: `769`,
    151: `27`,
    1510: `769`,
    1511: `770`,
    1512: `770`,
    1513: `771`,
    1514: `771`,
    1515: `772`,
    1516: `773`,
    1517: `773`,
    1518: `774`,
    1519: `775`,
    152: `28`,
    1520: `775`,
    1521: `776`,
    1522: `776`,
    1523: `777`,
    1524: `777`,
    1525: `778`,
    1526: `778`,
    1527: `778`,
    1528: `780`,
    1529: `780`,
    153: `28`,
    1530: `780`,
    1531: `781`,
    1532: `781`,
    1533: `781`,
    1534: `781`,
    1535: `782`,
    1536: `782`,
    1537: `782`,
    1538: `783`,
    1539: `783`,
    154: `28`,
    1540: `783`,
    1541: `784`,
    1542: `784`,
    1543: `785`,
    1544: `785`,
    1545: `785`,
    1546: `787`,
    1547: `787`,
    1548: `787`,
    1549: `788`,
    155: `29`,
    1550: `788`,
    1551: `788`,
    1552: `789`,
    1553: `789`,
    1554: `790`,
    1555: `790`,
    1556: `790`,
    1557: `792`,
    1558: `792`,
    1559: `792`,
    156: `29`,
    1560: `793`,
    1561: `793`,
    1562: `794`,
    1563: `794`,
    1564: `794`,
    1565: `796`,
    1566: `796`,
    1567: `796`,
    1568: `797`,
    1569: `798`,
    157: `30`,
    1570: `798`,
    1571: `798`,
    1572: `799`,
    1573: `800`,
    1574: `800`,
    1575: `801`,
    1576: `801`,
    1577: `802`,
    1578: `802`,
    1579: `802`,
    158: `31`,
    1580: `804`,
    1581: `804`,
    1582: `804`,
    1583: `805`,
    1584: `805`,
    1585: `806`,
    1586: `806`,
    1587: `806`,
    1588: `808`,
    1589: `808`,
    159: `36`,
    1590: `808`,
    1591: `809`,
    1592: `809`,
    1593: `809`,
    1594: `810`,
    1595: `810`,
    1596: `811`,
    1597: `811`,
    1598: `812`,
    1599: `812`,
    16: `2`,
    160: `37`,
    1600: `812`,
    1601: `814`,
    1602: `815`,
    1603: `815`,
    1604: `816`,
    1605: `817`,
    1606: `818`,
    1607: `819`,
    1608: `819`,
    1609: `820`,
    161: `37`,
    1610: `821`,
    1611: `822`,
    1612: `823`,
    1613: `823`,
    1614: `824`,
    1615: `825`,
    1616: `826`,
    1617: `827`,
    1618: `827`,
    1619: `828`,
    162: `38`,
    1620: `829`,
    1621: `830`,
    1622: `830`,
    1623: `830`,
    1624: `831`,
    1625: `831`,
    1626: `831`,
    1627: `832`,
    1628: `833`,
    1629: `834`,
    163: `38`,
    1630: `835`,
    1631: `835`,
    1632: `835`,
    1633: `837`,
    1634: `837`,
    1635: `837`,
    1636: `838`,
    1637: `839`,
    1638: `839`,
    1639: `839`,
    164: `38`,
    1640: `840`,
    1641: `840`,
    1642: `840`,
    1643: `841`,
    1644: `841`,
    1645: `842`,
    1646: `842`,
    1647: `843`,
    1648: `843`,
    1649: `844`,
    165: `38`,
    1650: `844`,
    1651: `844`,
    1652: `846`,
    1653: `846`,
    1654: `846`,
    1655: `848`,
    1656: `848`,
    1657: `848`,
    1658: `850`,
    1659: `851`,
    166: `38`,
    1660: `852`,
    1661: `853`,
    1662: `854`,
    1663: `856`,
    1664: `857`,
    1665: `857`,
    1666: `858`,
    1667: `859`,
    1668: `859`,
    1669: `860`,
    167: `38`,
    1670: `860`,
    1671: `861`,
    1672: `861`,
    1673: `862`,
    1674: `863`,
    1675: `865`,
    1676: `865`,
    1677: `865`,
    1678: `867`,
    1679: `867`,
    168: `38`,
    1680: `868`,
    1681: `868`,
    1682: `868`,
    1683: `869`,
    1684: `869`,
    1685: `870`,
    1686: `870`,
    1687: `870`,
    1688: `872`,
    1689: `872`,
    169: `38`,
    1690: `872`,
    1691: `874`,
    1692: `874`,
    1693: `875`,
    1694: `875`,
    1695: `875`,
    1696: `876`,
    1697: `876`,
    1698: `877`,
    1699: `877`,
    17: `2`,
    170: `38`,
    1700: `877`,
    1701: `879`,
    1702: `879`,
    1703: `880`,
    1704: `880`,
    1705: `880`,
    1706: `881`,
    1707: `881`,
    1708: `882`,
    1709: `882`,
    171: `38`,
    1710: `882`,
    1711: `884`,
    1712: `884`,
    1713: `884`,
    1714: `886`,
    1715: `886`,
    1716: `886`,
    1717: `888`,
    1718: `888`,
    1719: `888`,
    172: `39`,
    1720: `890`,
    1721: `890`,
    1722: `890`,
    1723: `892`,
    1724: `892`,
    1725: `892`,
    1726: `893`,
    1727: `893`,
    1728: `894`,
    1729: `894`,
    173: `39`,
    1730: `894`,
    1731: `896`,
    1732: `896`,
    1733: `896`,
    1734: `898`,
    1735: `899`,
    1736: `901`,
    1737: `902`,
    1738: `903`,
    1739: `904`,
    174: `40`,
    1740: `904`,
    1741: `905`,
    1742: `905`,
    1743: `906`,
    1744: `906`,
    1745: `906`,
    1746: `907`,
    1747: `909`,
    1748: `910`,
    1749: `911`,
    175: `41`,
    1750: `911`,
    1751: `911`,
    1752: `912`,
    1753: `913`,
    1754: `913`,
    1755: `916`,
    1756: `916`,
    1757: `917`,
    1758: `917`,
    1759: `918`,
    176: `42`,
    1760: `919`,
    1761: `920`,
    1762: `921`,
    1763: `921`,
    1764: `922`,
    1765: `923`,
    1766: `923`,
    1767: `924`,
    1768: `924`,
    1769: `925`,
    177: `42`,
    1770: `925`,
    1771: `926`,
    1772: `927`,
    1773: `928`,
    1774: `928`,
    1775: `929`,
    1776: `930`,
    1777: `931`,
    1778: `932`,
    1779: `932`,
    178: `43`,
    1780: `933`,
    1781: `934`,
    1782: `935`,
    1783: `937`,
    1784: `937`,
    1785: `938`,
    1786: `938`,
    1787: `939`,
    1788: `940`,
    1789: `942`,
    179: `43`,
    1790: `942`,
    1791: `942`,
    1792: `944`,
    1793: `945`,
    1794: `945`,
    1795: `946`,
    1796: `946`,
    1797: `947`,
    1798: `947`,
    1799: `947`,
    18: `2`,
    180: `44`,
    1800: `948`,
    1801: `948`,
    1802: `948`,
    1803: `950`,
    1804: `950`,
    1805: `950`,
    1806: `952`,
    1807: `953`,
    1808: `953`,
    1809: `953`,
    181: `44`,
    1810: `954`,
    1811: `954`,
    1812: `955`,
    1813: `956`,
    1814: `956`,
    1815: `956`,
    1816: `957`,
    1817: `957`,
    1818: `958`,
    1819: `959`,
    182: `45`,
    1820: `959`,
    1821: `959`,
    1822: `960`,
    1823: `960`,
    1824: `961`,
    1825: `961`,
    1826: `961`,
    1827: `962`,
    1828: `963`,
    1829: `963`,
    183: `45`,
    1830: `964`,
    1831: `966`,
    1832: `967`,
    1833: `967`,
    1834: `968`,
    1835: `970`,
    1836: `971`,
    1837: `972`,
    1838: `973`,
    1839: `974`,
    184: `45`,
    1840: `974`,
    1841: `975`,
    1842: `976`,
    1843: `977`,
    1844: `978`,
    1845: `980`,
    1846: `980`,
    1847: `981`,
    1848: `982`,
    1849: `982`,
    185: `46`,
    1850: `983`,
    1851: `985`,
    1852: `985`,
    1853: `986`,
    1854: `986`,
    1855: `987`,
    1856: `988`,
    1857: `989`,
    1858: `989`,
    1859: `989`,
    186: `46`,
    1860: `990`,
    1861: `990`,
    1862: `990`,
    1863: `992`,
    1864: `993`,
    1865: `993`,
    1866: `993`,
    1867: `995`,
    1868: `996`,
    1869: `997`,
    187: `47`,
    1870: `998`,
    1871: `998`,
    1872: `998`,
    1873: `999`,
    1874: `999`,
    1875: `1000`,
    1876: `1001`,
    1877: `1002`,
    1878: `1004`,
    1879: `1005`,
    188: `47`,
    1880: `1005`,
    1881: `1006`,
    1882: `1006`,
    1883: `1006`,
    1884: `1008`,
    1885: `1009`,
    1886: `1010`,
    1887: `1011`,
    1888: `1011`,
    1889: `1011`,
    189: `47`,
    1890: `1012`,
    1891: `1012`,
    1892: `1013`,
    1893: `1013`,
    1894: `1013`,
    1895: `1014`,
    19: `2`,
    190: `48`,
    191: `49`,
    192: `49`,
    193: `50`,
    194: `50`,
    195: `51`,
    196: `51`,
    197: `54`,
    198: `54`,
    199: `55`,
    2: `2`,
    20: `2`,
    200: `55`,
    201: `56`,
    202: `57`,
    203: `57`,
    204: `58`,
    205: `59`,
    206: `59`,
    207: `60`,
    208: `61`,
    209: `62`,
    21: `2`,
    210: `63`,
    211: `63`,
    212: `65`,
    213: `65`,
    214: `66`,
    215: `66`,
    216: `67`,
    217: `68`,
    218: `68`,
    219: `69`,
    22: `2`,
    220: `69`,
    221: `69`,
    222: `70`,
    223: `71`,
    224: `72`,
    225: `73`,
    226: `73`,
    227: `73`,
    228: `74`,
    229: `75`,
    23: `4`,
    230: `76`,
    231: `76`,
    232: `77`,
    233: `78`,
    234: `78`,
    235: `79`,
    236: `80`,
    237: `81`,
    238: `82`,
    239: `82`,
    24: `4`,
    240: `83`,
    241: `84`,
    242: `85`,
    243: `87`,
    244: `87`,
    245: `87`,
    246: `89`,
    247: `89`,
    248: `90`,
    249: `90`,
    25: `5`,
    250: `90`,
    251: `92`,
    252: `92`,
    253: `92`,
    254: `92`,
    255: `92`,
    256: `92`,
    257: `93`,
    258: `93`,
    259: `94`,
    26: `5`,
    260: `95`,
    261: `97`,
    262: `98`,
    263: `100`,
    264: `100`,
    265: `101`,
    266: `102`,
    267: `103`,
    268: `103`,
    269: `104`,
    27: `5`,
    270: `104`,
    271: `105`,
    272: `106`,
    273: `107`,
    274: `107`,
    275: `108`,
    276: `108`,
    277: `109`,
    278: `110`,
    279: `111`,
    28: `6`,
    280: `111`,
    281: `112`,
    282: `113`,
    283: `114`,
    284: `115`,
    285: `120`,
    286: `120`,
    287: `121`,
    288: `121`,
    289: `121`,
    29: `7`,
    290: `122`,
    291: `122`,
    292: `122`,
    293: `122`,
    294: `122`,
    295: `122`,
    296: `122`,
    297: `122`,
    298: `122`,
    299: `122`,
    3: `2`,
    30: `8`,
    300: `122`,
    301: `122`,
    302: `122`,
    303: `122`,
    304: `122`,
    305: `122`,
    306: `122`,
    307: `122`,
    308: `122`,
    309: `122`,
    31: `9`,
    310: `122`,
    311: `122`,
    312: `122`,
    313: `122`,
    314: `122`,
    315: `122`,
    316: `122`,
    317: `122`,
    318: `122`,
    319: `122`,
    32: `10`,
    320: `122`,
    321: `122`,
    322: `122`,
    323: `122`,
    324: `123`,
    325: `125`,
    326: `126`,
    327: `127`,
    328: `127`,
    329: `128`,
    33: `11`,
    330: `129`,
    331: `130`,
    332: `131`,
    333: `132`,
    334: `133`,
    335: `133`,
    336: `135`,
    337: `135`,
    338: `135`,
    339: `135`,
    34: `11`,
    340: `136`,
    341: `137`,
    342: `137`,
    343: `138`,
    344: `139`,
    345: `139`,
    346: `140`,
    347: `141`,
    348: `141`,
    349: `142`,
    35: `12`,
    350: `143`,
    351: `144`,
    352: `144`,
    353: `145`,
    354: `146`,
    355: `146`,
    356: `146`,
    357: `147`,
    358: `147`,
    359: `147`,
    36: `13`,
    360: `147`,
    361: `147`,
    362: `147`,
    363: `147`,
    364: `147`,
    365: `147`,
    366: `147`,
    367: `148`,
    368: `148`,
    369: `149`,
    37: `14`,
    370: `150`,
    371: `151`,
    372: `151`,
    373: `152`,
    374: `152`,
    375: `153`,
    376: `153`,
    377: `154`,
    378: `154`,
    379: `155`,
    38: `14`,
    380: `155`,
    381: `155`,
    382: `156`,
    383: `157`,
    384: `157`,
    385: `158`,
    386: `158`,
    387: `159`,
    388: `159`,
    389: `160`,
    39: `15`,
    390: `160`,
    391: `160`,
    392: `163`,
    393: `164`,
    394: `164`,
    395: `165`,
    396: `166`,
    397: `167`,
    398: `167`,
    399: `168`,
    4: `2`,
    40: `16`,
    400: `168`,
    401: `168`,
    402: `169`,
    403: `170`,
    404: `170`,
    405: `170`,
    406: `171`,
    407: `172`,
    408: `173`,
    409: `174`,
    41: `17`,
    410: `175`,
    411: `180`,
    412: `180`,
    413: `181`,
    414: `181`,
    415: `182`,
    416: `182`,
    417: `182`,
    418: `183`,
    419: `184`,
    42: `18`,
    420: `189`,
    421: `190`,
    422: `190`,
    423: `191`,
    424: `191`,
    425: `191`,
    426: `191`,
    427: `191`,
    428: `191`,
    429: `191`,
    43: `19`,
    430: `191`,
    431: `191`,
    432: `191`,
    433: `192`,
    434: `192`,
    435: `193`,
    436: `194`,
    437: `195`,
    438: `195`,
    439: `196`,
    44: `21`,
    440: `196`,
    441: `197`,
    442: `197`,
    443: `198`,
    444: `198`,
    445: `199`,
    446: `199`,
    447: `199`,
    448: `201`,
    449: `201`,
    45: `21`,
    450: `202`,
    451: `202`,
    452: `202`,
    453: `203`,
    454: `203`,
    455: `205`,
    456: `206`,
    457: `206`,
    458: `207`,
    459: `208`,
    46: `21`,
    460: `209`,
    461: `209`,
    462: `210`,
    463: `210`,
    464: `210`,
    465: `211`,
    466: `212`,
    467: `212`,
    468: `212`,
    469: `213`,
    47: `21`,
    470: `214`,
    471: `214`,
    472: `215`,
    473: `216`,
    474: `217`,
    475: `218`,
    476: `219`,
    477: `224`,
    478: `224`,
    479: `225`,
    48: `21`,
    480: `225`,
    481: `226`,
    482: `226`,
    483: `227`,
    484: `227`,
    485: `228`,
    486: `228`,
    487: `229`,
    488: `230`,
    489: `230`,
    49: `21`,
    490: `231`,
    491: `232`,
    492: `233`,
    493: `233`,
    494: `234`,
    495: `235`,
    496: `235`,
    497: `237`,
    498: `238`,
    499: `238`,
    5: `2`,
    50: `21`,
    500: `238`,
    501: `239`,
    502: `240`,
    503: `241`,
    504: `242`,
    505: `243`,
    506: `244`,
    507: `244`,
    508: `245`,
    509: `246`,
    51: `21`,
    510: `247`,
    511: `247`,
    512: `248`,
    513: `248`,
    514: `249`,
    515: `250`,
    516: `251`,
    517: `251`,
    518: `252`,
    519: `252`,
    52: `21`,
    520: `253`,
    521: `253`,
    522: `253`,
    523: `254`,
    524: `254`,
    525: `255`,
    526: `256`,
    527: `256`,
    528: `257`,
    529: `257`,
    53: `21`,
    530: `257`,
    531: `257`,
    532: `257`,
    533: `257`,
    534: `258`,
    535: `258`,
    536: `259`,
    537: `260`,
    538: `260`,
    539: `261`,
    54: `21`,
    540: `262`,
    541: `263`,
    542: `264`,
    543: `264`,
    544: `265`,
    545: `265`,
    546: `266`,
    547: `267`,
    548: `267`,
    549: `268`,
    55: `21`,
    550: `269`,
    551: `269`,
    552: `270`,
    553: `271`,
    554: `271`,
    555: `272`,
    556: `273`,
    557: `274`,
    558: `274`,
    559: `275`,
    56: `21`,
    560: `276`,
    561: `277`,
    562: `277`,
    563: `278`,
    564: `278`,
    565: `279`,
    566: `279`,
    567: `280`,
    568: `280`,
    569: `282`,
    57: `21`,
    570: `282`,
    571: `283`,
    572: `283`,
    573: `284`,
    574: `284`,
    575: `285`,
    576: `285`,
    577: `286`,
    578: `287`,
    579: `287`,
    58: `21`,
    580: `288`,
    581: `288`,
    582: `289`,
    583: `289`,
    584: `291`,
    585: `292`,
    586: `292`,
    587: `293`,
    588: `293`,
    589: `294`,
    59: `21`,
    590: `294`,
    591: `295`,
    592: `295`,
    593: `299`,
    594: `299`,
    595: `300`,
    596: `300`,
    597: `301`,
    598: `306`,
    599: `306`,
    6: `2`,
    60: `21`,
    600: `307`,
    601: `308`,
    602: `308`,
    603: `309`,
    604: `310`,
    605: `310`,
    606: `311`,
    607: `312`,
    608: `313`,
    609: `314`,
    61: `21`,
    610: `314`,
    611: `314`,
    612: `315`,
    613: `315`,
    614: `315`,
    615: `316`,
    616: `317`,
    617: `317`,
    618: `318`,
    619: `318`,
    62: `21`,
    620: `318`,
    621: `318`,
    622: `318`,
    623: `318`,
    624: `318`,
    625: `318`,
    626: `318`,
    627: `318`,
    628: `319`,
    629: `319`,
    63: `21`,
    630: `320`,
    631: `321`,
    632: `322`,
    633: `322`,
    634: `323`,
    635: `324`,
    636: `324`,
    637: `325`,
    638: `326`,
    639: `327`,
    64: `21`,
    640: `327`,
    641: `328`,
    642: `329`,
    643: `329`,
    644: `330`,
    645: `331`,
    646: `336`,
    647: `337`,
    648: `337`,
    649: `338`,
    65: `21`,
    650: `339`,
    651: `340`,
    652: `341`,
    653: `341`,
    654: `342`,
    655: `342`,
    656: `343`,
    657: `344`,
    658: `344`,
    659: `345`,
    66: `21`,
    660: `346`,
    661: `346`,
    662: `347`,
    663: `348`,
    664: `348`,
    665: `349`,
    666: `350`,
    667: `351`,
    668: `351`,
    669: `352`,
    67: `21`,
    670: `353`,
    671: `354`,
    672: `354`,
    673: `355`,
    674: `355`,
    675: `356`,
    676: `356`,
    677: `357`,
    678: `357`,
    679: `359`,
    68: `21`,
    680: `359`,
    681: `360`,
    682: `360`,
    683: `361`,
    684: `361`,
    685: `362`,
    686: `362`,
    687: `364`,
    688: `365`,
    689: `365`,
    69: `21`,
    690: `366`,
    691: `366`,
    692: `367`,
    693: `367`,
    694: `368`,
    695: `369`,
    696: `369`,
    697: `370`,
    698: `370`,
    699: `371`,
    7: `2`,
    70: `21`,
    700: `371`,
    701: `372`,
    702: `372`,
    703: `376`,
    704: `376`,
    705: `377`,
    706: `377`,
    707: `378`,
    708: `383`,
    709: `383`,
    71: `21`,
    710: `384`,
    711: `385`,
    712: `385`,
    713: `386`,
    714: `387`,
    715: `387`,
    716: `388`,
    717: `389`,
    718: `390`,
    719: `391`,
    72: `21`,
    720: `391`,
    721: `391`,
    722: `392`,
    723: `392`,
    724: `392`,
    725: `393`,
    726: `394`,
    727: `394`,
    728: `395`,
    729: `395`,
    73: `21`,
    730: `395`,
    731: `395`,
    732: `395`,
    733: `395`,
    734: `395`,
    735: `395`,
    736: `395`,
    737: `395`,
    738: `396`,
    739: `396`,
    74: `21`,
    740: `397`,
    741: `398`,
    742: `399`,
    743: `399`,
    744: `400`,
    745: `401`,
    746: `401`,
    747: `402`,
    748: `403`,
    749: `404`,
    75: `21`,
    750: `404`,
    751: `405`,
    752: `406`,
    753: `406`,
    754: `407`,
    755: `408`,
    756: `413`,
    757: `414`,
    758: `414`,
    759: `415`,
    76: `21`,
    760: `415`,
    761: `415`,
    762: `415`,
    763: `415`,
    764: `415`,
    765: `415`,
    766: `415`,
    767: `415`,
    768: `415`,
    769: `416`,
    77: `21`,
    770: `416`,
    771: `417`,
    772: `418`,
    773: `419`,
    774: `419`,
    775: `420`,
    776: `420`,
    777: `421`,
    778: `421`,
    779: `422`,
    78: `21`,
    780: `422`,
    781: `423`,
    782: `423`,
    783: `424`,
    784: `425`,
    785: `425`,
    786: `426`,
    787: `427`,
    788: `427`,
    789: `428`,
    79: `21`,
    790: `428`,
    791: `429`,
    792: `429`,
    793: `429`,
    794: `431`,
    795: `431`,
    796: `432`,
    797: `433`,
    798: `434`,
    799: `434`,
    8: `2`,
    80: `21`,
    800: `435`,
    801: `435`,
    802: `436`,
    803: `436`,
    804: `436`,
    805: `437`,
    806: `437`,
    807: `438`,
    808: `438`,
    809: `439`,
    81: `21`,
    810: `439`,
    811: `440`,
    812: `440`,
    813: `440`,
    814: `441`,
    815: `442`,
    816: `447`,
    817: `448`,
    818: `448`,
    819: `449`,
    82: `21`,
    820: `449`,
    821: `449`,
    822: `449`,
    823: `449`,
    824: `449`,
    825: `449`,
    826: `449`,
    827: `449`,
    828: `449`,
    829: `450`,
    83: `21`,
    830: `450`,
    831: `451`,
    832: `452`,
    833: `453`,
    834: `453`,
    835: `454`,
    836: `454`,
    837: `455`,
    838: `456`,
    839: `456`,
    84: `21`,
    840: `457`,
    841: `458`,
    842: `459`,
    843: `460`,
    844: `460`,
    845: `461`,
    846: `461`,
    847: `462`,
    848: `463`,
    849: `463`,
    85: `21`,
    850: `464`,
    851: `465`,
    852: `465`,
    853: `466`,
    854: `467`,
    855: `467`,
    856: `468`,
    857: `469`,
    858: `470`,
    859: `470`,
    86: `21`,
    860: `471`,
    861: `472`,
    862: `473`,
    863: `473`,
    864: `474`,
    865: `474`,
    866: `475`,
    867: `475`,
    868: `476`,
    869: `476`,
    87: `21`,
    870: `478`,
    871: `478`,
    872: `479`,
    873: `479`,
    874: `479`,
    875: `479`,
    876: `479`,
    877: `479`,
    878: `480`,
    879: `480`,
    88: `21`,
    880: `481`,
    881: `481`,
    882: `483`,
    883: `484`,
    884: `484`,
    885: `485`,
    886: `485`,
    887: `486`,
    888: `486`,
    889: `487`,
    89: `21`,
    890: `487`,
    891: `487`,
    892: `488`,
    893: `488`,
    894: `491`,
    895: `491`,
    896: `492`,
    897: `492`,
    898: `493`,
    899: `498`,
    9: `2`,
    90: `21`,
    900: `498`,
    901: `499`,
    902: `500`,
    903: `500`,
    904: `501`,
    905: `502`,
    906: `502`,
    907: `503`,
    908: `504`,
    909: `505`,
    91: `21`,
    910: `506`,
    911: `506`,
    912: `506`,
    913: `507`,
    914: `507`,
    915: `507`,
    916: `508`,
    917: `509`,
    918: `509`,
    919: `510`,
    92: `21`,
    920: `510`,
    921: `510`,
    922: `510`,
    923: `510`,
    924: `510`,
    925: `510`,
    926: `510`,
    927: `510`,
    928: `510`,
    929: `511`,
    93: `21`,
    930: `511`,
    931: `512`,
    932: `513`,
    933: `514`,
    934: `514`,
    935: `515`,
    936: `516`,
    937: `516`,
    938: `517`,
    939: `518`,
    94: `21`,
    940: `519`,
    941: `519`,
    942: `520`,
    943: `521`,
    944: `521`,
    945: `522`,
    946: `523`,
    947: `528`,
    948: `528`,
    949: `529`,
    95: `21`,
    950: `529`,
    951: `530`,
    952: `530`,
    953: `531`,
    954: `532`,
    955: `532`,
    956: `533`,
    957: `533`,
    958: `534`,
    959: `534`,
    96: `21`,
    960: `534`,
    961: `536`,
    962: `537`,
    963: `537`,
    964: `538`,
    965: `538`,
    966: `538`,
    967: `538`,
    968: `538`,
    969: `538`,
    97: `21`,
    970: `538`,
    971: `538`,
    972: `538`,
    973: `538`,
    974: `539`,
    975: `539`,
    976: `540`,
    977: `541`,
    978: `542`,
    979: `542`,
    98: `21`,
    980: `543`,
    981: `543`,
    982: `544`,
    983: `544`,
    984: `545`,
    985: `545`,
    986: `546`,
    987: `546`,
    988: `546`,
    989: `548`,
    99: `21`,
    990: `548`,
    991: `549`,
    992: `550`,
    993: `550`,
    994: `551`,
    995: `552`,
    996: `553`,
    997: `553`,
    998: `554`,
    999: `556`
    },
  appClear: `CQ==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 2,
  stateSize: 136,
  unsupported: [],
  version: 13,
  warnings: [`API a_channeler_useChannel may use up to 11 transaction references, but the limit is 8. API a_channeler_useChannel starts at /app/index.rsh:71:31:application.`, `Step 2 calls a remote object at /app/index.rsh:115:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/index.rsh:96:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 may use up to 11 transaction references, but the limit is 8. Step 2 starts at /app/index.rsh:71:31:dot.`, `This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:229:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:71:31:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Deployer": Deployer,
  "a_admin_grant": a_admin_grant,
  "a_channeler_createChannel": a_channeler_createChannel,
  "a_channeler_deleteChannel": a_channeler_deleteChannel,
  "a_channeler_useChannel": a_channeler_useChannel,
  "arc200_transfer": arc200_transfer,
  "nop": nop,
  "touch": touch
  };
export const _APIs = {
  a_admin: {
    grant: a_admin_grant
    },
  a_channeler: {
    createChannel: a_channeler_createChannel,
    deleteChannel: a_channeler_deleteChannel,
    useChannel: a_channeler_useChannel
    },
  arc200_transfer: arc200_transfer,
  nop: nop,
  touch: touch
  };
