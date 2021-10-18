
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Spinner from './components/spinner/Spinner'
import GlobalStyles from './GlobalStyles'

const HomePage = React.lazy(() => import('./pages/HomePage'))
const Pickup = React.lazy(() => import('./pages/Pickup'))
const Dashboard = React.lazy(() => import('./pages/Dashboard'))

function App() {
	return (
		<>
			<GlobalStyles />
			<Layout>
				<Switch>
					<React.Suspense fallback={<Spinner />}>
						<Route path='/' exact>
							<HomePage />
						</Route>
						<Route path='/dashboard' exact>
							<Dashboard />
						</Route>
						<Route path='/pickup' exact>
							<Pickup />
						</Route>
					</React.Suspense>
				</Switch>
			</Layout>
		</>
	)
}

export default App
