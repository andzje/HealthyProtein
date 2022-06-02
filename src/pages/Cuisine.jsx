import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCards from "../components/RecipeCards";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://tomat-pqblx.ondigitalocean.app/categories/${name}/recipes`
    );
    const recipes = await data.json();
    setCuisine(recipes);
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <RecipeCards recipes={cuisine} />
  );
}

export default Cuisine;
