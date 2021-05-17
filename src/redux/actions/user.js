import * as ACTION_TYPE from './ActionType';
import { httpsLogin } from '../../api/user';

/**
 * 登录
 * @param {name: '名字',age: 年龄}  data
 * @returns
 */
 export function actionLogin  (params) {
  return function (dispatch) {
    //发起https登录请求
    return httpsLogin(params).then((response) => {
      const data = response
      //更新用户数据，且更新用户状态为登录
      dispatch(actionUpdateUser({...data, ...{ isLogin: true } }));
    }).catch((error)=>{
      console.error("error:---httpsLogin"+error);
    });
  };
};

/**
 * 更新用户基础信息
 * @param {name: 'nametest',age: agetest} name
 */
export const actionUpdateUser = (data) => {
  return {
    type: ACTION_TYPE.UPDATE_USER,
    data
  };
};
