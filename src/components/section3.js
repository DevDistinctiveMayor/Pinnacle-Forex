import React from 'react'
import img from './img/f2.jpg'
import img3 from './img/f4.jpg'
function section3() {
  return (
    <div class="mt-[4rem]">
        <div className='flex justify-center'>
        <div className='flex md:flex-row flex-col h-[rem] justify-center gap-[3rem]'>
            <div className='md:w-[30rem] w-[20rem]'>
                <img src={img3} className='md:h-[22rem]' alt="img"/>
                <div class="bg-slate-200 p-5">
                <p className='md:text-[22px] text-[15px] font-semibold text-red-700 mt-5'>PATH TO FINANCIAL BREAKTHROUGH</p>
                <p className='mt-3'>We understand that stepping into Forex can be daunting, but rest assured
                    with our proven system. Even if you're new to trading, success is within your reach.
                You are about start on the path to financial growth. Simply trade twice, and you will unlock a world of benefits designed to set you up for success.

                </p>
                </div>                
            </div>
            <div className='md:w-[30rem] w-[20rem]'>
                <img src={img} className='md:h-[22rem] 'alt="img"/>
                <div class="bg-slate-200 p-5">
                <p className='md:text-[22px] text-[16px] font-semibold text-red-700 mt-5'>INSTANCE $50 TRADING BONUS</p>
                <p classname="mt-10">You'll gain access to valuable educational materials and our exclusive signal group, which has been a significant investment. Plus, enjoy a $50 discount if you sign up with our recommended broker. Trading with our signals is not just a step but the beginning of your success in Forex Journey.</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default section3