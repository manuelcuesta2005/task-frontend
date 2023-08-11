"use client";
import Link from 'next/link';
import React, {useState} from 'react'
import { useRouter } from 'next/navigation';
import { httpPost } from '@/app/core/http-contract-request';
import { handleInput } from '@/app/core/repository/handleInput';
import { registerBody, validateRegisterBody } from '@/app/core/repository/register/register_body';
import Image from 'next/image'
import lista from '@/app/assets/lista.png'
import '@/app/components/containers/container-form.css'
import Input_text from '@/app/components/form/input_text'
import Button_primary from '@/app/components/form/button_primary';


export default function Register() {
    const router = useRouter()
    const [values, setValues] = useState(registerBody)


    const validateRegister = async () => {
        let validation = validateRegisterBody(values)
        if (typeof validation === 'string') alert(validation)
        else httpPost("Users", values).then((response) => { console.log(response) }).catch((err) => { console.log(err) });
        router.push("/Login")
    }

    return (
        <div className='container'>
            <div className='marca'>
                <Image src={lista} alt='Logo' className="logo mb-4" />
            </div>
            <form className='form-control container-form'>
                <h1>Register</h1>
                <Input_text hint={'Full Name'} type={'text'} id={'full_name'} handleInput={[handleInput, values, setValues]} />
                <br />
                <Input_text hint={'Identification'} type={'text'} id={'identification'} handleInput={[handleInput, values, setValues]} />
                <br />
                <Input_text hint={'Email'} type={'email'} id={'email'} handleInput={[handleInput, values, setValues]} />
                <br />
                <Input_text hint={'Password'} type={'password'} id={'password'} handleInput={[handleInput, values, setValues]} />
                <Button_primary texto={'Register'} callback={() => { validateRegister() }} />
                <Link href={'/Login'}>Login</Link>
            </form>
        </div>
    )
}