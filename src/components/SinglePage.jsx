import React from "react";
import PostComment from "./PostComment";
import CommentList from "./CommentList";
import "./SinglePage.css";

const SinglePage = ({ recipe }) => {
	console.log(recipe.recipe);
	return (
		<div>
			<h1>{recipe.title}</h1>
			{recipe.description}
			<div className="comments">
				<PostComment />
				<CommentList />
			</div>
		</div>
	);
};

export default SinglePage;
