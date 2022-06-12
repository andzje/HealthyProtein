import React from "react";
import PostComment from "./PostComment";
import CommentList from "./CommentList";
import "./SinglePage.css";

<<<<<<< HEAD
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
=======
const SinglePage = ({recipe}) => {
    return (
        <div className='singlePage-container'>
            <div className="recipe-intro">
                <div className="recipe-heading">
                    <h1>{recipe.title}</h1>
                    <span>Betyg</span>
                    <h3>{recipe.timeInMins}</h3>
                </div>
                <p>{recipe.description}</p>
            </div>
            <div className="recipe-image">
                <img src={recipe.imageUrl} alt={recipe.title} />
            </div>
            <div className="recipe-description">
                <div className="recipe-ingredients">
                    <h2>Ingredienser</h2>
                    <ul>
                        {console.log(recipe.ingredients)}
                        {/* {Object.keys(recipe.ingredients[0])} */}
                        {/* {recipe.ingredients[0]} */}
                        {/* {console.log(recipe.ingredients.map(e=>e))} */}
                        
                    </ul>
                </div>
                <div className="recipe-instructions">

                </div>
            </div>
        </div>
    );
}
>>>>>>> 8e6633a191d9513a43405ae4492ca77722d8da2e

export default SinglePage;
