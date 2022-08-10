import React, { useContext, useEffect } from "react";
import noteContext from "../context/Notes/noteContext";

function About() {
	const a = useContext(noteContext);
	useEffect(() => {
		a.updateState_();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			About
			{a.State_.name}
			{console.log(a.State_.name)}
		</>
	);
}

export default About;
