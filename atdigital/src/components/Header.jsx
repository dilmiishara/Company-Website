import React from "react";
import TopNavbar from "./TopNavbar";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden pt-10"
      style={{ backgroundImage: "url('/background.png')" }}
      id="Header"
    >
      <TopNavbar />
      <div className="fixed w-[630px] h-[306px] top-[354px] left-[80px] px-[40px] pt-[24px] pb-[32px] gap-[20px] bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] container mx-auto">
        <div className="w-[556px] h-[192px]">
        <h1 className="text-[48px] font-[700] leading-[48px] tracking-[-0.02em] text-left text-white no-underline decoration-transparent">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
        </div>
        <button
  className="mt-4 w-[214px] h-[38px] px-[20px] py-[12px] gap-[8px] rounded-tl-[4px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[0px] bg-[#F28D35] text-white font-[700] text-[14px] leading-[14px] tracking-[-0.02em] text-left no-underline decoration-transparent"
  aria-label="Get a free consultation"
>
  GET FREE CONSULTATION
</button>

      </div>
    </div>
  );
};

export default Header;
