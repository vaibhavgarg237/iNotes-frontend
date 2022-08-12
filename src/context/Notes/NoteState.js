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
		//response.json() returns a promise, whereas JSON.parse(response) is synchronous
		const note_ = await response.json();

		//Client Side addition
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
		const json = await response.json();

		//Client side deletion
		const updatedNote = notes.filter((el) => el._id !== id);
		setNote(updatedNote);
	}

	async function editNote(id, title, description, tag) {
		//Server side edit - API call
		const response = await fetch(`${host}notes/updatenote/${id}`, {
			method: "put",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmMjMwMjZhNTBkN2M0NDUzYTExNTk1In0sImlhdCI6MTY2MDAzOTIwNn0.0CksiIYy54pl2gHaZYJZuqeLV7JapbDppumxpCtciKc",
			},
			body: "data",
		});
		console.log(response);

		//Client side edit
		for (let index = 0; index < notes.length; index++) {
			const element = notes[index];
			if (element._id === id) {
				element.title = title;
				element.description = description;
				element.tag = tag;
			}
		}
		setNote(notes);
	}

	return (
		<noteContext.Provider
			value={{ notes, addNote, deleteNote, editNote, getAllNotes }}
		>
			{" "}
			{props.children}{" "}
		</noteContext.Provider>
	);
}

export default NoteState;
