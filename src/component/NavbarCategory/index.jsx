import React from "react";
import "./style.scss";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import slugify from 'slugify';
const NavbarCategories = ({setMobile,categories, ...props}) => {
  const history = useHistory();
  
  const handleNextLink = (cat) => {
  
    history.push(`/view-content/${slugify(cat.category)}/${cat._id}`)
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
        <li className={`${(props.location.pathname == "/home" || props.location.pathname == "/") ? "active": ""}`} onClick={() => {
          history.push("/home")
        }}>Home</li>
        {
          categories ? Array.isArray(categories) ? categories.map(cat => {
            return <li className={props.location.pathname.includes(`/view-content/${slugify(cat.category)}/${cat._id}`) ? "active" : ""} key={Math.random()} onClick={() => {
              handleNextLink(cat)
            }}>{cat.category}</li>
          }) :null: null
        }
      </ul>
    </div>
  );
};

export default NavbarCategories;
