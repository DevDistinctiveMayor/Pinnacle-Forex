import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div class=" bg-slate-400 shadow-2xl mt-10 p-2">
        <div class="">
          <div class="">
            <div class="mt-[2rem] flex gap-2 justify-center">
              <h5 class="mt-2 text-slate-700 font-serif text-[1.3rem] font-semibold">
                Pinnacle Forex Trading
              </h5>
            </div>

            <div class="flex justify-center gap-7 mt-3 text-slate-700 font-bold text-center">
              <p>Let's Get Started Into The World Of Financial Freedom</p>
            </div>
            <div class="flex justify-center gap-7 mt-3 text-red-700 font-bold">
              <p>Contact Us Here Now!!!</p>
            </div>

            <div class="flex justify-center gap-5 mt-5">
              <a href="https://wa.link/px9eei">
                <FaFacebook fontSize={25} class="text-blue-700" />
              </a>
              <a href="https://wa.link/px9eei">
                <FaWhatsapp fontSize={25} class="text-green-700" />
              </a>
            </div>

            <div class="flex justify-center">
              <div class="text-slate-700 font-semibold text-[15px] w-[23rem] text-center mt-3">
                We are here to guide and support you in every step. Let's embark
                on this profitable path together!.
              </div>
            </div>

            <div class="flex justify-center gap-5 mt-5 text-slate-700 font-bold">
              PhoneNo
            </div>
            <a
              href="tel:08145706421"
              class="flex justify-center gap-5  text-slate-700 font-bold"
            >
              +234 814 570 6421
            </a>

            <div class="flex justify-center mt-[1rem]  text-slate-700 font-bold">
              <p>&copy;Copyright 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
