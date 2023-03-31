// NEED CONFIRMATION FOR ANY ACTION
import { AnyAction } from 'redux';

const counterReducer = (state = 0, action: AnyAction) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }
};

export default counterReducer;
