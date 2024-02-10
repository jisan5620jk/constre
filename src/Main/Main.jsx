import { Outlet } from "react-router-dom";
import Navbar from "../Component1/Navbar/Navbar";
import Footer from "../Component1/Footer/Footer";

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
