import React from 'react';
import Logo from "../components/Logo";
import {useTheme} from "next-themes";
import{SunIcon ,MoonIcon} from "@heroicons/react/solid";
import {useState, useEffect} from "react";
import Link from "next/link";
import {
  Transition as ReactTransition
} from "react-transition-group";

export default function Header () {
    const [mounted,setMounted] = useState(false);
    useEffect(()=>{
        setMounted(true);
    },[]);

    const {SystemTheme , theme , setTheme} = useTheme();
    const renderChange = () => {
        if(!mounted) return null;
        const currentTheme = theme === "system" ? SystemTheme : theme;

        if(currentTheme === "dark"){
            return(
                <SunIcon className="w-8 h-8 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
            )
        }else{
            return(
                <MoonIcon className="w-8 h-8 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
            )
        }
        
    };

    const [isOpen,setIsOpen] = useState(false);
    const ref=React.createRef();

    return (
      <nav className="shadow-sm fixed w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items items-center mx-20 justify-between  w-full">
              <div className="flex justify-center items-center flex-shrink-0">
                <Logo/>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" >
                    <a  
                      activeClass="Home" 
                      to="home" 
                      smooth={true} 
                      offset={50}
                      duration={500}
                      className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:text-black">
                      Home
                    </a>
                  </Link>
                  <Link href="/product">
                    <a
                      activeClass="product" 
                      to="product" 
                      smooth={true} 
                      offset={50}
                      duration={500}
                      className="cursor-pointer hover:bg-blue-600 text-blue hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Product
                    </a>
                  </Link>
                  <Link href="/staff">
                    <a
                      activeClass="staff" 
                      to="staff" 
                      smooth={true} 
                      offset={50}
                      duration={500}
                      className="cursor-pointer hover:bg-blue-600 text-blue hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Staff
                    </a>
                  </Link>
                  <Link href="/about">
                    <a
                      activeClass="about" 
                      to="about" 
                      smooth={true} 
                      offset={50}
                      duration={500}
                      className="cursor-pointer hover:bg-blue-600 text-blue hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      About
                    </a>
                  </Link>
                  {renderChange()}
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden">
              <button onClick={()=>setIsOpen(!isOpen)} 
                type="button" 
                className="bg-blue-600 inline-flex justify-center p-2 rounded-md text-white hover:bg-blue-600 focus:outline-none focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false">
                  <span className="sr-only">Open Main Menu</span>
                  {!isOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h1"/>
                    </svg>
                  ):(
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  )}
              </button>
            </div>
          </div>
        </div>
        <ReactTransition 
          show={isOpen} 
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-96">
            {(ref)=>(
              <div className="md:hidden id=mobile-menu">
                <div ref={ref} className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                  <Link href="/" >
                    <a 
                    activeClass="Home" 
                    to="home" 
                    smooth={true} 
                    offset={50} 
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Home</a>
                  </Link>
                  <hr/>
                  <Link href="/product" >
                    <a 
                    activeClass="product" 
                    to="product" 
                    smooth={true} 
                    offset={50} 
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    product</a>
                  </Link>
                  <hr/>
                  <Link href="/staff" >
                    <a 
                    activeClass="staff" 
                    to="staff" 
                    smooth={true} 
                    offset={50} 
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    staff</a>
                  </Link>
                  <hr/>
                  <Link href="/about" >
                    <a 
                    activeClass="about" 
                    to="about" 
                    smooth={true} 
                    offset={50} 
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    about</a>
                  </Link>
                  {renderChange()}
                </div>
              </div>
            )}
          </ReactTransition>
      </nav>
      
    );
  };
 