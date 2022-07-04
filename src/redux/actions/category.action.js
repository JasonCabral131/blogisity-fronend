import {categoryConstant} from "../constants";
import { toast } from 'react-toastify';
import axios from "../../config/axios";
export const createCategory = (data) => {
    return async(dispatch) => {
        try{
            const res = await axios.put("/category", data);
            if(res.status === 200){
                toast.dismiss();
                toast.success(`${res.data.msg}!`, {
                    position: toast.POSITION.TOP_RIGHT
                  });
                  console.log(res.data)
                  return true
            }
        }catch(e){
            toast.warn("Failed to Create !", {
                position: toast.POSITION.TOP_RIGHT
              });
              return false
        }
    }
}

export const getCategory = (page, query) => {
    return async(dispatch) => {
        try{
            dispatch({type: categoryConstant.CATEGORY_REQUEST})
            const res = await axios.get(`/category/categories?page=${page}&query=${query}`);
            if(res.status === 200){
                dispatch({type: categoryConstant.GET_CATEGORY_SUCCESS, payload: {categories:res.data.categories}})
                return {result: true, totalPages: res.data.totalPages}
            }
        }catch(e){
            return {result: false}
        }
    }
}