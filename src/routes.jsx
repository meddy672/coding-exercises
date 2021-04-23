// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';


// Components
import App from './pages/App';
import Fibonacci from './pages/Fibonacci';
import Contact from './pages/FizzBuzzAndFibonacci';
import FizzBuzz from './pages/FizzBuzz';
import Error404 from './pages/Error/404';

function AppRoutes() {
  const routes = [
    {
      path: '/fizzbuzz',
      component: FizzBuzz,
      exact: true
    },
    {
      path: '/fibonacci',
      component: Fibonacci,
      exact: true
    },
    {
      path: '/fibonacci-fizzbuzz',
      component: Contact,
      exact: true
    },
    {
      component: Error404
    }
  ]
  return (
    <App>
      <Switch>
        {routes.map((route, key) => {
          return <Route key={key}  {...route}/>
        } )}
      </Switch>
    </App>
  )
}



export default AppRoutes;
