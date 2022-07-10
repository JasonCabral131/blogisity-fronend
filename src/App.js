import React from "react";
import 'react-loading-skeleton/dist/skeleton.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AdminContainer from "./container/admin";
import UserContainer from "./container/users";
import Login from "./pages/LoginSignup";
import Page404 from "./pages/Page404";
import { ToastContainer } from 'react-toastify';
function App() {
     // eslint-disable-next-line
  return (
   <BrowserRouter>
    <Switch>
    <Route path={'/admin'}  render={route => {
        return <AdminContainer {...route}/>
      }}/>
      <Route path={"/login"} exact render={route => {
        return <Login {...route}/>
      }}
       />
       <Route path={'/404'} render={route => {
        return <Page404 {...route}/>
      }}/>
      <Route path={'/'} render={route => {
        return <UserContainer {...route}/>
      }}/>
   
    </Switch>
    <ToastContainer />
   </BrowserRouter>

  );
}

export default App;
