import React from "react";
import c from './Count.module.css'

type CountPropsType = {
    count: number
    disableValue: number
    startValue: number
    errorMessage: string
    error: boolean
    setErrorMessage: (ErrorMessage: string) => void
    setError: (error: boolean) => void

}


export const Count = (props: CountPropsType) => {
    const {count, disableValue, errorMessage, error, setErrorMessage, startValue, setError} = props;
       if (startValue > disableValue) {
            setError(true)
            setErrorMessage('Incorrect value!')
        } else if (count >= disableValue) {
            setError(true)
            setErrorMessage('')
        } else if (startValue < 0 || disableValue < 0) {
           setError(true)
           setErrorMessage('Incorrect value!')
       }
        else {
            setError(false)
           setErrorMessage('')
       }

    return (
        <div className={error ? `${c.count} ${c.red}` : `${c.count}`}>
            {errorMessage ? errorMessage : count}
        </div>
    )
}