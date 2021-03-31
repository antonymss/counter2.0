import {AppStateType} from "../App";
import React, {ChangeEvent, Dispatch, SetStateAction} from "react";


type SetCounterDisplayType = {
    error: string
    setError: Dispatch<SetStateAction<string>>
    appState: AppStateType
    setAppState:(state:AppStateType)=>void
}

 export function SetCounterDisplay(props: SetCounterDisplayType){
    const onChangeMaxValue = (e:ChangeEvent<HTMLInputElement>)=>{
        const currentValue = +e.currentTarget.value
        if(currentValue<= props.appState.minValue){
            props.setError("Max value can't be <= than min value")
            props.setAppState({...props.appState,  isSetDisabled:true})
            return false
        }
        props.setError('')
        props.setAppState({...props.appState, maxValue: currentValue, isSetDisabled: false})
    }
        const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>)=>{
            const currentValue = e.currentTarget.valueAsNumber
            if(currentValue>= props.appState.maxValue ||currentValue<0){
                props.setError(" Min value can't be>= than max value")
                props.setAppState({...props.appState,  isSetDisabled:false})
                return false
            }
            props.setError('')
            props.setAppState({...props.appState, minValue: currentValue, isSetDisabled:false})
        }
  return(
      <div className={'setMode'}>
          <div className={props.error?'error':''}>
              <span>Max value:</span>
              <input type="number" value={props.appState.maxValue} onChange={onChangeMaxValue}/>
          </div>
          <div className={props.error?'error':''}>
              <span>Min value</span>
              <input type="number" value={props.appState.minValue} onChange={onChangeMinValue}/>
          </div>
          {props.error && <span className='error'>{props.error}</span>}
      </div>
  )
}