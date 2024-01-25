import ProgressBar from "react-animated-progress-bar";
import { TfiCheckBox } from "react-icons/tfi";
import whyChooseImg from "/assets/images/choose/why-choose-thumb.png";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const WhyChoose = () => {
  return (
    <section className="bg-[#f5f6f8]">
      <div className="Container flex flex-col items-center bg-white lg:flex-row">
        <div className="flex-1">
          <img
            src={whyChooseImg}
            className="w-full ml-0 mb-7 lg:mb-0 lg:w-[inherit] lg:max-w-[inherit] lg:-ml-[28rem] 2xl:-ml-[21rem]"
          />
        </div>
        <div className="flex-1">
          <div>
            <h5 className="section-sub-title">WHY CHOOSE US</h5>
            <h1 className="text-[30px] leading-10 md:text-5xl font-bold mb-5 font-Yantramanav text-PrimaryColor-0 pt-3">
              Build Your Full Projects Management
            </h1>
            <p className="font-Archivo text-[#575f66] font-light mb-6">
              Monotonectally pontificate multidisciplinary methodologies through
              24/7 e-business. Conveniently develop future-proof niches
            </p>
            <ul>
              <li>
                <h5 className="font-Yantramanav text-lg text-PrimaryColor-0 inline-block mb-3">
                  <TfiCheckBox className="text-SecondaryColor-0 inline-block mr-2 text-xl" />
                  Credibly communicate performance
                </h5>
              </li>
              <li>
                <h5 className="font-Yantramanav text-lg text-PrimaryColor-0 inline-block mb-3">
                  <TfiCheckBox className="text-SecondaryColor-0 inline-block mr-2 text-xl" />
                  Professionally monetize enterprise action items
                </h5>
              </li>
              <li>
                <h5 className="font-Yantramanav text-lg text-PrimaryColor-0 inline-block mb-3">
                  <TfiCheckBox className="text-SecondaryColor-0 inline-block mr-2 text-xl" />
                  Assertively strategize out-of applications
                </h5>
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="font-Yantramanav text-lg text-PrimaryColor-0 -mb-6">
                Constructions
              </h5>
              <ProgressBar
                rect
                width="100%"
                height="8px"
                fontColor="#1b1b1b"
                fontSize="16px"
                percentage="80"
                defColor={{
                  excellent: "#ff5e14",
                  good: "blue",
                  fair: "green",
                  poor: "red",
                }}
                rectBorderRadius="0px"
                trackPathColor="#171717"
                trackBorderColor="transparent"
              />
            </div>
            <div>
              <h5 className="font-Yantramanav text-lg text-PrimaryColor-0 -mb-6">
                Renovation
              </h5>
              <ProgressBar
                rect
                width="100%"
                height="8px"
                fontColor="#1b1b1b"
                fontSize="16px"
                percentage="70"
                defColor={{
                  excellent: "#ff5e14",
                  good: "blue",
                  fair: "green",
                  poor: "red",
                }}
                rectBorderRadius="0px"
                trackPathColor="#171717"
                trackBorderColor="transparent"
              />
            </div>
            <Link to={"/"}>
              <button className="group primary-button2 inline-block mt-4 mb-10">
                Get Started Now
                <FaArrowRightLong className="inline-block ml-1 -rotate-45 group-hover:rotate-0 transition-all duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
