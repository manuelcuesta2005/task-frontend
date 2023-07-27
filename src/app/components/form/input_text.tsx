"use client"
import React, {Fragment} from 'react'
import './css/input_text.css'

function Input_text(props:{hint: string, type: string, id: string, handleInput: any }){
    return(
        <input className='form-control input_text' type={props.type} placeholder={props.hint} id={props.id} onChange={e=>props.handleInput(e.target.value,e.target.name)} />
    )
}

export default Input_text;