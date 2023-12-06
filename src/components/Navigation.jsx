import React from 'react';
import { Link } from 'react-router-dom';

import GoogleLog from './Google';

function Navigation() {
  return (
    <div id='nav'>
      <Link className="item" to="/">Home</Link>
      <Link className='item' to='/your-city'>Your City's Pollution </Link>
      <Link className="item" to="/takeaction">Take Action</Link>
      <Link className="item" to="/about-climate-change">About Climate Change</Link>
      <GoogleLog />
    </div>
  );
}

export default Navigation;