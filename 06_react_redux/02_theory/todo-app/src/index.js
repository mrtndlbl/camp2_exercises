import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Todo />,
  document.getElementById('root')
);
registerServiceWorker();
