// NEED CONFIRMATION FOR ANY ACTION
import { AnyAction } from 'redux';

const loggedReducer = (state = false, action: AnyAction) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state;
        default:
            return state;
    }
};

export default loggedReducer;
