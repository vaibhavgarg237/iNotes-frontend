import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/Notes/NoteState";

function App() {
	return (
		<>
			<NoteState>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="about" element={<About />} />
					</Routes>
				</BrowserRouter>
			</NoteState>
		</>
	);
}

export default App;
