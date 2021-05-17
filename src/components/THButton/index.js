// 颜色渐变的按钮
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text,StyleSheet, TouchableOpacity} from 'react-native';
import {pxToDp} from '../../pages/utils/stylesKits';

class Index extends React.Component {
  static defaultPrlops = {
    value:'',
    disabled :false
  };
  render() {
    return (
      <TouchableOpacity disabled={this.props.disabled} onPress={this.props.onPress} style={styles.touchableOpacity}>
        <LinearGradient
          colors={['#9b63cd', '#e0708c']}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>{this.props.value}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

// Later on in your styles..
const styles = StyleSheet.create({
  touchableOpacity: {
    width: '85%',
    height: pxToDp(40),
    alignSelf: 'center',
    borderRadius: pxToDp(20),
  },
  linearGradient: {
    paddingLeft: pxToDp(15),
    paddingRight: pxToDp(15),
    borderRadius: pxToDp(5),
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: pxToDp(18),
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default Index;
