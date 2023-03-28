import React from "react"
import { SET_USER } from "../actions/user"

const initialState = {
    user: undefined
}

const userReducer = ( state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            const { user } = action
            return  { ...state, user } 
        default:
            return state
    }
}

export default userReducer