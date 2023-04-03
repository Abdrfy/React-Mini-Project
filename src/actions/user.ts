import React from 'react';
import { User } from '../objects/user';

export const SET_USER = 'SET_USER';
export const GET_USER = 'GET_USER';

export const getUser = () => {
    console.log('Getting the user');
    return {
        type: GET_USER
    };
};

export const setUser = (user: User) => {
    return {
        type: SET_USER,
        payload: user
    };
};
