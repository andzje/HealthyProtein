import React from "react";
import Recipe from "../pages/Recipe";
import "./Rating.css";

const Rating = ({rating}) => (

        <div className="rating-container">

            {console.log('rating', rating)}
            {rating ? null : 1}
            {rating ? 0
                : rating.map(star=> renderStar())
            }
        </div>
);

export default Rating;