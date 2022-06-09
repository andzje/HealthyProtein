import React from 'react';
import "./SinglePage.css"


const renderPage = (recipe) => (
    <div>{recipe.title}</div>
);

const SinglePage = ({recipe}) => (
    <pre>
    <code>{JSON.stringify(recipe, null, 2)}</code>
    {/* {renderPage(recipe)} */}
    {/* {console.log(Object.keys(recipe))} */}
  </pre>
);

export default SinglePage;