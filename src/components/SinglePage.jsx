import React from 'react';
import "./SinglePage.css"

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

export default SinglePage;