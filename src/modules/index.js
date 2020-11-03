import userReducer  from './user.action'
import counterReducer from './counter.action'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
    userReducer, counterReducer
})

export default rootReducer