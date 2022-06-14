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
	const [nameErr, setNameErr] = useState(true);
	const [commentErr, setCommentErr] = useState(true);

	function nameHandler(e) {
		const newData = { ...data };
		newData[e.target.id] = e.target.value;
		setData(newData);

		let item = e.target.value;
		if (item.length < 1) {
			setNameErr(true);
		} else {
			setNameErr(false);
		}
	}
	function commentHandler(e) {
		const newData = { ...data };
		newData[e.target.id] = e.target.value;
		setData(newData);

		let item = e.target.value;
		if (item.length < 1) {
			setCommentErr(true);
		} else {
			setCommentErr(false);
		}
	}

	function submit(e) {
		e.preventDefault();
		Axios.post(url, {
			comment: data.comment,
			name: data.name,
		}).then((res) => {
			console.log(res.data);
		});
	}
	return (
		<div className="post">
			<p>LÅT ANDRA VETA VAD DU TYCKTE OM RECEPTET</p>
			<br />
			<form onSubmit={(e) => submit(e)}>
				Namn:{" "}
				<input
					onChange={(e) => nameHandler(e)}
					id="name"
					value={data.name}
					type="text"
				/>
				{nameErr ? <span>Fyll i ditt namn</span> : null}
				<br />
				Kommentar:{" "}
				<input
					onChange={(e) => commentHandler(e)}
					id="comment"
					value={data.comment}
					type="text"
				/>
				{commentErr ? <span>Fyll i din kommentar</span> : null}
				<br />
				<button className="button" type="submit">
					Skicka
				</button>
			</form>
		</div>
	);
}
export default PostComment;
