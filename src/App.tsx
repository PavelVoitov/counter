import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Buttons/Button";
import {Count} from "./Counter/Count";
import {LimitInput} from "./InputForSet/LimitInput";




function App() {

    const [maxValue, setMaxValue] = useState<number>(0)
    let [startValue, setStartValue] = useState<number>(0)
    let [count, setCount] = useState<number>(0)
    const [error, setError] = useState<string>('')
    const disableValue = maxValue;


    useEffect(() => {
        let localStorageValue = localStorage.getItem('count value')
        if (localStorageValue) {
            let newValue = JSON.parse(localStorageValue)
            console.log(newValue)
            setCount(newValue)
        }
    }, [])


    const onClickResetHandler = () => {
        // let start = localStorage.getItem(('start value'),  JSON.parse((startValue)))
       setCount(0)
       //  startValue ? setCount(startValue) : 0
        localStorage.clear();
    }

    useEffect(() => {
        localStorage.setItem('count value', JSON.stringify(count))
    }, [count])



    const onClickSetHandler = () => {
        setMaxValue(maxValue)
        setStartValue(startValue)
        if (startValue) {
            setCount(startValue)
        }
        localStorage.setItem(('max value'), JSON.stringify((maxValue)))
        localStorage.setItem(('start value'), JSON.stringify((startValue)))
    }

    const onClickResetSettingsHandler = () => {
        setMaxValue(0)
        setStartValue(0)
        setCount(0)
        localStorage.clear();
    }

    const onClickPlusHandler = () => {
        setCount(count + 1);
    }


    return (
        <div className="App">
            <div className='counter'>
                <div className='conterDiv'>
                    <Count count={count} disableValue={disableValue}/>
                </div>
                <div className='buttons'>
                    <Button name={'inc'} callback={onClickPlusHandler} count={count} disableValue={disableValue}/>
                    <Button name={'reset'} callback={onClickResetHandler} count={0} disableValue={disableValue}/>
                </div>
            </div>
            <div className='settings'>
                <div className={'conterDiv'}>
                    <div className='MaxAndStart'>
                        <LimitInput labelName={'max value'} number={maxValue} callback={setMaxValue} error={error} setError={setError}/>
                        <LimitInput labelName={'start value'} number={startValue} callback={setStartValue} error={error} setError={setError}/>
                    </div>
                </div>
                <div className='buttons'>
                    <Button name={'set'} disableValue={disableValue} callback={onClickSetHandler}/>
                    <Button name={'reset'} callback={onClickResetSettingsHandler} count={0} disableValue={disableValue}/>
                </div>
            </div>
        </div>
    );
}

export default App;
