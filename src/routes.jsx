// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { staticContent } from './static-content';

// Components
import App from './pages/App';
import Fibonacci from './pages/Fibonacci';
import FizzBuzz from './pages/FizzBuzz';
import FizzBuzzFibonacci from './pages/FizzBuzzAndFibonacci';
import Error404 from './pages/Error/404';

function AppRoutes() {

  // Site Routes
  const routes = [
    {
      path: '/fizzbuzz',
      exact: true,
      render: () => (
        <FizzBuzz content={staticContent.FizzBuzz} />
      )
    },
    {
      path: '/fibonacci',
      exact: true,
      render: () => (
        <Fibonacci content={staticContent.Fibonacci} />
      )
      
    },
    {
      path: '/fibonacci-fizzbuzz',
      exact: true,
      render: () => (
        <FizzBuzzFibonacci content={staticContent.FibonacciAndFizzBuzz} />
      )
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
