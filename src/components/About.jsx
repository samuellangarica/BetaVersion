import React from 'react';

function About() {
  return (
      <body>
        <div className="content" id="content-about-climate-change">
          <h1>About Climate Change</h1>
        </div>

        <div id="sub-content">
          <h2>Introduction</h2>
          <div className="content-box">
            <p className="text">
            Welcome to the "About Climate Change" section, where we delve into the critical issue
             of climate change and its profound impact on our planet. Gain a deeper understanding 
             of the science, causes, and consequences of climate change as we explore the path towards
              a more sustainable future.
            </p>
          </div>
        </div>

        <div id="sub-content">
          <h2>Understanding Climate Change:</h2>
          <div className="content-box">
            <p className="text">
            Climate change refers to long-term changes in temperature, precipitation, and other atmospheric 
            conditions on Earth. Human activities, such as the burning of fossil fuels and deforestation, 
            contribute significantly to the increase in greenhouse gas emissions, leading to global warming.
            </p>
          </div>
        </div>

        <div className="img-content-box">
            <div className="content">
              <p>Key Facts</p>
              <hr />
              <ul>
                <li>Earth's average temperature has risen over the past century, with severe consequences for ecosystems, weather patterns, and sea levels.</li>
                <li>Glacial retreat, extreme weather events, and disruptions to biodiversity are among the visible impacts of climate change.</li>
                <li>The urgency of addressing climate change is emphasized by international agreements, including the Paris Agreement, which aims to limit global warming.</li>
              </ul>
            </div>
          </div>

          <div className="img-content-box">
            <div className="content">
              <p>Causes of Climate Change:</p>
              <hr />
              <ul>
                <li><b>Greenhouse Gas Emissions:</b> The burning of fossil fuels releases carbon dioxide (CO2) and other greenhouse gases into the atmosphere.</li>
                <li><b>Deforestation:</b> The clearing of forests reduces the planet's capacity to absorb CO2.</li>
                <li><b>Industrial Activities:</b> Certain industrial processes release potent greenhouse gases.</li>
              </ul>
            </div>
          </div>

          <div className="img-content-box">
            <div className="content">
              <p>Consequences</p>
              <hr />
              <ul>
                <li>Challenges to biodiversity and ecosystems.</li>
                <li>Disruption of agriculture, leading to food insecurity.</li>
                <li>Increased frequency and intensity of extreme weather events.</li>
                <li>Rising sea levels threatening coastal regions.</li>
              </ul>
            </div>
          </div>

      </body>
  );
}

export default About;
