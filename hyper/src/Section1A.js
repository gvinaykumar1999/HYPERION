import React from "react";
import Slider from "react-slick";
import LowRiskGraph from "./images/LowRiskGraph.png" ;
import MediumRiskGraph from './images/MediumRiskGraph.png';

function Section1A() {
  var settings = {
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container mt-12 w-[100%]  ">
      <Slider {...settings} className="w-[1920]" > 
        <div >
          <h3 className="font-bold text-black m-5">LOW RISK</h3>
          <img src={LowRiskGraph} alt="LowRiskGraph" className="ml-5 w-[95%] h-[95%]  " />
        </div>
        <div>
          <h3 className="font-bold text-black m-5">MEDIUM RISK</h3>
          <img src={MediumRiskGraph} alt="MediumRiskGraph" className="ml-5 w-[95%] h-[95%]" />
        </div>
        <div>
          <h3 className="font-bold text-black m-5">LOW RISK</h3>
          <img src={LowRiskGraph} alt="LowRiskGraph" className="ml-5 w-[95%] h-[95%]" />
        </div>
        <div>
          <h3 className="font-bold text-black m-5">MEDIUM RISK</h3>
          <img src={MediumRiskGraph} alt="MediumRiskGraph" className="ml-5 w-[95%] h-[95%]" />
        </div> <div>
          <h3 className="font-bold text-black m-5">LOW RISK</h3>
          <img src={LowRiskGraph} alt="LowRiskGraph" className="ml-5 w-[95%] h-[95%]" />
        </div>
        <div>
          <h3 className="font-bold text-black m-5">MEDIUM RISK</h3>
          <img src={MediumRiskGraph} alt="MediumRiskGraph" className="ml-5 w-[95%] h-[95%]" />
        </div> <div>
          <h3 className="font-bold text-black m-5">LOW RISK</h3>
          <img src={LowRiskGraph} alt="LowRiskGraph" className="ml-5 w-[95%] h-[95%]" />
        </div>
        <div>
          <h3 className="font-bold text-black m-5">MEDIUM RISK</h3>
          <img src={MediumRiskGraph} alt="MediumRiskGraph" className="ml-5 w-[95%] h-[95%]" />
        </div>
      </Slider>
    </div>
  );
}

export default Section1A;
