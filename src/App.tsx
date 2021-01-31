import React, {useEffect, useState} from 'react';
import './App.css';
import Buttons from './components/Buttons';
import {Display} from './components/Display';


export type AppStateType = {
    minValue: number
    maxValue: number
    setMode: boolean
    isSetDisabled: boolean
}

function App() {
    const [appState, setAppState] = useState<AppStateType>({
        minValue: 0,
        maxValue: 5,
        setMode: false,
        isSetDisabled: false
    })
    const [counter, setCounter] = useState<number>(appState.minValue)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        const maxValue = parseInt((localStorage.getItem('maxValue') || '0'), 10)
        const minValue = parseInt((localStorage.getItem('minValue') || '5'), 10)
        setAppState({...appState, maxValue, minValue})
    }, [])

    const increment = () => {
        if (counter === appState.maxValue) return false
        setCounter(counter + 1)
    }
    const reset = () => {
        setCounter(appState.minValue)
    }
    const set = () => {
        if (appState.setMode) {
            setAppState({...appState, setMode: false})
            localStorage.setItem('maxValue', JSON.stringify(appState.maxValue))
            localStorage.setItem('minValue', JSON.stringify(appState.minValue))
        } else {
            setCounter(appState.minValue)
        }
    }


    return (
        <div className="App">
        <div className="container">
        <div className="variant-2">
                <Display counter={counter}
                setMode={appState.setMode}
                appState={appState}
                setAppState={setAppState}
                error={error}
                setError={setError}/>
                <div className={'buttons'}>
                    <Buttons name={'increment'} isDisabled={(counter === appState.maxValue) || appState.setMode}
                             callBack={increment}/>
                    <Buttons name={'reset'} isDisabled={(counter === appState.minValue) || appState.setMode}
                             callBack={reset}/>
                    <Buttons name={'set'} isDisabled={!!error && appState.isSetDisabled} callBack={set}/>
                </div>
            </div>
        </div>
</div>
);
}

export default App;
