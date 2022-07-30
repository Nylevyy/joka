import React from 'react';
import PropTypes from 'prop-types';

import { isNonEmptyArray } from 'utils';

import css from './ImagesList.module.scss';

function ImagesList({ images }) {
  return (
    <div className={css.imagesList}>
      {isNonEmptyArray(images) &&
        images.map((image) => <img src={image.src} key={image.src} alt={image.title} className={css.image} />)}
    </div>
  );
}

ImagesList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }),
  ),
};

export default ImagesList;
