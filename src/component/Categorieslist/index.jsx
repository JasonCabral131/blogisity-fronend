import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./style.scss";
import { useHistory } from "react-router-dom";
import axios from "./../../config/axios";
const CategoriesList = () => {
  const [categories, setCategory] = useState([]);
  const history = useHistory();
  const handleGetCategories = async () => {
    try {
      const res = await axios.get("/category/all-categories");
      if (res.status === 200) {
        setCategory(res.data.data);
      }
    } catch (e) {}
  };
  useEffect(() => {
    handleGetCategories();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="d-flex flex-column justify-content-start align-items-center">
      <div className="w-100 category-title-blog mt-1">Category</div>
      <div className="w-100 d-flex flex-column justify-content-start align-items-center ps-1">
      <div
              className="w-100 category-list-blog pointer text-wrap text-truncate"
             
              onClick={() => {
                history.push(`/admin/blogs/view`)
              }}
            >
              Home
            </div>
        {categories.map((data) => {
          return (
            <div
              className="w-100 category-list-blog pointer text-wrap text-truncate"
              key={Math.random()}
              onClick={() => {
                history.push(`/admin/blogs/view/${data.id}`)
              }}
            >
              {data.category}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesList;
