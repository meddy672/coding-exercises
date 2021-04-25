import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';



// We created a component with a simple arrow function.
const Header = props => {
  const {
    title = 'Welcome to React',
    url = 'http://localhost:3000'
  } = props;

  return (
    <header className="App-header">
      <a href={url}>
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <h1 className="App-title">{title}</h1>

      <ul>
        <li><NavLink activeClassName="active" to="/fizzbuzz">Fizz Buzz</NavLink></li>
        <li><NavLink activeClassName="active" to="/fibonacci">Fibonacci</NavLink></li>
        <li><NavLink activeClassName="active" to="/fibonacci-fizzbuzz">Fizz Buzz + Fibonacci</NavLink></li>
      </ul>
    </header>
  );
};

// Even with Functional Components we are able to validate our PropTypes.
Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default Header;
