import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div id="nav">
      <a className="item" href="/">Home</a>
      <a className="item" to="">Your City's Pollution </a>
      <a className="item" href="/take-action">Take Action</a>
      <a className="item" href="/about-climate-change">About Climate Change</a>
    </div>
  );
}

export default Navbar;