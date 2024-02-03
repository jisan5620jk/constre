import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import Logo from "/assets/images/logo/logo.png";

const HeaderMenubar = () => {
  return (
    <header className="bg-PrimaryColor-0">
      <div className="Container flex items-center justify-between">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <ul className="flex items-center">
            <li className="py-9">
              <Link to={"/"} className="font-Yantramanav uppercase text-white font-medium text-base transition-all duration-500 hover:text-SecondaryColor-0 pr-12">Home</Link>
            </li>
            <li>
              <Link to={"/"}  className="font-Yantramanav uppercase text-white font-medium text-base transition-all duration-500 hover:text-SecondaryColor-0 pr-12">About</Link>
            </li>
            <li>
              <Link to={"/"}  className="font-Yantramanav uppercase text-white font-medium text-base transition-all duration-500 hover:text-SecondaryColor-0 pr-12">Service</Link>
            </li>
            <li>
              <Link to={"/"}  className="font-Yantramanav uppercase text-white font-medium text-base transition-all duration-500 hover:text-SecondaryColor-0 pr-12">Pages</Link>
            </li>
            <li>
              <Link to={"/"}  className="font-Yantramanav uppercase text-white font-medium text-base transition-all duration-500 hover:text-SecondaryColor-0 pr-12">Portfolio</Link>
            </li>
            <li>
              <Link to={"/"}  className="font-Yantramanav uppercase text-white font-medium text-base transition-all duration-500 hover:text-SecondaryColor-0 pr-12">Blogs</Link>
            </li>
            <li>
              <Link to={"/"}  className="font-Yantramanav uppercase text-white font-medium text-base transition-all duration-500 hover:text-SecondaryColor-0 pr-12">Contact</Link>
            </li>
            <li>
              <Link to={"/"}>
                <BiMenuAltLeft  className="w-10 h-10 bg-SecondaryColor-0 text-xl text-white"/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderMenubar;
