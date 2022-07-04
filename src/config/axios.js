import axios from "axios";
import { Store } from "../redux/store";
import { api } from "./api";
const token = Store.getState().auth.token;

const axiosInstance = axios.create({
  baseURL: api.localApi,
  headers: { authorization: token ? `Bearer ${token}` : "" },
});
axiosInstance.interceptors.request.use((req) => {
  const { auth } = Store.getState();
  if (auth.token) {
    req.headers.authorization = `Bearer ${auth.token}`;
  }
  return req;
});

export default axiosInstance;