// # 设计稿 px转换dp
// - 公式
// 设计稿宽度/元素的宽度 = 手机屏幕的宽度 / 手机中元素的宽度

// 手机中元素的单位= 手机屏幕的宽度 * 元素的单位 / 设计稿的宽度 375

import {Dimensions  } from "react-native";

/**屏幕宽度 */
export const screenWidth = Dimensions.get("window").width;
/**屏幕高度 */
export const screenHeight = Dimensions.get("window").height;
/**
 * 将px转为dp
 * @param {Number} elePx 设计文稿元素的单位 px
 * @returns 
 */
export const pxToDp =(elePx) =>screenWidth * elePx / 375


