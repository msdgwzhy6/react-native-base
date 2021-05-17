/*
 * @Description: 持久化存储数据的 常用方法
 * @Author: wjt
 * @CreateTime: 2021-05-3
 * @参考：https://react-native-async-storage.github.io/async-storage/docs/install/
 */

import { reject } from 'lodash';
import { Token } from '../../config';
import { setAsyncStorage, getAsyncStorage, removeValueAsyncStorage } from './AsyncStorage';

/**
 * 保存token
 * 类型：持久化保存
 * @param {*} value
 */
export const setToken = (value) => {
  return setAsyncStorage(Token, value).catch((error)=>{
    console.error("error:---setAsyncStorage "+error);
  })
};

/**
 * 获取保存在本地的token
 * 类型：持久化保存
 */
export const getToken = async () => {
  return await getAsyncStorage(Token);
};

/**
 * 清除token
 */
export const removeToken = () => {
  removeValueAsyncStorage(Token);
};
