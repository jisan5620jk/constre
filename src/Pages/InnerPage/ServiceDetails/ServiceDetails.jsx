import { HiOutlineHomeModern } from "react-icons/hi2";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiFinishLine } from "react-icons/gi";
import projectDetialsBoxImg from "/assets/images/project-details/project-details-box-thumb.jpg";
import projectDetialsBoxImg2 from "/assets/images/project-details/project-details-box-thumb2.jpg";
import projectDetialsImg from "../../../../public/assets/images/service-details/service-details-thumb.jpg";
import { BsBuildings } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { FaRegFilePdf } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { Link } from "react-router-dom";
import AnimatedAccordionPage from "./Accordion/AnimatedAccordionPage";

const ServiceDetails = () => {
  return (
    <>
      <section className="py-28">
        <div className="Container">
          <div className="grid grid-cols-3 gap-7">
            <div className="col-span-2">
              <div>
                <img src={projectDetialsImg} />
              </div>
              <div className="pt-3">
                <h1 className="text-[30px] leading-9 md:text-[34px] font-bold mb-4 font-Yantramanav text-PrimaryColor-0 pt-7">
                  Build Construction Building
                </h1>
              </div>
              <div>
                <p className="font-Archivo text-[#585f65] leading-7 mb-6">
                  Credibly morph resource maximizing applications rather than
                  fully tested materials. Enthusiastically e-enable levera
                  metrics via intermandated expertise. Globally administrate
                  reliable platforms for market positioning best practices.
                  Globally brand seamless systems through parallel products.
                  Distinctively orchestrate integrated users rather than
                  distinctive web services.
                </p>
                <p className="font-Archivo text-[#585f65] leading-7">
                  Globally evolve reliable e-tailers rather than robust marke.
                  Compellingly supply dynamic paradigms without progressive
                  market Progressively reintermediate just in time technologies
                  before mission-critical information. Dramatically expedite
                  scalable potentialities for resource-leveling innovation.
                </p>
              </div>
              <div className="mt-8">
                <div className="grid grid-cols-2 gap-7 mb-7">
                  <div className="[filter:drop-shadow(0px_5px_30px_rgba(117,117,117,0.1))] bg-white group px-8 pt-11 pb-7 relative z-10 before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 hover:before:w-full">
                    <div className="w-[70px] h-[70px] flex justify-center items-center bg-[#f5f6f8] transition-all duration-500 group-hover:bg-white float-left mr-6">
                      <BsBuildings className="text-5xl text-SecondaryColor-0" />
                    </div>
                    <div>
                      <h3 className="font-Yantramanav font-semibold text-[22px] text-PrimaryColor-0 transition-all duration-500 group-hover:text-white -mt-2">
                        Design Architecht
                      </h3>
                      <p className="font-Archivo text-[#585f65] leading-7 transition-all duration-500 group-hover:text-white">
                        Functionalities continually to prospective intellec
                      </p>
                    </div>
                  </div>
                  <div className="[filter:drop-shadow(0px_5px_30px_rgba(117,117,117,0.1))] bg-white group px-8 pt-11 pb-7 relative z-10 before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 hover:before:w-full">
                    <div className="w-[70px] h-[70px] flex justify-center items-center bg-[#f5f6f8] transition-all duration-500 group-hover:bg-white float-left mr-6">
                      <HiOutlineHomeModern className="text-5xl text-SecondaryColor-0" />
                    </div>
                    <div>
                      <h3 className="font-Yantramanav font-semibold text-[22px] text-PrimaryColor-0 transition-all duration-500 group-hover:text-white -mt-2">
                        Modern Equipment
                      </h3>
                      <p className="font-Archivo text-[#585f65] leading-7 transition-all duration-500 group-hover:text-white">
                        Functionalities continually to prospective intellec
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-7">
                  <div className="[filter:drop-shadow(0px_5px_30px_rgba(117,117,117,0.1))] bg-white group px-8 pt-11 pb-7 relative z-10 before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 hover:before:w-full">
                    <div className="w-[70px] h-[70px] flex justify-center items-center bg-[#f5f6f8] transition-all duration-500 group-hover:bg-white float-left mr-6">
                      <MdOutlineSupportAgent className="text-5xl text-SecondaryColor-0" />
                    </div>
                    <div>
                      <h3 className="font-Yantramanav font-semibold text-[22px] text-PrimaryColor-0 transition-all duration-500 group-hover:text-white -mt-2">
                        24/7 Hrs Supports
                      </h3>
                      <p className="font-Archivo text-[#585f65] leading-7 transition-all duration-500 group-hover:text-white">
                        Functionalities continually to prospective intellec
                      </p>
                    </div>
                  </div>
                  <div className="[filter:drop-shadow(0px_5px_30px_rgba(117,117,117,0.1))] bg-white group px-8 pt-11 pb-7 relative z-10 before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 hover:before:w-full">
                    <div className="w-[70px] h-[70px] flex justify-center items-center bg-[#f5f6f8] transition-all duration-500 group-hover:bg-white float-left mr-6">
                      <GiFinishLine className="text-5xl text-SecondaryColor-0" />
                    </div>
                    <div>
                      <h3 className="font-Yantramanav font-semibold text-[22px] text-PrimaryColor-0 transition-all duration-500 group-hover:text-white -mt-2">
                        Finished Timely
                      </h3>
                      <p className="font-Archivo text-[#585f65] leading-7 transition-all duration-500 group-hover:text-white">
                        Functionalities continually to prospective intellec
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="font-Yantramanav font-bold text-[34px] text-PrimaryColor-0 mt-16 mb-4 pt-3">
                Research Trend Market
              </h2>
              <p className="font-Archivo text-[#575f66]">
                Metrics via intermandated expertise. Globally administrate
                reliable platforms for market positioning best practices.
                Globally brand seamless systems through parallel products
                orchestrate
              </p>
              <div className="grid grid-cols-2 gap-7 mt-9 mb-12">
                <div className="text-center group">
                  <div className="overflow-hidden">
                    <img
                      src={projectDetialsBoxImg}
                      className="transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="bg-white [filter:drop-shadow(0px_5px_30px_rgba(117,117,117,0.1))] inline-block pt-7 pl-8 pb-7 w-4/5 -mt-5">
                    <h4 className="font-Yantramanav text-PrimaryColor-0 font-semibold text-[22px] text-left mb-3">
                      Design Architect
                    </h4>
                    <ul>
                      <li className="flex items-center gap-2 text-[#575f66] font-Archivo mb-2">
                        <IoMdCheckmark className="text-SecondaryColor-0 text-xl" />
                        Construction Equipments
                      </li>
                      <li className="flex items-center gap-2 text-[#575f66] font-Archivo">
                        <IoMdCheckmark className="text-SecondaryColor-0 text-xl" />
                        Expert’s Engineers
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="overflow-hidden">
                    <img
                      src={projectDetialsBoxImg2}
                      className="transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="bg-white [filter:drop-shadow(0px_5px_30px_rgba(117,117,117,0.1))] inline-block pt-7 pl-8 pb-7 w-4/5 -mt-5">
                    <h4 className="font-Yantramanav text-PrimaryColor-0 font-semibold text-[22px] text-left mb-3">
                      Build Construction
                    </h4>
                    <ul>
                      <li className="flex items-center gap-2 text-[#575f66] font-Archivo mb-2">
                        <IoMdCheckmark className="text-SecondaryColor-0 text-xl" />
                        Construction Equipments
                      </li>
                      <li className="flex items-center gap-2 text-[#575f66] font-Archivo">
                        <IoMdCheckmark className="text-SecondaryColor-0 text-xl" />
                        Expert’s Engineers
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="pb-3">
                <h1 className="text-[30px] leading-9 md:text-[34px] font-bold mb-4 font-Yantramanav text-PrimaryColor-0 pt-7">
                  Freequently Asked Question
                </h1>
              </div>
              <AnimatedAccordionPage />
            </div>
            <div className="col-span-1">
              <div className="px-10 pt-7 bg-[#f5f6f8] pb-10 mb-[30px]">
                <h5 className="font-Yantramanav font-bold text-[22px] pb-4 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-[#1717171a] after:absolute after:bottom-0 after:left-0 after:bg-SecondaryColor-0 after:animate-[dance7_4s_alternate_infinite] after:h-[2px] after:w-5">
                  Categories
                </h5>
                <ul className="mt-8">
                  <li>
                    <Link to={"/"}>
                      <button className="group px-6 py-4 bg-white w-full font-Yantramanav mb-4 text-base font-semibold text-PrimaryColor-0 transition-all duration-500 hover:text-white relative text-left z-10 before:absolute before:top-0 before:right-0 before:bg-SecondaryColor-0 before:-z-10 before:w-0 before:h-full before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
                        Building Sustainbility Making...
                        <HiMiniArrowLongRight className="text-SecondaryColor-0 text-2xl absolute top-1/2 right-5 -translate-y-1/2 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button className="group px-6 py-4 bg-white w-full font-Yantramanav mb-4 text-base font-semibold text-PrimaryColor-0 transition-all duration-500 hover:text-white relative text-left z-10 before:absolute before:top-0 before:right-0 before:bg-SecondaryColor-0 before:-z-10 before:w-0 before:h-full before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
                        House Planning & Interior...
                        <HiMiniArrowLongRight className="text-SecondaryColor-0 text-2xl absolute top-1/2 right-5 -translate-y-1/2 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button className="group px-6 py-4 bg-white w-full font-Yantramanav mb-4 text-base font-semibold text-PrimaryColor-0 transition-all duration-500 hover:text-white relative text-left z-10 before:absolute before:top-0 before:right-0 before:bg-SecondaryColor-0 before:-z-10 before:w-0 before:h-full before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
                        Building Design & Estimating...
                        <HiMiniArrowLongRight className="text-SecondaryColor-0 text-2xl absolute top-1/2 right-5 -translate-y-1/2 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button className="group px-6 py-4 bg-white w-full font-Yantramanav mb-4 text-base font-semibold text-PrimaryColor-0 transition-all duration-500 hover:text-white relative text-left z-10 before:absolute before:top-0 before:right-0 before:bg-SecondaryColor-0 before:-z-10 before:w-0 before:h-full before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
                        House Planning & Interior...
                        <HiMiniArrowLongRight className="text-SecondaryColor-0 text-2xl absolute top-1/2 right-5 -translate-y-1/2 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button className="group px-6 py-4 bg-white w-full font-Yantramanav text-base font-semibold text-PrimaryColor-0 transition-all duration-500 hover:text-white relative text-left z-10 before:absolute before:top-0 before:right-0 before:bg-SecondaryColor-0 before:-z-10 before:w-0 before:h-full before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
                        Architecture Designing and...
                        <HiMiniArrowLongRight className="text-SecondaryColor-0 text-2xl absolute top-1/2 right-5 -translate-y-1/2 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="px-10 pt-7 bg-PrimaryColor-0 pb-10 mb-[30px]">
                <h5 className="font-Yantramanav font-bold text-[22px] text-white pb-4 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-[#3d3d3d] after:absolute after:bottom-0 after:left-0 after:bg-SecondaryColor-0 after:animate-[dance7_4s_alternate_infinite] after:h-[2px] after:w-5">
                  DownLoads
                </h5>
                <ul className="mt-8">
                  <li>
                    <Link to={"/"}>
                      <button className="group flex gap-2 items-center px-6 py-4 bg-[#2f2f2f] w-full font-Yantramanav mb-4 text-base font-semibold transition-all duration-500 text-white relative text-left z-10 before:absolute before:top-0 before:right-0 before:bg-SecondaryColor-0 before:-z-10 before:w-0 before:h-full before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
                        <FaRegFilePdf className="text-2xl text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                        Service Reports
                        <HiDownload className="text-SecondaryColor-0 text-xl absolute top-1/2 right-5 -translate-y-1/2 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button className="group flex gap-2 items-center px-6 py-4 bg-[#2f2f2f] w-full font-Yantramanav text-base font-semibold transition-all duration-500 text-white relative text-left z-10 before:absolute before:top-0 before:right-0 before:bg-SecondaryColor-0 before:-z-10 before:w-0 before:h-full before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
                        <FaRegFilePdf className="text-2xl text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                        Download List
                        <HiDownload className="text-SecondaryColor-0 text-xl absolute top-1/2 right-5 -translate-y-1/2 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
