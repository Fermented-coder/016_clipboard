import React from "react";
import logo from "../images/logo.svg";
import Facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instra from "../images/icon-instagram.svg";

export const Footer = () => {
  return (
    <div
      className="bg-gray-100 md:h-[150px]  flex items-center  mt-[150px] md:flex-row  
         sm:flex-col sm:mx-auto sm:justify-between  sm:items-center sm:h-[350px] "
    >
      <div className="mx-[200px] text-grayBLue sm:m-5 ">
        <img className="w-[50px]" src={logo} alt="/" />
      </div>
      <div className=" text-grayBLue mr-[100px] sm:flex sm:flex-col sm:mx-auto sm:justify-center sm:items-center">
        <p className="mb-3 cursor-pointer hover:text-strongCyan ">FAQs</p>
        <p className="cursor-pointer hover:text-strongCyan ">Contact us</p>
      </div>
      <div className=" text-grayBLue  mr-[100px] sm:flex sm:flex-col sm:mx-auto sm:justify-center sm:items-center">
        <p className="mb-3 cursor-pointer hover:text-strongCyan ">
          Privacy Policy
        </p>
        <p className="cursor-pointer hover:text-strongCyan ">Press Kit</p>
      </div>
      <div className=" text-grayBLue pb-5 ">
        <p className="mb-3 cursor-pointer hover:text-strongCyan ">
          Install Guide
        </p>
      </div>
      <div className="flex justify-between w-32 py-1 mx-20">
        <img
          className="cursor-pointer duration-300"
          src={Facebook}
          alt="/"
          class="ficon"
        />
        <img
          className="cursor-pointer duration-300"
          src={twitter}
          alt="/"
          class="ficon"
        />
        <img
          className="cursor-pointer duration-300"
          src={instra}
          alt="/"
          class="ficon"
        />
      </div>
    </div>
  );
};
