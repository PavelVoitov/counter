import React, {ChangeEvent} from "react";
import s from './LimitInput.module.css'
import {Simulate} from "react-dom/test-utils";


type InputForSetProps = {
    labelName: string
    number?: number
    callback: (value: number) => void
    error: boolean
    setError: (error: boolean) => void
}


export const LimitInput = (props: InputForSetProps) => {
    const {labelName, callback, number, error, setError} = props

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
        callback(value)
        setError(false)
    }


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
}