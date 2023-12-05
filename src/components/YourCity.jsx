import React, { useEffect, useState } from 'react';

function YourCity() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/your-city');
        const data = await response.json();

        if (response.ok && data) {
          setWeatherData(data);
        } else {
          console.error('Error fetching data:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!weatherData || !weatherData.data || !weatherData.data.current || !weatherData.data.current.pollution) {
    return <p>Data not available.</p>;
  }

  const {
    city,
    current: { pollution },
  } = weatherData.data;

  return (
    <>
      <div className="content" id="content-your-city">
        <h1>Your City: {city}</h1>
        <div className="content-box" id="current-pollution">
          <h1>Current pollution</h1>
          <div className="row">
            <p className="title">Air Quality Index (AQI US): </p>
            <p className="value">{pollution.aqius}</p>
          </div>
          <div className="row">
            <p className="title">Air Quality Index (AQI CN): </p>
            <p className="value">{pollution.aqicn}</p>
          </div>
          <div className="row">
            <p className="title">Timestamp: </p>
            <p className="value">{pollution.ts.slice(0, 10)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default YourCity;