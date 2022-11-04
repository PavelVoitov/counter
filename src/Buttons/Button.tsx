import React from "react";
import c from './Button.module.css'
import {isDisabled} from "@testing-library/user-event/dist/utils";

type ButtonPropsType = {
    name: string
    callback: () => void
    count: number
    maxValue: number
    error?: boolean

}


export const Button = (props: ButtonPropsType) => {
    const {name, callback, count, maxValue, error} = props
    return (
        <div className={c.divButton}>
            <button
                disabled={error === true ? true : false}
                onClick={callback}
                className={error ? `${c.button} ${c.buttonDisable}`
                    : c.button}
            >
                {name}
            </button>
        </div>

    )
}