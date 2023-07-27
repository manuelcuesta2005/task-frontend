"use client";
import React from 'react'
import Swal from 'sweetalert2'
import Image from 'next/image'
import lista from '@/app/assets/lista.png'
import '@/app/components/containers/container-form.css'
import Input_text from '@/app/components/form/input_text'
import Button_primary from '@/app/components/form/button_primary';


export default function Login() {
    function hola() {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <div className='container'>
            <div className='marca'>
                <Image src={lista} alt='Logo' className="logo mb-4" />
            </div>
            <form className='form-control container-form'>
                <h1>Login</h1>
                <Input_text hint={'Full Name'} type={'text'} id={'name'} handleInput={undefined} />
                <br />
                <Input_text hint={'Email'} type={'email'} id={'email'} handleInput={undefined} />
                <br />
                <Input_text hint={'Password'} type={'password'} id={'password'} handleInput={undefined} />
                <br />
                <Input_text hint={'Confirm Password'} type={'password'} id={'confirm-password'} handleInput={undefined} />
                <Button_primary texto={'Register'} callback={hola} />
            </form>
        </div>
    )
}