import { Link } from "react-router-dom";
import { RiTimeLine } from "react-icons/ri";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter, FaPinterestP, FaLinkedinIn } from "react-icons/fa6";
     
const HeaderTopbar = () => {
  return (
    <header className="bg-PrimaryColor-0 border-b border-BorderColor-0 overflow-hidden">
      <div className="Container flex items-center justify-between">
        <div>
          <ul className="flex">
            <li className="font-Yantramanav text-[15px] py-4 -mb-1 pr-8 border-r border-BorderColor-0">
              <Link to={"#"} className="text-white flex items-center">
                <FaPhoneAlt className="text-SecondaryColor-0 mr-1 text-sm" />
                +980 (1234) 567 890
              </Link>
            </li>
            <li className="text-white flex items-center py-4 -mb-1  font-Yantramanav text-[15px] pl-8">
              <RiTimeLine className="text-SecondaryColor-0 mr-1" />
              Mon - Sat, 8:00 - 17:30, Sunday - Closed
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex -mb-2">
            <li>
              <Link
                to={"#"}
                className="text-white text-sm px-4 py-5 border-l border-BorderColor-0 transition-all duration-300 hover:text-SecondaryColor-0 inline-block"
              >
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className="text-white text-sm px-4 py-5 border-l border-BorderColor-0 transition-all duration-300 hover:text-SecondaryColor-0 inline-block"
              >
                <FaXTwitter />
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className="text-white text-sm px-4 py-5 border-l border-BorderColor-0 transition-all duration-300 hover:text-SecondaryColor-0 inline-block"
              >
                <FaLinkedinIn />
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className="text-white text-sm px-4 py-5 border-x border-BorderColor-0 transition-all duration-300 hover:text-SecondaryColor-0 inline-block"
              >
                <FaPinterestP />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderTopbar;
