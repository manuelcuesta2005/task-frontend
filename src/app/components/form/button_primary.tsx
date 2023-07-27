"use client"
import React from 'react'
import './css/button_primary.css'

const Button_primary = (props:{texto: string, callback: Function }) => {
    return(
        <button type='button' className='button_primary' onClick={function(){props.callback()}}>{props.texto}</button>
    )
}

export default  Button_primary;