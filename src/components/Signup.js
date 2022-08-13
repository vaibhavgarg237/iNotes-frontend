import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
	const navigate = useNavigate();

	const host = "http://localhost:5000";

	const [credentials, setCredentials] = useState({
		name: "",
		email: "",
		password: "",
		cpassword: "",
	});
	const handleChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	const handleSignup = async (e) => {
		e.preventDefault(); //to avoid reload on submit
		const response = await fetch(`${host}/api/auth/createuser`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: credentials.name,
				email: credentials.email,
				password: credentials.password,
			}),
		});
		const res = await response.json();
		console.log(res);
		if (res.success) {
			localStorage.setItem("token", res.tokenn);
			navigate("/");
			props.showAlert("Signup Successful!", "success");
		} else {
			props.showAlert("Invalid details", "danger");
		}
	};
	return (
		<div className="mt-2">
			<h2>Signup to continue!</h2>
			<form onSubmit={handleSignup}>
				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						Name
					</label>
					<input
						type="text"
						className="form-control"
						name="name"
						id="name"
						onChange={handleChange}
						value={credentials.name}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email
					</label>
					<input
						type="email"
						className="form-control"
						id="email"
						name="email"
						aria-describedby="emailHelp"
						onChange={handleChange}
						value={credentials.email}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						name="password"
						id="password"
						onChange={handleChange}
						value={credentials.password}
						minLength={5}
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						Confirm Password
					</label>
					<input
						type="password"
						className="form-control"
						name="cpassword"
						id="cpassword"
						onChange={handleChange}
						value={credentials.password}
						minLength={5}
						required
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Signup
				</button>
			</form>
		</div>
	);
}

export default Signup;
