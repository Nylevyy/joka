import React from 'react';
import PropTypes from 'prop-types';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Button } from 'components/Button';
import { isNonEmptyArray } from 'utils';

function Layout({ children, headerContent }) {
  return (
    <>
      <Header links={headerContent.navigation} Logo={headerContent.logo}>
        {isNonEmptyArray(headerContent.navigationPinnedButtons) &&
          headerContent.navigationPinnedButtons.map((button) => (
            <Button mode={button.mode} theme={button.theme} text={button.title} href={button.href} key={button.title} />
          ))}
      </Header>

      <main>{children}</main>

      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  headerContent: PropTypes.shape({
    navigation: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      }),
    ),
    logo: PropTypes.elementType,
    navigationPinnedButtons: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};

export default Layout;
