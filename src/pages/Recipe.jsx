import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SinglePage from "../components/SinglePage";

function Recipe() {
<<<<<<< HEAD
	const { id } = useParams();
	const [details, setDetails] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const fetchDetails = async () => {
		const data = await fetch(
			`https://tomat-pqblx.ondigitalocean.app/recipes/${id}/`
		);
		const detailData = await data.json();
		setDetails(detailData);
		setIsLoading(false);
	};

	useEffect(() => {
		setIsLoading(true);
		fetchDetails();
	}, [id]);
=======
  const {recipeId} = useParams();
  const [details, setDetails] = useState({});
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
  // details.ingredients.map(e=>console.log(e));

  // console.log('details',details.ingredients);
>>>>>>> 8e6633a191d9513a43405ae4492ca77722d8da2e

	return isLoading ? <p>Laddar...</p> : <SinglePage recipe={details} />;
}

export default Recipe;
