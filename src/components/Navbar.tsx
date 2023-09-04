"use client";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";

import {
  navItems,
  socialMediaItems,
} from "./NavLinks";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav((prev) => !prev);
  };
  return (
    <div className='w-full h-20 fixed shadow-xl z-50 bg-white/50'>
      <div className='w-full px-2 flex justify-between items-center content-center h-full 2xl:px-16'>
        <Link href='/'>
          <div className='flex flex-row items-center group cursor-pointer'>
            <Image
              src='/picture.jpeg'
              alt='Logo'
              width='60'
              height='80'
              className='rounded-full border-[#763bf6] border-2 group-hover:border-[#5b2ebd] transition-all duration-300 ease-in-out'
            />
            <span className='uppercase p-4 font-bold group-hover:text-[#5b2ebd] transition-all duration-300'>
              Johnathan Wong
            </span>
          </div>
        </Link>
        {/* <ul className='md:flex hidden uppercase'>
          {navItems().map(
            (item, index) => (
              <Link
                href={item.link}
                key={`${item.text}-${index}`}
              >
                <li className='ml-10 hover:border-b text-sm hover:text-[#5b2ebd] font-bold'>
                  {item.text}
                </li>
              </Link>
            )
          )}
        </ul> */}
        <div
          className='md:hidden cursor-pointer'
          onClick={handleNav}
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed top-0 h-full bg-black/80 left-0 w-full transition-all duration-300"
            : ""
        }
      >
        {nav && (
          <div
            className='top-0 left-0 bg-black/0 h-screen w-screen'
            onClick={handleNav}
          />
        )}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[80%] md:w-[40%] bg-white h-screen py-4 px-8 transition-all ease-in duration-300"
              : "fixed left-[-100%] top-0 w-[80%] md:w-[40%] bg-white h-screen py-4 px-8 transition-all ease-in duration-300"
          }
        >
          <div>
            <div className='flex justify-between items-center border-b pb-4'>
              <Link href='/'>
                <div className='flex items-center group cursor-pointer flex-row'>
                  <Image
                    src='/picture.jpeg'
                    alt='Logo'
                    width='60'
                    height='80'
                    className='rounded-full shadow-lg shadow-gray-400 border-[#763bf6] border-2 group-hover:border-[#5b2ebd] transition-all duration-300 ease-in-out'
                  />
                  <span className='uppercase p-4 font-bold group-hover:text-[#5b2ebd] transition-all duration-300'>
                    Johnathan
                  </span>
                </div>
              </Link>
              <div
                className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer'
                onClick={handleNav}
              >
                <AiOutlineClose
                  size={16}
                />
              </div>
            </div>
          </div>
          <div>
            <ul className='uppercase flex flex-col py-4'>
              {navItems().map(
                (item, index) => (
                  <Link
                    href={item.link}
                    key={`${item.text}-${index}`}
                    onClick={() =>
                      setNav(false)
                    }
                  >
                    <li className='py-4 hover:border-b border-[#5b2ebd] text-sm hover:text-[#5b2ebd]'>
                      {item.text}
                    </li>
                  </Link>
                )
              )}
            </ul>
          </div>
          <div className='pt-4'>
            <p className='uppercase text-[#5b2ebd]'>
              {/* eslint-disable-next-line react/no-unescaped-entities*/}
              Let's connect
            </p>
            <div className='flex flex-row pt-4 space-x-6'>
              {socialMediaItems().map(
                (item, index) => (
                  <div
                    className='p-3 rounded-full cursor-pointer shadow-lg shadow-gray-400 cursor-ponter hover:scale-110 duration-300 hover:text-[#5b2ebd] text-[#763bf6] ease-in'
                    key={`${index}`}
                  >
                    {<item.icon />}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
