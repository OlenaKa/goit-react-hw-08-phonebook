import { createReducer, combineReducers } from "@reduxjs/toolkit"
import actions from "./auth-actions"

const initialUserState = { name: null, email: null }
const {
  addUserSuccess,
  addUserError,
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
  getCurrentUserSuccess,
  getCurrentUserError,
} = actions
const user = createReducer(initialUserState, {
  [addUserSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
})
const token = createReducer(null, {
  [addUserSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
})
const isLoggedIn = createReducer(false, {
  [addUserSuccess]: () => true,
  [addUserError]: () => false,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [getCurrentUserError]: () => false,
  [loginError]: () => false,
  [logoutSuccess]: () => false,
})

const setError = (_, { payload }) => payload

const error = createReducer(null, {
  [addUserError]: setError,
  [loginError]: setError,
  [logoutError]: setError,
  [getCurrentUserError]: setError,
})

export default combineReducers({ user, token, isLoggedIn, error })
