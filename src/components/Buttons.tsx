import React from 'react'

type ButtonsType = {
    name: string
    callBack: () => void
    isDisabled:boolean
}

 function Buttons(props:ButtonsType) {
return(
    <button onClick={()=>{props.callBack()}} disabled={props.isDisabled}>
        {props.name}
    </button>
)
}
export default Buttons