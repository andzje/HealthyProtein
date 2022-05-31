import React from 'react';
import { useEffect, useState } from "react";
import RecipeCards from './RecipeCards';
import "./Recipes.css";


function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const api = await fetch(`https://tomat-pqblx.ondigitalocean.app/recipes`);
    const data = await api.json();
    setRecipes(data);
  };
  return <RecipeCards recipes={recipes}/>
}

export default Recipes;
