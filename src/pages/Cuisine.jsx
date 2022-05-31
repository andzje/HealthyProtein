import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import "./Cuisine.css"

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {

    const data = await fetch(`https://tomat-pqblx.ondigitalocean.app/categories/${name}/recipes`)
    const recipes = await data.json();
    setCuisine(recipes.results)
  }

  useEffect (() => {
    getCuisine(params.type)
    console.log(params.type);
  }, [params.type]);

  return (
    <div></div>
  )
}

export default Cuisine