/**
 * @Description
 * 转化为数组
 * @author wjt
 * @date 2021.4.30
 */


export function toListArray(lenovoListData) {
  const lenoveListArray = [];
  for (let i in lenovoListData) {
    lenoveListArray.push(lenovoListData[i]);
  }
  return lenoveListArray;
}


export function toWordArray(lenovoListData) {
  const lenovoWordArray = [];
  for (let i in lenovoListData) {
    if (lenovoListData[i].arabicWord) {
      lenovoWordArray.push('true');
    }
    if (lenovoListData[i].chineseWord) {
      lenovoWordArray.push('true');
    }
  }
  return lenovoWordArray;
}
