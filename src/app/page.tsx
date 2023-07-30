"use client";
import React from 'react';
import Home from '@/pages/Home'
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Editprofile from '@/pages/Edit-profile';
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
            <Route path='/Edit-profile' element={<Editprofile/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
} 