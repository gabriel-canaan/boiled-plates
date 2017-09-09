import request from '../../utils/api'
import {saveUserToken} from '../../utils/auth'
import {removeUser} from '../../utils/auth'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

function requestLogin() {
  return {type: LOGIN_REQUEST, isFetching: true, isAuthenticated: false}
}

export function receiveLogin(user) {
  return {type: LOGIN_SUCCESS, isFetching: false, isAuthenticated: true, user}
}

function loginError(message) {
  return {type: LOGIN_FAILURE, isFetching: false, isAuthenticated: false, message}
}
function requestLogout() {
  return {type: LOGOUT_REQUEST, isFetching: true, isAuthenticated: true}
}
function receiveLogout() {
  return {type: LOGOUT_SUCCESS, isFetching: false, isAuthenticated: false}
}
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    removeUser()
    dispatch(receiveLogout())
  }
}
