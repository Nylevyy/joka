import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'components/Button';

import css from './Header.module.scss';

function Header({ Logo, links, children }) {
  return (
    <header className={css.header}>
      <div className={css.container}>
        {Logo && <Logo className={css.logo} />}

        <div className={css.links}>
          {links.map(({ href, title }) => (
            <Button href={href} text={title} key={href} className={css.link} mode="inline" theme="dark" />
          ))}
        </div>

        {children}
      </div>
    </header>
  );
}

Header.propTypes = {
  Logo: PropTypes.elementType,
  links: PropTypes.arrayOf(
    PropTypes.exact({
      href: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
};

Header.defaultProps = {
  links: [],
};

export default Header;
