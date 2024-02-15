import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.js';
import GameInfo from './components/GameInfo.js';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
      {
        GameInfo.map((ele, index) => {
         return  <TimerChallenge title={ele.title} targetTime={ele.targetTime}/>
        })
      }
      
      </div>
      
    </>
  );
}

export default App;
