import React from "react";
import NavBar from "./NavBar";
import Section1 from "./Section1";
import Section2 from "./Section2";

export default function Landingpage() {
  return (
    <div> 

      <div  className="bg-[url('./images/banner-rings.svg')] bg-blue-50 relative bg-contain  h-auto max-w-full ">
      <NavBar />
      <Section1 />
      </div>
      <div  className='bg-[#161616]'>
        <Section2 />
      </div>
    </div>
  );
}
