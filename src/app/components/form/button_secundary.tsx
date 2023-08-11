"use client"
import React from 'react'
import './css/button_secundary.css'

const Button_secundary = (props:{texto: string, callback: Function }) => {
    return(
        <button type='button' className='button_secundary' onClick={function(){props.callback()}}>{props.texto}</button>
    )
}

export default  Button_secundary;