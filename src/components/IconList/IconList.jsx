import React from 'react';
import PropTypes from 'prop-types';

import { Button, buttonModes, buttonWidthModes } from 'components/Button';
import { themes } from 'constants';

import css from './IconList.module.scss';

function IconList({ items }) {
  return (
    <div className={css.iconList}>
      {items.map((item) => (
        <div key={item.title || item.description || item.icon?.src} className={css.item}>
          <div className={css.itemHeader}>
            {item.icon?.src && <img src={item.icon.src} alt={item.icon.title} className={css.icon} />}

            {item.title && <span className={css.title}>{item.title}</span>}
          </div>

          {item.description && <span className={css.description}>{item.description}</span>}

          {item.button && <Button {...item.button} />}
        </div>
      ))}
    </div>
  );
}

IconList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.shape({
        src: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
      title: PropTypes.string,
      description: PropTypes.string,
      button: PropTypes.shape({
        text: PropTypes.string,
        href: PropTypes.string.isRequired,
        mode: PropTypes.oneOf(buttonModes),
        theme: PropTypes.oneOf(themes),
        width: PropTypes.oneOf(buttonWidthModes),
      }),
    }),
  ),
};

export default IconList;
