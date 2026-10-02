import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App.js';
import reportWebVitals from './reportWebVitals';
import SumarNumeros from './components/sumarnumeros/SumarNumeros.js';
import SaludoPadre from './components/SaludoPadre.js';
import PadreMatematicas from './components/PadreMatematicas.js';
import Contador from './components/Contador.js';
import Car from './components/Car.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Car marca="Seat" modelo="Leon" velocidadMaxima="200" aceleracion="25"/>
     <Car marca="Ford" modelo="Mustang" velocidadMaxima="350" aceleracion="45"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
