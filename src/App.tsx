import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Buttons/Button";
import {Count} from "./Counter/Count";
import {LimitInput} from "./InputForSet/LimitInput";




function App() {
    const defaultStartValue = 5;

    const [maxValue, setMaxValue] = useState<number>(defaultStartValue)
    let [startValue, setStartValue] = useState<number>(0)
    let [count, setCount] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')



    useEffect(() => {
        let localStorageValue = localStorage.getItem('count value')
        if (localStorageValue) {
            let newValue = JSON.parse(localStorageValue)
            console.log(newValue)
            setCount(newValue)
        }
    }, [error])


    const onClickResetHandler = () => {
        let localStorageStartValue = localStorage.getItem('start value')
        if (localStorageStartValue) {
            let newValue = JSON.parse(localStorageStartValue)
            setCount(newValue)
        } else if (errorMessage !== '') {
            setCount(0)
            setErrorMessage('')
        } else {
            setCount(0)


        }
    }

    useEffect(() => {
        localStorage.setItem('count value', JSON.stringify(count))
    }, [])



    const onClickSetHandler = () => {
        setMaxValue(maxValue)
        setStartValue(startValue)
        setCount(startValue)
        localStorage.setItem(('max value'), JSON.stringify((maxValue)))
        localStorage.setItem(('start value'), JSON.stringify((startValue)))
    }

    const onClickResetSettingsHandler = () => {
        setMaxValue(defaultStartValue)
        setStartValue(0)
        setCount(0)
        setError(false)
        setErrorMessage('')
        localStorage.clear();
    }

    const onClickPlusHandler = () => {
        setCount(count + 1);
    }


    return (
        <div className="App">
            <div className='settings'>
                <div className={'conterDiv'}>
                    <div className='MaxAndStart'>
                        <LimitInput labelName={'max value'} number={maxValue} callback={setMaxValue} error={error} setError={setError}/>
                        <LimitInput labelName={'start value'} number={startValue} callback={setStartValue} error={error} setError={setError}/>
                    </div>
                </div>
                <div className='buttons'>
                    <Button name={'set'} maxValue={maxValue} callback={onClickSetHandler} count={0} error={error}/>
                    <Button name={'reset'} callback={onClickResetSettingsHandler} count={0} maxValue={maxValue} />
                </div>
            </div>
            <div className='counter'>
                <div className='conterDiv'>
                    <Count count={count} disableValue={maxValue} startValue={startValue} errorMessage={errorMessage} setErrorMessage={setErrorMessage} error={error} setError={setError}/>
                </div>
                <div className='buttons'>
                    <Button name={'inc'} callback={onClickPlusHandler} count={count} maxValue={maxValue} error={error}/>
                    <Button name={'reset'} callback={onClickResetHandler} count={0} maxValue={maxValue}/>
                </div>
            </div>
        </div>
    );
}

export default App;
