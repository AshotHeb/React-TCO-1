import { connect } from "react-redux"
import { decrementCounterAction, incrementCounterAction } from "../../../redux/actions/counter-actions"

const ConnectedActions = ({ incrementCounter, decrementCounter }) => {
    return (
        <div className="mt-50">
            <button onClick={incrementCounter}>+</button>
            <button onClick={decrementCounter}>-</button>
        </div>
    )
}


export const Actions = connect(null, {
    incrementCounter: incrementCounterAction,
    decrementCounter: decrementCounterAction
})(ConnectedActions)