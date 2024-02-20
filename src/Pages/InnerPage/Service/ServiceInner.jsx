import Service from "../../../Component1/Service/Service";
import WhyChooseMian from "../../../Component1/WhyChoose/WhyChooseMian";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import PricingInner from "../PricingInner/PricingInner";

const ServiceInner = () => {
  return (
    <>
      <Breadcamp
        breadCampTitle={"Service"}
        url={"/service"}
        breadCampLink={"Service"}
      />
      <div className="text-center">
        <Service />
      </div>
      <div className="bg-[#f5f6f8]">
        <WhyChooseMian />
      </div>
      <PricingInner />
    </>
  );
};

export default ServiceInner;
