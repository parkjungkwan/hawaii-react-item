import axios from 'axios'
import { context as c } from '../context'
import { moveTo } from '../context'
// Action Types
export const alertActions = {
  success,
  error,
  clear
}
function success(message) {
  return { type: alertConstants.SUCCESS, message };
}

function error(message) {
  return { type: alertConstants.ERROR, message };
}

function clear() {
  return { type: alertConstants.CLEAR };
}

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
let user = JSON.parse(sessionStorage.getItem("user"));
let users = JSON.parse(localStorage.getItem('users')) || [];


// _helpers/auth-header.js 

export function authHeader() {
  // return authorization header with jwt token

  if (user && user.token) {
      return { 'Authorization': 'Bearer ' + user.token };
  } else {
      return {};
  }
}

export function alert(state = {}, action) {
  switch (action.type) {
      case alertConstants.SUCCESS:
          return {
              type: 'alert-success',
              message: action.message
          };
      case alertConstants.ERROR:
          return {
              type: 'alert-danger',
              message: action.message
          };
      case alertConstants.CLEAR:
          return {};
      default:
          return state
  }
}

// Initial State

export const initialState = user
? { isLoggedIn: true, user }
: { isLoggedIn: false, user: null };



// Reducer
export function userReducer(state = {}, action) {
  switch (action.type) {
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



export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
}

export function registration(state = {}, action) {
  switch (action.type) {
      case userConstants.REGISTER_REQUEST:
          return { registering: true };
      case userConstants.REGISTER_SUCCESS:
          return {};
      case userConstants.REGISTER_FAILURE:
          return {};
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

function login(username, password, from) {
  return dispatch => {
      dispatch(request({ username }));

      userService.login(username, password)
          .then(
              user => { 
                  dispatch(success(user));
                  history.push(from);
              },
              error => {
                  dispatch(failure(error.toString()));
                  dispatch(alertActions.error(error.toString()));
              }
          );
  };

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
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
                  history.push('/login');
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

export const loginAction = (userId, password) => (dispatch) => {
    return UserService.login(userId, password).then(
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
export const userDetailAction = () => (dispatch) => {
  return UserService.detail().then(
    resp => { 
      alert(`UserService.detail()`)
      dispatch(moveTo('/home'))
    },
    error => {alert(`Error`)}
  )
}

// Services
export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete
};

function loginService(username, password) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
  };

  return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
      .then(handleResponse)
      .then(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));

          return user;
      });
}

function logoutService() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function getAllService() {
  const requestOptions = {
      method: 'GET',
      headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getByIdService(id) {
  const requestOptions = {
      method: 'GET',
      headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function registerService(user) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
}

function updateService(user) {
  const requestOptions = {
      method: 'PUT',
      headers: { ...authHeader(), 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _deleteService(id) {
  const requestOptions = {
      method: 'DELETE',
      headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
              logout();
              location.reload(true);
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }

      return data;
  });
}


// utility

// _helpers/fake-backend.js

    
export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        const { method, headers } = opts;
        const body = opts.body && JSON.parse(opts.body);

        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(handleRoute, 500);

            function handleRoute() {
                switch (true) {
                    case url.endsWith('/users/authenticate') && method === 'POST':
                        return authenticate();
                    case url.endsWith('/users/register') && method === 'POST':
                        return register();
                    case url.endsWith('/users') && method === 'GET':
                        return getUsers();
                    case url.match(/\/users\/\d+$/) && method === 'DELETE':
                        return deleteUser();
                    default:
                        // pass through any requests not handled above
                        return realFetch(url, opts)
                            .then(response => resolve(response))
                            .catch(error => reject(error));
                }
            }

            // route functions

            function authenticate() {
                const { username, password } = body;
                const user = users.find(x => x.username === username && x.password === password);
                if (!user) return error('Username or password is incorrect');
                return ok({
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    token: 'fake-jwt-token'
                });
            }

            function register() {
                const user = body;
    
                if (users.find(x => x.username === user.username)) {
                    return error(`Username  ${user.username} is already taken`);
                }
    
                // assign user id and a few other properties then save
                user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));

                return ok();
            }
    
            function getUsers() {
                if (!isLoggedIn()) return unauthorized();

                return ok(users);
            }
    
            function deleteUser() {
                if (!isLoggedIn()) return unauthorized();
    
                users = users.filter(x => x.id !== idFromUrl());
                localStorage.setItem('users', JSON.stringify(users));
                return ok();
            }

            // helper functions

            function ok(body) {
                resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) });
            }

            function unauthorized() {
                resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' })) });
            }

            function error(message) {
                resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) });
            }

            function isLoggedIn() {
                return headers['Authorization'] === 'Bearer fake-jwt-token';
            }
    
            function idFromUrl() {
                const urlParts = url.split('/');
                return parseInt(urlParts[urlParts.length - 1]);
            }
        });
    }
}


///////////////////////////////////////////////////////////////////////////
const UserService = {
  access : async (userId, password) => {
    const req = {
        method: c.post,
        url: `${c.url}/api/access`,
        data: {id:userId, password:password},
        auth: c.auth
    }
    const resp = await axios(req)
    const data = resp.data
    alert(`Welcome ! ${data.name}'s connection is successful. ! `)
    return data
  },
  detail : async () => {
    alert(`move to detail`)
    
  }
} 

export default userReducer