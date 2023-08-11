"use client";
import '@/app/components/containers/container-form.css'
import React from 'react';
import Home from '@/pages/Home'
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import CreateTask from '@/pages/CreateTask';
import EditTask from '@/pages/[id]';
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function App(){
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home/>} />
            <Route path='/login' index element={<Login />} />
            <Route path='/register' element={<Register />} /> 
            <Route path='/CreateTask' element={<CreateTask/>} />
            <Route path='/Task/:id' element={<EditTask />} />
        </Routes>
    </BrowserRouter>
  );
} 