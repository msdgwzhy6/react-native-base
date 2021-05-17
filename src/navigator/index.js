/**
 * 页面路由、入口
 */
import * as React from 'react';
import { useColorScheme } from 'react-native';  //获取系统当前主题
import { createStackNavigator } from '@react-navigation/stack';
// 底部菜单栏主题参考： https://reactnavigation.org/docs/themes/#basic-usage
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import BTN from './bottomTabNavigator';
import LoginScreen from '../pages/login';
import DetailScreen from './detailScreen';
import SearchScreen from '../pages/common/search';
import { ThemeProvider } from 'react-native-elements';     //react native element 主题配置：参考https://reactnativeelements.com/docs/customization

//创建页面栈
const Stack = createStackNavigator();

function App() {
  //获取系统配色
  const ColorScheme = useColorScheme();
  //修改底部菜单栏背景颜色为白色
  const lightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff'
    }
  };
  return (
    <ThemeProvider useDark={ColorScheme === 'dark'}>     
      <NavigationContainer theme={ColorScheme === 'dark' ? DarkTheme : lightTheme}>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ title: '登录', headerShown: false }}
          />
          <Stack.Screen
            name="BTN"
            component={BTN}
            options={{ title: '首页', headerShown: false }}
          />

          <Stack.Screen name="DetailScreen" component={DetailScreen} />

          {/* 搜索页面 */}
          <Stack.Screen name="SearchScreen" options={{ headerShown: false }} component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
