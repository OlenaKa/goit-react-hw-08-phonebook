import { createAction } from "@reduxjs/toolkit"
const addUserRequest = createAction("users/addUserRequest")
const addUserSuccess = createAction("users/addUserSuccess")
const addUserError = createAction("users/addUserError")

const loginRequest = createAction("users/loginRequest")
const loginSuccess = createAction("users/loginSuccess")
const loginError = createAction("users/loginError")

const logoutRequest = createAction("users/logoutRequest")
const logoutSuccess = createAction("users/logoutSuccess")
const logoutError = createAction("users/logoutError")

const getCurrentUserRequest = createAction("users/getCurrentUserRequest")
const getCurrentUserSuccess = createAction("users/getCurrentUserSuccess")
const getCurrentUserError = createAction("users/getCurrentUserError")

export default {
  addUserRequest,
  addUserSuccess,
  addUserError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
}
