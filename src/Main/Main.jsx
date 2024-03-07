import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar.jsx";
import Footer from "../Shared/Footer/Footer.jsx";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop.jsx";

const Main = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
