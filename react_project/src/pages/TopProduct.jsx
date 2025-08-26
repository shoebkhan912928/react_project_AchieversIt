// import React, { useContext, useState } from "react";
// import "./TopProduct.css"; // Optional for styling
// import { globalContext } from "../myCongtext/MyContext";

// const TopProducts = () => {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const categories = ["All", "Headphones", "Earbuds", "Earphones", "Neckbands"];
//   const Alldata=useContext(globalContext)
//     console.log("datadvndv,mdn,",Alldata);

//   return (
//     <div className="container-fluid bg-dark">
//       <h3 style={{ textAlign: "center", color: "white" }} className="p-4">
//         Top Products
//       </h3>
//       <div className="button-container text-center">
//         {categories.map((category) => (
//           <button
//             key={category}
//             className={`btn text-white ${activeCategory === category ? "active button_fist_prod" : ""}`}
//             onClick={() => setActiveCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TopProducts;
// import React from 'react'

// const TopProduct = () => {
//   return (
//     <div>
//         <div class="container-fluid  bg-dark">
//     <h3 style={{textAlign: "center", color: "white;"}} class="p-4">Top Products</h3>
//     <div class="button-container">
//       <button class="btn active text-white button_fist_prod">All</button>
//       <button class="btn text-white">Headphones</button>
//       <button class="btn text-white">Earbuds</button>
//       <button class="btn text-white">Earphones</button>
//       <button class="btn text-white">Neckbands</button>
//     </div>
//     </div>

//     </div>
//   )
// }

// export default TopProduct
// import React, { useContext, useState } from "react";
// import "./TopProduct.css"; // For custom styles
// import { globalContext } from "../myCongtext/MyContext";

// const TopProducts = () => {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const {data} = useContext(globalContext);

//   const categories = ["All", "Headphones", "Earbuds", "Earphones", "Neckbands"];

//   // Filter Products based on category
//   const filteredProducts = data.Objectdata.filter((product) => {
//     if (activeCategory === "All") return true;
//     if (activeCategory === "Headphones")
//       return product.info?.toLowerCase().includes("headphone");
//     if (activeCategory === "Earbuds")
//       return product.info?.toLowerCase().includes("earbud");
//     if (activeCategory === "Earphones")
//       return product.info?.toLowerCase().includes("earphone");
//     if (activeCategory === "Neckbands")
//       return product.info?.toLowerCase().includes("neckband");
//     return false;
//   });

//   // Show only 11 items for "All"
//   const displayedProducts =
//     activeCategory === "All"
//       ? filteredProducts.slice(0, 11)
//       : filteredProducts;

//   return (
//     <div className="container-fluid bg-dark pb-5">
//       {/* Heading */}
//       <h3 className="text-center text-white p-4">Top Products</h3>

//       {/* Category Buttons */}
//       <div className="button-container text-center mb-4">
//         {categories.map((category) => (
//           <button
//             key={category}
//             className={`btn text-white mx-2 ${
//               activeCategory === category ? "active button_fist_prod" : ""
//             }`}
//             onClick={() => setActiveCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Product Cards */}
//       <div className="container">
//         <div className="row justify-content-center gx-4 gy-4">
//           {displayedProducts.map((product) => (
//             <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
//               <div className="card h-100 bg-dark border border-white text-white">
//                 <a href="./product_details.html">
//                   <img
//                     src={product.images[0]}
//                     className="card-img-top"
//                     alt={product.title}
//                   />
//                 </a>
//                 <div className="card-body card_font_s">
//                   {/* Rating */}
//                   <div className="pt-2">
//                     {[...Array(5)].map((_, i) => (
//                       <i key={i} className="fas fa-star text-warning"></i>
//                     ))}
//                   </div>

//                   {/* Title */}
//                   <h5 className="card-title">{product.title}</h5>

//                   {/* Info */}
//                   <p className="card-text">{product.info}</p>
//                   <hr />

//                   {/* Price */}
//                   <h4 className="product_font_head">
//                     ₹8,999{" "}
//                     <span className="text-muted">
//                       <s className="font_mute_c">₹2,999</s>
//                     </span>
//                   </h4>

//                   {/* Button */}
//                   <button
//                     type="button"
//                     className="btn card_button_bottom w-100"
//                   >
//                     <i className="fas fa-shopping-cart"></i> Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopProducts;
import React, { useContext, useState } from "react";
import "./TopProduct.css";
import { globalContext } from "../myCongtext/MyContext";

const TopProducts = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const { data } = useContext(globalContext);

    const categories = ["All", "Headphones", "Earbuds", "Earphones", "Neckbands"];

    // ✅ Handle loading state
    if (!data || data.length === 0) {
        return (
            <div className="text-center text-white p-4 bg-dark">
                Loading Top Products...
            </div>
        );
    }

    // ✅ Filter Products based on category
    const filteredProducts = data.filter((product) => {
        if (activeCategory === "All") return true;
        if (activeCategory === "Headphones")
            return product.info?.toLowerCase().includes("headphone");
        if (activeCategory === "Earbuds")
            return product.info?.toLowerCase().includes("earbud");
        if (activeCategory === "Earphones")
            return product.info?.toLowerCase().includes("earphone");
        if (activeCategory === "Neckbands")
            return product.info?.toLowerCase().includes("neckband");
        return false;
    });

    // ✅ Show only 11 items for "All"
    const displayedProducts =
        activeCategory === "All"
            ? filteredProducts.slice(0, 11)
            : filteredProducts;

    return (
        <div className="container-fluid bg-dark pb-5">
            {/* Heading */}
            <h3 className="text-center text-white p-4">Top Products</h3>

            {/* Category Buttons */}
            <div className="button-container text-center mb-4">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`btn text-white mx-2 ${activeCategory === category ? "active button_fist_prod" : ""
                            }`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product Cards */}
            <div className="container">
                <div className="row justify-content-center gx-4 gy-4">
                    {displayedProducts.map((product) => (
                        <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="card h-100 bg-dark border border-white text-white">
                                <a href="./product_details.html">
                                    <img
                                        src={product.images[0]}
                                        className="card-img-top"
                                        alt={product.title}
                                    />
                                </a>
                                <div className="card-body card_font_s">

                                    {/* Rating */}
                                    <div className="pt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className="fas fa-star text-warning"></i>
                                        ))}
                                    </div>

                                    {/* Title */}
                                    <h5 className="card-title">{product.title}</h5>

                                    {/* Info */}
                                    <p className="card-text">{product.info}</p>
                                    <hr />

                                    {/* Price */}
                                    <h4 className="product_font_head">
                                        ₹8,999{" "}
                                        <span className="text-muted">
                                            <s className="font_mute_c">₹2,999</s>
                                        </span>
                                    </h4>

                                    {/* Button */}
                                    <button
                                        type="button"
                                        className="btn card_button_bottom w-100"
                                    >
                                        <i className="fas fa-shopping-cart"></i> Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {activeCategory === "All" && (
                        <div className="col-lg-3 col-md-3 col-12 custom-col">
                            <div className="card h-100 bg-dark border border-white d-flex align-items-center justify-content-center text-center">
                                <div className="card-body card_font_s d-flex flex-column align-items-center justify-content-center">
                                    <h2 className="card-title text-white">
                                        Browse all <br /> Product <i className="fa-solid fa-arrow-right-long"></i>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div class="container p-4 ">
                <h3 style={{ textAlign: "center", color: "white;" }} class="p-4">Our Advantages</h3>

                <div class="d-flex gap-2 flex-nowrap">
                    <div class="feature-card bg-dark">
                        <i class="fa-solid fa-truck-fast icon-box"></i>
                        <div class="text-box">
                            <p class="feature-title">Express Delivery</p>
                            <p class="feature-text">Ship in 24 Hours</p>
                        </div>
                    </div>
                    <div class="feature-card">
                        <i class="fa-solid fa-shield-halved icon-box"></i>
                        <div class="text-box">
                            <p class="feature-title">Brand Warranty</p>
                            <p class="feature-text">100% Original products</p>
                        </div>
                    </div>
                    <div class="feature-card">
                        <i class="fa-solid fa-tags icon-box"></i>
                        <div class="text-box">
                            <p class="feature-title">Exciting Deals</p>
                            <p class="feature-text">On All prepaid orders</p>
                        </div>
                    </div>
                    <div class="feature-card">
                        <i class="fa-solid fa-credit-card icon-box"></i>
                        <div class="text-box">
                            <p class="feature-title">Secure Payments</p>
                            <p class="feature-text">SSL/Secure certificate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopProducts;
