import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";


import storage from "redux-persist/lib/storage";
import authReducer from "./auth.reducer";
import categoryReducer from "./category.reducers";
export const rootReducer = combineReducers({
    auth: authReducer,
    category: categoryReducer
  });
  const configStorage = {
    key: "root",
    storage,
    whitelist: ['auth']
  };
  export default persistReducer(configStorage, rootReducer);