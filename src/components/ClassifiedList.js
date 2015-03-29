import "./ClassifiedList.scss";
import React from "react";
import MasonryMixin from 'react-masonry-mixin';
import Classified from "./Classified";

const masonryOptions = {
  transitionDuration: 0
};

const ClassifiedList = React.createClass({
  mixins: [MasonryMixin("masonryContainer", masonryOptions)],

  handleFavClick: function (id) {
    this.props.onFavoriteAdded(id);
  },

  handleSendMessageClick: function (id) {
    // anti-pattern but i'll leave it for now
    this.masonry.layout();
    this.forceUpdate();
  },

  render: function() {
    const favorites = this.props.favorites;
    const items = this.props.ads.map((ad, index) => {
      console.log(favorites.indexOf(ad.id));
      return (
        <li
          key={index}
          className="scm-classified-list__item">
          <Classified
            ad={ad}
            isFavorite={favorites.indexOf(ad.id) !== -1}
            onFavClick={this.handleFavClick}
            onSendMessageCLick={this.handleSendMessageClick} />
        </li>
      );
    });

    return (
      <div className="scm-classified-list">
        <ul ref="masonryContainer">
          {items}
        </ul>
      </div>
    );
  }
});

export default ClassifiedList;