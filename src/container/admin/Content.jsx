import React from 'react'
import { Route, Switch} from "react-router-dom";
import { adminRoute } from '../../config/AdminRoute';
const Content = () => {
  return (
    <div className='w-100 container'>
      <Switch>
      {
        adminRoute.map((route, idx) => {
          return  <Route
              key={idx}
              path={"/admin"+route.path}
              exact={route.exact}
              name={route.name}
              render={(props) => (
                  <route.component {...props} />
              )}
            />
        })
      }
     </Switch>
 
    </div>
  )
}

export default Content