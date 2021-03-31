import React, {Dispatch, SetStateAction} from 'react'
import {AppStateType} from "../App";
import { SetCounterDisplay } from './SetCounterDisplay';

type DisplayType = {
    counter?: number
    setMode?: boolean
    appState: AppStateType
    setAppState: (state: AppStateType) => void
    error: string
    setError: Dispatch<SetStateAction<string>>
}

export function Display(props: DisplayType) {
    const max = props.counter === props.appState.maxValue ? 'max' : ''
    return (
        props.setMode ?
            <SetCounterDisplay
                error={props.error}
                setError={props.setError}
                appState={props.appState}
                setAppState={props.setAppState}/> :
            <div className={`display ${max}`}>{props.counter}</div>
    )
}