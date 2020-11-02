import { goToHome } from '../context'
import { userService } from './user.service'
import { alertActions } from './alert.action'
// Action Types

import { history } from '../context';
export const userConstants = {
  REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
  REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
  REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',

  LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
  
  LOGOUT: 'USERS_LOGOUT',

  GETALL_REQUEST: 'USERS_GETALL_REQUEST',
  GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
  GETALL_FAILURE: 'USERS_GETALL_FAILURE',

  DELETE_REQUEST: 'USERS_DELETE_REQUEST',
  DELETE_SUCCESS: 'USERS_DELETE_SUCCESS',
  DELETE_FAILURE: 'USERS_DELETE_FAILURE'    
}
// let user = JSON.parse(sessionStorage.getItem("user"));
// let users = JSON.parse(localStorage.getItem('users')) || [];



// Initial State

export const initialState = { 
    isLoggedIn: false, 
    user: {} 
}




// Reducer
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
        return { registering: true };
    case userConstants.REGISTER_SUCCESS:
        return {};
    case userConstants.REGISTER_FAILURE:
        return {};
    case userConstants.LOGIN_REQUEST:
        return {
            isloggedIn: true,
            user: action.user
        };
    case userConstants.LOGIN_SUCCESS:
        console.log(` [Reducer] Login User Name is ${action.user.name}`) 
        return {
            ...state,
            isloggedIn: true,
            user: action.user
        }
    case userConstants.LOGIN_FAILURE:
        return {};
    case userConstants.LOGOUT:
        return {};
      case userConstants.GETALL_REQUEST:
          return {
              loading: true
          };
      case userConstants.GETALL_SUCCESS:
          return {
              items: action.users
          };
      case userConstants.GETALL_FAILURE:
          return {
                ...state,
              error: action.error
          };
      case userConstants.DELETE_REQUEST:
          // add 'deleting:true' property to user being deleted
          return {
              ...state,
              items: state.items.map(user =>
                  user.id === action.id
                      ? { ...user, deleting: true }
                      : user
              )
          };
      case userConstants.DELETE_SUCCESS:
          // remove deleted user from state
          return {
              items: state.items.filter(user => user.id !== action.id)
          };
      case userConstants.DELETE_FAILURE:
          // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
          return {
              ...state,
              items: state.items.map(user => {
                  if (user.id === action.id) {
                      // make copy of user without 'deleting:true' property
                      const { deleting, ...userCopy } = user;
                      // return copy of user with 'deleteError:[error]' property
                      return { ...userCopy, deleteError: action.error };
                  }

                  return user;
              })
          };
      default:
          return state
  }
}



// Actions




export const userActions = {
  login,
  logout,
  register,
  getAll,
  delete: _delete
};

export function login(userId, password){
  return dispatch => {
      dispatch(request({ userId }));

      userService.login(userId, password)
          .then(
              user => { 
                  console.log(user.name)
                  dispatch(success(user))
                  history.push('/user-detail')
                  // window.location.reload()

              },
              error => {
                  dispatch(failure(error.toString()));
                  dispatch(alertActions.error(error.toString()));
              }
          );
  };

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function success(user) { 
    console.log(`#2 Login User Name is ${user.name}`) 
      return { type: userConstants.LOGIN_SUCCESS, user } 
  }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function register(user) {
  return dispatch => {
      dispatch(request(user));

      userService.register(user)
          .then(
              user => { 
                  dispatch(success());
                  //moveTo('/login');
                  dispatch(alertActions.success('Registration successful'));
              },
              error => {
                  dispatch(failure(error.toString()));
                  dispatch(alertActions.error(error.toString()));
              }
          );
  };

  function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
  return dispatch => {
      dispatch(request());

      userService.getAll()
          .then(
              users => dispatch(success(users)),
              error => dispatch(failure(error.toString()))
          );
  };

  function request() { return { type: userConstants.GETALL_REQUEST } }
  function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
  function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return dispatch => {
      dispatch(request(id));

      userService.delete(id)
          .then(
              user => dispatch(success(id)),
              error => dispatch(failure(id, error.toString()))
          );
  };

  function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
  function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
  function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}
/*
export const login = (userId, password) => (dispatch) => {
    return userService.login(userId, password).then(
      resp => {
        console.log(`[ Login Response ] `)
        // dispatch({type: LOGIN_SUCCESS,payload: { user: data }})
        moveTo('/user-detail')
        
        // return Promise.resolve();
      },
      error =>{
        console.error(`[ After Login Action ] ${error}`)
      }
    )
}


function getAll() {
    return dispatch => {
        dispatch(request());
  
        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };
  
    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
  }
*/  
export const getById = () => (dispatch) => {
  return userService.getById().then(
    resp => { 
      alert(`UserService.detail()`)
      //dispatch(moveTo('/home'))
    },
    error => {alert(`Error`)}
  )
}



export default userReducer