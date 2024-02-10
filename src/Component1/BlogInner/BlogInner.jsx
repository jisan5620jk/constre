import blogDetailsImg from "/assets/images/blog-details/blog-details-thumb.jpg";
import blogDetailsThumb from "/assets/images/blog-details/blog-details-box-thumb.jpg";
import commentImg from "/assets/images/blog-details/comment-profile.jpg";
import commentImg2 from "/assets/images/blog-details/comment-profile2.jpg";
import blogPost1 from "/assets/images/blog-details/blog-details-post.jpg";
import blogPost2 from "/assets/images/blog-details/blog-details-post2.jpg";
import blogPost3 from "/assets/images/blog-details/blog-details-post3.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";
import { LiaCheckCircle } from "react-icons/lia";
import { IoSearch } from "react-icons/io5";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaRegBookmark,
  FaXTwitter,
} from "react-icons/fa6";
import { BsReplyAllFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const BlogInner = () => {
const addClassOnMouseEnter = (selector) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      element.classList.add("active");
      element.siblings().forEach((sibling) => {
        sibling.classList.remove("active");
      });
    });
  });
};

const addClassOnMouseEnterWithParent = (selector) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      element.classList.add("active");
      const siblings =
        element.parentElement.querySelectorAll("button .categorie-item");
      siblings.forEach((sibling) => {
        sibling.classList.remove("active");
      });
    });
  });
};

// Usage
addClassOnMouseEnter(".categorie-item");
addClassOnMouseEnterWithParent("button .categorie-item");


  return (
    <section>
      <div className="Container grid grid-cols-3 gap-[50px]">
        <div className="col-span-2">
          <div>
            <img src={blogDetailsImg} />
          </div>
          <div className="flex gap-7 mt-6 mb-6">
            <h6 className="text-[#575f66] font-Yantramanav relative pl-5 before:absolute before:top-[5px] before:left-0 before:w-[10px] before:h-[10px] before:bg-[#d1d1d1]">
              22 January, 2024
            </h6>
            <h6 className="text-[#575f66] font-Yantramanav relative pl-5 before:absolute before:top-[5px] before:left-0 before:w-[10px] before:h-[10px] before:bg-[#d1d1d1]">
              Construction
            </h6>
            <h6 className="text-[#575f66] font-Yantramanav relative pl-5 before:absolute before:top-[5px] before:left-0 before:w-[10px] before:h-[10px] before:bg-[#d1d1d1]">
              By Admin
            </h6>
          </div>
          <div className="border-t boder-[#d1d1d1] pt-3">
            <h1 className="text-[30px] leading-9 md:text-[34px] font-bold mb-4 font-Yantramanav text-PrimaryColor-0 pt-3">
              Most Popular Building Design Equipment - 2024
            </h1>
          </div>
          <div>
            <p className="font-Archivo text-[#585f65] leading-7 mb-6">
              Credibly morph resource maximizing applications rather than fully
              tested materials. Enthusiastically e-enable levera metrics via
              intermandated expertise. Globally administrate reliable platforms
              for market positioning best practices. Globally brand seamless
              systems through parallel products. Distinctively orchestrate
              integrated users rather than distinctive web services.
            </p>
            <p className="font-Archivo text-[#585f65] leading-7">
              Globally evolve reliable e-tailers rather than robust marke.
              Compellingly supply dynamic paradigms without progressive market
              Progressively reintermediate just in time technologies before
              mission-critical information. Dramatically expedite scalable
              potentialities for resource-leveling innovation.
            </p>
          </div>
          <div className="bg-[#f5f6f8] pt-10 px-10 text-center mt-8 pb-9">
            <div className="w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center m-auto">
              <RiDoubleQuotesL className="text-SecondaryColor-0 text-[40px]" />
            </div>
            <p className="italic text-[22px] text-PrimaryColor-0 font-Archivo mt-5 mb-[22px]">
              Distinctively maintain premier materials rather than error-free
              functionalities. Synergistically provide access to team building
              methods of empowerment and efficient benefits holisticly
              strategize done
            </p>
            <h5 className="font-Yantramanav font-bold text-[22px] text-SecondaryColor-0 mb-1">
              Mr. Jisan khan
            </h5>
            <h6 className="font-Archivo text-[#575f66]">CEO Founder</h6>
          </div>
          <h1 className="text-[30px] leading-9 md:text-[34px] font-bold mb-4 font-Yantramanav text-PrimaryColor-0 pt-14">
            Building Design Solutions
          </h1>
          <p className="font-Archivo text-[#585f65] leading-7">
            Metrics via intermandated expertise. Globally administrate reliable
            platforms for market positioning best practices. Globally brand
            seamless systems through parallel products. Distinctively
            orchestrate
          </p>
          <div className="grid grid-cols-2 items-center mt-8 gap-8">
            <div>
              <img src={blogDetailsThumb} />
            </div>
            <div>
              <h5 className="font-Yantramanav text-2xl font-bold mb-6">
                Design Plan Checklist
              </h5>
              <h6 className="font-Archivo font-medium text-PrimaryColor-0 flex items-center mb-3 gap-[10px]">
                <LiaCheckCircle className="text-xl text-SecondaryColor-0" />
                Competently restore turnkey scenarios
              </h6>
              <h6 className="font-Archivo font-medium text-PrimaryColor-0 flex items-center mb-3 gap-[10px]">
                <LiaCheckCircle className="text-xl text-SecondaryColor-0" />
                Progressively grow leading-edge
              </h6>
              <h6 className="font-Archivo font-medium text-PrimaryColor-0 flex items-center mb-3 gap-[10px]">
                <LiaCheckCircle className="text-xl text-SecondaryColor-0" />
                Appropriately plagiarize clicks-and
              </h6>
              <h6 className="font-Archivo font-medium text-PrimaryColor-0 flex items-center mb-3 gap-[10px]">
                <LiaCheckCircle className="text-xl text-SecondaryColor-0" />
                Dynamically reconceptualize
              </h6>
            </div>
          </div>
          <div className="border-t border-b boder-[#d1d1d1] flex justify-between items-center mt-14 mb-[70px] py-5">
            <div>
              <h6 className="font-Archivo text-[#585f65]">
                <span className="font-Yantramanav font-medium text-lg text-PrimaryColor-0 pr-4">
                  Tags :
                </span>
                Construction, Building
              </h6>
            </div>
            <div className="flex items-center">
              <h6 className="font-Yantramanav font-medium text-lg text-PrimaryColor-0 pr-4">
                Share :
              </h6>
              <ul className="flex gap-3">
                <li>
                  <Link to={"/"}>
                    <button className="w-[34px] h-[34px] flex items-center justify-center border boder-[#d1d1d1] text-sm text-[#686868] transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:text-white hover:before:scale-100">
                      <FaFacebookF />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button className="w-[34px] h-[34px] flex items-center justify-center border boder-[#d1d1d1] text-sm text-[#686868] transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:text-white hover:before:scale-100">
                      <FaXTwitter />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button className="w-[34px] h-[34px] flex items-center justify-center border boder-[#d1d1d1] text-sm text-[#686868] transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:text-white hover:before:scale-100">
                      <FaLinkedinIn />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button className="w-[34px] h-[34px] flex items-center justify-center border boder-[#d1d1d1] text-sm text-[#686868] transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:text-white hover:before:scale-100">
                      <FaPinterestP />
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <h4 className="font-Yantramanav font-bold text-PrimaryColor-0 text-[28px]">
            2 Comments
          </h4>
          <div className="bg-[#f5f6f8] px-8 py-[35px] grid grid-cols-12 mt-7">
            <div className="col-span-2">
              <img src={commentImg} />
            </div>
            <div className="col-span-10">
              <h5 className="font-Yantramanav text-xl text-PrimaryColor-0 font-bold -mt-1 mb-1">
                Chindy Morgan
              </h5>
              <p className="font-Archivo text-[#585f65] leading-7">
                Credibly morph resource maximizing applications rather than
                tested materials. Enthusiastically metrics via intermandated
                expertise. Globally administrate reliable platform
              </p>
              <div className="flex gap-4 mt-4">
                <h6 className="font-Archivo inline-block text-[#575f66] pr-4 relative before:absolute before:top-1 before:right-0 before:w-[2px] before:h-[14px] before:bg-[#b8b8b9]">
                  20 January, 2024
                </h6>
                <Link to={"/"}>
                  <button className="font-Yantramanav text-SecondaryColor-0 font-medium flex transition-all duration-500 hover:hue-rotate-[360deg]">
                    <BsReplyAllFill className="mr-2 -mb-1" />
                    Reply
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[#f5f6f8] px-8 py-[35px] grid grid-cols-12 mt-6 ml-20">
            <div className="col-span-2">
              <img src={commentImg2} />
            </div>
            <div className="col-span-10">
              <h5 className="font-Yantramanav text-xl text-PrimaryColor-0 font-bold -mt-1 mb-1">
                Helen Howlan
              </h5>
              <p className="font-Archivo text-[#585f65] leading-7">
                Morph resource maximizing applications rather than tested
                materials more than metrics via intermandated expertise globally
                administrate
              </p>
              <div className="flex gap-4 mt-4">
                <h6 className="font-Archivo inline-block text-[#575f66] pr-4 relative before:absolute before:top-1 before:right-0 before:w-[2px] before:h-[14px] before:bg-[#b8b8b9]">
                  21 January, 2024
                </h6>
                <Link to={"/"}>
                  <button className="font-Yantramanav text-SecondaryColor-0 font-medium flex transition-all duration-500 hover:hue-rotate-[360deg]">
                    <BsReplyAllFill className="mr-2 -mb-1" />
                    Reply
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <h4 className="font-Yantramanav font-bold text-PrimaryColor-0 text-[28px] mt-[70px]">
            Write A Comments
          </h4>
          <form action="#" method="post" className="mb-[120px]">
            <textarea
              name="comment"
              id="comment"
              placeholder="Write A Comments..."
              className="w-full h-[200px] bg-white p-5 resize-none mb-6 mt-6 border boder-[#d1d1d1]"
            ></textarea>
            <div className="flex gap-6">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name*"
                className="w-full h-[60px] bg-white p-5 mb-6 border boder-[#d1d1d1]"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your E-Mail*"
                className="w-full h-[60px] bg-white p-5 mb-6 border boder-[#d1d1d1]"
                required
              />
            </div>
            <input
              type="text"
              name="website"
              id="webste"
              placeholder="Your Website"
              className="w-full h-[60px] bg-white p-5 mb-8 border boder-[#d1d1d1]"
            />
            <button type="submit" className="primary-button">
              Post Comments
            </button>
          </form>
        </div>
        <div className="col-span-1">
          <div className="relative inline-block w-full mb-[30px]">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search here..."
              required
              className="w-full h-[66px] p-6  border boder-[#d1d1d1]"
            />
            <button
              type="submit"
              className="w-[66px] h-[66px] bg-SecondaryColor-0 text-xl text-white transition-all duration-500 flex items-center justify-center hover:hue-rotate-[360deg] absolute right-0 top-0"
            >
              <IoSearch />
            </button>
          </div>
          <div className="px-10 pt-7 bg-[#f5f6f8] pb-10 mb-[30px]">
            <h5 className="font-Yantramanav font-bold text-[22px] pb-4 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-[#1717171a] after:absolute after:bottom-0 after:left-0 after:bg-SecondaryColor-0 after:animate-[dance7_4s_alternate_infinite] after:h-[2px] after:w-5">
              Popular post
            </h5>
            <Link
              to={"/"}
              className="flex gap-5 items-center group mb-6 mt-7 pb-6 border-b border-[#d1d1d1]"
            >
              <img src={blogPost1} />
              <div>
                <h4 className="text-PrimaryColor-0 font-Yantramanav font-semibold text-lg leading-6 transition-all duration-500 group-hover:text-SecondaryColor-0">
                  Building Interior Repairing and Modifying
                </h4>
                <p className="font-Archivo text-[#8e939f] text-sm">
                  Jan 22, 2024
                </p>
              </div>
            </Link>
            <Link
              to={"/"}
              className="flex gap-5 items-center group mb-6 mt-7 pb-6 border-b border-[#d1d1d1]"
            >
              <img src={blogPost2} />
              <div>
                <h4 className="text-PrimaryColor-0 font-Yantramanav font-semibold text-lg leading-6 transition-all duration-500 group-hover:text-SecondaryColor-0">
                  Most Popular Building Design Equipment...
                </h4>
                <p className="font-Archivo text-[#8e939f] text-sm">
                  Jan 18, 2024
                </p>
              </div>
            </Link>
            <Link to={"/"} className="flex gap-5 items-center group">
              <img src={blogPost3} />
              <div>
                <h4 className="text-PrimaryColor-0 font-Yantramanav font-semibold text-lg leading-6 transition-all duration-500 group-hover:text-SecondaryColor-0">
                  How to Plan A Modern Building Design...
                </h4>
                <p className="font-Archivo text-[#8e939f] text-sm">
                  Jan 21, 2024
                </p>
              </div>
            </Link>
          </div>
          <div className="px-10 pt-7 bg-[#f5f6f8] pb-10 mb-[30px]">
            <h5 className="font-Yantramanav font-bold text-[22px] pb-4 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-[#1717171a] after:absolute after:bottom-0 after:left-0 after:bg-SecondaryColor-0 after:animate-[dance7_4s_alternate_infinite] after:h-[2px] after:w-5">
              Categories
            </h5>
            <ul className="mt-8">
              <li>
                <Link to={"/"}>
                  <button className="flex items-center w-full gap-[10px] pb-[10px] font-Yantramanav text-lg font-medium text-PrimaryColor-0 transition-all duration-500 border-b border-[#d1d1d1] hover:text-SecondaryColor-0 categorie-item">
                    <FaRegBookmark className="text-SecondaryColor-0" />
                    Building Construction
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center w-full gap-[10px] pb-[10px] pt-3 font-Yantramanav text-lg font-medium text-PrimaryColor-0 transition-all duration-500 border-b border-[#d1d1d1] hover:text-SecondaryColor-0 categorie-item">
                    <FaRegBookmark className="text-SecondaryColor-0" />
                    Architecture Design
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center w-full gap-[10px] pb-[10px] pt-3 font-Yantramanav text-lg font-medium text-PrimaryColor-0 transition-all duration-500 border-b border-[#d1d1d1] hover:text-SecondaryColor-0 categorie-item">
                    <FaRegBookmark className="text-SecondaryColor-0" />
                    Building Repair
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center w-full gap-[10px] pb-[10px] pt-3 font-Yantramanav text-lg font-medium text-PrimaryColor-0 transition-all duration-500 border-b border-[#d1d1d1] hover:text-SecondaryColor-0 categorie-item">
                    <FaRegBookmark className="text-SecondaryColor-0" />
                    Road Construction
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center w-full gap-[10px] pb-[10px] pt-3 font-Yantramanav text-lg font-medium text-PrimaryColor-0 transition-all duration-500 border-b border-[#d1d1d1] hover:text-SecondaryColor-0 categorie-item">
                    <FaRegBookmark className="text-SecondaryColor-0" />
                    Building Design
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center w-full gap-[10px] pt-3 font-Yantramanav text-lg font-medium text-PrimaryColor-0 transition-all duration-500 hover:text-SecondaryColor-0 categorie-item">
                    <FaRegBookmark className="text-SecondaryColor-0" />
                    Soil Testing
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-10 pt-7 bg-[#f5f6f8] pb-10 mb-[30px]">
            <h5 className="font-Yantramanav font-bold text-[22px] pb-4 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-[#1717171a] after:absolute after:bottom-0 after:left-0 after:bg-SecondaryColor-0 after:animate-[dance7_4s_alternate_infinite] after:h-[2px] after:w-5">
              Tags
            </h5>
            <ul className="mt-8 inline-block">
              <li className="inline-block mr-[10px] mb-[10px]">
                <Link to={"/"}>
                  <button className="bg-white flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 font-medium px-5 py-2 font-Yantramanav relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                    Construction
                  </button>
                </Link>
              </li>
              <li className="inline-block mb-[10px]">
                <Link to={"/"}>
                  <button className="bg-white flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 font-medium px-5 py-2 font-Yantramanav relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                    Architecture
                  </button>
                </Link>
              </li>
              <li className="inline-block mr-[10px] mb-[10px]">
                <Link to={"/"}>
                  <button className="bg-white flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 font-medium px-5 py-2 font-Yantramanav relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                    Design
                  </button>
                </Link>
              </li>
              <li className="inline-block mr-[10px] mb-[10px]">
                <Link to={"/"}>
                  <button className="bg-white flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 font-medium px-5 py-2 font-Yantramanav relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                    Soiling
                  </button>
                </Link>
              </li>
              <li className="inline-block mr-[10px] mb-[10px]">
                <Link to={"/"}>
                  <button className="bg-white flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 font-medium px-5 py-2 font-Yantramanav relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                    Colors
                  </button>
                </Link>
              </li>
              <li className="inline-block mr-[10px]">
                <Link to={"/"}>
                  <button className="bg-white flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 font-medium px-5 py-2 font-Yantramanav relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                    Building
                  </button>
                </Link>
              </li>
              <li className="inline-block">
                <Link to={"/"}>
                  <button className="bg-white flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 font-medium px-5 py-2 font-Yantramanav relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                    3d Modeling
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogInner;
