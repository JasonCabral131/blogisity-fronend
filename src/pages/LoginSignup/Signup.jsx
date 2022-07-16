import React , { useState} from "react";
import {useDispatch} from "react-redux";
import { signUp } from "../../redux/actions";
import {useHistory} from "react-router-dom";
import { toast } from 'react-toastify';
const initialState = {
  name: "",
  email: "",
  password: "",
  confirm_pass: "",
}
const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const handeChange = (e) => {
    setUser(prev => {
      return {...prev, [e.target.name] : e.target.value}
    })
  }
  const handleSignUp = async(e) => {
    e.preventDefault();
    if(user.name.length <1){
      toast.warn("Name is required !", {
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }
    if(user.email.length <1){
      toast.warn("Email is required !", {
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }
   
    if(user.password.length < 1){
      toast.warn("Password is required !", {
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }
    if(user.password !== user.confirm_pass){
      toast.warn("Password does not match!", {
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }
    setLoading(true);
    const res =   await  dispatch(signUp(user));
  
    if(res) {
      setUser(initialState);
      history.push("/writer");
    }
    setLoading(false)
  }
  return (
    <div className="sign-up-htm">
      <form>
      <div className="group">
        <label for="user" className="label">
          FullName
        </label>
        <input id="user" type="text" className="input" value={user.name} name="name" onChange={handeChange} required/>
      </div>
      <div className="group">
        <label for="pass" className="label">
          Email Address
        </label>
        <input id="pass" type="email" value={user.email} className="input" name="email" onChange={handeChange} required/>
      </div>
      <div className="group">
        <label for="pass" className="label">
          Password
        </label>
        <input
          id="pass"
          type="password"
          className="input"
          data-type="password"
          name="password" onChange={handeChange}
          value={user.password}
          required
        />
      </div>
      <div className="group">
        <label for="pass" className="label">
          Repeat Password
        </label>
        <input
        value={user.confirm_pass}
          id="pass"
          type="password"
          className="input"
          data-type="password"
          name="confirm_pass" onChange={handeChange}
          required
        />
      </div>

      <div className="group">
        <button className="button" onClick={handleSignUp} onSubmit={handleSignUp} disabled={loading}>
        {
loading ? 
<div className='d-flex justify-content-center align-items-center'>
<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</div>
: 'Sign Up'
        }
          </button>
      </div>
      <div className="hr"></div>
      <div className="foot-lnk">
        <label for="tab-1">Already Member?</label>
      </div>
      </form>
    </div>
  );
};

export default Signup;
