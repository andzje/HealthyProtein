import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Axios from "axios";
import "./CommentList.css";

function CommentList() {
	const [comment, SetComment] = useState([]);
	const { recipeId } = useParams();

	useEffect(() => {
		Axios.get(`https://tomat-pqblx.ondigitalocean.app/recipes/${recipeId}/comments`)
			.then((res) => {
				SetComment(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	const arr = comment.map((data) => {
		return (
			<>
				{data.name}
				<br />
				{data.comment}
				<hr />
			</>
		);
	});
	return <div className="comment-container">
		<div className="comment-list">{arr}</div>
		</div>;
}
export default CommentList;
