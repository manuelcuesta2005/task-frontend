"use client"
import React, {useEffect ,useState} from 'react'
import { text } from 'stream/consumers';
import './css/input_text.css'

function Input_text(props:{hint: string, type: string, id: string, handleInput: any[], value?: string }){
   
    const [Text, setText] = useState('')
    useEffect(() =>{ if (props.value != null) { setText(props.value) } }, [])
    
    return(
        <input className='form-control input_text' type={props.type} placeholder={props.hint} value={Text} id={props.id} onChange={e=>{
            setText(e.target.value)
            props.handleInput[0](e, props.handleInput[1], props.handleInput[2])}} />
    )
}

export default Input_text;