import React from "react";
import "./SingleRecipe.css";

const SingleRecipe = (props) => {
  console.log(props);
  const {
    recipeTitle,
    recipeImage,
    recipeReadyInMinutes,
    recipeServings,
    recipeSourceUrl,
  } = props.location.state;
  return (
    <div className="single-recipe-wrapper">
      <h1 className="single-recipe-title">{recipeTitle}</h1>
      <p className="single-recipe-minutes">Ready in: {recipeReadyInMinutes}</p>
      <p className="single-recipe-servings">Servings for: {recipeServings}</p>
      <img
        className="single-recipe-img"
        src={`https://spoonacular.com/recipeImages/${recipeImage}`}
        alt={recipeTitle}
      />
      <a
        className="single-recipe-link"
        href={recipeSourceUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Link do przepisu
      </a>
    </div>
  );
};

export default SingleRecipe;
