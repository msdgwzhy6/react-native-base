/*
 * @Description: axios  拦截器
 * @Author: wjt
 * @CreateTime: 2021-04-30
 * @参考：http://www.axios-js.com/zh-cn/docs/index.html
 */
import axios from 'axios';
import Loading from '../components/Loading';
// import store from '../redux/store';
// import { alertLogin } from './common';
// import { getToken } from './AsyncStorage';

const CancelToken = axios.CancelToken;
let cancelRequest;

const instance = axios.create({
  baseURL: 'https://www.baidu.com/',
  timeout: 3000, //超时时间
  headers: {
    'Content-Type': 'application/json'
  },
  cancelToken: new CancelToken(function executor(c) {
    // executor 函数接收一个 cancel 函数作为参数
    cancelRequest = c;
  })
});

// instance.defaults.headers.common['Authorization'] = token

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 设置请求头
    // config.headers['Authorization'] = token;
    //显示Loading
    Loading.show();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截器;
instance.interceptors.response.use(
  (response) => {
    //关闭Loading
    Loading.hide();

    //当时toekn过期或失效时，提示用户登录
    // alertLogin();

    //格式化返回的数据
    if (response.status == 200) {
      let data = response.data;
      if (data) {
        data = data.data;
        return Promise.resolve(data);
      }
    }

    // TODO: 基于业务层的错误
    return Promise.reject(
      new Error(`失败的网络响应：[${response.status}][${response.statusText}].`)
    );
  },
  (error) => {
    if (!error.response) {
      return;
    }

    // 错误识别
    switch (status) {
      case 0: // 网络错误，网络主机未找到
        console.log('网络跑路了，请稍后重试！');
        break;
      case 1: // 请求超时
        console.log('网络超时，请更换网络后重试！');
        break;
      case 401: // 未授权
        // 未授权时处理结果
        console.log('未授权');
        break;
      case 402: // 权限过期/失效
        // 权限过期/失效时处理结果
        console.log('权限过期/失效');
        break;
      case 403: // 权限拒绝
        // 权限拒绝时处理结果
        console.log('角色权限分配不足，数据访问被拒绝！');
        console.log(
          '您可以继续留在当前页面或访问其它有权限页面，或者退出后重新登录，切换到有权限账号？'
        );
        break;
      case 404: // 资源不存在
        console.log('资源不存在，请求地址上不存在内容！');
        break;
      case 500: // 服务器内部错误
        console.log('服务器内部错误，管理员正在紧急修复，请稍后重试！');
        break;
      default:
        console.log('维护中，请稍后重试...！');
        break;
    }

    return Promise.reject(error);
  }
);
export default instance;
