import React from "react";
import TopNavbar from "./components/TopNavbar";
import Header from "./components/Header";
import Button from "./components/Button";
import { assets } from "./assets/assets";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full overflow-hidden pt-20 ">
      <Header />

      <main className="bg-white pt-5 sm:pt-30 sm:flex sm:flex-col sm:items-center sm:justify-center">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative sm:mt-20 sm:items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-5">
            {/* Image section with flexible width and height */}
            <div className="flex justify-center">
              <img
                src={assets.image2}
                alt="Web & Mobile App Development"
                className="object-cover sm:h-[276px] sm:w-auto"
              />
            </div>

            {/* Content section (h2 and p in two columns) */}
            <div className="flex flex-col justify-center sm:items-center xl:w-[542px] lg:w-[542px] md:w-[542px]">
              <h2 className="text-3xl font-bold text-primary mb-6 sm:text-center md:text-left lg:text-left xl:text-left">
                Web & Mobile App Development
              </h2>
              <p className="text-gray-600 sm:text-center md:text-left lg:text-left xl:text-left  mb-5">
                Your web and mobile Apps are pieces of the puzzle to grow your
                business. We use frameworks that tailor content and engagement
                methods to respond to different intents shown by your potential
                customers.
              </p>
              <Button text="LEARN MORE" className="sm:mx-auto sm:mt-4" />{" "}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative sm:items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-5">
            {/* Content section (h2 and p in two columns) */}
            <div className="flex flex-col justify-center sm:items-center xl:w-[542px] lg:w-[542px] md:w-[542px]">
              <h2 className="text-3xl font-bold text-primary mb-6 sm:text-center md:text-left lg:text-left xl:text-left">
                Digital Strategy Consulting
              </h2>
              <p className="text-gray-600 sm:text-center md:text-left lg:text-left xl:text-left mb-5">
                Your digital strategy should complement the overall marketing
                strategy. We provide a clear concept and strategic overview to
                find the most efficient model for your business.
              </p>
              <Button text="LEARN MORE" className="sm:mx-auto sm:mt-5" />
            </div>

            {/* Image section with flexible width and height */}
            <div className="flex justify-center sm:order-first lg:order-last xl:order-last md:order-last">
              <img
                src={assets.image1}
                alt="Digital Strategy Consulting"
                className="object-cover sm:h-[276px] sm:w-auto"
              />
            </div>
          </div>
        </section>
      </main>

      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
