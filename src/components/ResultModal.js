import React, {forwardRef, useImperativeHandle, useRef} from 'react' // it forwards the ref from one component to another component

// forwardRef syntax
// const fName = forwardRef((1(props), 2(ref)) => {})

const ResultModal = forwardRef( ({targetTime, timeRemaining, handleReset }, ref) =>{
  // const dialog = useRef();

  // // // the reason why we are using useImperativeHandle is that, dialog.current.showModal() only works with below
  // // // html <dialog> element.. but what if in the future any other developer tried to change it to the some other element. then its gonna be a big problem 
  // //  useImperativeHandle CAN ONLY Be used with forwardRef

  // // // syntax   useImperativeHandle(1(ref), 2(function))
  //  useImperativeHandle(ref, () => {
  //         return {
  //           open() {
  //             dialog.current.showModal();
  //           }
  //         }
  //  })

  const userLost = timeRemaining <= 0;
  const formattedRemainingTime = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - (timeRemaining / (targetTime * 1000))) * 100)

  return (
    <dialog ref={ref} className='result-modal'>
        { userLost && <h2>You lost!</h2>}
        { !userLost && <h2>Your score is: {score}</h2>}
        <p>The target time was <strong>{targetTime} second{targetTime > 1 ? "s" : ""} </strong></p>
        <p>You stopped the timer with <strong>{formattedRemainingTime} second{formattedRemainingTime > 1 ? "s" : ""} left.</strong></p>
        <form action="dialog" onSubmit={handleReset}>
            <button 
            // onClick={handleReset}
            >Close</button>
        </form>
    </dialog>
  )
})

export default ResultModal
