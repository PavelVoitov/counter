type AddOneAT = ReturnType<typeof addOneAC>
type ResetCounterAT = ReturnType<typeof resetCounterAC>
type SetUpCounterAT = ReturnType<typeof setUpCounterAC>
type resetSettingsCounterAT = ReturnType<typeof resetSettingsCounterAC>
type setMaxValueAT = ReturnType<typeof setMaxValueAC>
type setStartValueAT = ReturnType<typeof setStartValueAC>

type ActionType = AddOneAT
    | ResetCounterAT
    | SetUpCounterAT
    | resetSettingsCounterAT
    | setMaxValueAT
    | setStartValueAT


export type InitialStatePropsType = {
    count: number
    maxValue: number
    startValue: number
    error: boolean
    errorMessage: string
}

// const defaultValue = 5;

const initialState: InitialStatePropsType = {
    count: 0,
    maxValue: 5,
    startValue: 0,
    error: false,
    errorMessage: ''
}

export const counterReducer = (counter: InitialStatePropsType = initialState, action: ActionType): InitialStatePropsType => {
    switch (action.type) {
        case "ADD-ONE-IN-COUNTER":
            return {
                ...counter,
                count: counter.count + 1
            }
        case 'RESET-COUNTER':
            return counter.startValue === 0 ? {
                ...counter,
                errorMessage: '',
                count: 0
            } : {
                ...counter,
                errorMessage: '',
                count: counter.startValue
            }
        case "SET-UP-COUNTER":
            return {
                ...counter,
                maxValue: counter.maxValue,
                startValue: counter.startValue,
                count: counter.startValue
            }
        case "RESET-SETTINGS-COUNTER":
            return {
                ...counter,
                maxValue: 5,
                startValue: 0,
                count: 0,
            }
        case "SET-MAXVALUE":
            return {
                ...counter,
                maxValue: action.value
            }
        case "SET-STARTVALUE":
            return {
                ...counter,
                startValue: action.value
            }
        default:
            return counter
    }
}

export const addOneAC = () => {
    return {type: "ADD-ONE-IN-COUNTER"} as const
}

export const resetCounterAC = () => {
    return {type: "RESET-COUNTER"} as const
}

export const setUpCounterAC = () => {
    return {type: "SET-UP-COUNTER"} as const
}

export const resetSettingsCounterAC = () => {
    return {type: "RESET-SETTINGS-COUNTER"} as const
}

export const setMaxValueAC = (value: number) => {
    return {type: "SET-MAXVALUE", value} as const
}

export const setStartValueAC = (value: number) => {
    return {type: "SET-STARTVALUE", value} as const
}





