import { Label } from "./components/Label"
import { useCallback, useMemo, useState } from 'react'
import { Counter } from './components/Counter'



export const Hooks = () => {
    const [isLabelVisible, setIsLabelVisible] = useState(true)

    const [counter, setCounter] = useState(0)
    const [counterStep, setCounterStep] = useState(1)

    const onPlus = useCallback(() => {
        setCounter(prev => prev + counterStep)
    }, [counterStep])

    /*useCallback*/
    const onMinus = useCallback(() => {
        setCounter(prev => prev - counterStep)
    }, [counterStep])

    const onCounterStepChange = useCallback((e) => {
        setCounterStep(parseInt(e.target.value))
    }, [setCounterStep])

    /*useMemo*/

    const userData = useMemo(() => {
        return {
            name: 'Karen',
            surname: "Manasyan",
            age: 23,
            isHasWork: false,
            isMarried: false,
        }
    }, [])




    /* useEffect */
    // useEffect(() => {
    //     console.log('counter value change');
    // }, [counter])

    // useEffect(() => {
    //     console.log('onPlus value change');
    // }, [onPlus])

    // useEffect(() => {
    //     console.log('onMinus value change');
    // }, [onMinus])

    return (
        <div style={{ padding: '100px' }}>
            <h1>Hooks</h1>
            <div>
                <button onClick={() => setIsLabelVisible(true)}>
                    Open Label
                </button>
                <button onClick={() => setIsLabelVisible(false)}>
                    Close Label
                </button>
            </div>
            {isLabelVisible && <Label value={"ComponentWillUnMount"} userData={userData} />}
            <Counter counter={counter} onPlus={onPlus} onMinus={onMinus} onStepChange={onCounterStepChange} />
        </div>
    )

}