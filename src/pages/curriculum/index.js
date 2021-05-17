/*
 * @Description: 课程
 * @Author: wjt
 * @CreateTime: 2021-04-28
 */
import React, {Component} from 'react';
import { Text,View,Button } from 'react-native';

class Index extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>课程</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('CurriculumDetails')}
        />
      </View>
    );
  }
}

export default Index;
