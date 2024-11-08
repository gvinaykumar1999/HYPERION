import React from "react";
import logo from './images/logo.svg'

const NavBar = () => {
  return (
    <div >
<header className ="text-gray-600 bg-blue-50 body-font ">
  <div className ="container mx-auto flex flex-wrap pl-40 p-10 flex-col md:flex-row items-center">
    <a className ="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
    <img src={logo} alt="logo" />
    </a>
    <nav className ="md:ml-auto flex flex-wrap items-center text-base text-xl justify-center">
      <a className ="mr-10 hover:text-gray-900">HOW IT WORKS?</a>
      <a className ="mr-10 hover:text-gray-900">FEATURES</a>
      <a className ="mr-10 hover:text-gray-900">API</a>
    </nav>
    <button className ="inline-flex items-center bg-black border-0 py-2 font-bold px-3 mr-36 text-white h-10 w-18 rounded-xl focus:outline-none hover:text-gray-400 rounded text-base mt-4 md:mt-0">Login
      
    </button>
  </div>
</header>
<hr></hr>

     </div>
  );
};

export default NavBar;
