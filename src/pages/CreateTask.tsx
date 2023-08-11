"use client"
import "@/app/globals.css";
import "@/app/components/containers/container-home.css";
import Image from 'next/image'
import Swal from "sweetalert2";
import { useRouter } from 'next/router'
import Logout from "@/app/assets/Logout.png";
import LogoHome from "@/app/assets/Home.png";
import React, {useEffect, useState} from 'react'
import addTask from '@/app/assets/addTask.png'
import iconUser from "@/app/assets/Icon-user.png";
import { taskModel, taskModelSingle } from './Home';
import edit_profile from "@/app/assets/edit-profile.png";
import Input_text from '@/app/components/form/input_text';
import { handleInput } from "@/app/core/repository/handleInput";
import Button_primary from '@/app/components/form/button_primary'
import { httpPut, httpPost } from '@/app/core/http-contract-request'
import Button_secundary from "@/app/components/form/button_secundary";

export default function CreateTask(props: {task?: typeof taskModelSingle}){
    const router = useRouter();
    const [values, setValues] = useState(taskModel)

    const returnList = ()=>{
        router.push('/Task-list')
    }
    useEffect(() =>{
        if(props.task?.title != '' && props.task != null){
            setValues([props.task])
        } 
    }, [])
    
    const createTask = () =>{
        httpPost("tasks", values).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error)
        })
        Swal.fire(
            'HECHO',
            'Se ha agregado la tarea correctamente',
            'success'
        )
        router.push("/Home")
    }

    const updateTask = () => {
        httpPut("tasks", values, props.task?.id + '').then((response) =>{
            console.log(response)
        }).catch((error) =>{
            console.log(error)
        })
    }
    
    function setDate(date?: string): string{
        var dateArray = date?.split("T")
        try{
            return dateArray!![0];
        }catch (e: any){
            return ''
        }
    }
    
    const logout = () => {
        sessionStorage.clear()
        router.push("/Login")
    }
    
    const routerHome = () => { router.push("/Home") }
    const routerProfile = () => { router.push("/Edit-profile") }

    return(
        <div>
        <div className="Home">
                <div className="sidebar">
                    <Image src={LogoHome} alt={"LogoHome"} className="image-nav" onClick={routerHome} />
                    <Image src={addTask} alt={"AddTask"} className="image-nav" />

                    <div className="logout">
                        <Image src={Logout} alt={"logout"} className="image-nav"  onClick={logout}/>
                    </div>
                </div>
                <div className="principal">
                    <div className="User-panel">
                        <p>Bienvenido</p>
                        <Image src={iconUser} alt={"user"} className="icon-user" />
                    </div>
                    <div className="interface">
                        <div className="container-form row">
                            <label>Title Task</label>
                            <Input_text hint={"Title"} type={"text"} id={"title"} value={props.task?.title} handleInput={[handleInput, values, setValues]}/>
                            <label>Date</label>
                            <Input_text hint={"Date"} type={"date"} id={"date"} value={setDate(props.task?.date)} handleInput={[handleInput, values, setValues]} />
                            <label>Category</label>
                            <Input_text hint={"Category"} type={"text"} id={"category"} value={props.task?.category} handleInput={[handleInput, values, setValues]} />
                            <label>Priority</label>
                            <Input_text hint={"Priority"} type={"text"} id={"priority"} value={props.task?.priority} handleInput={[handleInput, values, setValues]} />
                            <label>Description</label>
                            <Input_text hint={"Description"} type={"text"} id={"description"} value={props.task?.description} handleInput={[handleInput, values, setValues]} />
                            {
                                props.task?.id != null ? (<Button_primary texto={"Update Task"} callback={updateTask} />) 
                                : 
                                (<Button_primary texto={"Create Task"} callback={createTask} />)
                            }
                            <Button_secundary texto={"Regresar"} callback={returnList}/>                      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}