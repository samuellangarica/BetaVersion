import React from 'react';

function TakeAction() {
  return (
    <>
      <body>
        <div className="content" id="content-take-action">
          <h1>Take Action</h1>

          <div className="img-content-box">
            <img src="../images/earth-water.png" width="200px" height="200px" alt="water-drop-icon" />
            <div className="content">
              <p>Reduce Water Usage</p>
              <hr />
              <ul>
                <li>Fix leaks and install water-saving fixtures.</li>
                <li>Water your garden during cooler times of the day to reduce evaporation.</li>
              </ul>
            </div>
          </div>

          <div className="img-content-box">
            <img src="../images/public-transport.png" width="200px" height="200px" alt="transportation-icon" />
            <div className="content">
              <p>Transportation</p>
              <hr />
              <ul>
                <li><b>Public Transit:</b> Use public transportation, carpool, or bike when possible.</li>
                <li><b>Electric Vehicles (EVs):</b> Consider switching to an electric vehicle or a more fuel-efficient vehicle.</li>
              </ul>
            </div>
          </div>

          <div className="img-content-box">
            <img src="../images/energy.png" width="200px" height="200px" alt="energy-icon" />
            <div className="content">
              <p>Energy-Efficient Appliances</p>
              <hr />
              <ul>
                <li><b>Choose Energy-Efficient Appliances:</b> When it's time to replace appliances, choose those with the ENERGY STAR label.</li>
                <li><b>Unplug Devices:</b> Unplug chargers and electronics when they are not in use to save energy.</li>
              </ul>
            </div>
          </div>

        </div>
      </body>
    </>
  );
}

export default TakeAction;
