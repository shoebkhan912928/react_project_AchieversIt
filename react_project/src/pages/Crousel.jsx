import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { SliderData } from "../projectData/CarouselData";
import './Crousel.css'
import { Link } from "react-router-dom";
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
        <div className=" py- overflow-hidden">

            <Slider {...settings}>
                {SliderData.map((item, index) => (
                    <div key={index} className="">
                        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12">

                            {/* LEFT SIDE - TEXT */}
                            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                                <h5 className="text-3xl md:text-6xl font-bold text-white mb-4">
                                    {item.title}
                                </h5>
                                <h1 className="text-lg md:text-2xl font-semibold text-white mb-4">
                                    {item.tagline}
                                </h1>
                                <h3 className="text-white text-xl md:text-2xl mb-6">
                                    ₹{item.finalPrice}{" "}
                                    <span className="text-gray-500 line-through ml-3">
                                        ₹{item.originalPrice}
                                    </span>
                                </h3>
                                <Link to={`/product/${item.id}`}>
                                <button className="bg-red-600 hover:bg-red-700 text-white px-6 mt-3 py-3 rounded-md rounded-pill font-bold">
                                    Shop Now
                                </button>
                                </Link>
                            </div>

                            {/* RIGHT SIDE - IMAGE */}
                            <div className="w-full md:w-1/2 flex justify-center crouserwidth">
                                <img
                                    src={item.images}
                                    alt={item.title}
                                    className="w-full max-w-md object-contain"
                                    style={{ height: "400px" }}
                                />
                            </div>

                        </div>
                    </div>
                ))}
            </Slider>



        </div>
    )


}