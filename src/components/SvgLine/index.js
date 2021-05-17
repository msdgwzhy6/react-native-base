/*
 * @Description: 使用svg画直线  当前未使用
 * @Author: wjt
 * @CreateTime: 2021-04-30
 * @参考：https://github.com/react-native-svg/react-native-svg
 * @参考2：https://snack.expo.io/@18583708203/react-native-svg-example
 */
import React from 'react';
import { View } from 'react-native';
import Svg, { Line } from 'react-native-svg';
import { pxToDp } from '../../utils/stylesKits';

const Index = () => {
  return (
    <View style={{height:20,backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
      <Svg style={{flexDirection:'row',backgroundColor:'black',height:2,width:'90%'}} >
        <Line x1="0" y1="0" x2="100%" y2="0" stroke="yellow" strokeWidth={pxToDp(0.5)} />
      </Svg>
    </View>
  );
};
export default Index;
