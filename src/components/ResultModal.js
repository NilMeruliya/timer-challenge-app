import React, {forwardRef} from 'react' // it forwards the ref from one component to another component

// forwardRef syntax
// const fName = forwardRef((1(props), 2(ref)) => {})

const ResultModal = forwardRef( ({result, targetTime }, ref) =>{
  return (
    <dialog ref={ref} className='result-modal'>
        <h2>
            You {result}!
        </h2>
        <p>The target time was <strong>{targetTime} second{targetTime > 1 ? "s" : ""} </strong></p>
        <p>You stopped the timer with <strong>X seconds left.</strong></p>
        <form action="dialog">
            <button>Close</button>
        </form>
    </dialog>
  )
})

export default ResultModal
