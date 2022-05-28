import { useCallback, useState } from "react"
import { MirrorInputContext } from "../.."

export const MirrorInputContextProvider = ({ children }) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = useCallback((e) => {
        const { target: { value } } = e
        setInputValue(value)
    }, [])




    return (
        <MirrorInputContext.Provider
            value={{
                inputValue,
                onInputChange,
            }}
        >
            {children}
        </MirrorInputContext.Provider>
    )
}


export const MirrorInputContextProvider2 = ({ children }) => {
    const [buttonContent, setButtonContent] = useState('True')
    const onToggleButton = useCallback(() => {
        setButtonContent(prev => {
            if (prev === 'True') {
                return 'False'
            }

            return 'True'
        })
    }, [])

    return (
        <MirrorInputContext.Provider
            value={{
                buttonContent,
                onToggleButton
            }}
        >
            {children}
        </MirrorInputContext.Provider>
    )
}