import React, { useState } from "react";

const StartButton = ({ onStartClick }) => {
  const [started, setStarted] = useState(false);

  const handleStartClick = () => {
    setStarted(true);
    onStartClick();
  };

  return (
    <button onClick={handleStartClick} disabled={started}>
      START TIMER
    </button>
  );
};

export default StartButton;
