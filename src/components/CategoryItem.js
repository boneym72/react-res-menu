import React from "react";
import axios from "axios";

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryItems: []
    };
  }
  componentWillReceiveProps(nextprops) {
    if (nextprops.name !== null) {
      axios
        .get(
          "https://davids-restaurant.herokuapp.com/menu_items.json?category=" +
            nextprops.name
        )
        .then(response => {
          this.setState({ categoryItems: response.data }, () => {
            console.log(this.state.categoryItems);
          });
        })
        .catch(error => {
          console.log(err);
        });
    }
  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            {this.state.categoryItems.menu_items &&
            this.state.categoryItems.menu_items.length > 0
              ? this.state.categoryItems.menu_items.map(
                  function(categoryItem, i) {
                    return (
                      <tr key={i}>
                        <td>{categoryItem.name}</td>
                        <td>{categoryItem.description}</td>
                      </tr>
                    );
                  }.bind(this)
                )
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}
export default CategoriesDetail;
