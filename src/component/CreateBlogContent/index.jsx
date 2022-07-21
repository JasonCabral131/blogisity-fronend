import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "./style.scss";

import Select from "react-select";
import axios from "./../../config/axios";
import { useDispatch } from "react-redux";
import { createBlog } from "../../redux/actions";
import frontImg from "./../../assets/img/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png";
import { getDataUrl } from "../../config/fetchingBlog";
import SunEditor from "suneditor-react";
import {sortedFontOptions} from "./../../reusable"

const initialState = {
  category: null,
  blog: "",
  file: { file: null, dataUrl: null },
  content: "",
};

const CreateContent = () => {
  const imgRef = useRef();
  const dispatch = useDispatch();
  const [categories, setCategory] = useState([]);
  const [blog, setBlog] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleGetCategories = async () => {
    try {
      const res = await axios.get("/category/all-categories?create=1");
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
  const handleFileChange = async (e) => {
    const files = e.target.files;
    for (let file of files) {
      const dataUrl = await getDataUrl(file);
      setBlog((prev) => {
        return { ...prev, file: { file, dataUrl } };
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    if (!blog.content) {
      toast.warn("content is required!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    if (!blog.category) {
      toast.warn("content is required!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    if (!blog.file.file) {
      toast.warn("Heading Blog Image Required", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    form.append("title", blog.blog);
    form.append("content", blog.content);
    form.append("category", blog.category.value);

    if (blog.file.file) {
      form.append("file", blog.file.file);
    }
    setLoading(true);
    const res = await dispatch(createBlog(form));
    if (res) setBlog(initialState);
    setLoading(false);
  };

  return (
    <div className="container bg-white p-2 shadow mt-3">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group flex-column d-flex ">
              <label>Front Image</label>
              <img
                className="front-img"
                alt="front-img"
                src={blog.file.dataUrl ? blog.file.dataUrl : frontImg}
                onClick={() => {
                  imgRef.current.click();
                }}
              />
              <input
                ref={imgRef}
                multiple={false}
                type={"file"}
                placeholder="front image"
                className="form-control "
                accept="image/png, image/gif, image/jpeg"
                onChange={handleFileChange}
                required
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="form-group">
              <label>Blog Category</label>
              <Select
                value={blog.category}
                menuPortalTarget={document.body}
                styles={{ menuPortal: (base) => ({ ...base, zIndex: 10 }) }}
                options={categories}
                onChange={(e) => {
                  setBlog((prev) => {
                    return { ...prev, category: e };
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
            <div className="w-100 d-flex justify-content-end align-items-center mt-5">
              <button
                className="btn btn-secondary ms-1"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <div className="d-flex justify-content-center align-items-center">
                    {" "}
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <span className="ml-1">Loading...</span>
                  </div>
                ) : (
                  "Publish"
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-2 w-100" />

        <SunEditor
          placeholder="type your content...."
          plugin=""
          setContents={blog.content}
          onChange={(content) => {
            setBlog((prev) => {
              return { ...prev, content };
            });
          }}
          setOptions={{
            buttonList: [
              ["undo", "redo"],
              ["font", "fontSize"],
              // ['paragraphStyle', 'blockquote'],
              [
                "bold",
                "underline",
                "italic",
                "strike",
                "subscript",
                "superscript",
              ],
              ["fontColor", "hiliteColor"],
              ["align", "list", "lineHeight"],
              ["outdent", "indent"],

              ["table", "horizontalRule", "link", "image", "video"],
              // ['math'] //You must add the 'katex' library at options to use the 'math' plugin.
              // ['imageGallery'], // You must add the "imageGalleryUrl".
              // ["fullScreen", "showBlocks", "codeView"],
              ["preview", "print"],
              ["removeFormat"],

              // ['save', 'template'],
              // '/', Line break
            ], // Or Array of button list, eg. [['font', 'align'], ['image']]
            defaultTag: "div",
            minHeight: "300px",
            showPathLabel: false,
            font: sortedFontOptions,
          }}
        />
      </form>
    </div>
  );
};

export default CreateContent;
