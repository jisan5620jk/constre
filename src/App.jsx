import About from "./component/About/About";
import AboutInner from "./component/AboutInner/AboutInner";
import Banner from "./component/Banner/Banner";
import Blog from "./component/Blog/Blog";
import BlogInner from "./component/BlogInner/BlogInner";
import Brand from "./component/Brand/Brand";
import Breadcamp from "./component/Breadcamp/Breadcamp";
import ContactBox from "./component/ContactInner/ContactBox";
import ContactForm from "./component/ContactInner/ContactForm";
import ContactLocation from "./component/ContactInner/ContactLocation";
import Feature from "./component/Feature/Feature";
import Footer from "./component/Footer/Footer";
import HeaderMenubar from "./component/HeaderMenubar/HeaderMenubar";
import HeaderTopbar from "./component/HeaderTopbar/HeaderTopbar";
import Project from "./component/Project/Project";
import Service from "./component/Service/Service";
import TeamMember from "./component/TeamMember/TeamMember";
import Testimonial from "./component/Testimonial/Testimonial";
import WhyChoose from "./component/WhyChoose/WhyChoose";

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
      <Breadcamp />
      <AboutInner />
      <ContactBox />
      <BlogInner />
      <ContactForm />
      <ContactLocation />
      <BlogInner />
      <TeamMember />
      <Testimonial />
      <Brand />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
