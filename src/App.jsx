import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {increment} from './actions'
import {decrement} from './actions'
import { switchLoggedState } from "./actions";
import { getUser } from "./actions/user";

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getUser())
  }, [])

  console.log(user)

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      {/* <h2>User: {counter}</h2> */}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      {isLogged ? <h3>Valulable information I should see</h3> :  ''}
      <button onClick={() => dispatch(switchLoggedState())}>{isLogged ? 'Currently Logged In' : 'Currently Logged Out'}</button>
    </div>
  );
}

export default App;
