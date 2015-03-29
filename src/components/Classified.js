import React from "react";
import classnames from "classnames";
import "./Classified.scss";

const Classified = React.createClass({
  handleClick: function (event) {
    this.props.onClick(event);
  },

  handleFavClick: function (id, event) {
    event.stopPropagation();
    this.props.onFavClick(id);
  },

  render: function() {
    const className = classnames({
      "scm-classified": true,
      "scm-classified--highlighted": this.props.ad.highlighted
    });

    const id = this.props.ad.id;
    const isFavorite = this.props.isFavorite;

    let favoriteButton = (
      <button
        className="scm-classified__action"
        onClick={this.handleFavClick.bind(this, id)}>
        like
      </button>
    );

    if (this.props.isFavorite) {
      favoriteButton = (
        <button
          className="scm-classified__action scm-classified__action--active"
          onClick={this.handleFavClick.bind(this, id)}>
          liked
        </button>
      );
    }

    return (
      <article
        itemScope
        itemType="http://schema.org/Product"
        className={className}
        onClick={this.handleClick}>
        <div className="scm-classified__media">
          {/*<img src={this.props.ad.imageURL} alt={""} />*/}
        </div>
        <div className="scm-classified__content">
          <h1 className="scm-classified__title">
            <a
              href="/"
              itemProp="url">
              <span itemProp="name">{this.props.ad.title}</span>
            </a>
          </h1>
          <div
            className="scm-classified__price"
            itemProp="offers"
            itemScope
            itemType="http://schema.org/Offer">
            <span itemProp="price">{this.props.ad.price}</span>
          </div>
          <div className="scm-classified__description">
            {this.props.ad.description}
          </div>
        </div>
        <div className="scm-classified__actions">
          { favoriteButton }
          <button className="scm-classified__action">contact</button>
        </div>
      </article> 
    );
  }
});

export default Classified;
