import React from 'react';
import PropTypes from 'prop-types';

import css from './Section.module.scss';

function Section({ children }) {
  return (
    <section className={css.section}>
      <div className={css.container}>{children}</div>
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.oneOfType(PropTypes.element, PropTypes.arrayOf(PropTypes.element)),
};

export default Section;
