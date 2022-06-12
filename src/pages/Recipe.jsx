import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SinglePage from "../components/SinglePage";

function Recipe() {
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

	return isLoading ? <p>Laddar...</p> : <SinglePage recipe={details} />;
}

export default Recipe;
