import React from 'react'
import { useHistory } from 'react-router-dom'
import Avatar from 'react-avatar';
const UserContainerinfo = ({data, size, setHide, hide}) => {
    const history = useHistory();
  return  <div className='w-100 d-flex justify-content-start align-items-center p-1 pointer writer-chat-container-head' onClick={() => {
    history.push(`/blogisity-messenging/${data._id}`)
    if(size.width < 600){
      setHide(!hide)
    }
  }}>
      {
        data.profile.url ? <Avatar size={30} round src={ data.profile.url} /> : <Avatar round name={data.name} size={30}/>
      }
      <div className='ms-1 writer-name-chat text-wrap text-truncate w-100'>{data.name}</div>
  </div>
  
}

export default UserContainerinfo