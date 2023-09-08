import Link from "next/link";
import { navItems } from "./NavLinks";

const Footer = () => {
  return (
    <footer className='bg-gray-800 shadow dark:bg-neutral-950'>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © Copyright 2023. Made by{" "}
          <span className='underline font-bold'>
            Johnathan Wong
          </span>
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 gap-4'>
          {navItems().map((item) => (
            <Link
              className='hover:underline hover:text-[#763bf6] transition-all duration-300'
              key={`${item.text}-${item.link}`}
              href={item.link}
            >
              <li>{item.text}</li>
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
