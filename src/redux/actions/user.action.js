import axiosInstance from "../../config/axios";
import { authConstant } from "../constants";

import { toast } from 'react-toastify';
export const signUp = (data) => {
    return async(dispatch) => {
        toast.dismiss();
        try{
            const res = await axiosInstance.put("/user/sign-up", data);
            if(res.status === 200){
                dispatch({type: authConstant.LOGIN_SUCCESS, payload: {token: res.data.token, user: res.data.user}})
                toast.dismiss();
                toast.success(`${res.data.msg}!`, {
                    position: toast.POSITION.TOP_RIGHT
                  });
                return true;
            }
            toast.warn("Failed to signup !", {
                position: toast.POSITION.TOP_RIGHT
              });
              return false
        }catch(e){
            toast.warn("Failed to signup !", {
                position: toast.POSITION.TOP_RIGHT
              });
              return false
           
        }
    }
}

export const signout = () => {
    return async(dispatch) => {
        dispatch({type: authConstant.LOGOUT_SUCCESS})
    }
}
export const getUsers = (page) => {
    return async({dispatch}) => {
        try{
            const res = await axiosInstance.get('/user?page=' +page );
            if(res.status === 200){
                return res.data;
            }
            return {result: false};
        }catch(e){
            return {result: false};
        }
    }
}