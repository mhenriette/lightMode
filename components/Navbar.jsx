import React from "react";
import logo from '../src/assets/logo.svg'


function Navbar({ onturn, current }) {


    return <div className={`flex justify-between p-8 text-black border-b shadow-lg ${current ? 'bg-white text-black' : 'bg-[#21222A] text-white'}`}>
        <img src={logo} alt='logo' />
        <div className="flex items-center gap-5">
            <span>Light</span>
            <button className="rounded-[5px] bg-[#00abca] p-3 text-white font-semibold" onClick={onturn}>turn the light </button>
            <span>Dark</span>
        </div>
    </div>;

}

export default Navbar;
