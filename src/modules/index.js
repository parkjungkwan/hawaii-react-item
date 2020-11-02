import userReducer  from './user.action'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
    userReducer
})

export default rootReducer