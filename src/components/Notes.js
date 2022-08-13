import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/Notes/noteContext";
import AddNote from "./AddNote";
import Noteitem from "./Noteitem";

function Notes() {
	const { notes, getAllNotes, editNote } = useContext(noteContext);
	useEffect(() => {
		getAllNotes();
	}, []);

	//edit functiionality
	const ref = useRef("");
	const refClose = useRef("");
	const updatedNote = (currentNote) => {
		ref.current.click();
		setNote({
			_id: currentNote._id,
			etitle: currentNote.title,
			edescription: currentNote.description,
			etag: currentNote.tag,
		});
	};

	//came along with addNote, for copying into edit functionality
	// const { addNote } = useContext(noteContext);
	const [note, setNote] = useState({
		_id: "",
		etitle: "",
		edescription: "",
		etag: "",
	});
	const handleSubmit = (e) => {
		// console.log(note);
		e.preventDefault();
		editNote(note._id, note.etitle, note.edescription, note.etag);
		refClose.current.click();
	};

	const handleChange = (e) => {
		setNote({ ...note, [e.target.id]: e.target.value });
	};

	return (
		<>
			<AddNote />
			<button
				ref={ref}
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
				className="d-none"
			></button>
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								{note.etitle}
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							{/* ......FROM ADD NOTE...... */}
							<form className="my-3">
								<div className="mb-3">
									<label htmlFor="exampleInputEmail1" className="form-label">
										Title
									</label>
									<input
										type="text"
										className="form-control"
										id="etitle"
										aria-describedby="emailHelp"
										onChange={handleChange}
										defaultValue={note.etitle}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="exampleInputPassword1" className="form-label">
										Description
									</label>
									<input
										type="text"
										className="form-control"
										id="edescription"
										onChange={handleChange}
										defaultValue={note.edescription}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="tag" className="form-label">
										Tag
									</label>
									<input
										type="text"
										className="form-control"
										id="etag"
										onChange={handleChange}
										defaultValue={note.etag}
									/>
								</div>
							</form>
							{/* ^^^^^^ FROM ADD NOTE ^^^^^^ */}
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
								ref={refClose}
							>
								Close
							</button>
							<button
								type="button"
								className="btn btn-primary"
								onClick={handleSubmit}
								disabled={
									note.etitle.length < 5 || note.edescription.length < 5
								}
							>
								Update Note
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* row my-3 helps in multiple cards in 1 row, instead of container */}
			<div className="row my-3">
				<h2> Your Notes </h2>
				<div className="container mx-2">
					{notes.length === 0 && "No notes to display"}
				</div>
				{notes.map((note) => {
					return (
						<Noteitem key={note._id} note={note} updateNote={updatedNote} />
					);
				})}
			</div>
		</>
	);
}

export default Notes;
