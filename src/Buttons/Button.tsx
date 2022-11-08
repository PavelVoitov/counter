import React from "react";
import c from './Button.module.css'

type ButtonPropsType = {
    name: string
    callback: () => void
    count: number
    error?: boolean
    errorMessage?: string

}


export const Button = React.memo((props: ButtonPropsType) => {
    let {name, callback, error, errorMessage} = props
    return (
        <div className={c.divButton}>
            <button
                disabled={error && errorMessage !== ''}
                onClick={callback}
                className={error === true || errorMessage?.length === 1 ? `${c.button} ${c.buttonDisable}`
                    : c.button}
            >
                {name}
            </button>
        </div>

    )
})