import React from "react";
import "./style.scss";
import { AiOutlineMail, AiOutlineLock, AiOutlineRight } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { useHistory } from "react-router-dom";
const Login = () => {
    const history = useHistory();
  return (
    <div className="login-container">
      <div class="screen">
        <div class="screen__content">
          <form class="login">
            <div className="login-title">
              <div className="pointer" onClick={e => {
                history.push("/")
              }}>
                <BsArrowLeft size={25} />
              </div>{" "}
              <div className="mx-2 "> Blogisity</div>
            </div>
            <div class="login__field">
              <i class="login__icon ">
                <AiOutlineMail size={15} />
              </i>
              <input
                type="text"
                class="login__input"
                placeholder="email address"
              />
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock">
                <AiOutlineLock size={15} />
              </i>
              <input
                type="password"
                class="login__input"
                placeholder="Password"
              />
            </div>
            <button class="button login__submit">
              <span class="button__text">Log In Now</span>
              <i class="button__icon fas fa-chevron-right">
                <AiOutlineRight size={18} />
              </i>
            </button>
            <button class="button login__submit">
              <span class="button__text">Register</span>
              <i class="button__icon fas fa-chevron-right">
                <AiOutlineRight size={18} />
              </i>
            </button>
          </form>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
