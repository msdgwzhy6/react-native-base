---
title: React Native
tags:
  - React Native
---



# 概述

# 蓝湖
https://lanhuapp.com/url/MIsU7-tmJTR

### vscode 插件
- Prettier - Code formatter
- Simple React Snippets
- React Native Snippet
- React Snippets

### 设置npm淘宝加速
```
#查看当前的登录源
npm config get registry
#设置淘宝镜像源(设置npm国内加速)
npm config set registry http://registry.npm.taobao.org/
#切换到npmjs源
npm config set registry=http://registry.npmjs.org

```


### 设置yarn
```
yarn config get registry
yarn config set registry http://registry.npm.taobao.org/
yarn config set registry https://registry.yarnpkg.com


###  React Native基础命令

```npm
npm run android --warning-mode all

#清理npm缓存
npm cache clean --force

#打开手机debug模式
adb shell input keyevent 82
# React Native 脚手架
npm install -g react-native-cli

#初始化一个新的项目
npx react-native init social_app

# 启动项目
npx react-native run-android
#查看设备
adb devices  
```

If you are sure the module exists, try these steps:
 1. Clear watchman watches: watchman watch-del-all
 2. Delete node_modules and run yarn install
 3. Reset Metro's cache: yarn start --reset-cache
 4. Remove the cache: rm -rf /tmp/metro-*

# 常用组件汇总
https://www.jianshu.com/p/53ff78168acc

https://reactnative.dev/docs/more-resources

# 启动时报错
https://stackoverflow.com/questions/58888381/react-native-webstorm-emulator-cannot-start-error-failed-to-launch-emulator-r


###  Genymotion报错
[react-native启动时红屏报错：Unable to load script.Make sure you're either running a metro server or that ....](https://www.cnblogs.com/shizk/p/11189978.html)

```
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res 
```

### 打包APK
[打包APK](https://reactnative.cn/docs/signed-apk-android)
[keytool 错误: java.io.FileNotFoundException: MyAndroidKey.keystore (拒绝访问).](https://blog.csdn.net/hssdw25172008/article/details/8499423)
```
.\keytool -genkeypair -v -keystore d:/my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

- Warning:
JKS 密钥库使用专用格式。建议使用 "keytool -importkeystore -srckeystore d:/my-release-key.keystore -destkeystore d:/my-release-key.keystore -deststoretype pkcs12" 迁移到行业标准格式 PKCS12。

- 打包错误参考`Execution failed for task ':react-native-picker:verifyReleaseResources'.`
https://blog.csdn.net/hxl517116279/article/details/102982200

 cd android
./gradlew assembleRelease


### React Native Component ExceptionElement
![An image](./Component_Excepthon.png)

- 在引入组件时不要 加 {}
#### 参考
[React Native Component Exception - Element Type is invalid: expected string…got undefined](https://stackoverflow.com/questions/65100627/react-native-component-exception-element-type-is-invalid-expected-string-go)



