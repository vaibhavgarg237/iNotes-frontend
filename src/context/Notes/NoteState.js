import React, { useState } from "react";
import noteContext from "./noteContext";

function NoteState(props) {
	const notesInitial = [
		{
			_id: "62f264946a2e92940e1b0daf1",
			user: "62f23026a50d7c4453a11595",
			title: "new fdbr",
			description: "dvfvrvb",
			tag: "vdfefeve",
			createdAt: "2022-08-09T13:43:48.498Z",
			updatedAt: "2022-08-09T16:59:37.929Z",
			__v: 0,
		},
		{
			_id: "62f264dce6d9968763a006752",
			user: "62f23026a50d7c4453a11595",
			title: "fdbr",
			description: "dvfvrvb",
			tag: "vdfefeve",
			createdAt: "2022-08-09T13:45:00.295Z",
			updatedAt: "2022-08-09T13:45:00.295Z",
			__v: 0,
		},
		{
			_id: "62f264946a2e92940e1b0daf3",
			user: "62f23026a50d7c4453a11595",
			title: "new fdbr",
			description: "dvfvrvb",
			tag: "vdfefeve",
			createdAt: "2022-08-09T13:43:48.498Z",
			updatedAt: "2022-08-09T16:59:37.929Z",
			__v: 0,
		},
		{
			_id: "62f264dce6d9968763a006754",
			user: "62f23026a50d7c4453a11595",
			title: "fdbr",
			description: "dvfvrvb",
			tag: "vdfefeve",
			createdAt: "2022-08-09T13:45:00.295Z",
			updatedAt: "2022-08-09T13:45:00.295Z",
			__v: 0,
		},
		{
			_id: "62f264946a2e92940e1b0daf5",
			user: "62f23026a50d7c4453a11595",
			title: "new fdbr",
			description: "dvfvrvb",
			tag: "vdfefeve",
			createdAt: "2022-08-09T13:43:48.498Z",
			updatedAt: "2022-08-09T16:59:37.929Z",
			__v: 0,
		},
		{
			_id: "62f264dce6d9968763a006756",
			user: "62f23026a50d7c4453a11595",
			title: "fdbr",
			description: "dvfvrvb",
			tag: "vdfefeve",
			createdAt: "2022-08-09T13:45:00.295Z",
			updatedAt: "2022-08-09T13:45:00.295Z",
			__v: 0,
		},
	];

	const [notes, setNote] = useState(notesInitial);

	function addNote(title, description, tag) {
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

	return (
		<noteContext.Provider value={{ notes, addNote }}>
			{" "}
			{props.children}{" "}
		</noteContext.Provider>
	);
}

export default NoteState;
