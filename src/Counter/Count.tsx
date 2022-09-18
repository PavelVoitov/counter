import React from "react";
import c from './Count.module.css'

type CountPropsType = {
    count: number
    disableValue: number

}

export const Count = (props: CountPropsType) => {
    const {count, disableValue} = props;
    return (
        <div className={count === disableValue ? `${c.count} ${c.red}` : `${c.count}`}>
            {count}
        </div>
    )
}