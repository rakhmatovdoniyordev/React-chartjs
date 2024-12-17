import React, { useEffect } from 'react'
import "./Dashboard.css"
import bg from "../../assets/help.png"
import Header from '../../components/Header/Header'
import { NavLink } from 'react-router-dom'
import { IoHome, IoStatsChart, IoCardOutline, IoRocketSharp  } from "react-icons/io5";
import { FaWrench } from "react-icons/fa";
import { RiUser3Fill } from 'react-icons/ri'
import { IoIosDocument } from 'react-icons/io'
import Cards from '../../components/Cards/Cards'
import Hero from '../../components/Hero/Hero'
import LineChartPerson from '../../components/LineChartPerson'
import axios from 'axios'
import { useStore } from '../../zustand'
import quesion from "../../assets/quesion.png"

const Dashboard = () => {
  const token = useStore(state => state.token)
  const logout = useStore(state => state.logout)

  useEffect(()=> {
    axios
      .get("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: token
        }
      })
      .then(res => console.log(res))
      .catch(err => {
        logout()
      })
  }, [])
  return (
    <main className='flex gap-16'>
        <section className={`min-w-[300px] h-[935px] back backdrop-blur-3xl bg-[url('./assets/bg.png')] bg-no-repeat bg-center bg-cover rounded-2xl sticky top-1 my-2 left-2 border-[1px] border-[#1e456d]`}>
          <div className='w-full h-full relative flex items-center flex-col p-6'>
            <div className='flex-1 w-full'>
              <h2 className='text-white flex justify-center border-b border-b-white pb-7 w-full'>VISION UI FREE</h2>
              <div className='mt-5 w-full'>
                  <NavLink className={`w-full flex gap-4 items-center h-14 rounded-2xl py-4 px-3 text-white`}>
                    <div className='p-2 bg-[#1A1F37] rounded-xl text-[#0075FF]'><IoHome/></div>
                    Dashboard
                  </NavLink>
                  <NavLink className={`w-full flex gap-4 items-center h-14 rounded-2xl py-4 px-3 text-white`}>
                    <div className='p-2 bg-[#1A1F37] rounded-xl text-[#0075FF]'><IoStatsChart/></div>
                    Tables
                  </NavLink>
                  <NavLink className={`w-full flex gap-4 items-center h-14 rounded-2xl py-4 px-3 text-white`}>
                    <div className='p-2 bg-[#1A1F37] rounded-xl text-[#0075FF]'><IoCardOutline /></div>
                    Billing
                  </NavLink>
                  <NavLink className={`w-full flex gap-4 items-center h-14 rounded-2xl py-4 px-3 text-white`}>
                    <div className='p-2 bg-[#1A1F37] rounded-xl text-[#0075FF]'><FaWrench /></div>
                    RTL
                  </NavLink>
                  <h4 className='my-6 text-white'>ACCOUNT PAGES</h4>
                  <NavLink className={`w-full flex gap-4 items-center h-14 rounded-2xl py-4 px-3 text-white`}>
                    <div className='p-2 bg-[#1A1F37] rounded-xl text-[#0075FF]'><RiUser3Fill /></div>
                    Profile
                  </NavLink>
                  <NavLink className={`w-full flex gap-4 items-center h-14 rounded-2xl py-4 px-3 text-white`}>
                    <div className='p-2 bg-[#1A1F37] rounded-xl text-[#0075FF]'><IoIosDocument/></div>
                    Sign In
                  </NavLink>
                  <NavLink className={`w-full flex gap-4 items-center h-14 rounded-2xl py-4 px-3 text-white`}>
                    <div className='p-2 bg-[#1A1F37] rounded-xl text-[#0075FF]'><IoRocketSharp/></div>
                    Sign Up
                  </NavLink>
              </div>
            </div>
            <div className='w-full rounded-xl relative'>
              <div className='relative'>
                <img src={bg} alt="" className='w-full rounded-xl absolute bottom-[-100%]'/>
              </div>
              <div className='absolute bottom-[-100%] p-4 flex flex-col justify-between h-[194px] w-full'>
                <div>
                  <img src={quesion} alt="" />
                </div>
                <div>
                  <h3 className='text-white text-[20px] font-semibold'>Need help ?</h3>
                  <p className='text-white'>Please ckeck our docs</p>
                </div>
                <div className='w-full'>
                  <button className='w-full py-3 rounded-xl bg-[#0A0E23B5] text-white backdrop-blur-md'>Documentation</button>
                </div>
              </div>
              </div>
          </div>
        </section>
        <section className='w-full mr-9'>
          <Header/>
          <Cards/>
          <Hero/>
          <LineChartPerson/>
        </section>
    </main>
  )
}

export default Dashboard