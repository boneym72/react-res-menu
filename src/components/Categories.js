import React from "react";
import axios from "axios";

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {}
    };
    this.getCategories = this.getCategories.bind(this);
  }
  componentDidMount() {
    this.getCategories();
  }
  getCategories() {
    axios
      .get("https://davids-restaurant.herokuapp.com/categories.json")
      .then(response => {
        console.log(response);
        this.setState({
          categories: response.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>Welcome to Restaurant</h1>
        <a href="#/">HOME</a> &nbsp;
        <a href="#/categories">Categories</a>
        <div style={{ padding: "10px" }}>
          <span> Menu Categories</span>
          <ul style={{ marginLeft: "25%" }}>
            {this.state.categories && this.state.categories.length > 0
              ? this.state.categories.map(
                  function(category, i) {
                    return (
                      <li key={i}>
                        <a href={"#/categories/item/" + category.short_name}>
                          {category.name} - ({category.short_name})
                        </a>
                      </li>
                    );
                  }.bind(this)
                )
              : null}
          </ul>
        </div>
      </div>
    );
  }
}
export default Categories;
