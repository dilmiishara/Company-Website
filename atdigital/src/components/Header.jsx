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
      <div className="absolute top-[354px] left-[60px] w-[622px] h-[306px] px-[40px] pt-[24px] pb-[32px] gap-[20px] bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] mx-auto opacity-100 
       ">
        <div className="w-[556px] h-[192px] p-">
          <h1 className="text-[48px] font-[700] leading-[48px] tracking-[-0.02em] text-left text-white">
            We Crush Your Competitors, Goals, And Sales Records - Without The
            B.S.
          </h1>
        </div>
        <Button text="GET FREE CONSULTATION" />

      </div>
    </div>
  );
};

export default Header;
