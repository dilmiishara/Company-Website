import { assets } from '../assets/assets.js'; // Ensure this file exists and includes logo and other necessary assets

const Footer = () => {
  return (
    <div
      className="bg-primary text-white"
      style={{
        height: '266px',
        padding: '40px 80px 20px 80px',
        opacity: 1, // Set to visible
        margin: '0 auto', // Center the footer horizontally
      }}
    >
      {/* Main footer content */}
      <div className="flex justify-between items-start gap-10">
        {/* Company Logo and Description */}
        <div
          style={{
            width: '413px',
            height: 'auto', // Set height to auto for content to hug its size
            gap: '20px',
            opacity: 1, // Set to visible (from 0 to 1)
          }}
          className="flex flex-col"
        >
          <img
            src={assets.logo}
            alt="Company Logo"
            className="mb-4"
            style={{ width: '167px' }}
          />
          <p>
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective - your
            business results.
          </p>
        </div>

        {/* Align "Our Technologies" and "Our Services" to the right */}
        <div className="flex space-x-20">
          {/* Our Technologies Section */}
          <div>
            <h1 className="text-lg font-bold mb-4">Our Technologies</h1>
            <ul className="space-y-2">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div>
            <h1 className="text-lg font-bold mb-4">Our Services</h1>
            <ul className="space-y-2">
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-gray-400 mt-10 pt-4">
        <div className="text-center flex justify-center space-x-8">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="/terms-conditions" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
