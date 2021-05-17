import * as ACTION_TYPE from '../actions/ActionType';

const initialState = {
  isLogin: false //是否登录
};

export default function userStore(state = {}, action) {
  switch (action.type) {
    case ACTION_TYPE.UPDATE_USER:
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
}
