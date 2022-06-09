import React from "react";
import { Link } from "react-router-dom";
import "./RecipeCards.css";

const renderCard = (recipe) => (
  <div className="card" key={recipe._id}>
    <div className="content-image">
      <img src={recipe.imageUrl} alt={recipe.title} />
      <div>
        <div className="list card-capsule-wrapper">
          {recipe.categories.map((tag) => (
            <span className="capsule-tag">{tag}</span>
          ))}
        </div>
        <span>{recipe.avgRating}</span>
      </div>
    </div>
    <div className="content-details">
      <div className="content-info">
        <Link className="card-title" to={"/recipe/" + recipe._id}>
          {recipe.title}
        </Link>

        <div>
          <span className="card-ingredients">{recipe.ingredients.length} ingredienter</span>
          <span className="card-time">{recipe.timeInMins} minuter</span>
        </div>
      </div>
        <p>{recipe.description}</p>
    </div>
    
    
  </div>
);

const RecipeCards = ({recipes}) => (
  <div className="wrapper">
    {recipes.map((recipe) => renderCard(recipe))}
  </div>
);

export default RecipeCards;
