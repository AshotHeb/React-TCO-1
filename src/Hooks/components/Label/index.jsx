import { memo, useEffect } from 'react'

export const Label = memo(({ value, userData }) => {
    console.log('Label reRender');
    useEffect(() => {

        return () => {
            //componentWillUnMount
            console.log("es gnaci ,lav exeq");
        }
    }, [])

    return (
        <div style={{ width: '100px', height: "100px", backgroundColor: 'red' }}>
            {value}
            <p>{userData.name}</p>
        </div>
    )

})