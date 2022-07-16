import React, { useEffect } from "react";
import 'react-loading-skeleton/dist/skeleton.css'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import AdminContainer from "./container/admin";
import UserContainer from "./container/users";
import Login from "./pages/LoginSignup";
import Page404 from "./pages/Page404";
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { disconnectSocketConnect, socketConnection, verifyUser } from "./redux/actions";
import { api } from "./config/api";
import io from "socket.io-client";
const  App = () => {
   const {user, token} = useSelector(state => state.auth);
  const dispatch = useDispatch();
   const handleUserVerify = () => {
    dispatch(verifyUser());
   }
   useEffect(() => {
    if(user && token){
      const newSocket = io(api.socketApi, {
        query: {
          token,
        },
      });
      newSocket.on("disconnect", () => {
        dispatch(disconnectSocketConnect());
      });
      newSocket.on("connect", () => {
        
        dispatch(socketConnection(newSocket));
      });
    }
 
   }, [user]);
   
   useEffect(() => {
    if(user){

      handleUserVerify();
    }
   /* eslint-disable react/no-direct-mutation-state */
  }, [])
  return (
   <BrowserRouter>
    <Switch>
    <Route path={'/admin'}  render={route => {
      if(user){
          if(user.status === 2){
            return <AdminContainer {...route}/>
          }
       return   <Redirect to="/home"/>
      }else{
        return  <Redirect to="/home"/>
      }
       
      }}/>
      <Route path={"/login"} exact render={route => {
            if(!user){
              return <Login {...route}/>
            }
            return   <Redirect to="/home"/>
      }}
       />
  
       <Route path={'/404'} render={route => {
        return <Page404 {...route}/>
      }}/>
      
      <Route path={'/'} render={route => {
        return <UserContainer {...route}/>
      }}/>
     <Redirect to={"/404"} />
    </Switch>
    <ToastContainer />
   </BrowserRouter>

  );
}

export default App;
