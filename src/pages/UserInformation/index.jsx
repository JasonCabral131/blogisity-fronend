import React from 'react'
import Followers from './Followers';
import Followring from './Followring';
import Post from './Post';
import "./style.scss";
import {Switch, Route} from "react-router-dom";
import CreateContent from '../../component/CreateBlogContent';
import { useHistory } from 'react-router-dom';
import Published from './Published';
import { useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import PlainGrey from "./../../assets/img/PlainGrey.jpg"
const UserInformation = (props) => {
  const history = useHistory();

const {user} = useSelector(state => state.auth);
    return (
    <div className='w-100'>
        <div className='writer-container'>
                <div className='writer-content'>
                    <img className='writer-cover-profile' src={user ? user.background.url ? user.background.url : PlainGrey: PlainGrey}
                        alt='profile cover'
                        
                    />
                    {
                        user ? 
                        user.profile.url ? 
                        <img src={ user.profile.url}
                        alt="profile user"
                        className='writer-profile'
                    /> : <div className='writer-profile'> <Avatar name={user.name} size={145} round={true}/> </div>
                        : null
                    }
                  
                </div>
                <div className='writer-information p-2 '>
                        <div className='writer-content-info '>
                                    <div className='writer-name text-wrap text-truncate'>
                                            {user ? user.name: ""}
                                    </div>
                                    <div className='post-follower-followring-container'>
                                        <Post />
                                        <Followers />
                                        <Followring />
                                    </div>
                                    
                        </div>
                </div>
                <div className='writer-nav d-flex'>
                    <div className={`${props?.history?.location?.pathname === "/admin/writer" ||  props?.history?.location?.pathname === "/writer"? "active": ""}`} onClick={() => {
                        history.push(props.location.pathname.includes("/admin/writer/") ? "/admin/writer" : "/writer")
            
                    }}>
                        Create
                    </div>
                    <div  className={`${props?.history?.location?.pathname === "/admin/writer/publish" ||  props?.history?.location?.pathname === "/writer/publish" ? "active": ""}`}  onClick={() => {
                        history.push(props.location.pathname+"/publish")
                    }}>
                        Post
                    </div>
                </div>
        </div>
        <div className='mt-1 writer-content'>
            <Switch>
                <Route path={props.location.pathname.includes("/admin/writer") ? "/admin/writer" : "/writer"} exact  render={route => {
                    return <CreateContent {...route}/>
                }}/>
                <Route  path={props.location.pathname.includes("/admin/writer/publish") ? "/admin/writer/publish" :"/writer/publish"} exact render={route => {
                    return <Published />
                }}/>
            </Switch>
           
        </div>
    </div>
  )
}

export default UserInformation