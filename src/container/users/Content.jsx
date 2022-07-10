import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Home from '../../component/Home';
import {useSelector} from "react-redux";
import UserInformation from '../../pages/UserInformation';
import VerificationEmail from '../../component/VerificationEmail';
import Page404 from '../../pages/Page404';
const Content = ({categories}) => {
  const {user} = useSelector(state => state.auth)
  return (
    <div className="w-100">
      <BrowserRouter>
        <Switch>
          <Route
            path={"/"}
            exact
            render={(route) => {
              return <Home {...route} />;
            }}
          />
          <Route
            path={"/writer"}
            exact
            render={(route) => {
                if(user){
                  if(user.onboarding === 1) return <UserInformation {...route} />;
                  return <VerificationEmail {...route}/>
                 
                }else{
                 return <Redirect to="/" />
                }
             
            }}
          />
            <Route path={'/404'} render={route => {
            return <Page404 {...route}/>
           }}/>
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Content