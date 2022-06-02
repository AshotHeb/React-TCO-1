const initialState = {
    inputValue: ''
}


export const mirrorInputReducer = (state = initialState, action) => {

    switch (action.type) {
        case "SET_INPUT_VALUE":
            return {
                ...state,
                inputValue: action.newValue
            }
        default:
            return state
    }
}