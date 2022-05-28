import { useContext } from 'react'
import { MirrorInputContext } from '../../../context'
import './styles.css'
export const Input = () => {
    const { onInputChange } = useContext(MirrorInputContext)
    console.log("🚀 ~ Input")

    return (
        <div className="input-wrapper">
            <input type="text" placeholder="Type something..." onChange={onInputChange} />
        </div>
    )
}