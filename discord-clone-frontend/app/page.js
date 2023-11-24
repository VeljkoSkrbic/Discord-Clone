'use client';
import AuthButton from '@/components/AuthButton'
import Chat from '../components/Chat'
import ProfileClient from '@/components/Profile'
import './globals.css';
import Sidebar from '@/components/Sidebar';
import { useUser } from '@auth0/nextjs-auth0/client';
import Login from '@/components/Login';
import Friends from '@/components/Friends';


export default function Home() {
  const { user } = useUser();
  return user ?(
    <div id='container' className='grid grid-rows-[100%] grid-cols-[4%_96%]'>
      <div id='server-sidebar' className='flex w-[100%]'>
        <Sidebar />
      </div>
      <div id='content' className='flex h-screen'>
        <div id='sidebar' className='bg-secondsidebar w-[200px] h-[100%] flex flex-col'>
          <div id='custom-part flex flex-row'>
           <Friends/>
          </div>
          <div id='user-info' className='relative justify-between mt-auto'>
            <ProfileClient />
          </div>  
        </div>
        <div id='main-content' className='flex flex-col w-screen'>
          <Chat/>
        </div>  
      </div>
    </div>
  ):
  (
    <Login/>
  )
}
