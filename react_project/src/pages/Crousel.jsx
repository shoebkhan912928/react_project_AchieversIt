import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { SliderData } from "../projectData/CarouselData";
import './Crousel.css'
export default function Carousel() {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear'
    };
    console.log("slider", SliderData);
    return (
        <div className="bg-blue-50 py-10 overflow-hidden">

            <Slider {...settings}>
                {SliderData.map((item) => (
                    <div className="">
                        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-8">
                            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">

                                <h2 className="text-3xl md:text-7xl font-bold">{item.title}</h2>
                                <p className="text-gray-600 text-base md:text-lg">{item.info}</p>
                                {/* <button className=" text-black font-bold px-6 py-3 hover:bg-gray-200">
                                    Visit Collections
                                </button> */}
                                <h3>₹{item.finalPrice} <span className="text-muted ms-3"><s>₹{item.originalPrice}</s></span></h3>
                                <button type="button" className="btn   float-start p-2 ps-4 pe-4 mt-3 ms-5 fw-bolder button_facebook">Shop
                                    Now</button>

                            </div>
                            <div>
                                <img src={item.images} alt={item.title} className="w-full  object-contain" style={{height:"400px"}} />

                            </div>
                        </div>

                    </div>
                ))}
            </Slider>

        </div>
    )


}