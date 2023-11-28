import React from 'react';

import Head from '../../components/Head';
import Navbar from '../../components/Navbar';

function YourCity({ weatherData }) {
  return (
    <>
      <Head />

      <body>
        <Navbar />

        <div className="content" id="content-your-city">
          <h1>Your City: {weatherData.data.city}</h1>

          <div className="content-box" id="current-pollution">
            <h1>Current pollution</h1>

            <div className="row">
              <p className="title">Air Quality Index (AQI US): </p>
              <p className="value">{weatherData.data.current.pollution.aqius}</p>
            </div>
            <div className="row">
              <p className="title">Air Quality Index (AQI CN): </p>
              <p className="value">{weatherData.data.current.pollution.aqicn}</p>
            </div>
            <div className="row">
              <p className="title">Timestamp: </p>
              <p className="value">{weatherData.data.current.pollution.ts.slice(0, 10)}</p>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default YourCity;
