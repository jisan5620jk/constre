import About from "./Component1/About/About";
import AboutInner from "./Component1/AboutInner/AboutInner";
import Banner from "./Component1/Banner/Banner";
import Blog from "./Component1/Blog/Blog";
import BlogInner from "./Component1/BlogInner/BlogInner";
import Brand from "./Component1/Brand/Brand";
import Breadcamp from "./Component1/Breadcamp/Breadcamp";
import ContactBox from "./Component1/ContactInner/ContactBox";
import ContactForm from "./Component1/ContactInner/ContactForm";
import ContactLocation from "./Component1/ContactInner/ContactLocation";
import Feature from "./Component1/Feature/Feature";
import Footer from "./Component1/Footer/Footer";
import Navbar from "./Component1/Navbar/Navbar";
import PricingInner from "./Component1/PricingInner/PricingInner";
import PricingInnerFaq from "./Component1/PricingInner/PricingInnerFaq";
import Project from "./Component1/Project/Project";
import ProjectDetials from "./Component1/ProjectDetails/ProjectDetials";
import Service from "./Component1/Service/Service";
import ServiceDetials from "./Component1/ServiceDetails/ServiceDetials";
import TeamMember from "./Component1/TeamMember/TeamMember";
import Testimonial from "./Component1/Testimonial/Testimonial";
import WhyChoose from "./Component1/WhyChoose/WhyChoose";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Feature />
      <About />
      <Service />
      <WhyChoose />
      <Project />
      <Breadcamp />
      <AboutInner />
      <ContactBox />
      <BlogInner />
      <ContactForm />
      <ContactLocation />
      <BlogInner />
      <PricingInner />
      <PricingInnerFaq />
      <ProjectDetials />
      <ServiceDetials />
      <TeamMember />
      <Testimonial />
      <Brand />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
