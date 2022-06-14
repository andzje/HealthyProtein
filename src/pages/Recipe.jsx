import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SinglePage from "../components/SinglePage";
import Rating from "../components/Rating";

function Recipe() {
  const { recipeId } = useParams();
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchDetails = async () => {
    const data = await fetch(
      `https://tomat-pqblx.ondigitalocean.app/recipes/${recipeId}/`
    );
    console.log(`https://tomat-pqblx.ondigitalocean.app/recipes/${recipeId}/`);
    const detailData = await data.json();
    setDetails(detailData);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchDetails();
  }, [recipeId]);

  return (
    <>
      {isLoading ? <p>Laddar...</p> : <SinglePage recipe={details} />}
      {<Rating rating={details.rating} />}
    </>
  );
}

export default Recipe;
