import React from "react";
import "./SearchRecipeForm.css";

const SearchRecipeForm = ({ getRecipes }) => {
  return (
    <form className="search-form" onSubmit={getRecipes}>
      <div className="search-recipe-wrapper">
        <label className="search-recipe-label" htmlFor="recipeNameInput">
          Search Recipe:{" "}
        </label>
        <input
          className="search-input"
          type="text"
          id="recipeNameInput"
          name="recipeNameInput"
        />
        <label className="recipe-number-label" htmlFor="recipesNumberSelect">
          Number of recipes:{" "}
        </label>
        <select
          className="recipe-number-select"
          name="recipesNumberSelect"
          id="recipesNumberSelect"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>

        <button className="search-button" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchRecipeForm;
