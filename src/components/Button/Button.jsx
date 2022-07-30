import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { themes } from 'constants';
import { buttonModes, buttonTypes, buttonWidthModes } from './constants';

import css from './Button.module.scss';

function Button({ href, mode, text, width, type, theme, className }) {
  if (href) {
    return (
      <a
        className={cx(css.button, css[`mode-${mode}`], css[`width-${width}`], css[`theme-${theme}`], className)}
        href={href}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      className={cx(css.button, css[`mode-${mode}`], css[`width-${width}`], css[`theme-${theme}`], className)}
      type={type}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  width: PropTypes.oneOf(buttonWidthModes),
  text: PropTypes.string,
  mode: PropTypes.oneOf(buttonModes),
  type: PropTypes.oneOf(buttonTypes),
  theme: PropTypes.oneOf(themes),
  className: PropTypes.string,
};

Button.defaultProps = {
  width: 'medium',
  mode: 'primary',
  type: 'button',
  theme: 'light',
};

export default Button;
