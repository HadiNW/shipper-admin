import Layout from './components/layout/Layout'
import GlobalStyles from './GlobalStyles'
import HomePage from './pages/HomePage'

import { Route, Switch } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
			<GlobalStyles />
			<Layout>
				<>
					<Switch>
						<Route path="/">
							<HomePage />
						</Route>
					</Switch>
				</>
			</Layout>
		</div>
	)
}

export default App
