import { useDispatch, useSelector } from 'react-redux';

// ACTIONS
import { actionsCounter } from "./redux/actions/counter.action";

// CSS 
import './App.css';

const App = () => {
  const counter = useSelector((state) => state.counter)

  const dispatch = useDispatch();

  const handleStart = () => {
    const timerId = setInterval(() => { 
      dispatch(actionsCounter.startCounter(timerId))
    }, 50)
  }

  const clearTimer = () => {
    clearInterval(counter.id)
  }

  const stop = () => {
    clearTimer();
    dispatch(actionsCounter.stopCounter())
  }

  const reset = () => {
    clearTimer();
    dispatch(actionsCounter.resetCounter())
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>COUNTER</h1>
      <p>{counter.CounterStart}</p>
      {!counter.counterOn ? 
          counter.CounterStart > 0 ?
            <button onClick={handleStart}>Restart</button>
            :
            <button onClick={handleStart}>start</button>
        :
          <div>
            <button onClick={stop}>stop</button>
            <button onClick={reset}>reset</button>
          </div>
      }
      </header>
    </div>
  );
}

export default App;