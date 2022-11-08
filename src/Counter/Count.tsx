import React, {useState} from "react";
import c from './Count.module.css'

type CountPropsType = {
    count: number
    disableValue: number
    startValue: number
    errorMessage?: string
    error?: boolean


}


export const Count = React.memo((props: CountPropsType) => {
    const {count, errorMessage, error} = props;

    // let error, errorMessage
    // if (startValue >= disableValue) {
    //     error = true
    //     errorMessage = 'Incorrect value!'
    // }
    // if (count >= disableValue && disableValue !== 0) {
    //     error = true
    //     errorMessage = disableValue
    //
    // }
    // if (startValue < 0 || disableValue < 0) {
    //     error = true
    //     errorMessage = 'Incorrect value!'
    //
    // }
    // if (startValue === 0 && disableValue === 0) {
    //     error = true
    //     errorMessage = 'Incorrect value!'}


    return (
        <div className={error == true ? `${c.count} ${c.red}` : `${c.count}`}>
            {errorMessage !== '' ? errorMessage : count}
        </div>
    )
})