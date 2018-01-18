import { combineReducers } from 'redux'
import {loginReducer} from './loginReducer'
import {messageReducer} from './messageReducer'

export default combineReducers({
  loginReducer, messageReducer
})
