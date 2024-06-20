import React from "react";
import logo from "../images/logo.svg";

export const Header = () => {
  return (
    <div className=" max-w-7xl mx-auto text-center  px-10 pt-16">
      <img className="mx-auto my-16" src={logo} alt="/" />
      <h3 className="font-bold text-darkGrayishBlue text-4xl">
        A history of everything you copy
      </h3>
      <p className="text-grayBLue py-5 px-4">
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <div className=" text-white text-l flex md:flex-row  sm:flex-col justify-center items-center space-y-6 md:space-y-0 space-x-3 pt-8">
        <button className="bg-strongCyan shadow-lg rounded-full w-[200px] h-[40px] sm:w-[300px]  hover:opacity-80 duration-300">
          Download for iOS
        </button>
        <button className="bg-lightBlue shadow-lg rounded-full w-[200px] h-[40px] sm:w-[300px]  hover:opacity-80 duration-300">
          Download for Mac
        </button>
      </div>
      <h3 className="font-bold text-darkGrayishBlue text-4xl pt-40">
        Keep track of your snippets
      </h3>
      <p className="text-grayBLue py-5 px-4">
        Clipboard instantly stores any item you copy in the cloud, meaning you
        can access your snippets immediately on all your devices. Our Mac and
        iOS apps will help you organize everything.
      </p>
    </div>
  );
};
