import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import PricingFaq from "./Accordion/PricingFaq";
import PricingPage from "./PricingPage";

const PricingInner = () => {
  return (
    <>
    <Breadcamp 
    breadCampTitle={"Pricing Plans"}
    url={"/pringinner"}
    breadCampLink={"Pricing Plans"}
    />
    <PricingPage />
    <PricingFaq />
    </>
  );
};

export default PricingInner;
