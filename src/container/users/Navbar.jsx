import React, { useState } from "react";
import NavbarCategories from "../../component/NavbarCategory";
import NavbarSearch from "../../component/NavbarSearch";
import { AiOutlineMenu } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import {useSelector} from "react-redux";
import LoginUserNavbar from "../../component/LoginUserNavbar";
const Navbar = ({ categories, ...props }) => {
  const [mobile, setMobile] = useState(false);
  const {user} = useSelector(state => state.auth);
  const history = useHistory();
  const RegisterSignUp = () => {
    return (
      <>  
        <div
          className="btn-login"
          onClick={(e) => {
            history.push("/login");
          }}
        >
          Login
        </div>
        </>
    );
  };
 
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-title">Blogisity</div>
        <div className="navbar-content-list">
          <div className="navbar-search-container">
            <NavbarSearch />
          </div>
          <div className="sign-up-sign-in-container">
            {
              user ? <LoginUserNavbar /> : <RegisterSignUp />
            }
            
          </div>
          <AiOutlineMenu
            size={24}
            className="pointer menu-navbar"
            onClick={(e) => {
              setMobile(!mobile);
              console.log(mobile);
            }}
          />
        </div>
      </div>
      <div className="navbar-category">
        <NavbarCategories
          setMobile={setMobile}
          categories={categories}
          {...props}
        />
      </div>
      <div
        className={`mobile-navbar-container ${
          mobile ? "slide-in-right" : "slide-out-right"
        }`}
      >
        <NavbarCategories
          setMobile={setMobile}
          categories={categories}
          {...props}
        />
      </div>
    </div>
  );
};

export default Navbar;
