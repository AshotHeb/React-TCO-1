import { useContext } from 'react'
import { MirrorInputContext } from '../../context'
import './styles.css'

export const ToggleButton = () => {
    console.log("🚀 ~ ToggleButton")

    const { buttonContent, onToggleButton } = useContext(MirrorInputContext)

    return (
        <div className='toggle-btn-wrapper'>
            <button className="toggle-btn" onClick={onToggleButton}>
                {buttonContent}
            </button>
        </div>
    )
}
