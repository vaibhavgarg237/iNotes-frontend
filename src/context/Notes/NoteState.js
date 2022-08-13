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
				"auth-token": localStorage.getItem("token"),
			},
		});
		const json = await response.json();
		// console.log(json);
		setNote(json);
	};

	async function addNote(title, description, tag) {
		//Server side addition - API call
		const response = await fetch(`${host}api/notes/addnote`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("token"),
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
				"auth-token": localStorage.getItem("token"),
			},
		});
		const json = await response.json();

		//Client side deletion
		const updatedNote = notes.filter((el) => el._id !== id);
		setNote(updatedNote);
	}

	async function editNote(id, title, description, tag) {
		//Server side edit - API call
		const response = await fetch(`${host}api/notes/updatenote/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("token"),
			},
			body: JSON.stringify({ title, description, tag }),
		});
		// console.log(response.json());

		//CREATES A DEEP COPY, HENCE TABHI ABLE TO CHANGE!!!
		let newNotes = JSON.parse(JSON.stringify(notes));
		//Client side edit
		for (let index = 0; index < newNotes.length; index++) {
			const element = newNotes[index];
			if (element._id === id) {
				newNotes[index].title = title;
				newNotes[index].description = description;
				newNotes[index].tag = tag;
				break;
			}
		}
		setNote(newNotes);
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
