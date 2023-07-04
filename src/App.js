import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Divisi from './pages/Divisi';
import Kontak from './pages/Kontak';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/divisi"
					element={<Divisi />}
				/>
				<Route
					path="/kontak"
					element={<Kontak />}
				/>
			</Routes>
		</Router>
	);
}
