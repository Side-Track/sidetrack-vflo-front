import React, { lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import GlobalStyles from './styles/GlobalStyles';
import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement,
);
