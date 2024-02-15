import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

// let timer;
// timer is used in both the states, started and expired, so that if you write this variable inside the function, timer will be rerendered 2 times, while started and expired. that is why we wanna declare it outside of the function
// but the problem arrives when we simultaneously play 2 games together side by side at the same time, this variable will be thrown away when we stop the other game, to prevent this we can use useRef

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef(); // why useRef? because problem with defining a timer here was that it works with both the states that rerenders again, useRef does not rerender the state
  const dialog = useRef();
  console.log(dialog);

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal(); // inbuilt method which shows the modal, it blures background while showing the dialog
    }, targetTime * 1000);

    setTimerStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop Challenge" : "Start Challenge"}
          </button>
        </p>
        <p className={timerStarted && "active"}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
