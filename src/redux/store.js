import { createStore, combineReducers } from "redux";
import { taskReducer } from "./reducers/task-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/auth-reducer";

const rootReducer = combineReducers({
  taskReducerState: taskReducer,
  authReducerState: authReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
