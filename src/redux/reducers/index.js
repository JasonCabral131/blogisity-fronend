import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth.reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
  });
  const configStorage = {
    key: "root",
    storage,
    whitelist: ['auth']
  };
  export default persistReducer(configStorage, rootReducer);