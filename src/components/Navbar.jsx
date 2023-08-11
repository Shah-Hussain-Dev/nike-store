import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQTY, setOpenCart } from "../app/CartSlice.js";  
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import google from "../assets/google.png";
import googlel from "../assets/g-login.png";

import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { app } from './../utils/firebase.config';

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);
 const getUser = JSON.parse(localStorage.getItem('user'));
  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  console.log("user login", currentUser);
  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  const auth = new getAuth(app);
  const provider = new GoogleAuthProvider();
  const signWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        if(!getUser)
        setCurrentUser(result.user);
        localStorage.setItem('user', JSON.stringify(result.user));
        console.log(result);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const logoutUser =async () =>{
    setIsOpen(false)
   signOut(auth)
   localStorage.removeItem('user');
  }
  return (
    <>
      <header
        className={
          !navState
            ? "absolute top-7 left-0 right-0 opacity-100 z-30"
            : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme"
        }
      >
        <nav className="flex items-center justify-between nike-container">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo/img"
              className={`w-16 h-auto hover:scale-125 transition-all cursor-pointer  animate__animated animate__fadeInLeft ${
                navState && "filter brightness-0"
              }`}
            />
          </div>
          <ul className="flex items-center justify-center gap-6">
          
            <li className="grid items-center animate__animated animate__fadeInRight ">
              <button
                type="button"
                onClick={onCartToggle}
                className="  hover:scale-125 transition-all border-none outline-none active:scale-110  duration-300 relative"
              >
                <ShoppingBagIcon
                
                  className={`h-10 w-10 cursor-pointer icon-style ${
                    navState && "text-slate-900 transition-all duration-300"
                  }`}
                />
                <div
                  className={`absolute h-6 w-6 top-4 right-0 shadow  text-[0.9rem] leading-tight font-bold rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                    navState
                      ? "bg-slate-900 text-slate-100 shadow-slate-900"
                      : "bg-slate-100 text-slate-900 shadow-slate-100"
                  }`}
                >
                  {totalQTY}
                </div>
              </button>
            </li>
            <li className="grid items-center pt-2 animate__animated animate__fadeInLeft">
              {getUser !== null ? (
                <div className="relative ">
                  <img
                    id="avatarButton"
                    type="button"
                    src={getUser.photoURL}
                    onClick={toggleDropdown}
                    className="w-10 h-10 rounded-full cursor-pointer shadow-2xl"
                    alt="User dropdown"
                  />
                  <div
                    className={`${
                      !isOpen
                        ? "hidden"
                        : "z-40 w-[max-content]  hover:backdrop-blur-lg backdrop-blur bg-slate-300 shadow-2xl text-white  absolute right-2 top-12  px-4 py-2 rounded-lg "
                    } `}
                  >
                    <div className="text-lg  py-2  font-medium text-slate-600 cursor-pointer hover:scale-105 transition-all">
                      {getUser.displayName}
                    </div>
                    <button className="text-sm bg-slate-400 px-3 w-full py-1 rounded-md shadow-lg hover:scale-105 transition-all" onClick={logoutUser}>Logout</button>
                  </div>
                </div>
              ) : (
                <button onClick={signWithGoogle}>
                  <img
                    src={`${navState ? googlel : google}`}
                    alt="logo/img"
                    className={`w-10 h-auto hover:scale-125 transition-all cursor-pointer  `}
                  />
                </button>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
