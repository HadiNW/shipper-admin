import Layout from './components/layout/Layout'
import GlobalStyles from './GlobalStyles'
import HomePage from './pages/HomePage'

import { Route, Switch } from 'react-router-dom'

function App() {
	return (
		<>
			<GlobalStyles />
			<Layout>
					<Switch>
						<Route path='/' exact>
							<HomePage />
						</Route>
					</Switch>
			</Layout>
		</>
	)
}

export default App
