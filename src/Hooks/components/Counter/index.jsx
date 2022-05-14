
import { memo } from "react";
import { Action } from "./Action"
import { Result } from "./Result"

export const Counter = memo(({ onPlus, onMinus, counter, onStepChange }) => {
    console.log("Counter reRender");
    return (
        <div className="mt-30">
            <p>Counter</p>
            <input type="number" placeholder="Step Count" onChange={onStepChange} />
            <Action onPlus={onPlus} onMinus={onMinus} />
            <Result value={counter} />
        </div>
    )
})