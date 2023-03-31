import React from "react"
import { SET_USER } from "../actions/user"
// NEED CONFIRMATION FOR ANY ACTION 
import { AnyAction } from "redux"
import { User } from "../objects/user"

const initialState = {
    user: User
}

const userReducer = ( state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_USER:
            const { user } = action
            return  { ...state, user } 
        default:
            return state
    }
}

export default userReducer