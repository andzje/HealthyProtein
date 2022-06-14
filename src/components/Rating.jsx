import React, {useState} from "react";
import { useParams } from "react-router-dom";
import "./Rating.css";

const getStarValue = (position, id, setRatingMessage) => {
  const data = {rating: position}
  console.log('data',data);
  fetch(`https://tomat-pqblx.ondigitalocean.app/recipes/${id}/ratings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then()
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
setRatingMessage(true);
}

const renderStar = (width, position, id, setRatingMessage) => (
  
  <>
    <button onClick={() => getStarValue(position, id, setRatingMessage)} className={`star-wrapper`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="auto"
        viewBox="0 0 24 22"
      >
        <path
          d="M12.1063 0.018692L16.0757 6.28092L23.2761 8.10951L18.5289 13.8084L19.0096 21.2007L12.1063 18.4606L5.2029 21.2007L5.68359 13.8084L0.936398 8.10951L8.13683 6.28092L12.1063 0.018692Z"
          className="strokeStarRatingAttributes"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height="auto"
          className="fillStarRatingAttributes"
        >
          <path d="M12.1063 0.018692L16.0757 6.28092L23.2761 8.10951L18.5289 13.8084L19.0096 21.2007L12.1063 18.4606L5.2029 21.2007L5.68359 13.8084L0.936398 8.10951L8.13683 6.28092L12.1063 0.018692Z" />
        </svg>
      </svg>
    </button>
  </>
);

const Rating = ({ rating }) => {
  const [ratingMessage, setRatingMessage] = useState(false);
  const { recipeId } = useParams();
  let tempRatingsArr = [];
//   rating = rating ? !rating : 0;
  for (let i = 1; i <= 5; i++) {
    console.log(rating);
    if (rating - i < 1)
      tempRatingsArr.push(renderStar((rating - i) * 100 + "%", i, recipeId, setRatingMessage));
    else 
      tempRatingsArr.push(renderStar("100%", i, recipeId, setRatingMessage));
  }
  return (
    <div className="rating-container">
        {ratingMessage === false ?
      <><h1>Rating för receptet</h1><div className="rating-wrapper">{tempRatingsArr}</div></>
        : <h3>Tack för betyget!</h3>}
    </div>
  );
};

export default Rating;
