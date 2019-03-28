import React, { Component } from "react";

export default class ImageLists extends Component {
  render() {
    const images = this.props.images.map(image => {
      return (
        <img key={image.id} alt={image.description} src={image.urls.regular} />
      );
    });
    return <div>{images}</div>;
  }
}
