import React from "react";
import arrow from "./images/ArrowDownButton.gif";
import Section1A from "./Section1A";

export default function Section1() {
  return (
    <div >
      <section className="text-gray-600 body-font">
        <div className="container px-0 py-12 w-1/2 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-3xl font-bold title-font mb-2 text-3xl ">
                  92,111
                </h2>
                <p className="leading-relaxed text-base">Total Users</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-3xl font-bold title-font mb-2 text-3xl ">
                  30,210,006
                </h2>
                <p className="leading-relaxed text-base">Wallets Available</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-3xl font-bold title-font mb-2 text-3xl ">
                  138%
                </h2>
                <p className="leading-relaxed text-base">Average Returns</p>
              </div>
            </div>
          </div>
          <h1 className="text-4xl text-center text-black pt-5 font-serif">Easiest wins in crypto</h1>
          <h2 className="text-lg text-center pt-5 font-serif">Hyperion is the simplest + easiest platform to generate the best returns in crypto.</h2>
          <button className="flex mx-auto mt-10 bg-white shadow-xl text-black font-bold border-black border-2 py-4 px-8 focus:outline-none rounded-3xl  text-xl text-center">
            JOIN WAITLIST  <img src={arrow} alt="down-arrow" width={60} height={60} className="-rotate-90 -m-3.5 ml-1 "  />
          </button>

        </div>
        <Section1A />

      </section>
    </div>
  );
}
