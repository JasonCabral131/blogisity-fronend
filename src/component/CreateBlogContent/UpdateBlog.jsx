import React from "react";
import { useState, useRef } from "react";
import "./style.scss";
import Select from "react-select";
import SunEditor from "suneditor-react";
import { sortedFontOptions } from "./../../reusable";
import axiosInstance from "../../config/axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDataUrl } from "../../config/fetchingBlog";
import { Audio } from  'react-loader-spinner'
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateBlogContent } from "../../redux/actions";
const UpdateBlog = () => {
  const imgRef = useRef();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [categories, setCategory] = useState([]);
  const [blog, setBlog] = useState(null);
  const [loadingContent, setLoadingContent] = useState(true);
  const [newFile, setNewFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleGetBlog = async () => {
    try {
      setLoadingContent(true);
      const res = await axiosInstance.get(`/blog/blog-content-info/${id}`);
      setLoadingContent(false);
      if (res.status === 200) {
        setCategory(
          res.data.categories.map((data) => {
            return { value: data._id, label: data.category };
          })
        );
        setBlog({...res.data.blog, category: {value: res.data.blog.category._id, label: res.data.blog.category.category}});
      }
    } catch (e) {
      setLoadingContent(false);
    }
  };
  const handleFileChange = async (e) => {
    const files = e.target.files;
    for (let file of files) {
      const dataUrl = await getDataUrl(file);
      setNewFile((prev) => {
        return { file, dataUrl  };
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
    form.append("title", blog.title);
    form.append("content", blog.content);
    form.append("id", blog._id); 
    form.append("cloudinary_id", blog.headingImg.cloudinary_id);
    form.append("category", blog.category.value);
    if (newFile &&newFile.file) {
      form.append("file", newFile.file);
    }
    setLoading(true)
    const res = await dispatch(updateBlogContent(form))
    setLoading(false)
    if(res.result){
      setBlog({...res.blog, category: {value: res.blog.category._id, label: res.blog.category.category}});
      setNewFile(null);
    }
  };
  useEffect(() => {
    handleGetBlog()
  },[id])
  return (
    <>
    {
      loadingContent ? <div className="w-100 d-flex justify-content-center align-items-center flex-column">
          <Audio
              height="200"
              width="300"
              color='grey'
              ariaLabel='loading'
            />
            <h3>Loading Content</h3>
      </div> : null
    }
    <div className="container bg-white p-2 shadow mt-3">
   
      {!loadingContent && blog ? (
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group flex-column d-flex ">
                <label>Front Image</label>
                <img
                  className="front-img"
                  alt="front-img"
                  src={newFile? newFile.dataUrl: blog.headingImg.url}
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
                  placeholder="blog title"
                  value={blog.title}
                  onChange={(e) => {
                    setBlog((prev) => {
                      return { ...prev, title: e.target.value };
                    });
                  }}
                  className="form-control mt-1 "
                  required
                />
              </div>
              <div className="w-100 d-flex justify-content-end align-items-center mt-5">
                <button className="btn btn-secondary ms-1" type="submit"  disabled={loading}>
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
                  "Update"
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
      ) : null}
    </div>
    </>
  );
};

export default UpdateBlog;
