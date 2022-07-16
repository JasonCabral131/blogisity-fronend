import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux";

import { toast } from 'react-toastify';
import { signInUser } from "../../redux/actions";
const initialState = {
  email: "",
  password: "",
}
const Login = () => {
  const [info, setInfo] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSignUp = async(e) => {
    e.preventDefault();
    if(!info.email){
      toast.warn("Email is required !", {
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }
    if(!info.password){
      toast.warn("Password is required !", {
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }
    setLoading(true);
    await dispatch(signInUser(info))
    setLoading(false);
    
  }
  return (
    <div className="sign-in-htm">
      <form onSubmit={handleSignUp}>
      <div className="group">
        <label for="user" className="label">
          Email Address
        </label>
        <input id="user" type="email" className="input mt-1" placeholder="email address" value={info.email} onChange={(e) => {
          setInfo(prev => {
            return {...prev, email: e.target.value}
          })
        }} required/>
      </div>
      <div className="group">
        <label for="pass" className="label">
          Password
        </label>
        <input
          id="pass"
          type="password"
          placeholder="password"
          className="input mt-1"
          data-type="password"
          value={info.password} onChange={(e) => {
            setInfo(prev => {
              return {...prev, password: e.target.value}
            })
          }}
          required
        />
      </div>
      <div className="group">
        <input id="check" type="checkbox" className="check" checked />
        <label for="check">
          <span className="icon"></span> Keep me Signed in
        </label>
      </div>
      <div className="group">
        <button type="submit" className="button"  disabled={loading}>
        {
loading ? 
<div className='d-flex justify-content-center align-items-center'>
<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</div>
: 'SIGN IN'
        }

        </button>
      </div>
      </form>
      <div className="hr"></div>
      <div className="foot-lnk">
        <a href="#forgot">Forgot Password?</a>
      </div>
    </div>
  );
};

export default Login;
