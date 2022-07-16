import React from 'react'
import { useSelector } from 'react-redux'
import FooterMobileView from '../../component/FooterMobileView';

const Footer = () => {
  const {user} = useSelector(state => state.auth);

  
  return (
    <div className='w-100 m-0 bg-white footer-container'>
      {
        user ? <div className='footer-user-mobile w-100'>
            <FooterMobileView />
        </div> : 
        <div>footer</div>
      }
    </div>
  )
}

export default Footer