import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import SingleRecipe from "../views/SingleRecipe/SingleRecipe";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/recipe/:title" component={SingleRecipe} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
