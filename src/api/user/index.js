import request from '../../utils/request';


/**
 * 注册
 * @param {*} params 
 * @returns 
 */
export function register(params) {
  return request({
    url: 'api/user/app/register',
    data: params,
    method: 'post'
  });
}

/**
 * 登录
 * @param {password,phoneNumber}} params
 * @returns
 */
export function httpsLogin(params) {
  return request({
    url: 'api/user/app/login',
    data: params,
    method: 'post',
  });
}
