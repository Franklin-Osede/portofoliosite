import React from 'react';
import { RxLinkedinLogo, RxGithubLogo, RxDiscordLogo } from 'react-icons/rx';

function Footer() {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]"> Community </div>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]"> Discord</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]"> Social Media </div>
            <a
              href="https://github.com/fran1014"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]"> Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/franklinosede/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]"> Linkedin</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]"> Contact Me </div>
            <p className="flex flex-row items-center my-[10px] cursor-pointer">
              <span className="text-[15px] ml-[6px]"> +34 671-14-78-10 </span>
            </p>
            <p className="flex flex-row items-center my-[10px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                franklin.op@hotmail.com
              </span>
            </p>
          </div>
        </div>
        <div className="mb-[20px] text-[15px] text-center">
          &copy; WebChain Dev 2023 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
