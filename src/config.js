/**
 * App config
 * @file App 配置
 * @module app/config
 * @author Surmon <https://github.com/surmon-china>
 */

import { Platform,StyleSheet } from 'react-native'
import packageJSON from '../package.json'

export const appName = '爱跳'
export const webUrl = 'https://surmon.me'
export const appApi = 'https://api.surmon.me'
export const staticApi = 'https://cdn.surmon.me'
export const gravatarApi = 'https://static.surmon.me/avatar'
export const GitHubUrl = 'https://github.com/surmon-china'
export const projectName = packageJSON.name
export const version = packageJSON.version
export const dependencies = packageJSON.dependencies

export const IS_DEV = __DEV__
export const IS_IOS = Object.is(Platform.OS, 'ios')
export const IS_ANDROID = !IS_IOS


/**
 * 本地AsyncStorage 存储token使用的key
 */
 export const Token = 'Token'



/**
 * 自定义全局样式
 */
export const Global_Styles = StyleSheet.create({
    globalBackgroundColor: {   //全局背景颜色
      backgroundColor: "#FFFFFF"
    }
  });
