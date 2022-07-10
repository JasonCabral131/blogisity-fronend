import React, { useState, useEffect, useRef } from "react";
import { toast } from 'react-toastify';
import "./style.scss";
import JoditEditor from "jodit-react";
import Select from "react-select";
import axios from "./../../config/axios";
import { useDispatch } from "react-redux";
import { createBlog } from "../../redux/actions";
import frontImg from "./../../assets/img/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png";
import { getDataUrl } from "../../config/fetchingBlog";
const initialState = {
  category: "",
  blog: "",
  file: {file: null, dataUrl: null},
  content: "",
};
const CreateContent = () => {
  const editor = useRef(null);
  const imgRef = useRef();
  const dispatch = useDispatch();
  const [categories, setCategory] = useState([]);
  const [blog, setBlog] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const handleGetCategories = async () => {
    try {
      const res = await axios.get("/category/all-categories");
      if (res.status === 200) {
        setCategory(
          res.data.data.map((data) => {
            return { value: data._id, label: data.category };
          })
        );
      }
    } catch (e) {}
  };
  useEffect(() => {
    handleGetCategories();
    // eslint-disable-next-line
  }, []);
  const handleFileChange = async(e) => {
    const files = e.target.files;
    for (let file of files) {
      const dataUrl = await getDataUrl(file) 
      setBlog((prev) => {
        return { ...prev, file: {file, dataUrl } };
      });
    }
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = new FormData();
    if(!blog.content){
      toast.warn("Category is required!", {
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }
    if(!blog.file.file) {
      toast.warn("Heading Blog Image Required", {
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }
    form.append("title", blog.blog);
    form.append("content", blog.content);
    form.append("category", blog.category);
    
    if (blog.file.file) {
      form.append("file", blog.file.file);
    }
    setLoading(true)
   const res = await dispatch(createBlog(form));
   if(res) setBlog(initialState);
   setLoading(false)
  };
  return (
    <div className="container bg-white p-2 shadow ">
      <form onSubmit={handleSubmit}>
        <div className="row">
        
          <div className="col-md-4">
            <div className="form-group flex-column d-flex ">
              <label>Front Image</label>
              <img className="front-img" alt="front-img" src={blog.file.dataUrl? blog.file.dataUrl:  frontImg} onClick={() => {
                imgRef.current.click();
              }}/>
              <input
              ref={imgRef}
                multiple={false}
                type={"file"}
                placeholder="front image"
                className="form-control "
                accept="image/png, image/gif, image/jpeg"
                onChange={handleFileChange}
                required
                style={{display: 'none'}}
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="form-group">
              <label>Blog Category</label>
              <Select
                menuPortalTarget={document.body}
                menuPosition={"fixed"}
                options={categories}
                onChange={(e) => {
                  setBlog((prev) => {
                    return { ...prev, category: e.value };
                  });
                }}
              />
            </div>
            <div className="form-group">
            <label>Blog Title</label>
            <input
              onChange={(e) => {
                setBlog((prev) => {
                  return { ...prev, blog: e.target.value };
                });
              }}
              value={blog.blog}
              placeholder="blog title"
            
              className="form-control mt-1 "
              required
            />
          </div>
          </div>
        </div>
     

        <div className="mt-2 w-100" />
        <JoditEditor
          ref={editor}
          value={blog.content}
          config={{
            uploader: {
              insertImageAsBase64URI: true,
            },
            readonly: false,
            placeholder: "Start typings...",
          }}
          tabIndex={1}
          onBlur={(newContent) => {
            setBlog((prev) => {
              return { ...prev, content: newContent };
            });
          }}
       
        />
        <div className="w-100 d-flex justify-content-center align-items-center mt-1">
          <button className="btn btn-secondary ms-1 w-75" type="submit" disabled={loading}>
          {loading ?   <div className="d-flex justify-content-center align-items-center"> <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span className="ml-1">Loading...</span> 
  </div>
  :  'Publish'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateContent;
