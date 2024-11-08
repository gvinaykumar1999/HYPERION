import React from "react";
import NavBar from "./NavBar";
import Section1 from "./Section1";

export default function Landingpage() {
  return (
    <div> 

      <NavBar />
      <div  className="bg-[url('./images/banner-rings.svg')] bg-blue-50">
      <Section1 />
      </div>
    </div>
  );
}
