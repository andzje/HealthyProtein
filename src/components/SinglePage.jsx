import React from 'react';
import "./SinglePage.css"

const SinglePage = (recipe) => {
    console.log(recipe.title);
    return (
        <div>
            {recipe.title}
        </div>
    );
}

export default SinglePage;