"use client";
import Link from 'next/link';
import React, {useState} from 'react'
import { useRouter } from 'next/navigation';
import { httpPost } from '@/app/core/http-contract-request';
import { handleInput } from '@/app/core/repository/handleInput';
import { loginBody, validateLoginBody } from '@/app/core/repository/login/login_body';
import Image from 'next/image'
import lista from '@/app/assets/lista.png'
import '@/app/components/containers/container-form.css'
import Input_text from '@/app/components/form/input_text'
import Button_primary from '@/app/components/form/button_primary';


export default function Login() {
    const [values, setValues] = useState(loginBody)


    const validateLogin = async () => {
        let validation = validateLoginBody(values)
        if (typeof validation === 'string') alert(validation)
        else httpPost("Users/login", values).then((response) => { sessionStorage.setItem("user", response.name); }).catch((err) => { console.log(err) });
    }

    return (
        <div className='container'>
            <div className='marca'>
                <Image src={lista} alt='Logo' className="logo mb-4" />
            </div>
            <form className='form-control container-form'>
                <h1>Register</h1>
                <Input_text hint={'Full Name'} type={'text'} id={'name'} handleInput={[handleInput, values, setValues]} />
                <br />
                <Input_text hint={'Email'} type={'email'} id={'email'} handleInput={[handleInput, values, setValues]} />
                <br />
                <Input_text hint={'Password'} type={'password'} id={'password'} handleInput={[handleInput, values, setValues]} />
                <br />
                <Input_text hint={'Confirm Password'} type={'password'} id={'confirm-password'} handleInput={[handleInput, values, setValues]} />
                <Button_primary texto={'Register'} callback={() => { validateLogin() }} />
                <Link href={'/Login'}>Login</Link>
            </form>
        </div>
    )
}