"use client";
import React from "react";
import '@/app/globals.css';
import '@/app/components/containers/container-home.css'
import '@/app/components/containers/container-profile.css'
import Input_text from "@/app/components/form/input_text";
import Button_primary from "@/app/components/form/button_primary";

export default function Editprofile() {
    function holamundo(){
        console.log("Hola mundo");
    }
    return (
        <div>
            <div className='Home'>
                <div className='sidebar'>
                    <h4>NAV</h4>
                </div>
                <div className='principal'>
                    <div className='User-panel'>
                        <p>Bienvenido</p>
                    </div>
                    <div className='interface'>
                        <div className="container-photo"></div>
                        <div className="container-form row">
                                <label>Full Name</label>
                                <Input_text hint={"Full Name"} type={"text"} id={"full-name"} handleInput={undefined}/>
                                <label>Email</label>
                                <Input_text hint={"Email"} type={"text"} id={"email"} handleInput={undefined}/>
                                <label>New password</label>
                                <Input_text hint={"New password"} type={"text"} id={"new-password"} handleInput={undefined}/>
                                <label>Confirm password</label>
                                <Input_text hint={"Confirm password"} type={"text"} id={"confirm-password"} handleInput={undefined}/>
                                <Button_primary texto={"Save Changes"} callback={holamundo} />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}