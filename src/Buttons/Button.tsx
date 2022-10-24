import React from "react";
import c from './Button.module.css'

type ButtonPropsType = {
    name: string
    callback?: () => void
    count?: number
    disableValue?: number

}

export const Button = (props: ButtonPropsType) => {
    const {name, callback, count, disableValue} = props

    return (
        <div className={c.divButton}>
            <button
                disabled={count && disableValue ? count >= disableValue : false}
                onClick={callback}
                className={count === disableValue ? `${c.button} ${c.buttonDisable}`: c.button}
            >
                {name}
            </button>
        </div>

    )
}