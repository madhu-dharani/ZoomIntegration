import "./Timer.css";
import React, { useState, useEffect } from "react";

const CountdownTimer = ({ initialTimeInSeconds, startTimer }) => {
  const [timeInSeconds, setTimeInSeconds] = useState(initialTimeInSeconds);

  useEffect(() => {
    let timer;
    if (startTimer) {
      timer = setInterval(() => {
        setTimeInSeconds((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [startTimer, timeInSeconds]);

  const getFormattedTime = () => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return <div className="circle-timer">{timeInSeconds >= 0 ? getFormattedTime() : "00:00"}</div>;
};

export default CountdownTimer;
//"w-20 h-20 rounded-full bg-blue-500 text-white text-2xl font-bold flex justify-center items-center"
