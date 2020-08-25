import React from 'react';
import './App.css';
import Main from './Components/main';
import {HashRouter } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
      <div >
        <Main/>
      </div>
    </HashRouter>
  );
}

export default App;
