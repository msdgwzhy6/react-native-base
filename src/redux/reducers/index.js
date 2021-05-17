/*
 * @Description: reducers
 * @Author: wjt
 * @CreateTime: 2021-05-12
 * @参考：https://cn.redux.js.org/docs/advanced/ExampleRedditAPI.html
 */

import { combineReducers } from 'redux';
import userStore from './user';

//这里面必须要有初始数据 - 否则报错
const rootReducer = combineReducers({
  userStore //用户
});

export default rootReducer;
