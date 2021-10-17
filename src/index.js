import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DriversListProvider } from './store/drivers-list-context';

ReactDOM.render(
  <React.StrictMode>
	  <DriversListProvider>
	  	<App />
	  </DriversListProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
