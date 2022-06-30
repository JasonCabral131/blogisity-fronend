import React from "react";
import "./style.css";
import { AiOutlineClose } from "react-icons/ai";
const NavbarCategories = ({setMobile}) => {
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
        <li>Politics</li>
        <li>Business</li>
        <li>Health</li>
        <li>Design</li>
        <li>Sports</li>
        <li>Technology</li>
        <li>Food</li>
        <li>Travel</li>
      </ul>
    </div>
  );
};

export default NavbarCategories;
