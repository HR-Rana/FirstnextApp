import React from "react";
import Slider from "react-slick";

export default function SimpleSlider({slideData}) {
  var settings = {
    dots: true,
    autoPlay:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
     {
        slideData.map((items,i)=>{
            reutrn(
                 <div key={i}>
                     <h3>Slide number one</h3>
                 </div>
            )
        })   
     }
    </Slider>
  );
}