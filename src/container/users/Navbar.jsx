import React, { useState } from "react";
import NavbarCategories from "../../component/NavbarCategory";
import NavbarSearch from "../../component/NavbarSearch";
import { AiOutlineMenu } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginUserNavbar from "../../component/LoginUserNavbar";
import Dropdown from "../../component/Dropdown";
import Avatar from "react-avatar";
import {FaRegUserCircle} from "react-icons/fa";
import {
  AiOutlineBell,
  AiOutlineLogout,
  AiOutlineMessage,
} from "react-icons/ai";
import { signout } from "../../redux/actions";
const Navbar = ({ categories, ...props }) => {
  const [mobile, setMobile] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();
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
    <div className="navbar-container ">
      <div className="navbar-content">
        <div className="navbar-title">Blogisity</div>
        <div className="navbar-content-list">
          <div className="navbar-search-container">
            <NavbarSearch />
          </div>
          <div className="sign-up-sign-in-container">
            {user ? <LoginUserNavbar /> : <RegisterSignUp />}
          </div>
          <div className="pointer user-navbar-mobile">
            {user ? (
              <Dropdown
                onPoint={
                  user ? (
                    user.profile.url ? (
                      <Avatar src={user.profile.url} size={35} round={true} />
                    ) : (
                      <Avatar name={user.name} size={35} round={true} />
                    )
                  ) : null
                }
              >
                 <div className="p-2 pt-4 w-100 d-flex justify-content-start align-items-center pointer menu-user-nav" onClick={() => {
                  history.push("/writer");
                 }}>
                  <FaRegUserCircle className="pointer" size={23} />
                  <div className="ps-2">{user?.name} </div>
                </div>
                <hr />
                <div className="p-2 w-100 d-flex justify-content-start align-items-center pointer menu-user-nav">
                  <AiOutlineBell className="pointer" size={23} />
                  <div className="ps-2">Notifications </div>
                  <div className="ms-2 badge badge-pill bg-warning p-2">1</div>
                </div>
                <div className="p-2 w-100 d-flex justify-content-start align-items-center pointer menu-user-nav">
                  <AiOutlineMessage className="pointer" size={23} />
                  <div className="ps-2"> Messages </div>
                  <div className="ms-2 badge badge-pill bg-primary p-2">1</div>
                </div>
                <div
                  className="p-2 w-100 d-flex justify-content-start align-items-center pointer menu-user-nav"
                  onClick={() => {
                    history.push("/");
                    dispatch(signout());
                  }}
                >
                  <AiOutlineLogout className="pointer" size={23} />
                  <div className="ps-2">Logout </div>
                </div>
              </Dropdown>
            ) : null}
          </div>

          <AiOutlineMenu
            size={35}
            className="pointer menu-navbar"
            onClick={(e) => {
              setMobile(!mobile);
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
          mobile ? "scale-in-right" : "slide-out-right"
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
