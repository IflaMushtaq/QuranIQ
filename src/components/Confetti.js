import React, { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';
import { fadeOutDown } from "react-animations";
import Radium, { StyleRoot } from "radium";

const Confetti = () => {
  const styles = {
    fadeOutDown: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeOutDown, 'fadeOutDown'),
      visibility: 'visible',
      opacity: 1,
    },
    fadeOutHidden: {
      animation: 'x 3s',
      animationName: Radium.keyframes(fadeOutDown, 'fadeOutDown'),
      visibility: 'hidden',
      opacity: 0,
    },
  };

  const [isConfettiActive, setIsConfettiActive] = useState(false);

  useEffect(() => {
    // Set isConfettiActive to true to start the confetti animation
    setIsConfettiActive(true);

    // Set a timeout to hide the confetti after 5 seconds
    const confettiTimer = setTimeout(() => {
      setIsConfettiActive(false);
    }, 5000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(confettiTimer);
  }, []);

  return (
    <div style={isConfettiActive ? styles.fadeOutDown : styles.fadeOutHidden}>
      <ReactConfetti width={window.innerWidth} height={window.innerHeight} />
    </div>
  );
};

export default Confetti;
