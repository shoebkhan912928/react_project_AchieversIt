import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { globalContext } from "../myCongtext/MyContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../reduxToolKit-store/productSlice";
import "./ProductDetails.css";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";
import shoeb from "../assets/shoeb profile.jpg"


const ProductDetails = () => {

    const { id } = useParams(); // Get product ID from URL
    const { data } = useContext(globalContext); // Get all products from context
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(null);
    // Sample reviews data
    const reviews = [
        {
            id: 1,
            name: "MD Shoeb Khan",
            date: "4 Aug 2025",
            rating: 5,
            text: "Sound is awesome and as I expected, love it.",
            avatar: shoeb
        },
        {
            id: 2,
            name: "Ritika Sen",
            date: "23 May 2024",
            rating: 5,
            text: "Very good and awesome product",
            avatar: "https://ui-avatars.com/api/?name=Ritika+Sen&background=F31260&color=fff"
        },
        {
            id: 3,
            name: "Atharva Kumar",
            date: "10 Dec 2023",
            rating: 5,
            text: "Very good and awesome product",
            avatar: "https://ui-avatars.com/api/?name=Atharva+Kumar&background=F31260&color=fff"
        }
    ];


    // toggle function
    const handleTabClick = (tab) => {
        if (activeTab === tab) {
            setActiveTab(null); // collapse if clicked again
        } else {
            setActiveTab(tab);
        }
    };
    // Find the selected product
    const product = data.find((item) => item.id.toString() === id);

    const [mainImage, setMainImage] = useState(product?.image || "");
    useEffect(() => {
        if (product) {
            if (product.images && product.images.length > 0) {
                setMainImage(product.images[0]); // ✅ First image active
            } else {
                setMainImage(product.image); // fallback
            }
        }
    }, [product]);
    if (!product) {
        return (
            <h1 className="text-center text-red-500 text-3xl mt-10">
                Product Not Found
            </h1>
        );
    }

    return (
        <>
            <div className="d-flex bg-dark mx-5 mt-5 product-container">
                {/* Left Image Section */}
                <div className="d-flex image-wrapper">
                    {/* Thumbnails */}
                    <div className="d-flex flex-column thumbnails">
                        {product.images && product.images.length > 0 ? (
                            product.images.map((img, index) => (
                                <img
                                    key={index}
                                    className="mb-2 border border-white product_details_small_image_width cursor-pointer"
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    onClick={() => setMainImage(img)}
                                />
                            ))
                        ) : (
                            <img
                                src={product.image}
                                alt="Main Thumbnail"
                                className="border border-white product_details_small_image_width"
                            />
                        )}
                    </div>

                    {/* Main Image */}
                    <div className="main-image ms-3">
                        <img style={{ width: "44vw" }} src={mainImage} alt={product.title} />
                    </div>
                </div>

                {/* Right Product Info Section */}
                <div className="product_details_right ms-5">
                    <h3 className="text-white">{product.title}</h3>
                    <p className="text-white">{product.info}</p>

                    {/* Ratings */}
                    <span>
                        {[...Array(5)].map((_, i) => (
                            <i
                                key={i}
                                className="fa-solid fa-star"
                                style={{ color: "#ff4500" }}
                            ></i>
                        ))}
                        <span className="text-white"> | {product.ratings} Ratings</span>
                    </span>

                    <hr className="text-white" />

                    {/* Price and Stock */}
                    <div className="d-flex justify-content-between">
                        <div>
                            <p className="card-text text-white fs-2 fw-bold m-1 d-inline">
                                ₹{product.finalPrice}
                            </p>
                            {product.originalPrice && (
                                <p className="card-text text-white fs-5 d-inline text-decoration-line-through">
                                    ₹{product.originalPrice}
                                </p>
                            )}

                            <p style={{ color: "rgb(0, 255, 0)" }}>
                                You save: ₹5,34 (33%)
                            </p>

                            <p className="text-white">(Inclusive of all taxes)</p>
                        </div>
                        <div>
                            <button className="border-0 text-white p-1 mt-5 product_details_stock_button text-nowrap">
                                <i className="fa-solid fa-check fa-sm"></i>
                                <strong className="text-white ">
                                    {product.inStock ? "In Stock" : "Out of Stock"}
                                </strong>
                            </button>
                        </div>
                    </div>

                    <hr className="text-white" />

                    {/* Offers */}
                    <h5 className="text-white">Offers And Discounts</h5>
                    <div className="d-flex font_size_product" style={{ gap: "0 20px" }}>
                        <p className="border border-white text-white fs-4 rounded-2">
                            No Cost EMI on Credit Card
                        </p>
                        <p className="border border-white text-white fs-4 rounded-2">
                            Pay Later & Avail Cashback
                        </p>
                    </div>

                    <hr className="text-white" />

                    {/* Add to Cart Button */}
                    <button
                        className="rounded-5 border-0 text-white p-2 product_details_rigth_button"
                        onClick={() => { dispatch(addToCart(product)); toast.success(`${product.title} added to cart!`) }}
                    >
                        Add to Cart
                    </button>
                </div>

            </div>
            <div className="bg-black text-white p-6">
                {/* Tabs */}
                <div className="flex justify-center gap-10 mb-6">
                    <button
                        onClick={() => handleTabClick("specifications")}
                        className={`px-6 py-2 text-lg font-semibold rounded transition
            ${activeTab === "specifications" ? "bg-orange-500" : "bg-transparent"}
          `}
                    >
                        Specifications
                    </button>
                    <button
                        onClick={() => handleTabClick("overview")}
                        className={`px-6 py-2 text-lg font-semibold rounded transition
            ${activeTab === "overview" ? "bg-orange-500" : "bg-transparent"}
          `}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => handleTabClick("reviews")}
                        className={`px-6 py-2 text-lg font-semibold rounded transition
            ${activeTab === "reviews" ? "bg-orange-500" : "bg-transparent"}
          `}
                    >
                        Reviews
                    </button>
                </div>

                {/* Tab Content */}
                <div className="mt-6">
                    {activeTab === "specifications" && (
                        // <div className="grid grid-cols-2 gap-4">
                        //     <p><strong>Brand:</strong> JBL</p>
                        //     <p><strong>Model:</strong> JBL Live 660NC</p>
                        //     <p><strong>Generic Name:</strong> Headphones</p>
                        //     <p><strong>Type:</strong> Over Ear</p>
                        //     <p><strong>Connectivity:</strong> Wireless</p>
                        //     <p><strong>Microphone:</strong> Yes</p>
                        // </div>
                        <div className="grid grid-cols-2 gap-4 text-white w-[600px]">
                            <p className="font-light">Brand</p>
                            <p className="font-light">{product.brand}</p>

                            <p className="font-light">Model</p>
                            <p className="font-light">{product.title}</p>

                            <p className="font-light">Generic Name</p>
                            <p className="font-light">{product.category}</p>

                            <p className="font-light">Headphone Type</p>
                            <p className="font-light">{product.type}</p>

                            <p className="font-light">Connectivity</p>
                            <p className="font-light">{product.connectivity}</p>

                            <p className="font-light">Microphone</p>
                            <p className="font-light">Yes</p>
                        </div>

                    )}

                    {activeTab === "overview" && (
                        <div>
                            <h2 className="text-xl font-bold mb-2">Overview</h2>
                            <p> The  <span className="text-danger fw-bolder fs-5">{product.title}</span> wireless Over-Ear NC Headphones provides with fabulous sound quality</p>
                            <ul>
                                <li>🔊 30 Hours of Playtime with Active Noise Cancelling (ANC) On</li>
                                <li>🔊 40mm Drivers for Powerful Sound</li>
                                <li>🔊 Fast Pairing with Google Fast Pair and Microsoft Swift Pair</li>
                                <li>🔊 Hands-Free Voice Control with Alexa and Google Assistant</li>
                                <li>🔊 Comfortable Fit with Padded Ear Cups and Adjustable Headband</li>
                                <li>🔊 Built-in Microphone for Clear Calls</li>
                                <li>🔊 Intuitive Touch Controls for Easy Operation</li>
                            </ul>

                        </div>
                    )}

                    {activeTab === "reviews" && (
                        // <div>
                        //     <h2 className="text-xl font-bold mb-2">Reviews</h2>
                        //     <p>⭐⭐⭐⭐☆ (4.5/5)</p>
                        //     <p>"Great sound and battery life!"</p>
                        //     <p>"Comfortable for long hours of use."</p>
                        // </div>
                        <div className="mt-6 text-white">
                            <h2 className="text-xl font-bold mb-4">Reviews</h2>
                            <div className="space-y-6">
                                {reviews.map((review) => (
                                    <div key={review.id} className="flex items-start space-x-4">
                                        {/* Avatar */}
                                        <img
                                            src={review.avatar}
                                            alt={review.name}
                                            className="w-12 h-12 rounded-full"
                                        />

                                        {/* Review Content */}
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-semibold">{review.name}</h3>
                                                {/* <span className="text-gray-400 text-sm">{review.date}</span> */}
                                            </div>

                                            {/* Rating */}
                                            <div className="flex text-red-500">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar
                                                        key={i}
                                                        className={i < review.rating ? "text-red-500" : "text-gray-500"}
                                                    />
                                                ))}
                                                  <span className="text-gray-400 text-sm">|{review.date}</span>

                                            </div>

                                            {/* Review Text */}
                                            <p className="text-gray-300 mt-1">{review.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
