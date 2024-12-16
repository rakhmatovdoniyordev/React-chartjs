import React from 'react'
import { IoSearch } from "react-icons/io5";
import { RiUser3Fill } from "react-icons/ri";
import { IoMdSettings, IoIosNotifications  } from "react-icons/io";
const Header = () => {
  return (
    <header className='mt-2'>
        <nav className='w-full flex justify-between h-20 items-center'>
            <div className='text-white'>
                <p className='text-[#8d8c8c]'>Pages <span className='text-white'>/Dashboard</span></p>
                <p>Dashboard</p>
            </div>
            <div className='flex gap-5 items-center'>
                <form action="" className='bg-[#0F1535] flex items-center h-10 rounded-2xl p-3 border border-[#718096] gap-2'>
                    <a href="">
                        <IoSearch className='text-[18px] text-[#718096]'/>
                    </a>
                    <input type="text" placeholder='Type here...' className='bg-transparent outline-none text-[#fff]'/>
                </form>
                <a href="" className='flex items-center gap-1 text-[#718096]'>
                    <RiUser3Fill/>
                    Sign in
                </a>
                <a href="" className='text-[#718096]'>
                    <IoMdSettings className='text-xl'/>
                </a>
                <a href="" className='text-[#718096]'>
                    <IoIosNotifications className='text-xl'/>
                </a>
            </div>
        </nav>
    </header>
  )
}

export default Header