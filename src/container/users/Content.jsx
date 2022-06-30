import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Home from '../../component/Home';
const Content = ({categories}) => {
  
  return (
    <div className='w-100'>
      <BrowserRouter>
          <Switch>
            <Route path={"/home"} render={route => {
              return <Home {...route}/>
            }}/>
            <Redirect to="/home" />
          </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Content