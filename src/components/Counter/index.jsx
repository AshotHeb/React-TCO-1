import { Actions } from "./Actions"
import { Result } from "./Result"
import './styles.css'

export const Counter = () => {
    return (
        <div className="mt-50 align-center">
            <Result />
            <Actions />
        </div>
    )
}