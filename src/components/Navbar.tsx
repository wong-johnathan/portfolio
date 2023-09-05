"use client";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";

import {
  navItems,
  socialMediaItems,
} from "./NavLinks";
import {
  useEffect,
  useState,
} from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] =
    useState(false);
  const handleNav = () => {
    setNav((prev) => !prev);
  };
  const [isMain, setIsMain] =
    useState(true);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90)
        setShadow(true);
      else setShadow(false);
    };
    window.addEventListener(
      "scroll",
      handleShadow
    );
  }, []);

  useEffect(() => {
    if (pathname === "/")
      setIsMain(true);
    else setIsMain(false);
  }, [pathname]);

  return (
    <div
      className={
        shadow
          ? `w-full h-20 fixed shadow-xl z-50 bg-white transition-all duration-300`
          : `w-full h-20 fixed z-50 ${
              isMain
                ? "bg-white/0"
                : "bg-white/60 shadow-xl"
            } transition-all duration-300`
      }
    >
      <div className='w-full px-4 flex justify-between items-center content-center h-full md:px-8 2xl:px-16'>
        <Logo />
        <ul className='md:flex hidden uppercase'>
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
        </ul>
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
              <Logo />
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
                  <Link
                    href={item.link}
                    key={index}
                    target='_blank'
                  >
                    <div
                      className='p-3 rounded-full cursor-pointer shadow-lg shadow-gray-400 cursor-ponter hover:scale-110 duration-300 hover:text-[#5b2ebd] text-[#763bf6] ease-in'
                      key={`${index}`}
                    >
                      {<item.icon />}
                    </div>
                  </Link>
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
