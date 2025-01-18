import { assets } from "../assets/assets.js"; // Ensure this file exists and includes logo and other necessary assets

const Footer = () => {
  return (
    <div className="bg-primary text-white py-10 px-4 lg:px-16 xl:px-24 mt-[42px]">
      {/* Main footer content */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Company Logo and Description */}
        <div className="flex flex-col items-start mb-4 md:mb-0 xl:h-[126px] xl:w-[413px] lg:h-[126px] lg:w-[413px] md:h-[126px] md:w-[413px] sm:h-[145px] sm:w-[335px]">
          <img
            src={assets.logo}
            alt="Company Logo"
            className="mb-4"
            style={{ width: "167px" }}
          />
          <p className="text-xs md:text-sm lg:text-base text-left">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective - your
            business results.
          </p>
        </div>

        {/* Technologies and Services Sections */}
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-20 items-start">
          {/* Our Technologies Section */}
          <div className="mb-4 md:mb-0 text-left">
            <h1 className="text-sm font-bold mb-4 lg:mb-2 xl:mb-4">
              Our Technologies
            </h1>
            <ul className="space-y-1 md:space-y-2 lg:space-y-1 xl:space-y-2">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div className="text-left">
            <h1 className="text-sm font-bold mb-4 lg:mb-2 xl:mb-4">
              Our Services
            </h1>
            <ul className="space-y-1 md:space-y-2 lg:space-y-1 xl:space-y-2">
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-gray-400 mt-8 pt-4">
        <div className="xl:text-center md:text-left flex flex-col md:flex-row justify-center md:justify-start xl:justify-center space-y-4 md:space-y-0 md:space-x-4 text-xs md:text-sm lg:text-base">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <span className="hidden md:inline-block">|</span>
          <a href="/terms-conditions" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
