import React from 'react';
import PropTypes from 'prop-types';

function Footer({ title }) {
  return <div>{title}</div>;
}

Footer.propTypes = {
  title: PropTypes.string,
};

export default Footer;
