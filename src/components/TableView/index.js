import * as React from 'react';
import { Animated, View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import PropTypes from 'prop-types';
import { pxToDp } from '../../utils/stylesKits';
import { Divider } from "react-native-elements";

const FirstRoute = () => <View style={[styles.container, { backgroundColor: '#ff4081' }]} />;

const SecondRoute = () => <View style={[styles.container, { backgroundColor: '#673ab7' }]} />;

// 懒加载，当数据还没有出现的时候应该显示的东西
const LazyPlaceholder = ({ route }) => (
  <View style={styles.scene}>
    <Text>Loading {route.title}…</Text>
  </View>
);

export default class TabViewExample extends React.Component {
  static propTypes = {
    itemWidth: PropTypes.number.isRequired
  };

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' }
    ]
  };

  // 这个加进去就行，不用问为啥
  _handleIndexChange = (index) => this.setState({ index });

  renderRankListEmitter = (route) => {
    if (route.key === '日榜') {
    } else if (route.key === '周榜') {
    } else if (route.key === '月榜') {
    }
  };

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    const { itemWidth } = this.props;
    return (
      // 上面导航栏的样式
      <TabBar
        scrollEnabled={true}
        {...props}
        style={{ backgroundColor: '#FFFFFF' }}
        labelStyle={{ fontSize: pxToDp(32), fontWeight: 'normal' }}
        activeColor={'#FFFFFF'}
        inactiveColor={'#FFE4D8'}
        indicatorStyle={{ backgroundColor: '#FFFFFF' }}
        tabStyle={{width: 'auto', minWidth: itemWidth}}
        onTabPress={({ route, preventDefault }) => {
          this.renderRankListEmitter(route);
        }}
        renderLabel={({ route, focused, color }) => (
          <View style={{alignItems:'center'}} >
            <Text
              style={{
                fontWeight: focused ? 'bold' : 'normal',
                color: 'black'
              }}
            >
              {route.title}
            </Text>
            <View style={{height: 1}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'transparent'
                }}
              >
                {route.title}
              </Text>
            </View>
            {focused?<Divider style={{ width:pxToDp(24),height:pxToDp(4) ,backgroundColor:'#FF5E15' ,marginTop:pxToDp(9)}} />:null}
            
          </View>
        )}
      />
    );
  };

  // 还是懒加载
  _renderLazyPlaceholder = ({ route }) => <LazyPlaceholder route={route} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute
  });

  // bottomLine = () => {
  //   // props中传入的每个item宽度
  //   const {itemWidth} = this.props;
  //   return {
  //     height: 60,
  //     width: itemWidth * 0.6,
  //     borderRadius: 30,
  //     marginLeft: itemWidth * 0.2,
  //     marginBottom: 18,
  //     backgroundColor: '#FEC60B',
  //     elevation: 10,
  //   };
  // };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        // 选中的颜色
        activeColor={'#000'}
        // 没有选中的颜色
        inactiveTintColor={'#999'}
        // 选中下划线的样式
        // indicatorStyle={this.bottomLine}
        // 每一个tab的宽度
        // tabStyle={{ width: 90 }}
        // 懒加载相关代码
        lazy={true}
        lazyPreloadDistance={1}
        renderLazyPlaceholder={this._renderLazyPlaceholder}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    flexDirection: 'row'
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16
  }
});
