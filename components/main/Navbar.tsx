import React from 'react';
import Image from 'next/image';
import { Socials } from '@/constants';

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50">
      <div className="w-11/12 xs:w-4/5 mx-auto h-full flex flex-row items-center sm:justify-center justify-start">
        <div className="lg:w-[500px] h-full flex flex-row items-center">
          <div className="flex items-center gap-x-4 sm:gap-x-12 lg:justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-2 sm:gap-5 absolute right-[2rem] xl:right-[15rem]">
          {Socials.map((social) => (
            <a
              href={social.url}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="cursor-pointer w-4 xs:w-6"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
