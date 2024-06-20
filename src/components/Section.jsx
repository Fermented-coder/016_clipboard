import React from "react";
import tablet from "../images/image-devices.png";

export const Section = () => {
  return (
    <div className="mx-auto text-center mt-[10rem] mb-7">
      <div>
        <div className="px-20">
          <h3 className="font-bold text-darkGrayishBlue text-4xl ">
            Access Clipboard Anywhere
          </h3>
          <p className="text-grayBLue py-5 ">
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
        </div>
        <img className="sm:w-[70%] mx-auto mt-10" src={tablet} alt="" />
        <div className="pt-10 px-20">
          <h3 className="font-bold text-darkGrayishBlue text-4xl ">
            Supercharge your workflow
          </h3>
          <p className="text-grayBLue py-5 ">
            We’ve got the tools to boost your productivity.
          </p>
        </div>
      </div>
    </div>
  );
};
