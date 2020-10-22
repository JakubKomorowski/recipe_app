import React, { Component, useState } from "react";
import SearchRecipeForm from "./components/SearchRecipeForm/SearchRecipeForm";
import RecipeList from "./components/RecipeList/RecipeList";
import "./App.css";
import axios from "axios";

// class App extends Component {
//   state = {
//     recipes: [],
//   };

//   getRecipes = (e) => {
//     e.preventDefault();

//     const recipeNameInputValue = e.target.recipeNameInput.value;
//     const recipeSelectValue = e.target.recipesNumberSelect.value;

//     axios
//       .get(
//         `https://api.spoonacular.com/recipes/search?apiKey=b9b75c6e8389442389cbfe0dc815a684&query=${recipeNameInputValue}&number=${recipeSelectValue}`
//       )
//       .then((response) =>
//         this.setState({
//           recipes: [...response.data.results],
//         })
//       )
//       .catch((err) => console.error(err));

//     e.target.reset();
//   };

//   render() {
//     return (
//       <>
//         <SearchRecipeForm getRecipes={this.getRecipes} />
//         <RecipeList recipes={this.state.recipes} />
//       </>
//     );
//   }
// }

// export default App;

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = (e) => {
    e.preventDefault();

    const recipeNameInputValue = e.target.recipeNameInput.value;
    const recipeSelectValue = e.target.recipesNumberSelect.value;

    axios
      .get(
        `https://api.spoonacular.com/recipes/search?apiKey=b9b75c6e8389442389cbfe0dc815a684&query=${recipeNameInputValue}&number=${recipeSelectValue}`
      )
      .then((res) => {
        setRecipes([...res.data.results]);
      })
      .catch((err) => console.error(err));
    e.target.reset();
  };

  return (
    <>
      <SearchRecipeForm getRecipes={getRecipes} />
      <RecipeList recipes={recipes} />
    </>
  );
};

export default App;
