import React from 'react'
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { ThreeDots } from  'react-loader-spinner';
import "./style.scss"
import { useState } from 'react';
import { verifyUserEmailAddress } from '../../redux/actions/user.action';
import {useDispatch} from "react-redux";
const EmailVerification = () => {
  const {passwordToken} = useParams();
  const [loading, setLoading] = useState(true);

  const history = useHistory();
  const dispatch = useDispatch();
  const handleResentToken = async() => {
    try{
      setLoading(true)
      const res = await dispatch(verifyUserEmailAddress(passwordToken));
      if(res){
        history.push("/writer")
      }
      setLoading(false)
    }catch(e){
      setLoading(false)
    }
  }
  useEffect(() => {
    if(!passwordToken){
      history.push("/home");
      return;
    }else{
      handleResentToken();
    }

  }, []);
  return (
    <div className='container d-flex justify-content-center align-items-center w-100' style={{height: '100%'}}>
      {
        loading ? <div className='d-flex flex-column justify-content-center align-items-center ' style={{marginTop: '100px'}}>
        <h3 className='verify-title'>Verifying Email Address</h3>
        <ThreeDots color="#00BFFF" height={80} width={80}  />
        </div>: null
      }
      
    </div>
  )
}

export default EmailVerification