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
//         <div className="container-fluid  bg-dark">
//     <h3 style={{textAlign: "center", color: "white;"}} className="p-4">Top Products</h3>
//     <div className="button-container">
//       <button className="btn active text-white button_fist_prod">All</button>
//       <button className="btn text-white">Headphones</button>
//       <button className="btn text-white">Earbuds</button>
//       <button className="btn text-white">Earphones</button>
//       <button className="btn text-white">Neckbands</button>
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
// import React, { useContext, useState } from "react";
// import "./TopProduct.css";
// import { globalContext } from "../myCongtext/MyContext";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../reduxToolKit-store/productSlice";


// const TopProducts = () => {
//     const dispatch=useDispatch()
//     const [activeCategory, setActiveCategory] = useState("All");
//     const { data } = useContext(globalContext);

//     const categories = ["All", "Headphones", "Earbuds", "Earphones", "Neckbands"];

//     // ✅ Handle loading state
//     if (!data || data.length === 0) {
//         return (
//             <div className="text-center text-white p-4 bg-dark">
//                 Loading Top Products...
//             </div>
//         );
//     }

//     // ✅ Filter Products based on category
//     const filteredProducts = data.filter((product) => {
//         if (activeCategory === "All") return true;
//         if (activeCategory === "Headphones")
//             return product.info?.toLowerCase().includes("headphone");
//         if (activeCategory === "Earbuds")
//             return product.info?.toLowerCase().includes("earbud");
//         if (activeCategory === "Earphones")
//             return product.info?.toLowerCase().includes("earphone");
//         if (activeCategory === "Neckbands")
//             return product.info?.toLowerCase().includes("neckband");
//         return false;
//     });

//     // ✅ Show only 11 items for "All"
//     const displayedProducts =
//         activeCategory === "All"
//             ? filteredProducts.slice(0, 11)
//             : filteredProducts;

//     return (
//         <div className="container-fluid bg-dark pb-5">
//             {/* Heading */}
//             <h3 className="text-center text-white p-4">Top Products</h3>

//             {/* Category Buttons */}
//             <div className="button-container text-center mb-4">
//                 {categories.map((category) => (
//                     <button
//                         key={category}
//                         className={`btn text-white mx-2 ${activeCategory === category ? "active button_fist_prod" : ""
//                             }`}
//                         onClick={() => setActiveCategory(category)}
//                     >
//                         {category}
//                     </button>
//                 ))}
//             </div>

//             {/* Product Cards */}
//             <div className="container">
//                 <div className="row justify-content-center gx-4 gy-4">
//                     {displayedProducts.map((product) => (
//                         <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
//                             <div className="card h-100 bg-dark border border-white text-white">
//                                 <a href="./product_details.html">
//                                     <img
//                                         src={product.images[0]}
//                                         className="card-img-top"
//                                         alt={product.title}
//                                     />
//                                 </a>
//                                 <div className="card-body card_font_s">

//                                     {/* Rating */}
//                                     <div className="pt-2">
//                                         {[...Array(5)].map((_, i) => (
//                                             <i key={i} className="fas fa-star text-warning"></i>
//                                         ))}
//                                     </div>

//                                     {/* Title */}
//                                     <h5 className="card-title">{product.title}</h5>

//                                     {/* Info */}
//                                     <p className="card-text">{product.info}</p>
//                                     <hr />

//                                     {/* Price */}
//                                     <h4 className="product_font_head">
//                                         ₹8,999{" "}
//                                         <span className="text-muted">
//                                             <s className="font_mute_c">₹2,999</s>
//                                         </span>
//                                     </h4>

//                                     {/* Button */}
//                                     <button
//                                         type="button"
//                                         className="btn card_button_bottom w-100"
//                                     >
//                                         <i className="fas fa-shopping-cart" onClick={() => dispatch(addToCart(product))}></i> Add to Cart
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                     {activeCategory === "All" && (
//                         <div className="col-lg-3 col-md-3 col-12 custom-col">
//                             <div className="card h-100 bg-dark border border-white d-flex align-items-center justify-content-center text-center">
//                                 <div className="card-body card_font_s d-flex flex-column align-items-center justify-content-center">
//                                     <h2 className="card-title text-white">
//                                         Browse all <br /> Product <i className="fa-solid fa-arrow-right-long"></i>
//                                     </h2>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//             <div className="container p-4 ">
//                 <h3 style={{ textAlign: "center", color: "white" }} className="p-4">Our Advantages</h3>

//                 <div className="d-flex gap-2 flex-nowrap">
//                     <div className="feature-card bg-dark">
//                         <i className="fa-solid fa-truck-fast icon-box"></i>
//                         <div className="text-box">
//                             <p className="feature-title">Express Delivery</p>
//                             <p className="feature-text">Ship in 24 Hours</p>
//                         </div>
//                     </div>
//                     <div className="feature-card">
//                         <i className="fa-solid fa-shield-halved icon-box"></i>
//                         <div className="text-box">
//                             <p className="feature-title">Brand Warranty</p>
//                             <p className="feature-text">100% Original products</p>
//                         </div>
//                     </div>
//                     <div className="feature-card">
//                         <i className="fa-solid fa-tags icon-box"></i>
//                         <div className="text-box">
//                             <p className="feature-title">Exciting Deals</p>
//                             <p className="feature-text">On All prepaid orders</p>
//                         </div>
//                     </div>
//                     <div className="feature-card">
//                         <i className="fa-solid fa-credit-card icon-box"></i>
//                         <div className="text-box">
//                             <p className="feature-title">Secure Payments</p>
//                             <p className="feature-text">SSL/Secure certificate</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TopProducts;
import React, { useContext, useState } from "react";
import "./TopProduct.css";
import { globalContext } from "../myCongtext/MyContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../reduxToolKit-store/productSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const TopProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { data } = useContext(globalContext);
  const dispatch = useDispatch();

  const categories = ["All", "Headphones", "Earbuds", "Earphones", "Neckbands"];

  if (!data || data.length === 0) {
    return (
      <div className="text-center text-white p-4 bg-dark">
        Loading Top Products...
      </div>
    );
  }

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

  const displayedProducts =
    activeCategory === "All"
      ? filteredProducts.slice(0, 11)
      : filteredProducts;

  // ✅ Add to Cart Handler with Toast
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <div className="container-fluid bg-dark pb-5">
      <h3 className="text-center text-white p-4">Top Products</h3>

      {/* Category Buttons */}
      <div className="button-container text-center mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn text-white mx-2 ${
              activeCategory === category ? "active button_fist_prod" : ""
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
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.images[0]}
                    className="card-img-top"
                    alt={product.title}
                  />
                </Link>
                <div className="card-body card_font_s">
                  <div className="pt-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-warning"></i>
                    ))}
                  </div>
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.info}</p>
                  <hr />
                  <h4 className="product_font_head">
                    ₹{product.finalPrice}{" "}
                    <span className="text-muted">
                      <s className="font_mute_c">₹{product.originalPrice}</s>
                    </span>
                  </h4>

                  {/* ✅ Add to Cart Button */}
                  <button
                    type="button"
                    className="btn card_button_bottom w-100"
                    onClick={() => handleAddToCart(product)}
                  >
                    <i className="fas fa-shopping-cart"></i> Add to Cart
                    
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Extra Card */}
          {activeCategory === "All" && (
            <div className="col-lg-3 col-md-3 col-12 custom-col">
              <div className="card h-100 bg-dark border border-white d-flex align-items-center justify-content-center text-center">
                <div className="card-body card_font_s d-flex flex-column align-items-center justify-content-center">
                <Link to="/Allproduct" className="yyy"> <h2 className="card-title text-white ">
                    Browse all <br /> Product{" "}
                    <i class="fa-solid fa-arrow-right-long bgggg"></i>
                  </h2>
                  </Link> 
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default TopProducts;
