import React from 'react'
import { FaUserTie } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { MdSyncLock } from "react-icons/md";
import { RiExchangeDollarLine } from "react-icons/ri";

function section2() {
  return (
    <div class="flex justify-center">
        <div className='bg-slate-200 md:p-10 sm:p-6 p-3 -m-[20px] rounded-[20px]'>
            <div className='flex justify-evenly sm:gap-[1rem] gap-[0.5rem] md:gap-[4rem] '>
                <div>   <FaUserTie className='text-[25px] md:text-[40px]  text-red-700 md:ml-10 ml-3'/>
                <p class="font-semibold text-[8px] md:text-[16px]">BEST EXECUTION</p></div>
             
                <div><FaClockRotateLeft className='text-[25px] md:text-[40px]  text-red-700 ml-3 md:ml-6'/>
                <p class="font-semibold text-[8px] md:text-[16px]">BEST SPREAD</p></div>
                <div><MdSyncLock className='text-[25px] md:text-[40px]  text-red-700 ml-3 md:ml-8'/>
                <p class="font-semibold text-[8px] md:text-[16px]">SECURE FUNDS</p></div>
                <div><RiExchangeDollarLine className='text-[25px] md:text-[40px] text-red-700 ml-5 md:ml-14'/>
                <p class=" font-semibold text-[8px] md:text-[16px]">100% TRANSPARENCY</p></div>

            </div>
        </div>
    </div>
  )
}

export default section2