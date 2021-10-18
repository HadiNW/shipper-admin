import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { DriversListProvider } from './store/drivers-list-context';
import { SidebarProvider } from './store/sidebar-context';

ReactDOM.render(
  <React.StrictMode>
	  <BrowserRouter>
	  <SidebarProvider>
		<DriversListProvider>
			<App />
		</DriversListProvider>
		</SidebarProvider>
	  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
