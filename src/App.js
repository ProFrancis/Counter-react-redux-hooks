import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ACTIONS
import { actionsCounter } from "./redux/actions/counter.action";
// CSS 
import './App.css';

const App = () => {
  const counter = useSelector((state) => state.counter)
  const [timer,setTimer] = useState(null)

  const dispatch = useDispatch();

  const handleStart = () => {
    timer = setInterval(() => {
      dispatch(actionsCounter.startCounter())
    }, 1000)
  }

  const stop = () => {
    // 
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>COUNTER</h1>
      <p>{counter}</p>

      <button onClick={handleStart}>start</button>
      <button onClick={stop}>stop</button>

      </header>
    </div>
  );
}

export default App;