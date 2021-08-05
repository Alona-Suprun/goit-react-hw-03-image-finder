import { Component } from 'react';

import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import ImageApi from '../../api/imageApi';

const imageApi = new ImageApi();

class ImageGallery extends Component {
  state = {
    image: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevProps.searchValue;
    const nextSearch = this.props.searchValue;

    if (prevSearch !== nextSearch) {
      this.setState({ status: 'pending' });

      imageApi.query = this.props.searchValue;
      imageApi
        .fetchImagesApi(nextSearch)
        .then(image => {
          if (image.length === 0) {
            toast(
              `Sorry, there is no image of ${this.props.searchValue}! Try again.`,
            );
          }
          this.setState({ image, status: 'resolved' });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { image, status } = this.state;

    if (status === 'idle') {
      return (
        <h1 className={s.heading}>
          Type what kind of image you're looking for in the search bar.
        </h1>
      );
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <p>Try again.</p>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ul className={s.imageGallery}>
            <ImageGalleryItem image={image} />
          </ul>
        </>
      );
    }
  }
}

export default ImageGallery;
