import { connect } from "react-redux"

const ConnectedResult = ({ counter }) => {
    return (
        <div>
            <p>
                {counter}
            </p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counterReducerState.counter
    }
}

export const Result = connect(mapStateToProps)(ConnectedResult)