// Connecting styles
import "./styles.scss";

// Importing third party packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Importing Pages
import HomePage from "./pages/HomePage";

const App = () => {
	return (
		<div className="App">
			<Router>
				<Header />

				<Routes>
					<Route exact path="/" element={<HomePage />} />
				</Routes>

				<Footer />
			</Router>
		</div>
	);
};

export default App;
