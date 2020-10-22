import React from "react";
import { Link } from "react-router-dom";
import "./RecipeList.css";

const RecipeList = ({ recipes }) => {
  return (
    <ul className="recipes-ul-wrapper">
      {recipes.map(
        ({ id, title, image, readyInMinutes, servings, sourceUrl }) => {
          return (
            <div className="recipes-li-wrapper">
              <li key={id}>
                <Link
                  to={{
                    pathname: `/recipe/${title.replace(/\s/g, "")}`,
                    // to jest stan linku czyli to co on przesyła a nie stan aplikacji!!!
                    state: {
                      recipeTitle: title,
                      recipeImage: image,
                      recipeReadyInMinutes: readyInMinutes,
                      recipeServings: servings,
                      recipeSourceUrl: sourceUrl,
                    },
                  }}
                >
                  <img
                    className="recipes-img"
                    src={`https://spoonacular.com/recipeImages/${image}`}
                    alt={title}
                  />
                </Link>

                <p className="recipes-title">{title}</p>
              </li>
            </div>
          );
        }
      )}
    </ul>
  );
};

export default RecipeList;
