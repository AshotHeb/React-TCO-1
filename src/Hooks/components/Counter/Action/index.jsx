

export const Action = ({ onPlus, onMinus }) => {
    return (
        <div className="mt-30">
            <button onClick={onPlus}>+</button>
            <button onClick={onMinus}>-</button>
        </div>
    )
}