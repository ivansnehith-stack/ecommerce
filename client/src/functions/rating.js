import React from "react";
import StarRating from "react-star-ratings";

export const showAverage = (product) => {
  if (product && product.ratings) {
    let ratingsArray = product && product.ratings;
    let total = [];
    let length = ratingsArray.length;

    ratingsArray.map((rating) => total.push(rating.star));
    let totalReduced = total.reduce((prev, next) => prev + next, 0);
    let highest = length * 5; //if everyone give highest possible rating we calculate highest
    let result = (totalReduced * 5) / highest;

    return (
      <div className="text-center pt-1 pb-3">
        <span>
          <StarRating
            starDimension="20px"
            starSpacing="2px"
            starRatedColor="red"
            editing={false}
            rating={result}
          />
          {product.ratings.length}
        </span>
      </div>
    );
  }
};
