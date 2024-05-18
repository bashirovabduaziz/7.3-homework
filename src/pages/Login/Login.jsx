import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      if (username === 'Abduaziz' && password === '8486') {
        window.location.href = '/home';
        toast.success("Hush kelibsiz")
      } else {
        toast.error("Hatooooo!!!");
  
      }
    };
  
  return (
    <div className='text-white h-[100vh] flex items-center justify-center bg-cover' >
        <div className='bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30  relative'>
        <h1 className='text-4xl font-bold text-center  mb-6'>Login</h1>
        <form action="">
            <div className='relative my-4'>
                <input type="text" className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0  border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:right-0 focus:text-white focus:border-blue-600 peer' placeholder=''  value={username} 
        onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="" className='absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'>Username</label>
            </div>
            <div className='relative my-4'>
            <input type="password" className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0  border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:right-0 focus:text-white focus:border-blue-600 peer' placeholder='' value={password}  onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="" className='absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6  
        '  >Your Password</label>
            </div>
            <button type='submit' className=' mt-6 w-full mb-4 text-[18px] rounded bg-blue-500 py-2 hover:bg-blue-600 transition-colors duration-300'  onClick={handleLogin}>Login</button>
        </form>
      
        </div>
        <ToastContainer className='duration-1000' />
    </div>
  )
}

export default Login