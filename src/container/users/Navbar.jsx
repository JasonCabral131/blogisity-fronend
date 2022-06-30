import React, { useState } from "react";
import NavbarCategories from "../../component/NavbarCategory";
import NavbarSearch from "../../component/NavbarSearch";
import {AiOutlineMenu} from "react-icons/ai";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const history = useHistory();
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-title">Blogisity</div>
        <div className="navbar-content-list">
          <div className="navbar-search-container">
            <NavbarSearch />
          </div>
          <div className="sign-up-sign-in-container">
            <div className="btn-register">Register</div> |
            <div className="btn-login"
              onClick={e => {
                history.push("/login")
              }}
            > Login</div>
          </div>
          <AiOutlineMenu size={24} className="pointer menu-navbar" onClick={e => {
            setMobile(!mobile);
            console.log(mobile)
          }}/>
        </div>
      </div>
      <div className="navbar-category">
        <NavbarCategories setMobile={setMobile}/>
      </div>
      <div className={`mobile-navbar-container ${mobile ? "slide-in-right" : "slide-out-right"}`}>
          <NavbarCategories setMobile={setMobile}/>
      </div>
    </div>
  );
};

export default Navbar;
