import React from 'react'
import "./style.scss"
import {AiOutlineBell , AiOutlineLogout, AiOutlineMessage} from "react-icons/ai";
import Dropdown from '../Dropdown';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signout } from '../../redux/actions';
const LoginUserNavbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className='user-information'>
      <Dropdown onPoint={<AiOutlineBell className='pointer' size={23}/>}>
     
      </Dropdown>
        
      
        <Dropdown onPoint={  <AiOutlineMessage className='pointer' size={23} />}></Dropdown>
        <div className=''>|</div>
       <div><AiOutlineLogout className='pointer' size={23} onClick={() => {
         history.push("/")
        dispatch(signout());
       
       }}/></div>
      
    </div>
  )
}

export default LoginUserNavbar