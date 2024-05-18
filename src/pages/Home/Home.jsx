import { Autocomplete, IconButton, TextField, Tooltip } from '@mui/material'
import React from 'react'
import {top100Films} from '../../static/static' 
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
const Home = () => {
  return (
    <div className='' >
      <h1 className='text-[80px] items-center justify-center flex'>Google</h1>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        className='w-[500px] mt-5 rounded-[10px]'
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />  )} />

          <div  className='flex mt-[20px] gap-[50px] w-[500px] flex-wrap ml-[20px]'>
          <Tooltip title="Google" className='w-[50px] h-[50px] '>
              <IconButton className='bg-gray-400 bg-opacity-25'>
               <GoogleIcon />
              </IconButton>
             </Tooltip>
             <Tooltip title="You Tube" className='w-[50px] h-[50px] '>
              <IconButton className='bg-gray-400 bg-opacity-25'>
               <YouTubeIcon />
              </IconButton>
             </Tooltip>
             <Tooltip title="Facebook" className='w-[50px] h-[50px] '>
              <IconButton className='bg-gray-400 bg-opacity-25'>
               <FacebookIcon />
              </IconButton>
             </Tooltip>
             <Tooltip title="Telegram" className='w-[50px] h-[50px] '>
              <IconButton className='bg-gray-400 bg-opacity-25'>
               <TelegramIcon />
              </IconButton>
             </Tooltip>
             <Tooltip title="Twiter" className='w-[50px] h-[50px] '>
              <IconButton className='bg-gray-400 bg-opacity-25'>
               <XIcon />
              </IconButton>
             </Tooltip>
             <Tooltip title="Delete" className='w-[50px] h-[50px] '>
              <IconButton className='bg-gray-400 bg-opacity-25'>
               <GoogleIcon />
              </IconButton>
             </Tooltip>
             <Tooltip title="Delete" className='w-[50px] h-[50px] '>
              <IconButton className='bg-gray-400 bg-opacity-25'>
               <GoogleIcon />
              </IconButton>
             </Tooltip>
             <Tooltip title="Delete" className='w-[50px] h-[50px] '>
              <IconButton className='bg-gray-400 bg-opacity-25'>
               <GoogleIcon />
              </IconButton>
             </Tooltip>
             <Tooltip title="Delete" className='w-[50px] h-[50px] '>
              <IconButton className='bg-gray-400 bg-opacity-25'>
               <GoogleIcon />
              </IconButton>
             </Tooltip>
             <Tooltip title="Delete" className='w-[50px] h-[50px] '>
              <IconButton className='bg-gray-400 bg-opacity-25'>
               <GoogleIcon />
              </IconButton>
             </Tooltip>
          </div>
      </div>
  )
}

export default Home