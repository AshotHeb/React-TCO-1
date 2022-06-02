import { combineReducers, createStore } from 'redux'
import { counterReducer } from './reducers/counter-reducer'
import { mirrorInputReducer } from './reducers/mirror-input-reducer'

const reducers = combineReducers({
    counterReducerState: counterReducer,
    mirrorInputState: mirrorInputReducer
})


export const store = createStore(reducers)