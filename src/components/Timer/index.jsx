import React from "react";
import {useTimer} from "react-timer-hook";
import TimerContainer from "./styled";

const Timer = () => {
  // Get current date
  const now = new Date();
  // Set the time to 3 AM
  now.setHours(3, 0, 0, 0);
  // Add 1 to the day to get the next day
  now.setDate(now.getDate() + 1);

  const {
    seconds,
    minutes,
    hours,
  } = useTimer({ expiryTimestamp: now, autoStart: true });

  return (
    <TimerContainer>
      <p><span>Wait!</span> Get 10% OFF!</p>

      <div>
        <span>{(hours > 9 ? hours : `0${hours}`)}</span>
        <b>:</b>
        <span>{(minutes > 9 ? minutes : `0${minutes}`)}</span>
        <b>:</b>
        <span>{(seconds > 9 ? seconds : `0${seconds}`)}</span>
      </div>
    </TimerContainer>
  )
}

export default Timer;
