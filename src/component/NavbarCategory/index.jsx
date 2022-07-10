import React from "react";
import "./style.css";
import { AiOutlineClose } from "react-icons/ai";
const NavbarCategories = ({setMobile,categories, ...props}) => {
  const handleNextLink = (e) => {
    console.log(props)
  }
  return (
    <div className="navbar-cat">
      <div className="category-title">
        <div>Categories</div>
        <div className="close-container ">
          <AiOutlineClose
            size={20}
            className="pointer"
            onClick={(e) => {
              setMobile(false)
            }}
          />
        </div>
      </div>
      <ul className="list-category">
        <li className="active">Home</li>
        {
          categories ? Array.isArray(categories) ? categories.map(cat => {
            return <li key={Math.random()} onClick={handleNextLink}>{cat.category}</li>
          }) :null: null
        }
      </ul>
    </div>
  );
};

export default NavbarCategories;
