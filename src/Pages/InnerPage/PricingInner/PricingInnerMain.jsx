/* eslint-disable react/prop-types */
import CountUp from "react-countup";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PricingInnerMain = ({
  pricingTitle,
  pricingPrice,
  pricingCurrency,
  pricingValid,
  pricingIcon,
  pricingIcon2,
  pricingIcon3,
  pricingIcon4,
  pricingItem,
  pricingItem2,
  pricingItem3,
  pricingItem4,
  pricingBtn,
}) => {
  return (
    <div className="group bg-[url('/assets/images/pricing/pricing_shape.png')] bg-cover bg-center p-[22px] overflow-hidden relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-0 before:border-PrimaryColor-0 before:z-10 before:opacity-70 before:transition-all before:duration-500 hover:before:border-[22px]">
      <div className="bg-white pt-11 pb-[50px] px-[42px] relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 overflow-hidden group-hover:before:scale-100">
        <h6 className="text-[22px] font-Yantramanav font-medium text-PrimaryColor-0 transition-all duration-500 group-hover:text-white mb-7">
          {pricingTitle}
        </h6>
        <div className="flex gap-[6px] mb-9">
          <CountUp
            start={-12}
            end={pricingPrice}
            className="text-3xl sm:text-[50px] md:text-[70px] font-Yantramanav font-bold text-SecondaryColor-0"
          />
          <div>
            <h5 className="font-Yantramanav font-bold text-[28px] text-SecondaryColor-0 -mb-2 -mt-4">
              {pricingCurrency}
            </h5>
            <span className="font-Archivo text-[#575f66] italic">
              {pricingValid}
            </span>
          </div>
        </div>
        <ul className="flex flex-col gap-[14px] mb-9">
          <li className="flex items-center gap-2 text-[#575f66] transition-all duration-500 group-hover:text-white">
            <span className="transition-all duration-500 group-hover:text-SecondaryColor-0 text-xl">
              {pricingIcon}
            </span>
            {pricingItem}
          </li>
          <li className="flex items-center gap-2 text-[#575f66] transition-all duration-500 group-hover:text-white">
            <span className="transition-all duration-500 group-hover:text-SecondaryColor-0 text-xl">
              {pricingIcon2}
            </span>
            {pricingItem2}
          </li>
          <li className="flex items-center gap-2 text-[#575f66] transition-all duration-500 group-hover:text-white">
            <span className="transition-all duration-500 group-hover:text-SecondaryColor-0 text-lg">
              {pricingIcon3}
            </span>
            {pricingItem3}
          </li>
          <li className="flex items-center gap-2 text-[#575f66] transition-all duration-500 group-hover:text-white">
            <span className="transition-all duration-500 group-hover:text-SecondaryColor-0 text-lg">
              {pricingIcon4}
            </span>
            {pricingItem4}
          </li>
        </ul>
        <Link to={"/"}>
          <button className="primary-button before:bg-white after:bg-white hover:text-SecondaryColor-0">
            {pricingBtn}
            <FaArrowRightLong className="inline-block ml-1 -rotate-45 group-hover:rotate-0 transition-all duration-300" />
          </button>
        </Link>
        <h6 className="font-Archivo text-[13px] text-SecondaryColor-0 bg-white py-2 px-16 absolute -top-16 -right-16 rotate-45 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:top-6 ">Recommended</h6>
      </div>
    </div>
  );
};

export default PricingInnerMain;
