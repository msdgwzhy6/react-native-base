# 前言
这个项目react native集成redux、react navigation、axios、react native element的一个demo。

# 安装
```
yarn 

npm run android
```

### 目录结构

```
├── src                         // ReactNative主要文件
|   |
│   ├── api                     // API接口
│   │    ├── user               // 用户
|   |
│   ├── components              // 自定义通用组件
|   |
│   ├── page                    // 所有的StackNavigator注册页面或者Tab页面
│   │    ├── nav.js             // 底部导航栏
│   │    ├── index.js           // 路由相关
|   |
│   ├── res                     // 静态资源文件。模仿android R文件统一引用
│   │    ├── fonts              // 未使用
│   │    └── images             // 图片资源
|   |
│   ├── utils                   // 自定义的基础工具类
|   |
|   |
|   |
|   |—— redux                   //redux   
|   |    |———  action
|   |    |———  reducers
|   |    |———  store
|   |
|   |——— navigator               //路由及底部菜单栏
|            
|
|——— global.js                  // 全局的变量
|
├── .babelrc.js                 // webpack 基础  定义的静态资源的全局路径
|
|——— app.js                     // 入口文件

```

### 主要第三方库
- [React Navigation](https://reactnavigation.org/docs/tab-based-navigation)
- [react-native-async-storage](https://react-native-async-storage.github.io/async-storage/docs/install/)
- [redux](https://www.jianshu.com/p/e3ea704d8b95)
- [react-navigation](https://reactnavigation.org/docs/tab-based-navigation)
- [lodash](https://www.lodashjs.com/docs/lodash.throttle)
- [React Native Elements](https://reactnativeelements.com/docs/input)

### 主题的配置说明
#### 概述：
 主题的修改涉及到3个地方的修改：原生View和Text、React Native Element组件、React Navigation(底部菜单栏) 等原生组件的修改。配置的目录为 src\navigator\index.js

 #### 未完成
 1. RN原生组件仅修改了View和Text，其他剩余的组件有待后期调整。



 ##  承接RN项目开发：1109765190.qq.com

