import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SinglePage from "../components/SinglePage";

function Recipe() {
  const {name} = useParams();
  const [details, setDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const fetchDetails = async () => {
    try {
      const data = await fetch(
        `https://tomat-pqblx.ondigitalocean.app/recipes/${name}/`
      );
      const detailData = await data.json();
      setDetails(detailData);
      setIsLoading(false);
    } catch (error) {console.log(error);}

  };

  useEffect(() => {
    setIsLoading(true);
    fetchDetails();
  }, [name]);

  return isLoading ? <p>Laddar...</p> : <SinglePage recipe={details} />;
}

export default Recipe;
