import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';
import { decrement } from './actions';
import { switchLoggedState } from './actions';
import { getUser } from './actions/user';
import { User } from './objects/user';
import { RootState } from './redux/states/RootState';

function App() {
    //TEST CODE - NOT WORKING

    const state = useSelector((state: RootState) => state);
    const counter = useSelector((state: RootState) => state.counter);
    const isLogged = useSelector<RootState, boolean>((state) => state.isLogged);
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, []);

    console.log('state', state);
    console.log('counter:', counter);
    console.log('userFirstName: ', user?.firstname);

    return (
        <div className="App">
            <h1>Counter: {counter}</h1>
            {/* <h2>User: {counter}</h2> */}
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement(5))}>-</button>
            {isLogged ? <h3>Valulable information I should see</h3> : ''}
            <button onClick={() => dispatch(switchLoggedState())}>{isLogged ? 'Currently Logged In' : 'Currently Logged Out'}</button>
        </div>
    );
}

export default App;
