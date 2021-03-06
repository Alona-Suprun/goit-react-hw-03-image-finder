import React from 'react';
import PropTypes from 'prop-types';

import s from './Button.module.css';

const Button = ({ children, onClick, ...allyProps }) => (
  <button className={s.button} onClick={onClick} {...allyProps}>
    {children}
  </button>
);

Button.defaultProps = {
  onClick: () => null,
  children: null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
