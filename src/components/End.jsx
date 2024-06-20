import React from "react";

export const End = () => {
  return (
    <div className=" max-w-7xl mx-auto text-center  px-10 pt-16">
      <h3 className="font-bold text-darkGrayishBlue text-4xl">
        Clipboard for iOS and Mac OS
      </h3>
      <p className="text-grayBLue py-5 px-4">
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </p>
      <div className=" text-white text-l flex md:flex-row  sm:flex-col justify-center items-center space-y-6 md:space-y-0 space-x-3 pt-8">
        <button className="bg-strongCyan shadow-lg rounded-full w-[200px]  h-[40px] sm:w-[300px]  hover:opacity-80 duration-300">
          Download for iOS
        </button>
        <button className="bg-lightBlue shadow-lg rounded-full w-[200px] h-[40px] sm:w-[300px] hover:opacity-80 duration-300">
          Download for Mac
        </button>
      </div>
    </div>
  );
};
