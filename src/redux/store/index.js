/**
 * 参考： https://cn.redux.js.org/docs/advanced/AsyncActions.html
 * 参考：https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware
 * 
 */

 import { createStore, applyMiddleware } from 'redux'
 import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
    loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
  )
)
export default store