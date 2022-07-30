import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'components/Button';
import { isNonEmptyArray } from 'utils';

import css from './Banner.module.scss';

function Banner({ title, subtitle, buttons, img }) {
  return (
    <div className={css.banner}>
      <div className={css.container}>
        <div className={css.content}>
          <h1 className={css.title}>{title}</h1>
          <span className={css.text}>{subtitle}</span>
          {isNonEmptyArray(buttons) && (
            <div className={css.buttons}>
              {buttons.map((button) => (
                <Button
                  text={button.title}
                  className={css.button}
                  href={button.href}
                  key={button.title}
                  mode={button.mode}
                />
              ))}
            </div>
          )}
        </div>

        {img && <img src={img.src} alt={img.title} className={css.image} />}
      </div>
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string,
      href: PropTypes.string,
      mode: PropTypes.string,
    }),
  ),
  img: PropTypes.exact({
    src: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default Banner;
