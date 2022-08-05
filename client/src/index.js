import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ArtProvider } from './contexts/ArtContext'

ReactDOM.render(
  <React.StrictMode>
    <ArtProvider>
      <App />
    </ArtProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

