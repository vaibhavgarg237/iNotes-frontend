import React, { useContext } from "react";
import noteContext from "../context/Notes/noteContext";
import AddNote from "./AddNote";
import Noteitem from "./Noteitem";

function Notes() {
	const { notes } = useContext(noteContext);

	return (
		<>
			<AddNote />
			{/* row my-3 helps in multiple cards in 1 row, instead of container */}
			<div className="row my-3">
				<h2> Your Notes </h2>
				{notes.map((note) => {
					return <Noteitem key={note._id} note={note} />;
				})}
			</div>
		</>
	);
}

export default Notes;
