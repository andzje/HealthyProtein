import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  return <div>
      {searchedRecipes.map((item) => {
          return(
              <div key={item._id}>
                  <img src={item.imageUrl} alt="" />
                  <h4>{item.title}</h4>
              </div>
          )
      })}
  </div>;
}

export default Searched;
