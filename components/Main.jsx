import React from "react";

function Main({current}) {
  return <div className={`px-8 relative ${current? 'bg-white text-black':'bg-[#282D35] text-white'} `}>
    <div>
    <h1 className="text-[40px] font-bold leading-[47px] pt-[57px]">Fun facts about React</h1>
    <ul className="leading-[19px] text-base font-normal flex flex-col gap-y-[20px] marker:text-[#00ABCA] list-disc px-8 marker:text-[20px] mt-[46px]">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>

    </ul>
    </div>
    <div className="absolute top-[50%] right-0">
    <img src='/src/assets/reactjs-icon.svg'/>
    </div>
  </div>;
}

export default Main;
