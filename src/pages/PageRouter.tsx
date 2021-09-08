import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { routes } from './routeConfig'

const PageRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route {...route} exact />
        ))}
      </Switch>
    </Router>
  )
}

export default PageRouter
