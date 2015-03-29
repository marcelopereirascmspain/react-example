import "./main.scss";
import React from "react";
import ClassifiedList from "./components/ClassifiedList";
import ads from "./data/api";

const App = React.createClass({
  getInitialState: function () {
    return {
      favorites: []
    };
  },

  handleFavoriteAdded: function (id) {
    this.setState((prev) => {
      if (prev.favorites.indexOf(id) === -1) {
        return { favorites: prev.favorites.concat(id) };
      }

      return { favorites: prev.favorites.filter((item) => item !== id) };
    })
  },

  render: function () {
    return (
      <div>
        <h1>{this.state.favorites.length}</h1>
        <link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" />
        <ClassifiedList
          ads={this.props.data.ads}
          favorites={this.state.favorites}
          onFavoriteAdded={this.handleFavoriteAdded}/>
      </div>
    );
  }
});

React.render(<App data={ {ads: ads} } />, document.body);