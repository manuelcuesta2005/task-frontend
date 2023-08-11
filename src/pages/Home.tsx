"use client";
import '@/app/globals.css'
import '@/app/components/containers/container-home.css'
import React, { useState } from 'react'
import Image from 'next/image';
import { status, priority } from '@/app/components/enums/enum-backend';
import { useRouter } from 'next/router';
import LogoHome from '@/app/assets/Home.png'
import Logout from '@/app/assets/Logout.png'
import iconUser from '@/app/assets/Icon-user.png'
import add_task from '@/app/assets/addTask.png'
import edit_profile from '@/app/assets/edit-profile.png'
import { httpGet } from '@/app/core/http-contract-request';
import { ContainerTask } from '@/app/components/container-task/container.task';

export const taskModelSingle = {id: 1, title: "", description: "", date: "", priority: "", category: ""}
export const taskModel = [taskModelSingle]

export default function task_list() {
    const router = useRouter();
    const [tasks, setTask] = useState(taskModel)

    React.useEffect(() => {
        httpGet("tasks").then((data) =>{
            setTask(data)
            console.log(data)
        }).catch((error) => console.error(error))
    }, [])

    const results = tasks.map((Task) =>
        <ContainerTask key={Task.id} tasks={Task}/>
    );

    const routerAdd = () => {
        router.push("/CreateTask")
    }
    const routerProfile = () =>{
        router.push('/Edit-profile')
    }
    const logout = () => {
        sessionStorage.clear()
        router.push("/Login")
    }

    return(
        <div className='Home'>
            <div className='sidebar'>
                <Image src={LogoHome} alt={'LogoHome'} className="image-nav" />
                <Image src={add_task} alt={'add_task'} className="image-nav" onClick={routerAdd}/>
                <div className='logout'>
                <Image src={Logout} alt={'logout'} className="image-nav" onClick={logout}/>
                </div>
            </div>
            <div className='principal'>
                <div className='User-panel'>
                    <p>Bienvenido</p>
                    <Image src={iconUser} alt={'user'} className="icon-user"/>
                </div>
                <div className='interface'>
                    {tasks.length > 0 ?(
                        <div className='task-list'>
                        {results}
                        </div>
                    ): (
                        <h1>No se encuentra ninguna tarea</h1>
                    )}

                </div>
            </div>
        </div>
    )
}