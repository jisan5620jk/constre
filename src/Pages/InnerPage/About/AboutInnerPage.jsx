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
            <Breadcamp />
            <AboutUs />
            <Counter />
            <Feature />
            <TeamMember />
            <Testimonial />
            <Brand />
        </>
    );
};

export default AboutInnerPage;