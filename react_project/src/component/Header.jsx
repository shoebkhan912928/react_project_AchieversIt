

// // export default Header
// import React, { useState } from "react";
// import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
// import { Modal, Button, Form } from "react-bootstrap";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "./Header.css"; // your CSS file
// import "./Header.css"; // your SCSS file

// const Header = () => {
//     const [showModal, setShowModal] = useState(false);
//     const [searchOpen, setSearchOpen] = useState(false);
//     const [searchText, setSearchText] = useState("");

//     const handleShow = () => setShowModal(true);
//     const handleClose = () => setShowModal(false);

//     return (
//         <>
//             {/* Navbar */}
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
//                 <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">
//                     <a className="navbar-brand navlogo1 text-nowrap" href="/">
//                         Tech-Shop
//                     </a>

//                     <div className="d-flex align-items-center  icon-group me-md-4 ms-auto">
//                         {/* Search Icon */}
//                         <FaSearch
//                             className="pe-md-5 px-2 icons_hover_zoome  searColor "
//                             title="Search"
//                             style={{ cursor: "pointer" }}
//                             onClick={() => setSearchOpen(!searchOpen)}
//                         />

//                         {/* Cart with badge */}
//                         <div className="position-relative d-inline-block text-white pe-md-5 px-2">
//                             <FaShoppingCart className="icons_hover_zoome cartSizes" title="Cart" />
//                             <span className="ooo badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
//                                 4
//                             </span>
//                         </div>

//                         {/* User Icon */}
//                         <div className="btn-group ">
//                             <button
//                                 type="button"
//                                 className="btn "
//                                 onClick={handleShow}

//                             >
//                                 <FaUser
//                                     className="px-2  icons_hover_zoome userSizes user_set_small"
//                                     title="User"

//                                 />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             {/* Search Input Box */}
//             {searchOpen && (
//                 <div
//                     className="position-absolute w-100 bg-dark p-3"
//                     style={{ top: "70px", zIndex: 100 }}
//                 >
//                     <input
//                         type="text"
//                         placeholder="Search..."
//                         value={searchText}
//                         onChange={(e) => setSearchText(e.target.value)}
//                         className="form-control text-danger bg-dark  border border-light"
//                     />
//                 </div>
//             )}

//             {/* User Login Modal */}
//             <Modal show={showModal} onHide={handleClose} centered size="md">
//                 <div className="modal-content bg-dark text-white">
//                     <div className="modal-header border-0">
//                         <button
//                             type="button"
//                             className="btn-close btn-close-white"
//                             onClick={handleClose}
//                         ></button>
//                     </div>
//                     <div className="modal-body px-5">
//                         <h4 className="fw-bold mb-3">Sign Up</h4>
//                         <Button
//                             variant="secondary"
//                             className="w-100 mb-3 text-start"
//                             style={{ background: "white", color: "black" }}
//                         >
//                             Already have an account?{" "}
//                             <span className="text-info fw-bolder">Login</span>
//                         </Button>

//                         <Form>
//                             <Form.Group className="mb-3">
//                                 <Form.Control
//                                     type="text"
//                                     placeholder="Username"
//                                     className="bg-dark text-white"
//                                 />
//                             </Form.Group>
//                             <Form.Group className="mb-3">
//                                 <Form.Control
//                                     type="email"
//                                     placeholder="Email"
//                                     className="bg-dark text-white"
//                                 />
//                             </Form.Group>
//                             <Form.Group className="mb-3">
//                                 <Form.Control
//                                     type="password"
//                                     placeholder="Password"
//                                     className="bg-dark text-white"
//                                 />
//                             </Form.Group>
//                             <Form.Group className="mb-3">
//                                 <Form.Control
//                                     type="password"
//                                     placeholder="Confirm Password"
//                                     className="bg-dark text-white"
//                                 />
//                             </Form.Group>
//                             <Button
//                                 type="submit"
//                                 className="btn btn-danger w-100 mb-3"
//                                 style={{ padding: "12px", fontSize: "1.2rem" }}
//                             >
//                                 Sign Up
//                             </Button>
//                         </Form>

//                         <div className="text-center my-3">or login with</div>
//                         <div className="d-flex justify-content-between">
//                             <Button className="w-100 mx-1 button_facebook">Facebook</Button>
//                             <Button className="w-100 mx-1 button_google">Google</Button>
//                             <Button className="w-100 mx-1 button_twitter">Twitter</Button>
//                         </div>
//                     </div>
//                 </div>
//             </Modal>
//         </>
//     );
// };

// export default Header;
// import React, { useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";
// import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Header.css";

// const Header = () => {
//     const [showModal, setShowModal] = useState(false);
//     const [searchOpen, setSearchOpen] = useState(false);
//     const [searchText, setSearchText] = useState("");
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     //   const handleShow = () => setShowModal(true);
//     //   const handleClose = () => setShowModal(false);
//     const handleShow = () => {
//         setShowModal(true);
//         setDropdownOpen(false); // Close dropdown when opening modal
//     };
//     const handleClose = () => setShowModal(false);

//     return (
//         <>
//             {/* Navbar */}
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
//                 <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">
//                     <a className="navbar-brand navlogo1 text-nowrap text-white" href="/">
//                         Tech-Shop
//                     </a>

//                     <div className="d-flex align-items-center icon-group me-md-4 ms-auto">
//                         {/* Search Icon */}
//                         <span
//                             className="pe-md-5 px-2"
//                             title="Search"
//                             style={{ cursor: "pointer", color: "white" }}
//                             onClick={() => setSearchOpen(!searchOpen)}
//                         >
//                             <FaSearch size={20} />
//                         </span>

//                         {/* Cart Icon */}
//                         <div className="position-relative d-inline-block text-white pe-md-5 px-2">
//                             <FaShoppingCart size={20} />
//                             <span className="ooo badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
//                                 4
//                             </span>
//                         </div>

//                         {/* User Dropdown */}
//                         <div className="position-relative">
// //               <FaUser
//                 size={22}
//                 color="white"
//                 style={{ cursor: "pointer" }}
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//               />

//               {/* Custom Dropdown */}
//               {dropdownOpen && (
//                 <div
//                   className="position-absolute end-0 mt-3 bg-dark text-white p-3 rounded shadow"
//                   style={{ width: "18rem", zIndex: 999 }}
//                 >
//                   <h4 className="mb-1">Hello!</h4>
//                   <p className="mb-3">Access account and manage orders</p>
//                   <Button
//                     variant="danger"
//                     className="w-100 mb-3"
//                     onClick={handleShow}
//                   >
//                     Login / Signup
//                   </Button>
//                   <hr className="text-muted" />
//                   <p className="mb-0">Please Login</p>
//                 </div>
//               )}
//             </div>
//                     </div>
//                 </div>
//             </nav>

//             {/* Search Bar */}
//             {searchOpen && (
//                 <div
//                     className="position-absolute w-100 bg-dark p-3"
//                     style={{ top: "70px", zIndex: 100 }}
//                 >
//                     <input
//                         type="text"
//                         placeholder="Search..."
//                         value={searchText}
//                         onChange={(e) => setSearchText(e.target.value)}
//                         className="form-control text-danger bg-dark border border-light"
//                     />
//                 </div>
//             )}

//             {/* Modal for Login/Signup */}
//             <Modal show={showModal} onHide={handleClose} centered size="md">
//                 <div className="modal-content bg-dark text-white">
//                     <div className="modal-header border-0">
//                         <button
//                             type="button"
//                             className="btn-close btn-close-white"
//                             onClick={handleClose}
//                         ></button>
//                     </div>
//                     <div className="modal-body px-5">
//                         <h4 className="fw-bold mb-3">Sign Up</h4>
//                         <Button
//                             variant="secondary"
//                             className="w-100 mb-3 text-start"
//                             style={{ background: "white", color: "black" }}
//                         >
//                             Already have an account?{" "}
//                             <span className="text-info fw-bolder">Login</span>
//                         </Button>

//                         <Form>
//                             <Form.Group className="mb-3">
//                                 <Form.Control
//                                     type="text"
//                                     placeholder="Username"
//                                     className="bg-dark text-white"
//                                 />
//                             </Form.Group>
//                             <Form.Group className="mb-3">
//                                 <Form.Control
//                                     type="email"
//                                     placeholder="Email"
//                                     className="bg-dark text-white"
//                                 />
//                             </Form.Group>
//                             <Form.Group className="mb-3">
//                                 <Form.Control
//                                     type="password"
//                                     placeholder="Password"
//                                     className="bg-dark text-white"
//                                 />
//                             </Form.Group>
//                             <Form.Group className="mb-3">
//                                 <Form.Control
//                                     type="password"
//                                     placeholder="Confirm Password"
//                                     className="bg-dark text-white"
//                                 />
//                             </Form.Group>
//                             <Button
//                                 type="submit"
//                                 className="btn btn-danger w-100 mb-3"
//                                 style={{ padding: "12px", fontSize: "1.2rem" }}
//                             >
//                                 Sign Up
//                             </Button>
//                         </Form>

//                         <div className="text-center my-3">or login with</div>
//                         <div className="d-flex justify-content-between">
//                             <Button className="w-100 mx-1 button_facebook">Facebook</Button>
//                             <Button className="w-100 mx-1 button_google">Google</Button>
//                             <Button className="w-100 mx-1 button_twitter">Twitter</Button>
//                         </div>
//                     </div>
//                 </div>
//             </Modal>
//         </>
//     );
// };

// export default Header;
// import React, { useState } from "react";
// import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
// import { Modal, Button, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Header = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const handleShow = () => {
//     setShowModal(true);
//     setDropdownOpen(false); // Close dropdown when opening modal
//   };
//   const handleClose = () => setShowModal(false);

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
//         <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">
//           <a className="navbar-brand navlogo1 text-nowrap" href="/">
//             Tech-Shop
//           </a>

//           <div className="d-flex align-items-center icon-group me-md-4 ms-auto">
//             {/* Search Icon */}
//             <FaSearch
//               className="pe-md-4 px-2 icons_hover_zoome"
//               title="Search"
//               style={{ cursor: "pointer", color: "white" }}
//               onClick={() => setSearchOpen(!searchOpen)}
//             />

//             {/* Cart with badge */}
//             <div className="position-relative d-inline-block text-white pe-md-4 px-2">
//               <FaShoppingCart
//                 className="icons_hover_zoome"
//                 title="Cart"
//                 style={{ color: "white" }}
//               />
//               <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
//                 4
//               </span>
//             </div>

//             {/* User Icon - Toggle Dropdown */}
//             <div className="position-relative">
//               <FaUser
//                 size={22}
//                 color="white"
//                 style={{ cursor: "pointer" }}
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//               />

//               {/* Custom Dropdown */}
//               {dropdownOpen && (
//                 <div
//                   className="position-absolute end-0 mt-3 bg-dark text-white p-3 rounded shadow"
//                   style={{ width: "18rem", zIndex: 999 }}
//                 >
//                   <h4 className="mb-1">Hello!</h4>
//                   <p className="mb-3">Access account and manage orders</p>
//                   <Button
//                     variant="danger"
//                     className="w-100 mb-3"
//                     onClick={handleShow}
//                   >
//                     Login / Signup
//                   </Button>
//                   <hr className="text-muted" />
//                   <p className="mb-0">Please Login</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Search Input Box */}
//       {searchOpen && (
//         <div
//           className="position-absolute w-100 bg-dark p-3"
//           style={{ top: "70px", zIndex: 100 }}
//         >
//           <input
//             type="text"
//             placeholder="Search..."
//             className="form-control text-danger bg-dark border border-light"
//           />
//         </div>
//       )}

//       {/* User Login Modal */}
//       <Modal show={showModal} onHide={handleClose} centered size="md">
//         <div className="modal-content bg-dark text-white">
//           <div className="modal-header border-0">
//             <button
//               type="button"
//               className="btn-close btn-close-white"
//               onClick={handleClose}
//             ></button>
//           </div>
//           <div className="modal-body px-5">
//             <h4 className="fw-bold mb-3">Sign Up</h4>
//             <Button
//               variant="secondary"
//               className="w-100 mb-3 text-start"
//               style={{ background: "white", color: "black" }}
//             >
//               Already have an account?{" "}
//               <span className="text-info fw-bolder">Login</span>
//             </Button>

//             <Form>
//               <Form.Group className="mb-3">
//                 <Form.Control
//                   type="text"
//                   placeholder="Username"
//                   className="bg-dark text-white"
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <Form.Control
//                   type="email"
//                   placeholder="Email"
//                   className="bg-dark text-white"
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <Form.Control
//                   type="password"
//                   placeholder="Password"
//                   className="bg-dark text-white"
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <Form.Control
//                   type="password"
//                   placeholder="Confirm Password"
//                   className="bg-dark text-white"
//                 />
//               </Form.Group>
//               <Button
//                 type="submit"
//                 className="btn btn-danger w-100 mb-3"
//                 style={{ padding: "12px", fontSize: "1.2rem" }}
//               >
//                 Sign Up
//               </Button>
//             </Form>

//             <div className="text-center my-3">or login with</div>
//             <div className="d-flex justify-content-between">
//               <Button className="w-100 mx-1 button_facebook">Facebook</Button>
//               <Button className="w-100 mx-1 button_google">Google</Button>
//               <Button className="w-100 mx-1 button_twitter">Twitter</Button>
//             </div>
//           </div>
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default Header;
import React, { useState, useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [isSignup, setIsSignup] = useState(true); // true = Signup, false = Login

  const signupRef = useRef(null);
  const loginRef = useRef(null);

  const handleShow = () => {
    setShowModal(true);
    setDropdownOpen(false);
  };

  const handleClose = () => setShowModal(false);

  const toggleToLogin = () => {
    setIsSignup(false);
    setTimeout(() => loginRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  const toggleToSignup = () => {
    setIsSignup(true);
    setTimeout(() => signupRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">
          <a className="navbar-brand navlogo1 text-nowrap text-white" href="/">
            Tech-Shop
          </a>

          <div className="d-flex align-items-center icon-group me-md-4 ms-auto">
            {/* Search Icon */}
            <span
              className="pe-md-5 px-2"
              title="Search"
              style={{ cursor: "pointer", color: "white" }}
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <FaSearch size={20} />
            </span>

            {/* Cart Icon */}
            <div className="position-relative d-inline-block text-white pe-md-5 px-2">
              <FaShoppingCart size={20} />
              <span className="ooo badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                4
              </span>
            </div>

            {/* User Dropdown */}
            <div className="position-relative">
              <FaUser
                size={22}
                color="white"
                style={{ cursor: "pointer" }}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />

              {/* Custom Dropdown */}
              {dropdownOpen && (
                <div
                  className="position-absolute end-0 mt-3 bg-dark text-white p-3 rounded shadow"
                  style={{ width: "18rem", zIndex: 999 }}
                >
                  <h4 className="mb-1">Hello!</h4>
                  <p className="mb-3">Access account and manage orders</p>
                  <Button
                    variant="danger"
                    className="w-100 mb-3"
                    onClick={handleShow}
                  >
                    Login / Signup
                  </Button>
                  <hr className="text-muted" />
                  <p className="mb-0">Please Login</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Search Bar */}
      {searchOpen && (
        <div
          className="position-absolute w-100 bg-dark p-3"
          style={{ top: "70px", zIndex: 100 }}
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="form-control text-danger bg-dark border border-light"
          />
        </div>
      )}

      {/* Modal for Login/Signup */}
      <Modal show={showModal} onHide={handleClose} centered size="md">
        <div className="modal-content bg-dark text-white">
          <div className="modal-header border-0">
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body px-5">
            {isSignup ? (
              <div ref={signupRef}>
                <h4 className="fw-bold mb-3 text-center">Sign Up</h4>
                <Button
                  variant="secondary"
                  className="w-100 mb-3 text-start"
                  style={{ background: "white", color: "black" }}
                  onClick={toggleToLogin}
                >
                  Already have an account?{" "}
                  <span className="text-info fw-bolder">Login</span>
                </Button>

                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      className="bg-dark text-white"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      className="bg-dark text-white"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="bg-dark text-white"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      className="bg-dark text-white"
                    />
                  </Form.Group>
                  <Button
                    type="submit"
                    className="btn btn-danger w-100 mb-3"
                    style={{ padding: "12px", fontSize: "1.2rem" }}
                  >
                    Sign Up
                  </Button>
                </Form>
              </div>
            ) : (
              <div ref={loginRef}>
                <h4 className="fw-bold mb-3 text-center">Log In</h4>
                <Button
                  variant="secondary"
                  className="w-100 mb-3 text-start"
                  style={{ background: "white", color: "black" }}
                  onClick={toggleToSignup}
                >
                  Don't have an account?{" "}
                  <span className="text-info fw-bolder">Sign Up</span>
                </Button>

                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      className="bg-dark text-white"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="bg-dark text-white"
                    />
                  </Form.Group>
                  <Button
                    type="submit"
                    className="btn btn-danger w-100 mb-3"
                    style={{ padding: "12px", fontSize: "1.2rem" }}
                  >
                    Log In
                  </Button>
                </Form>
              </div>
            )}

            <div className="text-center my-3">or login with</div>
            <div className="d-flex justify-content-between">
              <Button className="w-100 mx-1 button_facebook">Facebook</Button>
              <Button className="w-100 mx-1 button_google">Google</Button>
              <Button className="w-100 mx-1 button_twitter">Twitter</Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Header;
