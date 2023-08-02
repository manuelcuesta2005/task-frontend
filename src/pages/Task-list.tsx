"use client";
import '@/app/globals.css'
import '@/app/components/containers/container-home.css'
import React from 'react'
import Swal from 'sweetalert2';
import Image from 'next/image';
import LogoHome from '@/app/assets/Home.png'
import Logout from '@/app/assets/Logout.png'
import iconUser from '@/app/assets/Icon-user.png'
import list_task from '@/app/assets/list_task.png'
import edit_profile from '@/app/assets/edit-profile.png'

export default function task_list() {
    return(
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
                    
                </div>
            </div>
        </div>
    )
}