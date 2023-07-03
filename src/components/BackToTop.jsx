import React, { useState, useEffect } from "react";
const BackToTop = () => {
  const back = () => {
    document.documentElement.scrollTop = 0;
  };
  const [First, setFirst] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setFirst(true);
      } else {
        setFirst(false);
      }
    });
  }, []);
  return (
    <>
      <section>
        {First ? (
          <div className="position-fixed z_index_100 backtotop_icon c_pointer">
            <div onClick={back}>
              <svg
                width="12"
                height="17"
                viewBox="0 0 12 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.87281 0.618702C5.78976 0.633801 5.63877 0.664 5.53307 0.686649C5.33678 0.731947 0.323822 5.66186 0.323822 5.81286C0.323822 5.8506 0.708854 6.26583 1.16938 6.73391L2.02249 7.58702L3.39653 6.21299L4.77811 4.8314V10.5918V16.3446H6.0238H7.26949V10.6295V4.9069L8.62843 6.26583L9.98736 7.62477L10.8707 6.73391L11.7615 5.8506L9.27015 3.35167C7.89611 1.98519 6.71082 0.822542 6.62777 0.777244C6.43148 0.664 6.06155 0.588503 5.87281 0.618702Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default BackToTop;
