import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Title from './components/Title';
import Head from './components/Head';
import Navigation from './components/Navigation';

import YourCity from './components/YourCity';
import TakeAction from './components/TakeAction';
import Home from './components/Home';

function App() {
  return (
    <>
      <header>
        <Head />
      </header>

      <body>
        <Router>
          <Title />
          <Navigation />

          <Routes>
            <Route path='/' exact Component={ Home }></Route>
            <Route path='/yourcity' Component={ YourCity }></Route>
            <Route path='/takeaction' Component={ TakeAction}></Route>
          </Routes>
          
        </Router>
      </body>
    </>
  );
}

export default App;
