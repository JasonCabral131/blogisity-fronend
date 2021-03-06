import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";


import storage from "redux-persist/lib/storage";
import authReducer from "./auth.reducer";
import categoryReducer from "./category.reducers";
import socketReducer from "./socket.reducer";
import blogReducer from "./blog.reducer";
export const rootReducer = combineReducers({
    auth: authReducer,
    category: categoryReducer,
    socket: socketReducer,
    blog: blogReducer
  });
  const configStorage = {
    key: "root",
    storage,
    whitelist: ['auth']
  };
  export default persistReducer(configStorage, rootReducer);