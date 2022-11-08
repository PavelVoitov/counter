import React, {ChangeEvent} from "react";
import s from './LimitInput.module.css'


type InputForSetProps = {
    number: number
    labelName: string
    maxValue?: number
    startValue?: number
    callback: (value: number) => void
    error?: boolean

}


export const LimitInput = React.memo((props: InputForSetProps) => {
    const {labelName, callback, startValue, maxValue, number, error} = props
    // let error
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
        callback(value)
    }

    // if (maxValue < 0 || startValue? < 0) {
    //     error = true
    // }
    //
    // if (startValue > maxValue) {
    //     error = true
    // }





    return (
        <div className={s.InputForSet}>
            <div>
                <span>{labelName}:</span>
            </div>
            <input type={"number"} value={number}
                   className={error ? `${s.Input} ${s.error}` : `${s.Input}`}
                   onChange={onChangeValue}
            />
        </div>

    )
})