import React, { useState } from "react";
import noteContext from "./noteContext";

function NoteState(props) {
	const host = "http://localhost:5000/";
	const notesInitial = [];
	const [notes, setNote] = useState(notesInitial);

	const getAllNotes = async () => {
		const response = await fetch(`${host}api/notes/fetchallnotes`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmMjMwMjZhNTBkN2M0NDUzYTExNTk1In0sImlhdCI6MTY2MDAzOTIwNn0.0CksiIYy54pl2gHaZYJZuqeLV7JapbDppumxpCtciKc",
			},
		});
		const json = await response.json();
		console.log(json);
		setNote(json);
	};

	async function addNote(title, description, tag) {
		//Server side addition - API call
		const response = await fetch(`${host}api/notes/addnote`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmMjMwMjZhNTBkN2M0NDUzYTExNTk1In0sImlhdCI6MTY2MDAzOTIwNn0.0CksiIYy54pl2gHaZYJZuqeLV7JapbDppumxpCtciKc",
			},
			body: JSON.stringify({ title, description, tag }),
		});
		console.log(response);

		//Client Side addition
		const note_ = {
			_id: "62f264dce6d9968763a006756d",
			user: "62f23026a50d7c4453a11595",
			title: title,
			description: description,
			tag: tag,
			createdAt: "2022-08-09T13:45:00.295Z",
			updatedAt: "2022-08-09T13:45:00.295Z",
			__v: 0,
		};
		setNote(notes.concat(note_));
	}

	async function deleteNote(id) {
		//Server side deletion - API call
		const response = await fetch(`${host}api/notes/deletenote/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmMjMwMjZhNTBkN2M0NDUzYTExNTk1In0sImlhdCI6MTY2MDAzOTIwNn0.0CksiIYy54pl2gHaZYJZuqeLV7JapbDppumxpCtciKc",
			},
		});
		console.log(response);

		//Client side deletion
		const updatedNote = notes.filter((el) => {
			return el._id !== id;
		});
		setNote(updatedNote);
	}

	return (
		<noteContext.Provider value={{ notes, addNote, deleteNote, getAllNotes }}>
			{" "}
			{props.children}{" "}
		</noteContext.Provider>
	);
}

export default NoteState;
