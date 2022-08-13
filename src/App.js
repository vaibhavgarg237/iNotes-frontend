import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/Notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
import React from "react";

function App() {
	const [alert, setAlert] = useState("null");
	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert("null");
		}, 1500);
	};

	return (
		<>
			<NoteState>
				<BrowserRouter>
					<Navbar />
					<Alert alert={alert} />
					<div className="container">
						<Routes>
							<Route path="/" element={<Home showAlert={showAlert} />} />
							<Route path="about" element={<About />} />
							<Route path="login" element={<Login showAlert={showAlert} />} />
							<Route path="signup" element={<Signup showAlert={showAlert} />} />
						</Routes>
					</div>
				</BrowserRouter>
			</NoteState>
		</>
	);
}

export default App;
