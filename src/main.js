import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import App from "./App.js";
import Categories from "./Categories.js";
import CategoriesDetail from "./CategoriesDetail.js";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/categories" component={Categories} />
      <Route path="/categories/item/:id" component={CategoriesDetail} />
    </div>
  </Router>,
  document.getElementById("app")
);
ReactDOM.render(<App />, document.getElementById("app"));
