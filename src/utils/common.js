/*
 * @Description: 一个公共的方法集合
 * @Author: wjt
 * @CreateTime: 2021-05-12
 * 一个公共的方法集合
 */

import { NavigationActions } from 'react-navigation';
import { Alert } from 'react-native';

/**
 * 提示用户登录      
 * React Native的原生封装
 */
export const alertLogin = () => {
  Alert.alert(
    '提示',
    '您还未登录，请先登录',
    [
      {
        text: '取消',
        onPress: () => {},
        style: 'cancel'
      },
      {
        text: '去登录',
        onPress: () => {
          NavigationActions.navigate({
            routeName: 'LoginScreen'
          });
        }
      }
    ],
    {
      cancelable: false
    }
  );
};

/**
 * 大数字转换，将大额数字转换为万、千万、亿等
 * @param value 数字值
 */
export const numberFormat = (value) => {
  const newValue = ['', '', ''];
  let fr = 1000;
  let num = 3;
  let text1 = '';
  let fm = 1;
  while (value / fr >= 1) {
    fr *= 10;
    num += 1;
    // console.log('数字', value / fr, 'num:', num)
  }
  if (num <= 4) {
    // 千
    newValue[0] = parseInt(value / 1000) + '';
    newValue[1] = '千';
  } else if (num <= 8) {
    // 万
    text1 = parseInt(num - 4) / 3 > 1 ? '千万' : '万';
    // tslint:disable-next-line:no-shadowed-variable
    fm = text1 === '万' ? 10000 : 10000000;
    if (value % fm === 0) {
      newValue[0] = parseInt(value / fm) + '';
    } else {
      newValue[0] = parseFloat(value / fm).toFixed(2) + '';
    }
    newValue[1] = text1;
  } else if (num <= 16) {
    // 亿
    text1 = (num - 8) / 3 > 1 ? '千亿' : '亿';
    text1 = (num - 8) / 4 > 1 ? '万亿' : text1;
    text1 = (num - 8) / 7 > 1 ? '千万亿' : text1;
    // tslint:disable-next-line:no-shadowed-variable
    fm = 1;
    if (text1 === '亿') {
      fm = 100000000;
    } else if (text1 === '千亿') {
      fm = 100000000000;
    } else if (text1 === '万亿') {
      fm = 1000000000000;
    } else if (text1 === '千万亿') {
      fm = 1000000000000000;
    }
    if (value % fm === 0) {
      newValue[0] = parseInt(value / fm) + '';
    } else {
      newValue[0] = parseFloat(value / fm).toFixed(2) + '';
    }
    newValue[1] = text1;
  }
  if (value < 1000) {
    newValue[0] = value + '';
    newValue[1] = '';
  }
  return newValue.join('');
};
