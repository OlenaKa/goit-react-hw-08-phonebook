import { createReducer, combineReducers } from "@reduxjs/toolkit"
import actions from "./actions"
const {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  filterContacts,
} = actions
const itemsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
})

const filterReducer = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
})

const loadingReducer = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
})
const error = createReducer(null, {})


export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  error,
  loader: loadingReducer,
})
