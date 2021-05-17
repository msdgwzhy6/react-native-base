/*
 * @Description: 持久化存储数据的 基础方法
 * @Author: wjt
 * @CreateTime: 2021-05-3
 * @参考：https://react-native-async-storage.github.io/async-storage/docs/install/
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { reject } from 'lodash';

/**
 * save基础的键值对存储
 * @param {*} key
 * @param {*} value
 */
export const setAsyncStorage = (key, value) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(AsyncStorage.setItem(key, value));
    } catch (e) {
      // print error
      reject(e);
    }
  });
};

/**
 * get 基础的
 * @param {*} key
 */
export const getAsyncStorage = (key) => {
  return new Promise((resolve, reject) => {
    try {
      const value = AsyncStorage.getItem(key);
      resolve(value);
      // if(value !== null) {
      //   // value previously stored
      // }
    } catch (e) {
      // error reading value
      reject(e);
    }
  });
};

/**
 * 根据key清除
 */
export const removeValueAsyncStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
    console.log(e);
  }
  console.log(key + '删除成功！');
};

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_Key', jsonValue);
  } catch (e) {
    // saving error
  }
};

const getDataList = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const USER_1 = {
  name: 'Tom',
  age: 20,
  traits: {
    hair: 'black',
    eyes: 'blue'
  }
};

const USER_2 = {
  name: 'Sarah',
  age: 21,
  hobby: 'cars',
  traits: {
    eyes: 'green'
  }
};

const mergeUsers = async () => {
  try {
    //save first user
    await AsyncStorage.setItem('@MyApp_user', JSON.stringify(USER_1));

    // merge USER_2 into saved USER_1
    await AsyncStorage.mergeItem('@MyApp_user', JSON.stringify(USER_2));

    // read merged item
    const currentUser = await AsyncStorage.getItem('@MyApp_user');

    console.log(currentUser);

    // console.log result:
    // {
    //   name: 'Sarah',
    //   age: 21,
    //   hobby: 'cars',
    //   traits: {
    //     eyes: 'green',
    //     hair: 'black'
    //   }
    // }
  } catch (e) {
    console.log(e);
  }
};

const getAllKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    // read key error
  }

  console.log(keys);
  // example console.log result:
  // ['@MyApp_user', '@MyApp_key']
};

/**
 * 批量获取
 */
const getMultiple = async () => {
  let values;
  try {
    values = await AsyncStorage.multiGet(['@MyApp_user', '@MyApp_key']);
  } catch (e) {
    // read error
  }
  console.log(values);

  // example console.log output:
  // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
};

/**
 * 批量设置
 */
const multiSet = async () => {
  const firstPair = ['@MyApp_user', 'value_1'];
  const secondPair = ['@MyApp_key', 'value_2'];
  try {
    await AsyncStorage.multiSet([firstPair, secondPair]);
  } catch (e) {
    //save error
  }

  console.log('Done.');
};
