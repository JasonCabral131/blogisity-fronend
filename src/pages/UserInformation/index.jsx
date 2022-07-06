import React from 'react'
import Followers from './Followers';
import Followring from './Followring';
import Post from './Post';
import "./style.scss";
import {Switch, Route} from "react-router-dom";
import CreateContent from '../../component/CreateBlogContent';
const UserInformation = () => {
  return (
    <div className='w-100'>
        <div className='writer-container'>
                <div className='writer-content'>
                    <img className='writer-cover-profile' src='https://scontent.fceb1-3.fna.fbcdn.net/v/t39.30808-6/277535002_1895756753949909_4003512974797774884_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHWijvHUXVfgQ7vAcfyv7TUcypI004522pzKkjTTjnbanKxGxkrltXdCuO9jFiZUVHOYEgRrnc7Xfjb6vGnZKUj&_nc_ohc=OEfVM0niCMsAX9Zp0sI&tn=23NMHVM8WMZkA-yd&_nc_zt=23&_nc_ht=scontent.fceb1-3.fna&oh=00_AT8vlwbu_SdUbwYetGShLjSBpPANCFLh8sqjyIcjLhJ6iA&oe=62C82E02'
                        alt='profile cover'
                    />
                    <img src="https://scontent.fceb1-1.fna.fbcdn.net/v/t39.30808-6/287988986_1953136304878620_3507913499263727_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFnLMTxoAOncIrsGydOL6A2esA6qku3e2p6wDqqS7d7aiAs8GChCaxz27ZHNvhFOxV9HSdUYCw1SibKeKeFCMS-&_nc_ohc=fTiVM34ccnoAX9NNGQ1&_nc_zt=23&_nc_ht=scontent.fceb1-1.fna&oh=00_AT8QHEU3RoyBWaoozZg0drFqAvFvQB7A7ejnc3RagkRlkw&oe=62C87757"
                        alt="profile user"
                        className='writer-profile'
                    />
                </div>
                <div className='writer-information p-2 '>
                        <div className='writer-content-info '>
                                    <div className='writer-name text-wrap text-truncate'>
                                            Jason P. Cabral
                                    </div>
                                    <div className='post-follower-followring-container'>
                                        <Post />
                                        <Followers />
                                        <Followring />
                                    </div>
                                    
                        </div>
                </div>
                <div className='writer-nav d-flex'>
                    <div className='active'>
                        Create
                    </div>
                    <div>
                        Post
                    </div>
                </div>
        </div>
        <div className='mt-1 writer-content'>
            <Switch>
                <Route path={"/admin/writer"}  render={route => {
                    return <CreateContent {...route}/>
                }}/>
            </Switch>
           
        </div>
    </div>
  )
}

export default UserInformation