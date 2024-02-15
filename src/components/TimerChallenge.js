import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

// let timer;
// timer is used in both the states, started and expired, so that if you write this variable inside the function, timer will be rerendered 2 times, while started and expired. that is why we wanna declare it outside of the function
// but the problem arrives when we simultaneously play 2 games together side by side at the same time, this variable will be thrown away when we stop the other game, to prevent this we can use useRef

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef(); // why useRef? because problem with defining a timer here was that it works with both the states that rerenders again, useRef does not rerender the state
  const dialog = useRef();
  console.log(dialog);

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // when user manually stops the game, and have some time remaining
  if (timeRemaining <= 0) {
    clearInterval(timer.current) // clear the timer automatically when the game is stopped
    dialog.current.showModal();
  }

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000) // this condition rerenders the page, but it is inside if condition so there should not be any problem
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 10)
    //   setTimeRemaining(timeRemaining - 10)
    }, 10);  // 10 = milliseconds
  };
  
  // when it expires automatically
  const handleStop = () => {
   
    clearInterval(timer.current); // this works when the button is pressed
    dialog.current.showModal();
  }; 

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} timeRemaining={timeRemaining} handleReset={handleReset} />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop Challenge" : "Start Challenge"}
          </button>
        </p>
        <p className={timerIsActive && "active"}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
