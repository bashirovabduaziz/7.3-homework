import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import './App.css'

const App = () => {
  return (
    <>
    <div className=' text-white h-[100vh] flex items-center justify-center  bg-cover' style={{backgroundImage:"url(https://wallpapers.com/images/hd/google-calendar-background-tfpb8g86k386xz0l.jpg)"}}>
      <Routes>
           <Route path='/' element={<Home />}/>
      </Routes>
    </div>
    </>
  )
}

export default App