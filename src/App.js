import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {increment} from './actions'
import {decrement} from './actions'
import { switchLoggedState } from "./actions";

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      {isLogged ? <h3>Valulable information I should see</h3> :  ''}
      <button onClick={() => dispatch(switchLoggedState())}>{isLogged ? 'Currently Logged In' : 'Currently Logged Out'}</button>
    </div>
  );
}

export default App;
