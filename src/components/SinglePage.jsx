import React from "react";
import PostComment from "./PostComment";
import CommentList from "./CommentList";
import "./SinglePage.css";

const SinglePage = ({ recipe }) => (
        <div className='singlePage-container'>
            <div className='singlePage-containerTop'>
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
            </div>
            <div className="recipe-description">
                <div className="recipe-ingredients">
                    <h2>Ingredienser</h2>
                    <ul>
                        {/* <h1>{recipe.ingredients}</h1> */}
                        
                        {/* {console.log('ingredients',Object.keys(recipe.ingredients))} */}
                        {/* {Object.keys(recipe.ingredients[0])} */}
                        {/* {recipe.ingredients[0]} */}
                        {/* {console.log(recipe.ingredients.map(e=>e))} */}

                    </ul>
                </div>
                <div className="recipe-instructions">

                </div>
                <PostComment />
				<CommentList />
            </div>
        </div>
    );

export default SinglePage;
