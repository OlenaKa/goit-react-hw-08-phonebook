import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
// import logger from "redux-logger"
import { contactsReducer } from "./contacts"
import { authReducer } from "./authentification/"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
]

// const reducer = combineReducers({
//   user: usersReducer,
//   contacts: contactsReducer,
// })
const persistConfig = {
  key: "user",
  storage,
  whitelist: ["token"],
}
// const persistedReducer = persistReducer(persistConfig, reducer)
const store = configureStore({
  reducer: {
    user: persistReducer(persistConfig, authReducer),
    contacts: contactsReducer,
  },

  middleware,
  devTools: process.env.NODE_ENV === "development",
})

const persistor = persistStore(store)

const exportobject = { store, persistor }
export default exportobject
