import React from "react";
import "./style.scss";
import Login from "./Login";
import Signup from "./Signup";
import { useHistory } from "react-router-dom";
import logo from "./../../assets/img/logo.png"
const LoginSignup = () => {
  const history = useHistory();
  return (
    <div className="login-container">
      <div className="login-wrap">
        <div className="login-html">
          <div className="mb-2 pointer login-title-blogisity text-center d-flex justify-content-center align-items-center flex-column" onClick={() => {
            history.push("/home")
          }}>
            <img alt="login" src={logo}/>
            <div>Blogisity</div></div>
          <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
          <label for="tab-1" className="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label for="tab-2" className="tab">
            Sign Up
          </label>
          <div className="login-form">
            <Login />
          <Signup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
