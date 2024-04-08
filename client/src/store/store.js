import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/auth.slice";
import userReducer from "../slice/user.slice"
import storage from "redux-persist/lib/storage";
import testReducer from "../slice/test.slice";
import questionReducer  from "../slice/question.slice"
import { persistReducer, persistStore } from "redux-persist";
const combinedReducer = combineReducers({
  auth: authReducer,
  user:userReducer,
  test:testReducer,
  question:questionReducer 
  
 

});

const persistConfig = {
  key: "root",
  storage,
  blacklist: []
};
const persistedReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
