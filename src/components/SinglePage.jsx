import React from 'react';
import "./SinglePage.css"

const SinglePage = ({recipe}) => {
    console.log(recipe.recipe);
    return (
        <div>
            {recipe.title}
            {recipe.description}
        </div>
    );
}

export default SinglePage;