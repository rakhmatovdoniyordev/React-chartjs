import React from 'react'
import { IoCart, IoDocumentText, IoWallet } from 'react-icons/io5'
import { RiGlobalFill } from 'react-icons/ri'

const Cards = () => {
  return (
    <section>
        <div className='grid grid-cols-4 gap-6'>
            <div className='bg-[#060B26BD] p-5 rounded-xl flex justify-between items-center'>
                <div>
                    <p className='text-[12px]  text-[#A0AEC0]'>Today’s Money</p>
                    <h4 className='text-white text-[22px]'>$53,000 <span className='text-[14px] text-[#01B574]'>+55%</span></h4>
                </div>
                <div className='p-3 bg-[#0075FF] rounded-xl'>
                    <IoWallet className='text-white text-xl'/>
                </div>
            </div>
            <div className='bg-[#060B26BD] p-5 rounded-xl flex justify-between items-center'>
                <div>
                    <p className='text-[12px]  text-[#A0AEC0]'>Today’s Users</p>
                    <h4 className='text-white text-[22px]'>2,300 <span className='text-[14px] text-[#01B574]'>+5%</span></h4>
                </div>
                <div className='p-3 bg-[#0075FF] rounded-xl'>
                    <RiGlobalFill className='text-white text-xl'/>
                </div>
            </div>
            <div className='bg-[#060B26BD] p-5 rounded-xl flex justify-between items-center'>
                <div>
                    <p className='text-[12px]  text-[#A0AEC0]'>New Clients</p>
                    <h4 className='text-white text-[22px]'>+3,052 <span className='text-[14px] text-[#E31A1A]'>-14%</span></h4>
                </div>
                <div className='p-3 bg-[#0075FF] rounded-xl'>
                    <IoDocumentText className='text-white text-xl'/>
                </div>
            </div>
            <div className='bg-[#060B26BD] p-5 rounded-xl flex justify-between items-center'>
                <div>
                    <p className='text-[12px]  text-[#A0AEC0]'>Total Sales</p>
                    <h4 className='text-white text-[22px]'>$173,000 <span className='text-[14px] text-[#01B574]'>+8%</span></h4>
                </div>
                <div className='p-3 bg-[#0075FF] rounded-xl'>
                    <IoCart className='text-white text-xl'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cards