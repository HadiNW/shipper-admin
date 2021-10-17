import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { DriversListProvider } from './store/drivers-list-context';

ReactDOM.render(
  <React.StrictMode>
	  <BrowserRouter>
		<DriversListProvider>
			<App />
		</DriversListProvider>
	  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
