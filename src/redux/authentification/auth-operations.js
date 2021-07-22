import axios from "axios"
import actions from "./auth-actions"

axios.defaults.baseURL = "http://connections-api.herokuapp.com"

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ""
  },
}
const addUser =
  ({ name, email, password }) =>
  (dispatch) => {
    console.log({ name, email, password })
    dispatch(actions.addUserRequest())
    axios
      .post("/users/signup", { name, email, password })
      .then(({ data }) => {
        token.set(data.token)
        dispatch(actions.addUserSuccess(data))
      })
      .catch((error) => dispatch(actions.addUserError(error.message)))
  }

const login = (credentials) => (dispatch) => {
  dispatch(actions.loginRequest())
  axios
    .post("/users/login", credentials)
    .then(({ data }) => {
      console.log(data)
      token.set(data.token)
      dispatch(actions.loginSuccess(data))
    })
    .catch((error) => dispatch(actions.loginError(error.message)))
}

const logout = () => (dispatch) => {
  dispatch(actions.logoutRequest())
  axios
    .post("/users/logout")
    .then(() => {
      token.unset()
      dispatch(actions.logoutSuccess())
    })
    .catch((error) => dispatch(actions.logoutError(error.message)))
}
const getCurrentUser = () => (dispatch, getState) => {
  const {
    user: { token: persistedToken },
  } = getState()

  if (!persistedToken) {
    return
  }

  token.set(persistedToken)
  dispatch(actions.getCurrentUserRequest())

  axios
    .get("/users/current")
    .then((response) => {
      dispatch(actions.getCurrentUserSuccess(response.data))
    })
    .catch((error) => dispatch(actions.getCurrentUserError(error.message)))
}

// eslint-disable-next-line
export default { addUser, login, logout, getCurrentUser }
