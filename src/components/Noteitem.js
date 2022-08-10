import React from "react";

function Noteitem(props) {
	const { title, description, _id } = props.note;
	return (
		// col-md = medium column, my-3= space b/w y axis should be 3
		<div className="col-md-3">
			<div className="card my-3">
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
}

export default Noteitem;
