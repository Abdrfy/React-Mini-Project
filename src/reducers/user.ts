import React from 'react';
import { SET_USER } from '../actions/user';
// NEED CONFIRMATION FOR ANY ACTION
import { AnyAction } from 'redux';
import { User } from '../objects/user';

const userReducer = (state = new User(), action: AnyAction) => {
    switch (action.type) {
        case SET_USER:
            const user = action.payload;
            console.log('userReducer ', user);
            return user;
        default:
            return state;
    }
};

export default userReducer;
