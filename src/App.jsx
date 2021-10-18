
import { Route, Switch } from 'react-router-dom'
import Layout from './components/layout/Layout'
import GlobalStyles from './GlobalStyles'
import Dashboard from './pages/Dashboard'
import HomePage from './pages/HomePage'
import Pickup from './pages/Pickup'
function App() {
	return (
		<>
			<GlobalStyles />
			<Layout>
				<Switch>
					<Route path='/' exact>
						<HomePage />
					</Route>
					<Route path='/dashboard' exact>
						<Dashboard />
					</Route>
					<Route path='/pickup' exact>
						<Pickup />
					</Route>
				</Switch>
			</Layout>
		</>
	)
}

export default App
