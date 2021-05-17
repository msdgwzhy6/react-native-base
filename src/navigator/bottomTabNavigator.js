/*
 * @Description: 底部菜单栏
 * @Author: wjt
 * @CreateTime: 2021-04-30
 */

import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { pxToDp } from '../utils/stylesKits';
import Home from '../pages/home';
import Curriculum from '../pages/curriculum';
import CurriculumDetails from '../pages/curriculum/curriculumDetail';
import Community from '../pages/community';
import CommunityDetails from '../pages/community/communityDetail';
import Message from '../pages/message';
import MessageDetails from '../pages/message/messageDetail';
import My from '../pages/my';
import MyDetails from '../pages/my/myDetail';

const TabStack = createStackNavigator();

/**
 * 首页
 * @returns
 */
function HomeStackScreen() {
  return (
    <TabStack.Navigator initialRouteName="Home">
      <TabStack.Screen
        options={() => ({
          headerShown: false, //隐藏头部标题
          
        })}
        name="Home"
        component={Home}
      />
    </TabStack.Navigator>
  );
}

/**
 * 社区
 * @returns
 */
function CurriculumStackScreen() {
  return (
    <TabStack.Navigator initialRouteName="Curriculum">
      <TabStack.Screen options={{ headerLeft: null }} name="Curriculum" component={Curriculum} />
      <TabStack.Screen name="CurriculumDetails" component={CurriculumDetails} />
    </TabStack.Navigator>
  );
}

/**
 * 社区
 * @returns
 */
function CommunityStackScreen() {
  return (
    <TabStack.Navigator initialRouteName="Community">
      <TabStack.Screen options={{ headerLeft: null }} name="Community" component={Community} />
      <TabStack.Screen
        name="CommunityDetails"
        options={{ tabBarVisible: false }}
        component={CommunityDetails}
      />
    </TabStack.Navigator>
  );
}

/**
 * 消息
 * @returns
 */
function MessageStackScreen() {
  return (
    <TabStack.Navigator initialRouteName="Message">
      <TabStack.Screen options={{ headerLeft: null }} name="Message" component={Message} />
      <TabStack.Screen name="MessageDetails" component={MessageDetails} />
    </TabStack.Navigator>
  );
}

/**
 * 我的
 * @returns
 */
function MyStackStackScreen() {
  return (
    <TabStack.Navigator initialRouteName="My">
      <TabStack.Screen
        name="My"
        component={My}
        options={() => ({
          headerShown: false //隐藏头部标题
        })}
      />
      <TabStack.Screen name="MyDetails" component={MyDetails} />
    </TabStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      backBehavior="none"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'home') {
            return (
              <Image
                color={color}
                style={styles.stretch}
                source={
                  focused ? require('@/res/images/home2.png') : require('@/res/images/home.png')
                }
              />
            );
          } else if (route.name === '课程') {
            return (
              <Image
                color={color}
                style={styles.stretch}
                source={
                  focused
                    ? require('@/res/images/curriculum2.png')
                    : require('@/res/images/curriculum.png')
                }
              />
            );
          } else if (route.name === '社区') {
            return (
              <Image
                color={color}
                style={styles.stretch}
                source={
                  focused
                    ? require('@/res/images/community2.png')
                    : require('@/res/images/community.png')
                }
              />
            );
          } else if (route.name === '消息') {
            return (
              <Image
                color={color}
                style={styles.stretch}
                source={
                  focused
                    ? require('@/res/images/message2.png')
                    : require('@/res/images/message.png')
                }
              />
            );
          } else if (route.name === '我的') {
            return (
              <Image
                color={color}
                style={styles.stretch}
                source={focused ? require('@/res/images/my2.png') : require('@/res/images/my.png')}
              />
            );
          }
        },
        unmountOnBlur: true //离开该屏幕时卸载该屏幕
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: '#BEBEBE'
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeStackScreen}
        options={{ title: '首页', headerMode: 'none' }}
      />
      <Tab.Screen name="课程" component={CurriculumStackScreen} />
      <Tab.Screen name="社区" component={CommunityStackScreen} />
      <Tab.Screen name="消息" component={MessageStackScreen} />
      <Tab.Screen name="我的" component={MyStackStackScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  },
  stretch: {
    width: pxToDp(19),
    height: pxToDp(21),
    resizeMode: 'stretch'
  }
});
