import React from 'react';
import Navbar from '../../components/Navbar';

function Body() {
  return (
    <>
      <Navbar />
      <div className="content" id="content-index">
        <div className="side-bar">
          <a href="#">
            <h6>What is Climate Change?</h6>
          </a>
          <a href="#">
            <h6>About UN's goal 13</h6>
          </a>
          <a href="#">
            <h6>About UN's goal 13</h6>
          </a>
          <a href="#">
            <h6>About UN's goal 13</h6>
          </a>
        </div>

        <div id="sub-content">
          <h2>What is Climate Change?</h2>

          <div className="content-box">
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non velit mi. Quisque condimentum quam dolor, vel fermentum ex rutrum eget. Etiam malesuada ornare dui eget facilisis. Aliquam luctus sagittis libero. Aliquam erat volutpat. Vestibulum ac odio nisi. Nam tempor lacus sit amet ligula venenatis venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
