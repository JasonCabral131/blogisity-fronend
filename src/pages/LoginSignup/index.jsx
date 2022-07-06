import React from "react";
import "./style.scss";

import { useHistory } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
const LoginSignup = () => {
  const history = useHistory();
  return (
    <div className="login-container">
      <div className="login-wrap">
        <div className="login-html">
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