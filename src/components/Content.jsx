import React from "react";
import letter from "../images/icon-blacklist.svg";
import Text from "../images/icon-text.svg";
import Eye from "../images/icon-preview.svg";
import Google from "../images/logo-google.png";
import IBM from "../images/logo-ibm.png";
import Microsoft from "../images/logo-microsoft.png";
import HP from "../images/logo-hp.png";
import VG from "../images/logo-vector-graphics.png";

export const Content = () => {
  return (
    <div>
      <div className="flex sm:flex-col md:flex-row text-center mx-auto px-12">
        <div className="flex flex-col">
          <img className="w-[50px] mx-auto sm:py-10 " src={letter} alt="/" />
          <h3 className="text-2xl font-bold text-darkGrayishBlue  mb-3">
            Create blacklist
          </h3>
          <p className="text-grayBLue px-4 sm:py-5">
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </p>
        </div>
        <div className="flex flex-col">
          <img className="w-[50px] mx-auto sm:py-10 " src={Text} alt="/" />
          <h3 className="text-2xl font-bold text-darkGrayishBlue  mb-3 ">
            Create blacklist
          </h3>
          <p className="text-grayBLue px-4 sm:py-5">
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </p>
        </div>
        <div className="flex flex-col">
          <img className="w-[50px] mx-auto sm:py-10 " src={Eye} alt="/" />
          <h3 className="text-2xl font-bold text-darkGrayishBlue  mb-3">
            Create blacklist
          </h3>
          <p className="text-grayBLue px-4 sm:py-5">
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </p>
        </div>
      </div>
      <div className=" flex md:flex-row sm:flex-col sm:py-10 md:py-12">
        <img
          className="w-[80px] md:w-[120px]  mx-auto my-4"
          src={Google}
          alt="/"
        />
        <img
          className="w-[80px] md:w-[120px]  mx-auto my-4"
          src={IBM}
          alt="/"
        />
        <img
          className="w-[80px] md:w-[120px]  mx-auto my-4"
          src={Microsoft}
          alt="/"
        />
        <img className="w-[80px] md:w-[120px]  mx-auto my-4" src={HP} alt="/" />
        '
        <img className="w-[80px] md:w-[120px]  mx-auto my-4" src={VG} alt="/" />
      </div>
    </div>
  );
};
