import React, { useState } from "react";
import noteContext from "./noteContext";

function NoteState(props) {
	const state_ = {
		name: "Vg",
		Class: "5b",
	};
	const [State_, setState] = useState(state_);
	const updateState_ = () => {
		setTimeout(() => {
			setState({ name: "Ug", Class: "10b" });
		}, 1000);
	};

	return (
		<noteContext.Provider
			value={{ state_: state_, State_: State_, updateState_: updateState_ }}
		>
			{" "}
			{props.children}{" "}
		</noteContext.Provider>
	);
}

export default NoteState;
