import React from 'react';
import logo from './logo.svg';
import './App.css';
import counterSlice, { resetCounter, setCounter } from './Redux/slices/conuter.slices'
import {useAppDispachs, useAppSelector} from './Redux/hooks/hooks'

function App() {
  const dispacher = useAppDispachs();
  const counterSlice = useAppSelector((state) => state.counter)
  return (
    <div className="App">
      <header className="App-header">
        <button
        onClick={
          () => {
            dispacher(setCounter(counterSlice.counter + 1))
          }
        }
        >
          add  1 to counter 
        </button>
        <button
        onClick={
          () => {
            dispacher(resetCounter())
          }
        }
        >
          reset
        </button>
        <p>
          counter {counterSlice.counter}
        </p>
      </header>
    </div>
  );
}

export default App;
