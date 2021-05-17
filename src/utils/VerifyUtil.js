import PropTypes from 'prop-types';
import I18n from '../language/i18n';

/**
 * 是否为空
 * @param {} content 
 * @returns 
 */
export const isEmpty = (content) => {
  if (
    content !== null &&
    content !== undefined &&
    content !== '' &&
    content !== '' &&
    content.length > 0 &&
    ' '.indexOf(content) === -1
  ) {
    return false;
  } else {
    return true;
  }
};

/**
 * 是否是手机号
 * @param {phone} content 
 * @returns 
 */
export const isPhoneNumber = (content) => {
  var isPhone = !!content.match(
    /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
  );
  return isPhone;
};


export default {
  /**
   * 校验手机号码
   * @param {Number} phone
   */
  validatePhone(phone) {
    const reg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
    return reg.test(phone);
  },
};


/**
 * 验证邮箱
 * @param {email} content 
 * @returns 
 */
export const isEmailString = (content) => {
  var isEmail = !!content.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/);
  return isEmail;
};

/**
 * 是否是英语
 * @param {languange} content 
 * @returns 
 */
export const isEnglish = (content) => {
  var isEnglish = !!content.match(/^[A-Za-z]/);
  return isEnglish;
};

/**
 * 是否是数字
 * @param {} content 
 * @returns 
 */
export const isNumber = (content) => {
  var isNumber = !!content.match(/^[0-9]*$/);
  return isNumber;
};
