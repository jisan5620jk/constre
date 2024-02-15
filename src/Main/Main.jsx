import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar.jsx";
import Footer from "../Shared/Footer/Footer.jsx";

const Main = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
