import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Options from './Components/Options';

ReactDOM.render(
  <>
    <App />
    <Options />
  </>,
  document.getElementById('root')
);

serviceWorker.unregister();
