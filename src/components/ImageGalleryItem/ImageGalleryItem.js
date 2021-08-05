import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <>
        {this.props.image.map(({ webformatURL, tags, id, largeImageURL }) => {
          return (
            <li key={id} className={s.ImageGalleryItem}>
              <img
                src={webformatURL}
                alt={tags}
                className={s.ImageGalleryItemImage}
                data-url={largeImageURL}
              />
            </li>
          );
        })}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
