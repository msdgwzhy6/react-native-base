import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TabView, SceneMap, TabBar, Text } from 'react-native-tab-view';

const FirstRoute = () => <View style={[styles.scene]} />;

const SecondRoute = () => <View style={[styles.scene]} />;

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  second: SecondRoute,
  second: SecondRoute,
  second: SecondRoute,
  second: SecondRoute
});

const renderTabBar = (props) => {
  return (
    // 上面导航栏的样式
    <TabBar
      {...props}
      style={{ backgroundColor: '#FFFFFF' }}
      activeColor={'#FFFFFF'}
      inactiveColor={'#FFE4D8'}
      // onTabPress={({ route, preventDefault }) => {
      //   this.renderRankListEmitter(route);
      // }}
      indicatorStyle={{ backgroundColor: '#FFFFFF' }}
      labelStyle={{ fontSize: 32, fontWeight: 'normal' }}
      renderLabel={({ route, focused, color }) => (
        <View
          style={{
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center'
          }}
        >
          <Text
            style={{
              fontWeight: focused ? 'bold' : 'normal',
              color: 'black',
              fontSize: 20
            }}
          >
            {route.title}
          </Text>
          <View
            style={{
              height: 4,
              backgroundColor: focused ? '#FF5E15' : 'normal',
              marginTop: 9,
              marginBottom: -18
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
                color: 'transparent'
              }}
            >
              {route.title}
            </Text>
          </View>
        </View>
      )}
    />
  );
};

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: '推荐' },
    { key: 'second', title: '爵士舞' },
    { key: 'second', title: '街舞' },
    { key: 'second', title: '芭蕾舞' },
    { key: 'second', title: '霹雳舞' },
    { key: 'second', title: '现代舞' }
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight
  },
  scene: {
    flex: 1
  }
});
