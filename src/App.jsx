import About from "./About/About";
import Banner from "./Banner/Banner";
import Blog from "./Blog/Blog";
import Brand from "./Brand/Brand";
import Feature from "./Feature/Feature";
import Footer from "./Footer/Footer";
import HeaderMenubar from "./HeaderMenubar/HeaderMenubar";
import HeaderTopbar from "./HeaderTopbar/HeaderTopbar";
import Project from "./Project/Project";
import Service from "./Service/Service";
import TeamMember from "./TeamMember/TeamMember";
import Testimonial from "./Testimonial/Testimonial";
import WhyChoose from "./WhyChoose/WhyChoose";

function App() {
  return (
    <>
      <HeaderTopbar />
      <HeaderMenubar />
      <Banner />
      <Feature />
      <About />
      <Service />
      <WhyChoose />
      <Project />
      <TeamMember />
      <Testimonial />
      <Brand />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
