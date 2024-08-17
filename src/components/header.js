import React from "react";
import img from "./img/f1.jpeg";
import './header.css'

function Header() {
  return (
    <div className="bg-slate-800 pb-[1rem] ">
      <div className="client-review-container">
          <div className="flex justify-center">
            <div class="mt-[8rem] flex justify-center md:flex-row flex-col ">
              <h2 className="text-[20px] lg:text-[1.7rem] font-bold text-center md:mt-[6rem] text-slate-300 font-mono  lg:[30rem] md:w-[30rem] sm:w-[20rem] w-[16rem]">EXPERIENCE OUR WINNING ONLINE TRADING PLATFORM
              We are excited to help you on your journey to Forex success
              </h2>
              <img src={img} className="lg:w-[30rem] md:w-[25rem] sm:w-[20rem] w-[16rem] rounded-[30px] mt-[3rem] md:mt-0" alt="img"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
