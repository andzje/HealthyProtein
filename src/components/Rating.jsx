import React from "react";
import Recipe from "../pages/Recipe";
import "./Rating.css";

const renderStar = (width, position) => (
<>
  <span className={ `star-wrapper starValue-${position}`}>
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 24 22">
  <path d="M12.1063 0.018692L16.0757 6.28092L23.2761 8.10951L18.5289 13.8084L19.0096 21.2007L12.1063 18.4606L5.2029 21.2007L5.68359 13.8084L0.936398 8.10951L8.13683 6.28092L12.1063 0.018692Z" className="strokeStarRatingAttributes"/>
  <svg xmlns="http://www.w3.org/2000/svg"  width={width} height="auto" className="fillStarRatingAttributes">
  <path d="M12.1063 0.018692L16.0757 6.28092L23.2761 8.10951L18.5289 13.8084L19.0096 21.2007L12.1063 18.4606L5.2029 21.2007L5.68359 13.8084L0.936398 8.10951L8.13683 6.28092L12.1063 0.018692Z" />
  </svg>
  </svg>
  
  </span>
  </>
)

const Rating = ({rating}) => {
    let tempRatingsArr = [];
    rating = rating ? !rating : 3.4
    for (let i = 1; i <= 5; i++) {
        console.log(i);
        if((rating - i) < 1)
            tempRatingsArr.push(renderStar((rating - i)*100+"%", i));
        else
            tempRatingsArr.push(renderStar("100%", i));
    }
return (
    
        <div className="rating-container">
        <h1>Rating för receptet</h1>
            <div className="rating-wrapper">
                {tempRatingsArr}
            </div>
        </div>
)
};

export default Rating;