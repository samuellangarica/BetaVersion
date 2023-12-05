import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    

    <Navbar id="nav">
      <Link className="item" to="/">Home</Link>
      <Link className='item' to='/yourcity'>Your City's Pollution </Link>
      <Link className="item" to="/takeaction">Take Action</Link>
      <Link className="item" to="/about-climate-change">About Climate Change</Link>
    </Navbar>
  );
}

export default Navigation;