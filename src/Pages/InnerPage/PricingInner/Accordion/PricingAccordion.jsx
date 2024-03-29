import { useState, useEffect } from "react";

/* eslint-disable react/prop-types */
const PricingAccordion = ({ children, title, id, active = false }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    setAccordionOpen(active);
  }, []);

  return (
    <div>
      <h2>
        <button
          className="flex items-center justify-between w-full text-left font-semibold font-Yantramanav hover:bg-khaki focus:bg-khaki p-5 group bg-[#f5f6f8]"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span
            className={`text-PrimaryColor-0 transition duration-400 group-hover:text-SecondaryColor-0 text-base sm:text-lg md:text-xl 2xl:text-[22px] ${
              accordionOpen && "!text-SecondaryColor-0"
            }`}
          >
            {title}
          </span>
          <svg
            className={`fill-PrimaryColor-0 bg-white transition duration-400 p-2 group-hover:bg-SecondaryColor-0 group-hover:fill-white shrink-0 ${
              accordionOpen && "!bg-SecondaryColor-0 !fill-white"
            }`}
            width="26"
            height="26"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="4"
              width="14"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
            <rect
              y="4"
              width="14"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid text-sm sm:text-base font-Archivo font-normal border-l border-r border-b borde-[#f5f6f8] leading-[26px] text-[#697076] overflow-hidden transition-all duration-300 ease-in-out px-5 bg-normalBlack ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="py-4 text-sm sm:text-base font-Archivo">{children}</p>
        </div>
      </div>
    </div>
  );
}

export default PricingAccordion;
