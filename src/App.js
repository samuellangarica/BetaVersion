import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Title from './components/Title.jsx';
import Head from './components/Head.jsx';
import Navigation from './components/Navigation.jsx';

import YourCity from './components/YourCity.jsx';
import TakeAction from './components/TakeAction.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';

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
            <Route path='/about-climate-change' Component={ About}></Route>
            
          </Routes>
          
        </Router>
      </body>
    </>
  );
}

export default App;
