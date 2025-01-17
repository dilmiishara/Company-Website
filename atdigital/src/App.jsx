import React from "react";
import TopNavbar from "./components/TopNavbar";
import Header from "./components/Header";
import Button from "./components/Button";
import { assets } from "./assets/assets";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />

      <main className="bg-white">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image section with fixed width and height */}
            <div className="flex justify-center">
              <img
                src={assets.image1}
                alt="Web & Mobile App Development"
                className="w-[414px] h-[414px] object-cover"
              />
            </div>

            {/* Content section (h2 and p in two columns) */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Web & Mobile App Development
              </h2>
              <p className="text-gray-600">
                Your web and mobile Apps are pieces of the puzzle to grow your
                business. We use frameworks that tailor content and engagement
                methods to respond to different intents shown by your potential
                customers.
              </p>
              <Button text="LEARN MORE" />
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image section with fixed width and height */}
          
            {/* Content section (h2 and p in two columns) */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-primary mb-6">
              Digital Strategy Consulting
              </h2>
              <p className="text-gray-600">
              Your digital strategy should complement the overall marketing
            strategy. We provide a clear concept and strategic overview to find
            the most efficient model for your business.
              </p>
              <Button text="LEARN MORE" />
            </div>
            <div className="flex justify-center">
              <img
                src={assets.image2}
                alt="Web & Mobile App Development"
                className="w-[414px] h-[414px] object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default App;
