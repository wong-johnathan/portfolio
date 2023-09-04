import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href='/'>
      <div className='flex flex-row items-center group cursor-pointer'>
        <Image
          src='/picture.jpeg'
          alt='Logo'
          width='60'
          height='80'
          className='rounded-full border-[#763bf6] border-2 group-hover:border-[#5b2ebd] transition-all duration-300 ease-in-out'
        />
        <span className='uppercase p-4 group-hover:text-[#5b2ebd] transition-all duration-300'>
          Johnathan{" "}
          <span className='hidden md:inline-block'>
            Wong
          </span>
        </span>
      </div>
    </Link>
  );
};

export default Logo;
