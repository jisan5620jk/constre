import Brand from "../../../Component1/Brand/Brand";
import Feature from "../../../Component1/Feature/Feature";
import TeamMember from "../../../Component1/TeamMember/TeamMember";
import Testimonial from "../../../Component1/Testimonial/Testimonial";
import Counter from "../../../Component1/WhyChoose/Counter";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import AboutUs from "./AboutUs";

const AboutInnerPage = () => {
  return (
    <>
      <Breadcamp breadCampTitle={"about us"} url={"/about"} breadCampLink={"about us"} />
      <AboutUs />
      <div className="bg-[#f5f6f8]">
        <Counter />
      </div>
      <Feature />
      <TeamMember />
      <Testimonial />
      <Brand />
    </>
  );
};

export default AboutInnerPage;
