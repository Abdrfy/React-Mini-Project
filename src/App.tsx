import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';
import { decrement } from './actions';
import { switchLoggedState } from './actions';
import { getUser } from './actions/user';
import { User } from './objects/user';

function App() {
    //TEST CODE - NOT WORKING
    interface RootState {
        user: User;
        numValue: number;
        boolValue: boolean;
    }

    const counter = useSelector<RootState, number>((state) => state.numValue);
    const isLogged = useSelector<RootState, boolean>((state) => state.boolValue);
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, []);

    console.log('userFirstName: ', user);

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
