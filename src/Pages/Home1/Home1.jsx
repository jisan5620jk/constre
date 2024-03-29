import About from "../../Component1/About/About";
import Banner from "../../Component1/Banner/Banner";
import Blog from "../../Component1/Blog/Blog";
import Brand from "../../Component1/Brand/Brand";
import Feature from "../../Component1/Feature/Feature";
import Project from "../../Component1/Project/Project";
import Service from "../../Component1/Service/Service";
import TeamMember from "../../Component1/TeamMember/TeamMember";
import Testimonial from "../../Component1/Testimonial/Testimonial";
import WhyChoose from "../../Component1/WhyChoose/WhyChoose";

const Home1 = () => {
  return (
    <>
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
    </>
  );
};

export default Home1;
