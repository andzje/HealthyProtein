import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { Route, Routes } from "react-router-dom";

function Pages() {
<<<<<<< HEAD
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/category/:type" element={<Cuisine />} />
			<Route path="/searched/:search" element={<Searched />} />
			<Route path="/recipe/:id" element={<Recipe />} />
		</Routes>
	);
=======
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:recipeId" element={<Recipe />}/>
    </Routes>
  );
>>>>>>> 8e6633a191d9513a43405ae4492ca77722d8da2e
}

export default Pages;
