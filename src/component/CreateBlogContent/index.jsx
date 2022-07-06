import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "./style.scss";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Select from "react-select";
import axios from "./../../config/axios";
const initialState = {
  category: "",
  blog: "",
  file: null,
  content: "",
};
const CreateContent = () => {
  const [categories, setCategory] = useState([]);
  const [blog, setBlog] = useState(initialState);
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
  const handleFileChange = (e) => {
    const files = e.target.files;
    for (let file of files) {
      setBlog((prev) => {
        return { ...prev, file: file };
      });
    }
  };
  return (
    <div className="container bg-white p-2 shadow ">
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
          placeholder="blog title"
          className="form-control mt-1"
        />
      </div>
      <div className="form-group mt-1">
        <label>Front Image</label>
        <input 
        
          multiple={false}
          type={"file"}
          placeholder="front image"
          className="form-control mt-1"
          accept="image/png, image/gif, image/jpeg"
          onChange={handleFileChange}
        />
      </div>
      <div className="mt-2 w-100" />
      <CKEditor
        editor={ClassicEditor}
        data={blog.content}
        onChange={(event, editor) => {
          const data = editor.getData();
          setBlog((prev) => {
            return { ...prev, content: data };
          });
        }}
      />
      <div className="w-100 d-flex justify-content-center align-items-center">
        <button className="btn btn-secondary ms-1 w-75">Publish</button>
      </div>
    </div>
  );
};

export default CreateContent;
