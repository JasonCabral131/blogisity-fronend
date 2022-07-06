import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AdminContainer from "./container/admin";
import UserContainer from "./container/users";
import Login from "./pages/LoginSignup";
import { ToastContainer } from 'react-toastify';
function App() {
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
      <Route path={'/'} render={route => {
        return <UserContainer {...route}/>
      }}/>
   
    </Switch>
    <ToastContainer />
   </BrowserRouter>
  );
}

export default App;
