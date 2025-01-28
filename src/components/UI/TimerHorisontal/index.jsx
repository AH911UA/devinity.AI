import React, { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import TimerHorisontalContainer from "./styled/index";

const TimerHorisontal = () => {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Get current date
  const now = new Date();
  // Set the time to 3 AM
  now.setHours(3, 0, 0, 0);
  // Add 1 to the day to get the next day
  now.setDate(now.getDate() + 1);

  const { minutes, hours } = useTimer({
    expiryTimestamp: now,
    autoStart: true,
  });

  return (
    <TimerHorisontalContainer top={isScroll ? '10px' : ''}>
      <p>
        Get 10% OFF! <br /> Request a quote now!{" "}
      </p>

      <div>
        <span>{hours > 9 ? hours : `0${hours}`}</span>
        <b>:</b>
        <span>{minutes > 9 ? minutes : `0${minutes}`}</span>
      </div>
    </TimerHorisontalContainer>
  );
};

export default TimerHorisontal;
