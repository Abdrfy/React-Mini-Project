export const increment = (byNumber: number) => {
    return {
        type: 'INCREMENT',
        payload: byNumber
    }
}

export const decrement = (byNumber: number) => {
    return {
        type: 'DECREMENT',
        payload: byNumber
    }
}

export const switchLoggedState = () => {
    return {
        type: 'SIGN_IN'
    }
}