import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SinglePage from "../components/SinglePage";

function Recipe() {
  const {name} = useParams();
  const [details, setDetails] = useState();
  console.log("details",details);
  const fetchDetails = async () => {
    const data = await fetch(
      `https://tomat-pqblx.ondigitalocean.app/recipes/${name}/`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [name]);

  return <SinglePage recipe={details} />;
}

export default Recipe;
