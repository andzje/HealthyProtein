import React from "react";
import { Link } from "react-router-dom";
import "./RecipeCards.css";

const renderCard = (recipe) => (
  <Link to={"/recipe/" + recipe._id}>
    <div className="card" key={recipe._id}>
      <div className="content-image">
        <img src={recipe.imageUrl} alt={recipe.title} />
        <div>
          <div className="card-capsule-wrapper">
            {recipe.categories.map((tag) => (
              <span className="capsule-tag">{tag}</span>
            ))}
          </div>
          <span>{recipe.avgRating}</span>
        </div>
      </div>
      <div className="content-details">
        <div>
          <a className="card-title" href="">
            {recipe.title}
          </a>
          <div>
            <p>{recipe.timeInMins}</p>
            <p>{recipe.ingredients.length}</p>
          </div>
        </div>
      </div>

      <p>{recipe.description}</p>
    </div>
  </Link>
);

const RecipeCards = (recipes) => (
  <div className="wrapper">
    {recipes.recipes.map((recipe) => renderCard(recipe))}
  </div>
);

export default RecipeCards;
