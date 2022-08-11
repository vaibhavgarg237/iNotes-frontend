import React, { useContext, useState } from "react";
import noteContext from "../context/Notes/noteContext";

function AddNote() {
	const { addNote } = useContext(noteContext);
	const [note, setNote] = useState({
		title: "",
		description: "",
		tag: "default",
	});

	const handleSubmit = (e) => {
		console.log(note);
		e.preventDefault();
		addNote(note.title, note.description, note.tag);
	};

	const handleChange = (e) => {
		setNote({ ...note, [e.target.className]: e.target.value });
	};

	return (
		<div>
			<h2> Add a Note </h2>
			<form className="my-3">
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Title
					</label>
					<input
						type="text"
						className="title"
						id="title"
						aria-describedby="emailHelp"
						onChange={handleChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Description
					</label>
					<input
						type="text"
						className="description"
						id="description"
						onChange={handleChange}
					/>
				</div>
				<button
					type="submit"
					className="btn btn-primary"
					onClick={handleSubmit}
				>
					Add Note
				</button>
			</form>
		</div>
	);
}

export default AddNote;
