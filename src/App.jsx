import Header from "./components/navbar/Header";
import GlobalStyles from "./GlobalStyles";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
		<GlobalStyles />
		<Header />
      <HomePage />
    </div>
  );
}

export default App;
