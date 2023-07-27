"use client";
import React from 'react'
import '@/app/globals.css'
import iconUser from '@/app/components/svg/icon-user';
import Swal from 'sweetalert2';
import '@/app/components/containers/container-home.css'

export default function Home() {
    return (
        <div className='Home'>
            <div className='sidebar'>
                <h4>NAV</h4> 
            </div>
            <div className='principal'>
                <div className='User-panel'>
                    <p>Bienvenido</p>
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