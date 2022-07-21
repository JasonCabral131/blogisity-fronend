import React from 'react'
import NoChatContent from "./../../assets/img/NoChatContent.png"
const NoContentChat = () => {
  return (
    <div className='w-100 d-flex justify-content-center align-items-center flex-column'>
      <img alt='no-chat-content' src={NoChatContent} style={{height: '70%'}} className="img-no-content"/>
      <h1 className='welcome-chat-msg text-wrap'>WELCOME TO BLOGISITY</h1>
    </div>
  )
}

export default NoContentChat