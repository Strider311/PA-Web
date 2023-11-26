// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './mocks/setup'; // Import the MSW setup file
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
