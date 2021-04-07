import React, {useState, useEffect} from 'react';
import './App.scss';
import PropTypes from 'prop-types';

// Import Components
import Timer from '../Timer/Timer';
import Button from '../Button/Button';

// Import button icons
import {GrPlay, GrPowerCycle, GrPause} from 'react-icons/gr';

const App = ({title}) => {
  // eslint-disable-next-line
  const [options, setOptions] = useState({
    timerRunning: false,
    // Session property
    // True if study time
    // false if break
    session: true,
    studyTime: 1500,
    breakTime: 300,
  });
  // eslint-disable-next-line
  const [currentTime, setCurrentTime] = useState(2);

  useEffect(() => {
    if (options.timerRunning) {
      const interval = setInterval(() => {
        setCurrentTime((currentTime) => currentTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [options.timerRunning]);

  useEffect(() => {
    // If the time or session has ended
    if (currentTime < 1) {
      // Reverse the session
      const newOptions = {...options, session: !options.session};
      setOptions(newOptions);
    }
  }, [currentTime]);

  useEffect(() => {
    // Set the 'currentTime' to be what it should be depending on the session
    if (options.session) {
      // if the session is in study mode
      setCurrentTime(options.studyTime);
    } else {
      setCurrentTime(options.breakTime);
    }
  }, [options.session]);

  const startTimer = () => {
    const newOptions = {...options, timerRunning: true};
    setOptions(newOptions);
  };

  const pauseTimer = () => {
    const newOptions = {...options, timerRunning: false};
    setOptions(newOptions);
  };

  const handleReset = () => {
    console.log('RESET');
    // Set the current session's time back to full
    options.session
      ? setCurrentTime(options.studyTime)
      : setCurrentTime(options.breakTime);

    // Start the timer
    startTimer();
  };

  return (
    <div className='app'>
      <h1 className='app__title'>{title}</h1>
      <Timer time={currentTime} />
      <div className='actions'>
        <Button handleClick={startTimer}>
          <GrPlay />
        </Button>
        <Button handleClick={pauseTimer}>
          <GrPause />
        </Button>
        <Button handleClick={handleReset}>
          <GrPowerCycle />
        </Button>
      </div>
    </div>
  );
};

export default App;

App.defaultProps = {
  title: 'Pomodoro timer',
};

App.propTypes = {
  title: PropTypes.string,
};
