/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// https://www.npmjs.com/package/@sentry/react-native
// "@sentry/react-native": "^2.4.2",

// import * as Sentry from '@sentry/react-native';
// Sentry.init({
//     dsn:
//       'https://44ce4680fcd348808323708886c4a3bc@o573362.ingest.sentry.io/5723830',
//     // debug: IS_DEV,
//     //IS_DEV 根据编译方式选择是否是开发环境，Sentry
//     environment: !0 ? 'development' : 'production',
//     // 默认 Sentry 已做了足够的事，不再需要维护，若手动维护，则需与 sentry.js 逻辑对应
//     //release: `${projectName}@${version}`,
//     deactivateStacktraceMerging: false,
//   });

AppRegistry.registerComponent(appName, () => App);
