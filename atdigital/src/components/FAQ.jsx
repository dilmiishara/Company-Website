import React, { useState, useEffect } from "react";

// Define your primary color here
const primaryColor = "#4F46E5"; // Replace with your actual primary color

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [width, setWidth] = useState("846px");

  const toggleFAQ = (index) => {
    // Toggle between showing and hiding the answer
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        // Setting width for 'sm' screen size
        setWidth("334px");
      } else {
        setWidth("846px");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <style>
        {`
          /* Media query for small devices */
          @media (max-width: 640px) {
            .responsive-sm-width {
              width: 334px; /* Adjusted width for small devices */
            }
          }
        `}
      </style>
      <div
        className="responsive-sm-width"
        style={{
          width: "auto", // Responsive width
          height: "auto", // Hug height to fit content
          top: "1847px",
          left: "297px",
          gap: "13px",
          opacity: 1, // Set visibility to fully visible
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          margin: "84px 42px 0",
        }}
      >
        <h2
          style={{
            fontSize: "27px",
            fontWeight: 600,
            lineHeight: "33px",
            letterSpacing: "0.4px",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: primaryColor,
          }}
        >
          Frequently asked questions
        </h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div
              onClick={() => toggleFAQ(index)}
              style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column", // Stack question and answer vertically
                justifyContent: "space-between", // Distribute space between question and mark
                alignItems: "flex-start", // Align items to the left
                backgroundColor: "#FAF8FF",
                padding: "24px",
                paddingTop: "15px",
                borderRadius: "7px",
                gap: "13px",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <h3
                  style={{
                    textAlign: "left",
                    margin: 0,
                    color: activeIndex === index ? primaryColor : "black", // Change color to primary if the answer is visible
                  }}
                >
                  {faq.question}
                </h3>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
              {activeIndex === index && <p>{faq.answer}</p>}{" "}
              {/* Show answer only if activeIndex matches */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
