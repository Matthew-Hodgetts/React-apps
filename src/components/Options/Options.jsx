import React from 'react';
import './Options.scss';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

const Options = ({handleChange, studyTime, breakTime}) => {
  return (
    <div className='options'>
      <div>
        <h3>Study length</h3>
        <span className='options__time'>
          {Math.floor(Math.round(studyTime / 60))} mins
        </span>
        <div>
          <Button handleClick={() => handleChange('study', false)}> -</Button>
          <Button handleClick={() => handleChange('study', true)}> +</Button>
        </div>
      </div>
      <div>
        <h3>Break length</h3>
        <span className='options__time'>
          {Math.floor(Math.round(breakTime / 60))} mins
        </span>
        <div>
          <Button handleClick={() => handleChange('break', false)}> -</Button>
          <Button handleClick={() => handleChange('break', true)}> +</Button>
        </div>
      </div>
    </div>
  );
};

export default Options;

Options.propTypes = {
  handleChange: PropTypes.func,
  studyTime: PropTypes.number.isRequired,
  breakTime: PropTypes.number.isRequired,
};
