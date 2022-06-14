import React from "react";
import PostComment from "./PostComment";
import CommentList from "./CommentList";
import "./SinglePage.css";

const SinglePage = ({ recipe }) => {
  return (
    <div className="singlePage-container">
      <div className="singlePage-containerTop">
        <div className="recipe-intro">
          <div className="recipe-heading">
            <h1>{recipe.title}</h1>
            <h3>{recipe.timeInMins} min</h3>
          </div>
          <p>{recipe.description}</p>
        </div>
        <div className="recipe-image">
          <img src={recipe.imageUrl} alt={recipe.title} />
        </div>
      </div>
      <div className="singlePage-containerBot">
        <div className="recipe-description">
          <div className="recipe-ingredients">
            <h2>Ingredienser</h2>
            <ul>
              {recipe.ingredients &&
                recipe.ingredients.map((ingredient) => (
                  <li key={ingredient._id}>{ingredient.name}</li>
                ))}
            </ul>
          </div>
          <div className="recipe-instructions">
            <h2>Tillagning</h2>
            <ul>
              {recipe.instructions &&
                recipe.instructions.map((instruction) => (
                  <li key={instruction._id}>{instruction}</li>
                ))}
            </ul>
          </div>
        </div>    
        </div>

        <PostComment />
        <CommentList />
      </div>
  );
};

export default SinglePage;
