"use client";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { navItems, socialMediaItems } from "./NavLinks";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Navbar = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const handleNav = () => {
    setNav((prev) => !prev);
  };
  const [isMain, setIsMain] = useState(true);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) setShadow(true);
      else setShadow(false);
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    if (pathname === "/") setIsMain(true);
    else setIsMain(false);
  }, [pathname]);

  return (
    <div
      className={
        shadow
          ? `w-full h-20 fixed shadow-xl z-50 bg-white transition-all duration-300 dark:bg-neutral-950`
          : `w-full h-20 fixed z-50 ${
              isMain
                ? "bg-white/0"
                : "bg-white/60 shadow-xl dark:bg-neutral-950"
            } transition-all duration-300`
      }
    >
      <div className="w-full px-4 flex justify-between items-center content-center h-full md:px-8 2xl:px-16">
        <Logo />
        <ul className="md:flex items-center hidden uppercase">
          {navItems().map((item, index) => (
            <Link href={item.link} key={`${item.text}-${index}`}>
              <li className="ml-10 hover:border-b hover:border-[#5b2ebd] text-sm hover:text-[#5b2ebd] font-bold transition-all duration-300">
                {item.text}
              </li>
            </Link>
          ))}
          <li className="ml-10 text-sm font-bold">
            <ThemeSwitcher />
          </li>
        </ul>
        <div className="md:hidden cursor-pointer" onClick={handleNav}>
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
            className="top-0 left-0 bg-black/0 h-screen w-screen"
            onClick={handleNav}
          />
        )}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[80%] md:w-[40%] bg-white h-screen py-4 px-8 transition-all ease-in duration-300 dark:bg-black"
              : "fixed left-[-100%] top-0 w-[80%] md:w-[40%] bg-white h-screen py-4 px-8 transition-all ease-in duration-300 dark:bg-black"
          }
        >
          <div>
            <div className="flex justify-between items-center border-b pb-4">
              <Logo />
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer dark:shadow"
                onClick={handleNav}
              >
                <AiOutlineClose size={16} />
              </div>
            </div>
          </div>
          <div>
            <ul className="uppercase flex flex-col gap-4 py-4">
              {navItems().map((item, index) => (
                <Link
                  href={item.link}
                  key={`${item.text}-${index}`}
                  onClick={() => setNav(false)}
                >
                  <li className="hover:border-b border-[#5b2ebd] text-sm hover:text-[#5b2ebd] dark:hover:text-white">
                    {item.text}
                  </li>
                </Link>
              ))}
              <li className="text-sm font-bold">
                <ThemeSwitcher />
              </li>
            </ul>
          </div>
          <div className="pt-4">
            <p className="uppercase text-[#5b2ebd]">
              {/* eslint-disable-next-line react/no-unescaped-entities*/}
              Let's connect
            </p>
            <div className="flex flex-row pt-4 space-x-6">
              {socialMediaItems().map((item, index) => (
                <Link href={item.link} key={index} target="_blank">
                  <div
                    className="p-3 rounded-full cursor-pointer shadow-lg shadow-gray-400 cursor-ponter hover:scale-110 duration-300 hover:text-[#5b2ebd] text-[#763bf6] ease-in dark:shadow dark:hover:text-white dark:text-white dark:border-white dark:border"
                    key={`${index}`}
                  >
                    {<item.icon />}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
