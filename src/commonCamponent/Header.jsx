import React, { useEffect, useRef, useState } from "react";
import "./HeaderFooter.css";
import logo from "../assets/headerIMG/logo.png";
import GoogleLogo from "../assets/images/google.png"
import AppleLogo from "../assets/images/Apple.png"
import { FaCartShopping } from "react-icons/fa6";
import { FaUserAlt, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { OAuthProvider } from "firebase/auth";
import { app } from "../FireBaseConfig";


export default function Header() {
  const [open, setOpen] = useState(false); // cart drawer
  const [modalOpen, setModalOpen] = useState(false); // login modal
  const [menuOpen, setMenuOpen] = useState(false); // mobile nav
  const panelRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setModalOpen(false);
    }
    if (modalOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [modalOpen]);


  ////////////////google auth /////////////////////////

  const provider = new GoogleAuthProvider();

  let loginWithgoogle = () => {
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  /////////////////////// apple auth //////////////////////

  const Provider = new OAuthProvider('apple.com');

  let loginWithapple = () => {
    const auth = getAuth(app);
    signInWithPopup(auth, Provider)
      .then((result) => {
        const user = result.user;
        const credential = OAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const idToken = credential.idToken;

        console.log(user)

      })
      .catch((error) => {
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = OAuthProvider.credentialFromError(error);

      });
  }


  return (
    <div className="sticky top-0 left-0 w-full z-[9999] bg-[#EDE4D3] shadow-md shadow-[#e2c99c]">
      <header className="max-w-[1460px] mx-auto flex items-center justify-between px-4 md:px-8 h-[70px]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-[60px] md:w-[80px]" />
        </div>

        {/* Desktop Menu */}
        <ul id="menuBAR" className="hidden md:flex gap-8 text-[18px] lg:text-[20px] text-gray-700 font-medium cursor-pointer">
          <li>
            <Link to="/" className="hover:text-[#b38b59]">Home</Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-[#b38b59]">Gallery</Link>
          </li>
          <li>
            <Link to="/parsons" className="hover:text-[#b38b59]">Parsons</Link>
          </li>
          <li>
            <Link to="/appointment" className="hover:text-[#b38b59]">Appointment</Link>
          </li>
          <li>
            <Link to="/location" className="hover:text-[#b38b59]">Location</Link>
          </li>
        </ul>




        {/* Right Section */}

        <div className="flex items-center gap-5">

          {/* Cart Button */}


          <div className="relative">

            <Link to="/cart">
              <button onClick={() => setOpen(true)}>
                <FaCartShopping className="cursor-pointer text-[22px] text-gray-600 hover:text-[#b38b59]" />
              </button>
            </Link>


            {/* Overlay */}
            <div
              onClick={() => setOpen(false)}
              className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            ></div>

            {/* Offcanvas Cart */}
            <div
              className={`fixed top-0 right-0 h-full w-[85%] sm:w-[350px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"
                }`}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  Cart <FaCartShopping />
                </h2>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-600 text-xl"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>

          {/* Login Button */}
          <button

            // onClick={loginWithgoogle}
            onClick={() => setModalOpen(true)}
            className=" flex items-center gap-2 cursor-pointer bg-[#e9d8b9] hover:bg-[#cbba9b] shadow-md shadow-[#d8ae60] text-[16px] px-4 py-2 rounded-[10px] text-gray-700 hover:text-black"
          >
            <FaUserAlt /> Login
          </button>

          {/* Mobile Menu Button */}
          <button
            className="cursor-pointer md:hidden text-2xl text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header >

      {/* Mobile Dropdown Menu */}
      < div
        className={`md:hidden bg-[#f7f0e2] shadow-inner transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-60 py-3" : "max-h-0 py-0"
          }`
        }
      >
        <ul className="flex flex-col items-center gap-3 text-[18px] text-gray-700">
          <li>
            <Link to="/" className="hover:text-[#b38b59]">Home</Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-[#b38b59]">Gallery</Link>
          </li>
          <li>
            <Link to="/parsons" className="hover:text-[#b38b59]">Parsons</Link>
          </li>
          <li>
            <Link to="/appointment" className="hover:text-[#b38b59]">Appointment</Link>
          </li>
          <li>
            <Link to="/location" className="hover:text-[#b38b59]">Location</Link>
          </li>
        </ul>
      </div >

      {/* Modal Backdrop */}

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setModalOpen(false)}
        ></div>
      )}

      {/* Login Modal */}

      {modalOpen && (
        <div
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            ref={panelRef}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-[90%] max-w-md rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100 opacity-100"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b flex justify-between items-center">
              <h2 id="modal-title" className="text-xl font-semibold text-gray-800">
                Login
              </h2>
              <button
                onClick={() => setModalOpen(false)}
                className=" cursor-pointer text-gray-500 text-xl hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Body */}

            <div className="p-6">

              <form className="flex flex-col gap-4">

                <div>

                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#b38b59]"
                  />
                  
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#b38b59]"
                  />
                </div>

                <div className="flex justify-between items-center text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-[#b38b59]" />
                    Remember me
                  </label>
                  <a href="#" className="text-[#b38b59] hover:underline">
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="bg-[#b38b59] text-white py-2 rounded-md cursor-pointer hover:bg-[#a07c4b] transition-all"
                >
                  Login
                </button>

                {/* Divider */}
                <div className="flex items-center justify-center gap-3 my-3">
                  <div className="h-[1px] bg-gray-300 flex-1" />
                  <span className="text-gray-500 text-sm">or continue with</span>
                  <div className="h-[1px] bg-gray-300 flex-1" />
                </div>

                {/* Social Login Buttons */}

                <div className=" sm:flex-row gap-3">

                  {/* Google */}

                  <button
                    type="button"
                    onClick={loginWithgoogle}
                    className="cursor-pointer flex items-center justify-center gap-3 border border-gray-300 rounded-md py-2 w-full hover:bg-gray-100 transition"
                  >
                    <img
                      src={GoogleLogo}
                      alt="Google"
                      className="w-5 h-5"
                    />
                    <span className="text-gray-700 font-medium">Continue with Google</span>
                  </button>


                  {/* Apple */}

                  <button
                    type="button"
                    onClick={loginWithapple}
                    className="cursor-pointer flex items-center justify-center gap-3 border border-gray-300 rounded-md py-2 w-full hover:bg-gray-100 transition"
                  >
                    <img
                      src={AppleLogo}
                      alt="Apple"
                      className="w-5 h-5"
                    />

                    <span className="text-gray-700 font-medium">Continue with Apple</span>

                  </button>

                </div>

                <p className="text-center text-sm text-gray-600 mt-4">
                  Don’t have an account?{" "}
                  <a href="#" className="text-[#b38b59] hover:underline">
                    Sign up
                  </a>
                </p>

              </form>

            </div>



            {/* Footer */}

            <div className="flex items-center justify-end gap-3 px-6 py-3 bg-gray-50">

              <button
                onClick={() => setModalOpen(false)}
                className=" px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );

}
