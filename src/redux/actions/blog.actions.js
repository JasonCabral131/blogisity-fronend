import axiosInstance from "../../config/axios";
import { toast } from 'react-toastify';
export const createBlog = (data) => {
    return async(dispatch) => {
        try{
            const res = await axiosInstance.put("/blog", data);
            if(res.status === 200){
                toast.success("Successfully published", {
                    position: toast.POSITION.TOP_RIGHT
                  });
                return true;
            }
        }catch(e){
            toast.warn("Failed to Create !", {
                position: toast.POSITION.TOP_RIGHT
              });
            return false
        }
    }
}

export const updateBlogContent = (data) => {
   return async(dispatch) => {
    try{
        const res = await axiosInstance.put("/blog/update-blog", data);
        if(res.status === 200){
            toast.success("Successfully Updated", {
                position: toast.POSITION.TOP_RIGHT
              });
            return {result: true, blog: res.data.blog};
        }
        toast.warn("Failed to Update !", {
            position: toast.POSITION.TOP_RIGHT
          });
        return {result: false}
    }catch(e){
        toast.warn("Failed to Update !", {
            position: toast.POSITION.TOP_RIGHT
          });
        return {result: false}
    }
   }
}

export const deleteBlog = (id) => {
  return async(dispatch) => {
    try{
        const res = await axiosInstance.delete(`/blog/${id}`);
        if(res.status === 200){
            toast.success("Successfully Deleted", {
                position: toast.POSITION.TOP_RIGHT
              });
            return true;
        }
        toast.warn("Failed to Delete !", {
            position: toast.POSITION.TOP_RIGHT
          });
        return false
    }catch(e){
        toast.warn("Failed to Delete !", {
            position: toast.POSITION.TOP_RIGHT
          });
        return false
    }
  }
}