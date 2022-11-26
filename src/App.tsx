import React, {useCallback} from 'react';
import './App.css';
import {Button} from "./Buttons/Button";
import {Count} from "./Counter/Count";
import {LimitInput} from "./InputForSet/LimitInput";
import {useDispatch, useSelector} from "react-redux";
import {
    addOneAC,
    InitialStatePropsType,
    resetCounterAC,
    resetSettingsCounterAC,setMaxValueAC, setStartValueAC,
    setUpCounterAC
} from "./store/counterReducer";
import {AppRootStateType} from "./store/store";





function App() {
    const counter = useSelector<AppRootStateType, InitialStatePropsType>(state => state.counter)

    const dispatch = useDispatch()

    // const defaultStartValue = 5;

    // const [maxValue, setMaxValue] = useState<number>(defaultStartValue)
    // let [startValue, setStartValue] = useState<number>(0)
    // let [count, setCount] = useState<number>(0)
    // const [error, setError] = useState<boolean>(false)
    // const [errorMessage, setErrorMessage] = useState<string>('')


    // useEffect(() => {
    //     let localStorageValue = localStorage.getItem('count value')
    //     if (localStorageValue) {
    //         let newValue = JSON.parse(localStorageValue)
    //         console.log(newValue)
    //         setCount(newValue)
    //     }
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('count value', JSON.stringify(count))
    // }, [count])


    const resetSettingsCounter = useCallback(() => {
        dispatch(resetSettingsCounterAC())
        // setMaxValue(defaultStartValue)
        // setStartValue(0)
        // setCount(0)
        // setError(false)
        // setErrorMessage('')
        // localStorage.clear();
    }, [])

    const setUpCounter = useCallback(() => {
        dispatch(setUpCounterAC())
        // setMaxValue(maxValue)
        // setStartValue(startValue)
        // setCount(startValue)
        // localStorage.setItem(('max value'), JSON.stringify((maxValue)))
        // localStorage.setItem(('start value'), JSON.stringify((startValue)))
    }, [])

    const resetCounter = useCallback(() => {
        dispatch(resetCounterAC())
        // let localStorageStartValue = localStorage.getItem('start value')
        // if (localStorageStartValue) {
        //     let newValue = JSON.parse(localStorageStartValue)
        //     setCount(newValue)
        // } else if (errorMessage !== '') {
        //     setCount(0)
        // } else {
        //     setErrorMessage('')
        //     setCount(0)
        // }
    }, [])

    const addOneInCounter = useCallback(() => {
        dispatch(addOneAC())
        // setCount(count + 1);
        // localStorage.setItem('count value', JSON.stringify(count))
    }, [])

    const setMaxValue = useCallback((value: number) => {
        dispatch(setMaxValueAC(value))
    }, [dispatch])

    const setStartValue = useCallback((value: number) => {
        dispatch(setStartValueAC(value))
    }, [dispatch])


    let error = false
    let errorMessage = ''
    if (counter.startValue >= counter.maxValue) {
        error = true
        errorMessage = 'Incorrect value!'
    }
    if (counter.count >= counter.maxValue && counter.maxValue !== 0) {
        error = true
        errorMessage = String(counter.maxValue)

    }
    if (counter.startValue < 0 || counter.maxValue < 0) {
        error = true
        errorMessage = 'Incorrect value!'

    }
    if (counter.startValue === 0 && counter.maxValue === 0) {
        error = true
        errorMessage = 'Incorrect value!'}
    console.log(error)
    console.log(errorMessage)


    return (
        <div className="App">

            <div className="App-header">
                <div className='settings'>
                    <div className={'conterDiv'}>
                        <div className='MaxAndStart'>
                            <LimitInput labelName={'max value'} number={counter.maxValue} callback={setMaxValue} startValue={counter.startValue}  error={error}/>
                            <LimitInput labelName={'start value'} number={counter.startValue} callback={setStartValue}  maxValue={counter.maxValue} error={error} />
                        </div>
                    </div>
                    <div className='buttons'>
                        <Button name={'set'} callback={setUpCounter} count={0} error={error} />
                        <Button name={'reset'} callback={resetSettingsCounter} count={0} />
                    </div>
                </div>

                <div className='counter'>
                    <div className='conterDiv'>
                        <Count count={counter.count} disableValue={counter.maxValue} startValue={counter.startValue} errorMessage={errorMessage}  error={error} />
                    </div>
                    <div className='buttons'>
                        <Button name={'inc'} callback={addOneInCounter} count={counter.count} error={error} errorMessage={errorMessage}/>
                        <Button name={'reset'} callback={resetCounter} count={0} errorMessage={errorMessage}/>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default App;
