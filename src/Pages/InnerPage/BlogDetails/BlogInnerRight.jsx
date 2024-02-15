import { FaRegBookmark } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import blogPost1 from "/assets/images/blog-details/blog-details-post.jpg";
import blogPost2 from "/assets/images/blog-details/blog-details-post2.jpg";
import blogPost3 from "/assets/images/blog-details/blog-details-post3.jpg";

const BlogInnerRight = () => {
    return (
      <>
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
                  <button className="flex items-center w-full gap-[10px] pb-[10px] font-Yantramanav text-lg font-medium text-PrimaryColor-0 transition-all duration-500 border-b border-[#d1d1d1] hover:text-SecondaryColor-0">
                    <FaRegBookmark className="text-SecondaryColor-0" />
                    Building Construction
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center w-full gap-[10px] pb-[10px] pt-3 font-Yantramanav text-lg font-medium text-PrimaryColor-0 transition-all duration-500 border-b border-[#d1d1d1] hover:text-SecondaryColor-0">
                    <FaRegBookmark className="text-SecondaryColor-0" />
                    Architecture Design
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center w-full gap-[10px] pb-[10px] pt-3 font-Yantramanav text-lg font-medium text-PrimaryColor-0 transition-all duration-500 border-b border-[#d1d1d1] hover:text-SecondaryColor-0">
                    <FaRegBookmark className="text-SecondaryColor-0" />
                    Building Repair
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center w-full gap-[10px] pb-[10px] pt-3 font-Yantramanav text-lg font-medium text-PrimaryColor-0 transition-all duration-500 border-b border-[#d1d1d1] hover:text-SecondaryColor-0">
                    <FaRegBookmark className="text-SecondaryColor-0" />
                    Road Construction
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center w-full gap-[10px] pb-[10px] pt-3 font-Yantramanav text-lg font-medium text-PrimaryColor-0 transition-all duration-500 border-b border-[#d1d1d1] hover:text-SecondaryColor-0">
                    <FaRegBookmark className="text-SecondaryColor-0" />
                    Building Design
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center w-full gap-[10px] pt-3 font-Yantramanav text-lg font-medium text-PrimaryColor-0 transition-all duration-500 hover:text-SecondaryColor-0">
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
      </>
    );
};

export default BlogInnerRight;