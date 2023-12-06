import React from 'react';

function Home() {
  return (
    <>
      <div className="content" id="content-index">
        {/*<div className="side-bar">
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
  </div>*/}

        <div id="sub-content">
          <h2>What is Climate Change?</h2>

          <div className="content-box">
            <p className="text">
            Welcome to CliChange, your go-to platform for taking meaningful action against climate change. Here, we believe that every small effort contributes to a greener, more sustainable future.
            </p>
            <p className='text'>Explore and understand the impact of climate change on our planet. Join us in the journey to make a difference and create a positive impact for generations to come.</p>
          </div>

          <div className="content-box">
            <p className="text">
            <b>Our mission is clear:</b> to empower individuals and communities to contribute to UN Goal #13: 
            Climate Action. Together, we strive to create a world that prioritizes environmental responsibility
            and resilience. 
            </p>
        </div>

          
        </div>

      </div>
    </>
  );
}

export default Home;
