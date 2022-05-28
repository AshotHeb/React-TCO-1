import { memo, useContext } from "react"
import { MirrorInputContext } from "../../../context"
import "./styles.css"

export const Result = memo(() => {
    console.log('Result');
    const { inputValue } = useContext(MirrorInputContext)
    return (
        <p className="mirror-par">____ {inputValue}</p>
    )
})