import React, { useContext } from "react";
import noteContext from "../context/Notes/noteContext";
import Noteitem from "./Noteitem";

function Notes() {
	const { notes, setNote } = useContext(noteContext);

	return (
		// row my-3 helps in multiple cards in 1 row, instead of container
		<div className="row my-3">
			<h2> Your Notes </h2>
			{notes.map((note) => {
				return <Noteitem key={note._id} note={note} />;
			})}
		</div>
	);
}

export default Notes;
