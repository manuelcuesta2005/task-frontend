"use client";
import '@/app/globals.css'
import '@/app/components/containers/container-home.css'
import React from 'react'
import Swal from 'sweetalert2';
import Image from 'next/image';
import Logout from '@/app/assets/Logout.png'
import LogoHome from '@/app/assets/Home.png'
import iconUser from '@/app/assets/Icon-user.png'
import list_task from '@/app/assets/list_task.png'
import edit_profile from '@/app/assets/edit-profile.png'

export default function Home() {
    return (
        <div className='Home'>
            <div className='sidebar'>
                <Image src={LogoHome} alt={'LogoHome'} className="image-nav"/>
                <Image src={list_task} alt={'List_task'} className="image-nav"/>
                <Image src={edit_profile} alt={'edit_profile'} className="image-nav"/>

                <div className='logout'>
                <Image src={Logout} alt={'logout'} className="image-nav"/>
                </div>
            </div>
            <div className='principal'>
                <div className='User-panel'>
                    <p>Bienvenido</p>
                    <Image src={iconUser} alt={'user'} className="icon-user"/>
                </div>
                <div className='interface'>
                    <div className='card task-pending'>
                        <div className='card2'>

                        </div>
                    </div>
                    <div className='card task-progress'>
                        <div className='card2'>

                        </div>
                    </div>
                    <div className='card task-complete'>
                        <div className='card2'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}