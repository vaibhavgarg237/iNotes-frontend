import React, { useState } from "react";
import noteContext from "./noteContext";

function NoteState(props) {
	return (
		<noteContext.Provider value={{}}> {props.children} </noteContext.Provider>
	);
}

export default NoteState;
