import React, {ChangeEvent} from "react";
import s from './LimitInput.module.css'
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type InputForSetProps = {
    labelName: string
    number?: number
    callback: (value: number) => void
    error: string
    setError: (error: string) => void
}


export const LimitInput = (props: InputForSetProps) => {
    const {labelName, callback, number, error, setError} = props

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
        console.log(value);
        if (value < 0) {
           setError("Input value > 0")
        } else {
            callback(value)
        }
    }

    return (
        <div className={s.InputForSet}>
            <div>
                <span>{labelName}:</span>
            </div>
            <input type={"number"} value={number} className={error ? `${s.Input} ${s.error}}`: `${s.Input}`} onChange={onChangeValue}/>


        </div>

    )
}