import React, { useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import "./PostComments.css";

function PostComment() {
	const { recipeId } = useParams();
	const url = `https://tomat-pqblx.ondigitalocean.app/recipes/${recipeId}/comments`;
	const [data, setData] = useState({
		comment: "",
		name: "",
	});

	function submit(e) {
		e.preventDefault();
		Axios.post(url, {
			comment: data.comment,
			name: data.name,
		}).then((res) => {
			console.log(res.data);
		});
	}

	function handle(e) {
		const newData = { ...data };
		newData[e.target.id] = e.target.value;
		setData(newData);
		console.log(newData);
	}
	return (
		<div className="post">
			<p>LÅT ANDRA VETA VAD DU TYCKTE OM RECEPTET</p>
			<br />
			<form onSubmit={(e) => submit(e)}>
				Namn:{" "}
				<input
					onChange={(e) => handle(e)}
					id="name"
					value={data.name}
					type="text"

				/>
				Kommentar:{" "}
				<textarea
					onChange={(e) => handle(e)}
					id="comment"
					value={data.comment}
					type="text"
				/>
				<button className="button" type="submit">Skicka</button>
			</form>
		</div>
	);
}
export default PostComment;
