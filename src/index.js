import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from  './App2'
import LifeCycle from  './LifeCycle'

ReactDOM.render(
  <App text="This is the prop text" cat={5}/>,
  document.getElementById('root')
);

ReactDOM.render(<LifeCycle/>,document.getElementById('root2'))
