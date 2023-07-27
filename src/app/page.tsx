"use client";
import React from 'react';
import Login from '@/pages/Login';
import Home from '@/pages/Home'
import Register from '@/pages/Register';
import Recover_password from '@/pages/Recover-password'
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function App(){
  return (
    <div className='App'>
    <BrowserRouter>
        <Routes>
            <Route path='/Login' index element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Recover-password' element={<Recover_password />} />
            <Route path='/Home' element={<Home/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
} 