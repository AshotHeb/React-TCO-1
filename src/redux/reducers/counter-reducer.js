const initialState = {
    counter: 0,
    test: false,
    array: []
}


export const counterReducer = (state = initialState, action) => {
    //action => {type:"INCREMENT_COUNTER"}
    //action 2 => {type:"DECREMENT_COUNTER"}

    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT_COUNTER':
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state
    }
}