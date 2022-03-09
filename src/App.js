import { useDispatch, useSelector } from 'react-redux';

// ACTIONS
import { actionsCounter } from "./redux/actions/counter.action";

// CSS 
import './App.css';

const App = () => {
  const counter = useSelector((state) => state.counter)
  console.log(counter.counterOn);
  const dispatch = useDispatch();

  const handleStart = () => {
    const timerId = setInterval(() => { 
      dispatch(actionsCounter.startCounter(timerId))
    }, 50)
  }

  const stop = () => {
    clearInterval(counter.id)
    dispatch(actionsCounter.stopCounter())
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>COUNTER</h1>
      <p>{counter.CounterStart}</p>
      {!counter.counterOn ? 
        <button onClick={handleStart}>start</button>
        :
        <button onClick={stop}>stop</button>
      }
      </header>
    </div>
  );
}

export default App;