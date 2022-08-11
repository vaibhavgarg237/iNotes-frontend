import React, { useContext } from "react";
import noteContext from "../context/Notes/noteContext";

function Noteitem(props) {
	const { deleteNote } = useContext(noteContext);
	const { note } = props;

	const handleDelete = () => {
		deleteNote(note._id);
	};

	return (
		// col-md = medium column, my-3= space b/w y axis should be 3
		<div className="col-md-3">
			<div className="card my-3">
				<div className="card-body">
					<h5 className="card-title">{note.title} </h5>
					<p className="card-text">{note.description}</p>
					<i className="fa-solid fa-pen-to-square mx-2"></i>
					<i className="fa-solid fa-trash mx-2" onClick={handleDelete}></i>
				</div>
			</div>
		</div>
	);
}

export default Noteitem;
