import axios from 'axios'
import { context as c } from '../context'
// Action Types
import { Link, useHistory } from "react-router-dom";
export const SIGNUP_SUCCESS= 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE= 'SIGNUP_FAILURE'
export const LOGIN_SUCCESS= 'LOGIN_SUCCESS'
export const LOGIN_FAILURE= 'LOGIN_FAILURE'
export const LOGOUT= 'LOGOUT'
// Initial State
const user = JSON.parse(localStorage.getItem("user"));
export const initialState = user
? { isLoggedIn: true, user }
: { isLoggedIn: false, user: null };



// Reducer
const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGNUP_SUCCESS:
    case SIGNUP_FAILURE:
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, user: payload.user, }
    case LOGIN_FAILURE:
      return { ...state, isLoggedIn: false, user: null, }
    case LOGOUT:
      return { ...state, isLoggedIn:false, user: null }
    default:
      return state
  }
}

// Actions
// const history = useHistory()
export const loginAction = (userId, password) => (dispatch) => {
    return UserService.login(userId, password).then(
      data => {
        dispatch({type: LOGIN_SUCCESS,payload: { user: data }})
        //history.push('/user-detail')
        
        return Promise.resolve();
      },
      error =>{
        alert(error)
      }
    )
}


// Services


const UserService = {
  login : async (userId, password) => {
    const req = {
        method: c.post,
        url: `${c.url}/api/access`,
        data: {userId, password},
        auth: c.auth
    }
    const res = await axios(req)
    const data = JSON.parse(res.data)
    alert(`Welcome ! ${data.name}'s connection is successful. ! `)
    return data
  }
} 


export default userReducer