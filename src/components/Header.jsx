import React from "react";
import TopNavbar from "./TopNavbar";
import Button from "./Button";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden pt-10"
      style={{ backgroundImage: "url('/background.png')" }}
      id="Header"
    >
      <TopNavbar />
      <div className="absolute top-[354px] left-0 lg:left-[60px] xl:left-0 xl:w-[622px] lg:w-[622px] md:w-full sm:w-full xl:h-[350px] lg:h-[350px] sm:h-[320px] md:h-[350px] px-[40px] pt-[24px] pb-[32px] gap-[20px] bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] mx-auto opacity-100 mb-[12px] flex flex-col justify-center items-center xl:items-start xl:text-left xl:px-[40px]">
        <div className="w-full">
          <h1 className="text-white font-bold leading-[1.2] xl:text-[48px] lg:text-[48px] md:text-[48px] sm:text-[36px] xl:text-left lg:text-left md:text-center sm:text-center xl:leading-[1.2] lg:leading-[1.2]">
            We Crush Your Competitors, Goals, And Sales Records - Without The
            B.S.
          </h1>
        </div>
        <div className="mt-5 xl:mt-5 w-full flex justify-start">
          <Button text="Get Free Consultation" />
        </div>
      </div>
    </div>
  );
};

export default Header;
