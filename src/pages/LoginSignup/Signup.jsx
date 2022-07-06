import React , { useState} from "react";
import {useDispatch} from "react-redux";
import { signUp } from "../../redux/actions";
const initialState = {
  name: "",
  email: "",
  password: "",
  confirm_pass: "",
}
const Signup = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const handeChange = (e) => {
    setUser(prev => {
      return {...prev, [e.target.name] : e.target.value}
    })
  }
  const handleSignUp = async(e) => {
    e.preventDefault();
    setLoading(true)
    const res =   await  dispatch(signUp(user));
    if(res) setUser(initialState);
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
        />
      </div>

      <div className="group">
        <button className="button" onClick={handleSignUp} onSubmit={handleSignUp}>
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
