import React from 'react';
import './RecipeCards.css'

const renderCard = (recipe) => (
  <div className="card" key={recipe._id}>
    <div className="content-image">
      <img src={recipe.imageUrl} alt={recipe.title} />
      <div>
        <p>{recipe.avgRating}</p>
        <p>{recipe.categories}</p>
      </div>
    </div>
    <div className="content-details">
      <div>
        <a href="">{recipe.title}</a>
        <div>
          <p>{recipe.timeInMins}</p>
          <p>{recipe.ingredients.length}</p>
        </div>
      </div>
    </div>

    <p>{recipe.description}</p>




  </div>
)

const RecipeCards = (recipes) => (
  <div className="wrapper">
    {recipes.recipes.map(recipe => renderCard(recipe))}
  </div>
)

export default RecipeCards