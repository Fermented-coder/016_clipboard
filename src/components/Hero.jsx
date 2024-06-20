import React from "react";
import computer from "../images/image-computer.png";

export const Hero = () => {
  return (
    <div className="mt-10 flex md:flex-row sm:flex-col ">
      <img
        className="md:ml-[-30px] flex sm:items-center sm:justify-center sm:mx-auto sm:w-[50%] sm:flex-col "
        src={computer}
        alt="/"
      />

      <div className="  sm:flex sm:flex-col sm:text-center sm:m-5 md:text-left sm:px-20 sm:pt-10">
        <div>
          <h3 className="text-2xl font-bold text-darkGrayishBlue  mb-3">
            Quick Search
          </h3>
          <p className="text-grayBLue">
            Easily search your snippets by content, category, web address,
            application, and more.
          </p>
          <h3 className="text-2xl font-bold text-darkGrayishBlue mt-12 mb-3 ">
            iCloud Sync
          </h3>
          <p className="text-grayBLue ">
            Instantly saves and syncs snippets across all your devices.
          </p>
          <h3 className="text-2xl font-bold text-darkGrayishBlue mt-12 mb-3 ">
            Complete History
          </h3>
          <p className="text-grayBLue">
            Retrieve any snippets from the first moment you started using the
            app.
          </p>
        </div>
      </div>
    </div>
  );
};
