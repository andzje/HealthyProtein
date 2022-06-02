import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Cuisine.css";

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
    <div className="grid">
      {cuisine.map((item) => {
        return (
          <div className="card-cuisine" key={item._id}>
            <img src={item.imageUrl} alt="" />
            <h4>{item.title}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Cuisine;
