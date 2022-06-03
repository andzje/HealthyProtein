import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCards from "../components/RecipeCards";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://tomat-pqblx.ondigitalocean.app/categories/${name}/recipes`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return <RecipeCards recipes={searchedRecipes} />
}

export default Searched;
