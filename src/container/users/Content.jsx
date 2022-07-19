import React from "react";
import {  Switch, Route, Redirect } from "react-router-dom";
import Home from "../../component/Home";
import { useSelector } from "react-redux";
import UserInformation from "../../pages/UserInformation";
import VerificationEmail from "../../component/VerificationEmail";
import Page404 from "../../pages/Page404";
import EmailVerification from "../../pages/EmailVerification";
import ViewCategory from "../../pages/ViewCategory";
import BlogView from "../../pages/BlogView";
import UserView from "../../pages/UserView";
const Content = ({ categories }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="w-100 user-container-content-provider">
  
        <Switch>
          <Route
            path={"/home"}
            exact
            render={(route) => {
              return <Home {...route} />;
            }}
          />
          <Route
            path={"/verify-email-address/:passwordToken"}
            
            render={(route) => {
              return <EmailVerification {...route} />;
            }}
          />
            <Route
            path={"/blog-content/:blog/:id"}
            
            render={(route) => {
              return <BlogView {...route} />;
            }}
          />
          <Route 
          path="/view-content/:category/:categoryId"
          render={(route) => {
            return <ViewCategory {...route} />;
          }}
          />
          <Route
            path={"/writer"}
            
            render={(route) => {
              if (user) {
                if (user.onboarding === 1)
                  return <UserInformation {...route} />;
                return <VerificationEmail {...route} />;
              } else {
                return <Redirect to="/" />;
              }
            }}
          />
          <Route 
          path={"/view-writer/:id"}
          name="View Writer"
          render={(route) => {
            return <UserView {...route}/>
          }}
          />
          <Route
            path={"/404"}
            render={(route) => {
              return <Page404 {...route} />;
            }}
          />
          <Redirect to="/home" />
        </Switch>
 
    </div>
  );
};

export default Content;
