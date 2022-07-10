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