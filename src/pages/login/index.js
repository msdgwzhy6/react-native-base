import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { View, Text } from '../../components/Themed';
import { pxToDp } from '../../utils/stylesKits';
import { Input, Icon, Button } from 'react-native-elements';
import * as _ from 'lodash';
import { getToken, setToken } from '../../utils/AsyncStorage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionUpdateUser, actionLogin } from '../../redux/actions/user';
import Loading from '../../components/Loading';

class Index extends React.Component {
  state = {
    // 手机号码
    phoneNumber: '18583708203',
    // 密码
    pwd: '123456',
    // 手机号码合法性
    phoneValid: true,
    //登录类型  ture 为用户名密码登录， false为验证码登录
    boolLoginType: true,
    // 验证码
    vcodeTxt: '',
    //接口返回的验证码
    codeInterface: '',
    // 计时器
    btnText: '重新获取',
    // 是否正在倒计时中
    isCountDown: false,
    //登录类型  ture为用户名密码登录、false为验证码登录
    isLoginType: false,
    //计时器
    isCountDown: false,
    verifiText: '获取验证码',
    //是否显示Loading
    isShowLoading: false
  };

  constructor(props) {
    super(props);

    //创建防抖函数
    this.loginHandleClickThrottled = _.throttle(this.loginFun, 2000);
  }
  componentWillUnmount() {
    //销毁防抖函数
    this.loginHandleClickThrottled.cancel();
  }

  /**
   * 登录
   */
  loginFun = () => {
    // 登录并更新state
    this.props
      .actionLogin({
        password: this.state.pwd,
        phoneNumber: this.state.phoneNumber
      })
      .then(() => {
        // 跳转至首页
        if (this.props.userStore.isLogin) {
          this.props.navigation.replace('BTN');
        }
      })
      .then(() => {
        //持久化保存token至本地
        setToken(this.props.userStore.token);
      });
  };

  // -------------------------------------------------ViewMethod----------------------------------------------------------
  /**
   * 账号登录
   */
  loginView = () => {
    return (
      <View style={styles.viewLoginType}>
        <Text style={{ fontSize: pxToDp(22), color: '#222222', fontWeight: 'bold' }}>账号登录</Text>
        <TouchableOpacity
          onPress={() => {
            this.setState({ isLoginType: false });
          }}
        >
          <Text style={{ color: '#999999', fontSize: pxToDp(14), marginLeft: pxToDp(16) }}>
            验证码登录
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  /**
   * 用户名密码登录输入框
   * @returns
   */
  loginInputView = (phoneNumber, pwd) => {
    return (
      <View style={{ marginTop: pxToDp(79) }}>
        <Input
          placeholder="请输入手机号/邮箱/账号"
          onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
          value={phoneNumber}
          keyboardType="phone-pad"
          inputContainerStyle={{
            borderBottomColor: '#E8E8E8'
          }}
          errorMessage={this.state.phoneValid ? '' : '手机号码格式不正确！'}
        />
        <Input
          placeholder="请输入密码"
          onChangeText={(pwd) => this.setState({ pwd })}
          value={pwd}
          inputContainerStyle={{
            borderBottomColor: '#E8E8E8'
          }}
        />
        <Button
          buttonStyle={{ borderRadius: 20, backgroundColor: '#FF843F', height: pxToDp(42) }}
          containerStyle={{ margin: 5 }}
          onPress={this.loginHandleClickThrottled}
          title="登录"
          titleStyle={{ marginHorizontal: 5, fontSize: 20 }}
        />

        <View style={{ flexDirection: 'row', marginTop: pxToDp(24) }}>
          <Text style={{ color: '#999999', marginLeft: pxToDp(120), fontSize: pxToDp(12) }}>
            忘记密码
          </Text>
          <View style={{ flexDirection: 'row', marginLeft: pxToDp(27) }}>
            <Text style={{ color: '#999999', fontSize: pxToDp(12) }}>新用户</Text>
            <Text style={{ color: '#FF843F', fontSize: pxToDp(12) }}>注册</Text>
          </View>
        </View>
      </View>
    );
  };

  // ---------------------------------------验证码登录--------------------------------------

  /**
   * 验证码登录
   */
  loginCodeView = () => {
    return (
      <View style={styles.viewLoginType}>
        <TouchableOpacity
          onPress={() => {
            this.setState({ isLoginType: true });
          }}
        >
          <Text style={{ color: '#999999', fontSize: pxToDp(14) }}>账号登录</Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: pxToDp(22),
            color: '#222222',
            fontWeight: 'bold',
            marginLeft: pxToDp(20)
          }}
        >
          验证码登录
        </Text>
      </View>
    );
  };

  /**
   * 验证码登录
   * @returns
   */
  loginCodeInputView = (phoneNumber, pwd) => {
    return (
      <View style={{ marginTop: pxToDp(79) }}>
        <Input
          placeholder="请输入手机号"
          onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
          value={phoneNumber}
          keyboardType="phone-pad"
          errorMessage={this.state.phoneValid ? '' : '手机号码格式不正确！'}
          inputContainerStyle={{
            borderBottomColor: '#E8E8E8'
          }}
        />
        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Input
            placeholder="请输入验证码"
            onChangeText={(pwd) => this.setState({ pwd })}
            value={pwd}
            containerStyle={{ width: '70%' }}
            inputContainerStyle={{
              borderBottomColor: '#E8E8E8'
            }}
          />
          <TouchableOpacity onPress={this.getVerifyCode}>
            <Text
              style={{
                color: this.state.isCountDown ? '#999999' : '#FF843F',
                fontSize: pxToDp(13),
                marginRight: pxToDp(15),
                marginBottom: 10
              }}
            >
              {this.state.verifiText}
            </Text>
          </TouchableOpacity>
        </View>

        <Button
          buttonStyle={{ borderRadius: 20, backgroundColor: '#FF843F', height: pxToDp(42) }}
          containerStyle={{ margin: 5 }}
          onPress={this.loginHandleClickThrottled}
          title="登录"
          titleStyle={{ marginHorizontal: 5, fontSize: 20 }}
        />
      </View>
    );
  };

  /**
   * 获取验证码
   */
  getVerifyCode = async () => {
    console.log('获取验证码！');
    //获取验证码计时器
    this.countDown();
    // const token = await getToken();
    // console.log(token);
  };

  /**
   * 验证码计时器
   * @returns
   */
  countDown = () => {
    console.log('正在倒计时中！');
    if (this.state.isCountDown) {
      return console.log('正在倒计时中！');
    }
    this.setState({ isCountDown: true });
    let seconds = 5;
    //重启获取
    this.setState({ verifiText: '重新获取' + seconds + 's' });
    let timeId = setInterval(() => {
      seconds--;
      this.setState({ verifiText: '重新获取' + seconds + 's' });
      if (seconds === 0) {
        clearInterval(timeId);
        this.setState({ verifiText: '获取验证码' });
        this.setState({ isCountDown: false });
      }
    }, 1000);
  };

  // -------------------------------------------------------第三方登录-------------------------------------------------
  /**
   * 微信登录
   */
  wechatLogin = () => {
    // removeToken();
    // this.props.updateUser({ name: 'newname', age: 99 });
    console.log(this.props);
  };

  render() {
    const { phoneNumber, pwd } = this.state;
    return (
      <View style={{ flex: 1, marginLeft: pxToDp(15) }}>
        {/* Loading */}
        <Loading modalVisible={this.state.isShowLoading} />
        {/* 第一部分 */}
        <View style={{ marginTop: pxToDp(17), flexDirection: 'row', justifyContent: 'flex-start' }}>
          <Icon name="close" color="#222222" />
        </View>
        {/* 第二部分：头部 */}
        {this.state.isLoginType ? this.loginView() : this.loginCodeView()}
        {/* 第三部分：输入 */}
        {this.state.isLoginType
          ? this.loginInputView(phoneNumber, pwd)
          : this.loginCodeInputView(phoneNumber, pwd)}
        {/* 底部 */}
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={{ alignItems: 'center', marginBottom: pxToDp(16) }}>
            <Text style={{ color: '#999999', fontSize: pxToDp(12) }}>第三方账号登录</Text>
          </View>

          <View
            style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: pxToDp(33) }}
          >
            {/* 微信 */}
            <TouchableOpacity onPress={this.wechatLogin}>
              <Image
                style={{ width: pxToDp(40), height: pxToDp(40), marginRight: pxToDp(40) }}
                source={require('@/res/images/wechat.png')}
              />
            </TouchableOpacity>

            {/* 微博 */}
            <Image
              style={{ width: pxToDp(40), height: pxToDp(40) }}
              source={require('@/res/images/wb.png')}
            />

            {/* QQ */}
            <Image
              style={{ width: pxToDp(40), height: pxToDp(40), marginLeft: pxToDp(40) }}
              source={require('@/res/images/qq.png')}
            />
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: pxToDp(23) }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#999999', fontSize: pxToDp(12) }}>登陆即表明同意</Text>
              <Text style={{ color: '#FF843F', fontSize: pxToDp(12) }}>用户协议</Text>
              <Text style={{ color: '#999999', fontSize: pxToDp(12) }}>和</Text>
              <Text style={{ color: '#FF843F', fontSize: pxToDp(12) }}>隐私政策</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewLoginType: {
    marginTop: pxToDp(20),
    flexDirection: 'row',
    alignItems: 'center'
  }
});

const mapStateToProps = (state) => {
  return {
    userStore: state.userStore
  };
};

const mapDispatchToProps = (dispatch) => {
  // return {
  //   //更新
  //   actionUpdateUser(data) {
  //     dispatch(actionUpdateUser(data));
  //   },
  //   // 登录
  //   actionLogin(params) {
  //     dispatch(actionLogin(params));
  //   }
  // };

  return {
    actionUpdateUser: bindActionCreators(actionUpdateUser, dispatch),
    actionLogin: bindActionCreators(actionLogin, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
