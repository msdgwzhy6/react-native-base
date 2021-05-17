import { Text } from 'react-native';
import { styles } from '../css/Find/FindInfo';
import React, { Component } from 'react';

/**
 *
 * @Description
 * 将毫秒数转为具体日期
 * @author KouSyurei
 * @date 2019\2\27 0027
 */

export default class ToDate extends Component {
  render() {
    let { mt } = this.props;
    Date.prototype.pattern = function(fmt) {
      var o = {
        'M+': this.getMonth() + 1, //月份
        'd+': this.getDate(), //日
        'h+': this.getHours() % 24 == 0 ? 24 : this.getHours() % 24, //小时
        'H+': this.getHours(), //小时
        'm+': this.getMinutes(), //分
        // "s+" : this.getSeconds(), //秒
        'q+': Math.floor((this.getMonth() + 3) / 3), //季度
        S: this.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
      }
      for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
          );
        }
      }
      return fmt;
    };
    var date = new Date(mt * 1);
    return <Text style={styles.detailsDate}>{date.pattern('yyyy-MM-dd hh:mm')}</Text>;
  }
}
