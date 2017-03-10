import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App text="This is the prop text" cat={5}/>,
  document.getElementById('root')
);
