import React from 'react';
import './Button.scss';

import PropTypes from 'prop-types';

const Button = ({children, handleClick}) => {
  return (
    <button className='button' onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.any,
  handleClick: PropTypes.func,
};
