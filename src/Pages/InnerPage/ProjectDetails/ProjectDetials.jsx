import projectDetailsimg from "/assets/images/project-details/project-details-thumb.jpg";
import projectDetialsBoxImg from "/assets/images/project-details/project-details-box-thumb.jpg";
import projectDetialsBoxImg2 from "/assets/images/project-details/project-details-box-thumb2.jpg";
import { IoIosCheckmarkCircleOutline, IoMdCheckmark } from "react-icons/io";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegCalendarCheck,
  FaUserTie,
} from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaArrowLeftLong, FaArrowRightLong, FaXTwitter } from "react-icons/fa6";

const ProjectDetials = () => {
  return (
    <section className="pt-32 pb-24">
      <div className="Container">
        <div>
          <img src={projectDetailsimg} />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-7">
          <div className="col-span-2">
            <h2 className="font-Yantramanav font-bold text-[34px] text-PrimaryColor-0 mt-8 mb-3">
              Construction Building Designing
            </h2>
            <p className="font-Archivo text-[#575f66]">
              Credibly morph resource maximizing applications rather than fully
              tested materials. Enthusiastically e-enable levera metrics via
              intermandated expertise. Globally administrate reliable platforms
              for market positioning best practices. Globally brand seamless
              systems through parallel products. Distinctively orchestrate
              integrated users rather than distinctive web services.
            </p>
            <p className="font-Archivo text-[17px] text-PrimaryColor-0 italic mt-7 mb-9">
              Credibly morph resource maximizing applications rather than fully
              tested materials. Enthusiastically enable metrics via
              intermandated expertise. Globally administrate reliable
            </p>
            <h2 className="font-Yantramanav font-bold text-[34px] text-PrimaryColor-0 mb-8">
              Project Important Checklist
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <ul className="flex flex-col gap-5">
                <li className="flex items-center gap-2 font-Archivo text-[#575f66] text-[17px] lg:text-[15px]">
                  <IoIosCheckmarkCircleOutline className="text-2xl text-SecondaryColor-0" />
                  Expertise Engineers
                </li>
                <li className="flex items-center gap-2 font-Archivo text-[#575f66] text-[17px] lg:text-[15px]">
                  <IoIosCheckmarkCircleOutline className="text-2xl text-SecondaryColor-0" />
                  Dramatically initiates corporate
                </li>
                <li className="flex items-center gap-2 font-Archivo text-[#575f66] text-[17px] lg:text-[15px]">
                  <IoIosCheckmarkCircleOutline className="text-2xl text-SecondaryColor-0" />
                  Monotonectally strategize interactive
                </li>
              </ul>
              <ul className="flex flex-col gap-5">
                <li className="flex items-center gap-2 font-Archivo text-[#575f66] text-[17px] lg:text-[15px]">
                  <IoIosCheckmarkCircleOutline className="text-2xl text-SecondaryColor-0" />
                  Authoritatively conceptualize world-class
                </li>
                <li className="flex items-center gap-2 font-Archivo text-[#575f66] text-[17px] lg:text-[15px]">
                  <IoIosCheckmarkCircleOutline className="text-2xl text-SecondaryColor-0" />
                  Conveniently plagiarize into innovatio
                </li>
                <li className="flex items-center gap-2 font-Archivo text-[#575f66] text-[17px] lg:text-[15px]">
                  <IoIosCheckmarkCircleOutline className="text-2xl text-SecondaryColor-0" />
                  Enthusiastically synthesize
                </li>
              </ul>
            </div>
            <h2 className="font-Yantramanav font-bold text-[34px] text-PrimaryColor-0 mt-16 mb-4">
              What the Benifits?
            </h2>
            <p className="font-Archivo text-[#575f66]">
              Metrics via intermandated expertise. Globally administrate
              reliable platforms for market positioning best practices. Globally
              brand seamless systems through parallel products orchestrate
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-9 mb-12">
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
                    <li className="flex items-center gap-2 text-[#575f66] font-Archivo mb-2 lg:text-sm xl:text-base">
                      <IoMdCheckmark className="text-SecondaryColor-0 text-xl" />
                      Construction Equipments
                    </li>
                    <li className="flex items-center gap-2 text-[#575f66] font-Archivo lg:text-sm xl:text-base">
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
                    <li className="flex items-center gap-2 text-[#575f66] font-Archivo mb-2 lg:text-sm xl:text-base">
                      <IoMdCheckmark className="text-SecondaryColor-0 text-xl" />
                      Construction Equipments
                    </li>
                    <li className="flex items-center gap-2 text-[#575f66] font-Archivo lg:text-sm xl:text-base">
                      <IoMdCheckmark className="text-SecondaryColor-0 text-xl" />
                      Expert’s Engineers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="bg-white [filter:drop-shadow(0px_5px_30px_rgba(117,117,117,0.1))] -mt-[65px]">
              <h4 className="bg-SecondaryColor-0 text-white text-[22px] font-Yantramanav font-medium px-10 py-4">
                Project Information
              </h4>
              <div className="px-10 mb-7">
                <div className="flex gap-4 items-center border-b pb-5 pt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center bg-[#f5f6f8] rounded-full text-xl text-SecondaryColor-0">
                    <FaUserTie />
                  </div>
                  <div>
                    <h6 className="font-Archivo text-[#575f66]">Clients :</h6>
                    <p className="font-Yantramanav text-PrimaryColor-0 text-lg font-medium mt-1">
                      Jhon D. Alexon
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center border-b pb-5 pt-5">
                  <div className="w-[60px] h-[60px] flex items-center justify-center bg-[#f5f6f8] rounded-full text-xl text-SecondaryColor-0">
                    <CiBookmark />
                  </div>
                  <div>
                    <h6 className="font-Archivo text-[#575f66]">Category :</h6>
                    <p className="font-Yantramanav text-PrimaryColor-0 text-lg font-medium mt-1">
                      Construction
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center border-b pb-5 pt-5">
                  <div className="w-[60px] h-[60px] flex items-center justify-center bg-[#f5f6f8] rounded-full text-xl text-SecondaryColor-0">
                    <FaRegCalendarCheck />
                  </div>
                  <div>
                    <h6 className="font-Archivo text-[#575f66]">Clients :</h6>
                    <p className="font-Yantramanav text-PrimaryColor-0 text-lg font-medium mt-1">
                      16 January, 2024
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center pb-10 pt-5">
                  <div className="w-[60px] h-[60px] flex items-center justify-center bg-[#f5f6f8] rounded-full text-xl text-SecondaryColor-0">
                    <IoLocationSharp />
                  </div>
                  <div>
                    <h6 className="font-Archivo text-[#575f66]">Locations :</h6>
                    <p className="font-Yantramanav text-PrimaryColor-0 text-lg font-medium mt-1">
                      102/B, Sandigo - USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-PrimaryColor-0 px-10 pt-8 pb-10">
              <h5 className="font-Yantramanav text-white font-bold text-[22px] pb-1 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-[#a1a1a11a] after:absolute after:bottom-0 after:left-0 after:bg-SecondaryColor-0 after:animate-[dance7_4s_alternate_infinite] after:h-[2px] after:w-5">
                Social Shere
              </h5>
              <p className="font-Archivo text-[#575f66] mt-6 mb-4">
                Share Now this Project on Social
              </p>
              <ul className="flex gap-3">
                <li>
                  <Link to={"/"}>
                    <button className="relative text-white w-10 h-10 bg-[#ffffff1a] flex justify-center items-center text-sm z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:-z-10 before:scale-0 hover:before:scale-100 ">
                      <FaFacebookF />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button className="relative text-white w-10 h-10 bg-[#ffffff1a] flex justify-center items-center text-sm z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:-z-10 before:scale-0 hover:before:scale-100 ">
                      <FaXTwitter />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button className="relative text-white w-10 h-10 bg-[#ffffff1a] flex justify-center items-center text-sm z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:-z-10 before:scale-0 hover:before:scale-100 ">
                      <FaLinkedinIn />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button className="relative text-white w-10 h-10 bg-[#ffffff1a] flex justify-center items-center text-sm z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:-z-10 before:scale-0 hover:before:scale-100 ">
                      <FaInstagram />
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#f5f6f8] w-full px-10 flex flex-col sm:flex-row items-center justify-between py-9 relative before:absolute before:left-1/2 before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:h-[50px] before:opacity-20 before:bg-PrimaryColor-0 before:w-0 sm:before:w-[2px]">
          <div className="flex gap-5 items-center">
            <Link>
              <button className="w-[50px] h-[50px] flex items-center justify-center bg-white text-SecondaryColor-0 relative z-10 transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:-z-10 before:scale-0 before:transition-all before:duration-500 hover:before:scale-100 hover:text-white">
                <FaArrowLeftLong />
              </button>
            </Link>
            <div>
              <Link to={"/"}>
                <button className="font-Archivo text-SecondaryColor-0 text-[17px]">
                  Previous
                </button>
              </Link>
              <h3 className="font-Yantramanav font-bold text-[22px] text-PrimaryColor-0 mt-1">
                Construction Building Design
              </h3>
            </div>
          </div>
          <div className="flex gap-5 items-center sm:text-right mt-5 sm:mt-0">
            <div>
              <Link to={"/"}>
                <button className="font-Archivo text-SecondaryColor-0 text-[17px]">
                  Next
                </button>
              </Link>
              <h3 className="font-Yantramanav font-bold text-[22px] text-PrimaryColor-0 mt-1">
                Home Planning and Interior
              </h3>
            </div>
            <Link>
              <button className="w-[50px] h-[50px] flex items-center justify-center bg-white text-SecondaryColor-0 relative z-10 transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:-z-10 before:scale-0 before:transition-all before:duration-500 hover:before:scale-100 hover:text-white">
                <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetials;
