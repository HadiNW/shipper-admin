import Layout from "./components/layout/Layout";
import GlobalStyles from "./GlobalStyles";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
		<GlobalStyles />
		<Layout>
			<HomePage />
		</Layout>
    </div>
  );
}

export default App;
