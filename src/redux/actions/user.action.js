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
           
            toast.warn(e.response.data.msg, {
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
export const verifyUserEmailAddress =(data) => {
    return async(dispatch) => {
        try{
        
            const res = await axiosInstance.put(`/user/verify-user-email-address`, {passToken: data})
            if(res.status === 200){
                dispatch({type: authConstant.LOGIN_SUCCESS, payload: {token: res.data.token, user: res.data.user}})
                return true
            }
            return false;
        }catch(e){
                return false;
        }
    }
}
export const resendEmailAddressToken = () => {
  return async(dispatch) => {
    try{
        const res = await axiosInstance.get("/user/resent-email-verfication");
        if(res.status === 200){
            toast.dismiss();
            toast.success("Email Verification Successfully Saved !", {
                position: toast.POSITION.TOP_RIGHT
              });
            return {result: true}
        }
        toast.dismiss();
        toast.warn("Failed to signup !", {
            position: toast.POSITION.TOP_RIGHT
          });
        return {result: false}
    }catch(e){
        toast.dismiss();
        toast.warn("Failed to Send Verification !", {
            position: toast.POSITION.TOP_RIGHT
          });
        return {result: false}
    }
  }
}
export const verifyUser = () => {
    return async(dispatch) => {
        try{
            const res = await axiosInstance.get("/user/verify-user");
            if(res.status !== 200){
                dispatch(signout());
                return false;
            }
           dispatch({type: authConstant.LOGIN_SUCCESS, payload: {token: res.data.token, user: res.data.user}})
            return true;
        }catch(e) {
            dispatch(signout());
            return false;
        }
    }
}

export const signInUser = (data) => {
    return async(dispatch) => {
        try{
                const res = await axiosInstance.put("/user/sign-in", data);
                if(res.status === 200){
                    toast.dismiss();
                    toast.success("Successfully  Sign In !", {
                        position: toast.POSITION.TOP_RIGHT
                      });
                      dispatch({type: authConstant.LOGIN_SUCCESS, payload: {token: res.data.token, user: res.data.user}});
                      return true;
                }

                toast.warn("Failed to Sign In !", {
                    position: toast.POSITION.TOP_RIGHT
                  });
                  return false
        }catch(e){
            toast.dismiss();
            toast.warn("Failed to Sign In !", {
                position: toast.POSITION.TOP_RIGHT
              });
              return false
        }
    }
}
export const changeProfile = (file) => {
    return async(dispatch) => {
        try{
            const res = await axiosInstance.put("/user/change-profile", file);
            if(res.status === 200){
                dispatch({type: authConstant.USER_CHANGE_PROFILE_SUCCESS, payload: {profile: res.data.profile}})
                toast.success("Profile Successfully Updated", {
                    position: toast.POSITION.TOP_RIGHT
                  });
                return true;
            }
            toast.warn("Failed to Update User Profile", {
                position: toast.POSITION.TOP_RIGHT
              });
            return false;
        }catch(e){
            toast.error("Failed to Update User Profile", {
                position: toast.POSITION.TOP_RIGHT
              });
            return false;
        }
    }
}
export const changeBackgroundProfile = (file) => {
    return async(dispatch) => {
        try{
            const res = await axiosInstance.put("/user/change-background-profile", file);
            if(res.status === 200){
                dispatch({type: authConstant.USER_CHANGE_BACKGROUND_PROFILE_SUCCESS, payload: {background: res.data.background}})
                toast.success("Profile Successfully Updated", {
                    position: toast.POSITION.TOP_RIGHT
                  });
                return true;
            }
            toast.warn("Failed to Update User Profile", {
                position: toast.POSITION.TOP_RIGHT
              });
            return false;
        }catch(e){
            toast.error("Failed to Update User Profile", {
                position: toast.POSITION.TOP_RIGHT
              });
            return false;
        }
    }
}