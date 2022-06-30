import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AdminContainer from "./container/admin";
import UserContainer from "./container/users";
import Login from "./pages/Login";
function App() {
  return (
   <BrowserRouter>
    <Switch>
    <Route path={'/admin'} exact render={route => {
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
   </BrowserRouter>
  );
}

export default App;
