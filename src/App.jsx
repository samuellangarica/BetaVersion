import './App.css';
import React from 'react';

import Body from './pages/home/Body';
import Head from './components/Head';

function App() {
  return (
    <>
      <header>
        <Head />
      </header>

      <body>
        <Body />
      </body>
    </>
  );
}

export default App;
