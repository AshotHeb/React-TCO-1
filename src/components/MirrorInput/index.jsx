import { connect } from "react-redux"
import { setMirrorInputValueAction } from '../../redux/actions/mirror-input-actions'

const ConnectedMirrorInput = ({ inputValue, setMirrorInputValue }) => {
    return (
        <div>
            <input type="text" onChange={(e) => {
                const value = e.target.value
                setMirrorInputValue(value)
            }} />
            <p>Result: {inputValue}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.mirrorInputState.inputValue
    }
}

export const MirrorInput = connect(mapStateToProps, { setMirrorInputValue: setMirrorInputValueAction })(ConnectedMirrorInput)