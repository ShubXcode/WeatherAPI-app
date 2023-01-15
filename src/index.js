import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Components/Header';
import './Components/style.css';
import Mainfile from './Components/Mainfile';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header/>
  </React.StrictMode>,
  document.getElementById('root')
);

