import React from "react";
import "./Timer.scss";
import PropTypes from "prop-types";

const Timer = ({ time }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <div className="timer">
      <span className="minutes">{minutes}:</span>
      <span className="seconds">
        {seconds.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </span>
    </div>
  );
};

export default Timer;

Timer.defaultProps = {
  time: 25,
};

Timer.propTypes = {
  time: PropTypes.number,
};
