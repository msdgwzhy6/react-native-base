/**
 * 搜索页面
 * 参考https://react-native-elements.js.org/#/search-bar
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';

class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value:'',
        newVal:''
    };
  }
  render() {
    return (
      <View>
        <SearchBar
          platform="android"
          containerStyle={{}}
          inputContainerStyle={{}}
          inputStyle={{}}
          leftIconContainerStyle={{}}
          rightIconContainerStyle={{}}
          loadingProps={{}}
          onChangeText={(newVal) => this.setValue(newVal)}
          onClearText={() => console.log(onClearText())}
          placeholder="请输入搜索条件"
          placeholderTextColor="#888"
          cancelButtonTitle="Cancel"
          cancelButtonProps={{}}
          onCancel={() => this.props.navigation.goBack()}
          value={this.state.value}
        />
      </View>
    );
  }
}

export default search;
