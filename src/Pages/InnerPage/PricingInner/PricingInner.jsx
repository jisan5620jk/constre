import PricingInnerMain from "./PricingInnerMain";
import { MdCheck } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const PricingInner = () => {
  return (
    <section className="bg-[#f5f6f8] py-28">
      <div className="Container">
        <div className="text-center">
          <h5 className="section-sub-title">PRICING PLANS</h5>
          <h1 className="text-[30px] leading-9 md:text-5xl font-bold mb-4 font-Yantramanav text-PrimaryColor-0 pt-3">
            Affordable Pricing Plans
          </h1>
          <p className="font-Archivo font-light text-[#575f66] md:w-2/4 m-auto pt-1 2xl:w-5/12 ">
            Monotonectally iterate stand-alone bandwidth rather than driven
            materials. Continually drive client-based e-markets
          </p>
        </div>
        <div className="grid grid-cols-3 gap-7 mt-14">
          <PricingInnerMain
            pricingTitle={"Business"}
            pricingPrice={13}
            pricingCurrency={"$"}
            pricingValid={"Per Month"}
            pricingIcon={<MdCheck />}
            pricingIcon2={<MdCheck />}
            pricingIcon3={<RxCross2 />}
            pricingIcon4={<RxCross2 />}
            pricingItem={"SSD Installations Server"}
            pricingItem2={"WP Plugin Installation"}
            pricingItem3={"Free Traffice Generate"}
            pricingItem4={"Lifetime Supports"}
            pricingBtn={"Purchaces"}
          />
          <PricingInnerMain
            pricingTitle={"Business"}
            pricingPrice={27}
            pricingCurrency={"$"}
            pricingValid={"Per Month"}
            pricingIcon={<MdCheck />}
            pricingIcon2={<MdCheck />}
            pricingIcon3={<MdCheck />}
            pricingIcon4={<RxCross2 />}
            pricingItem={"SSD Installations Server"}
            pricingItem2={"WP Plugin Installation"}
            pricingItem3={"Free Traffice Generate"}
            pricingItem4={"Lifetime Supports"}
            pricingBtn={"Purchaces"}
          />
          <PricingInnerMain
            pricingTitle={"Business"}
            pricingPrice={49}
            pricingCurrency={"$"}
            pricingValid={"Per Month"}
            pricingIcon={<MdCheck />}
            pricingIcon2={<MdCheck />}
            pricingIcon3={<MdCheck />}
            pricingIcon4={<MdCheck />}
            pricingItem={"SSD Installations Server"}
            pricingItem2={"WP Plugin Installation"}
            pricingItem3={"Free Traffice Generate"}
            pricingItem4={"Lifetime Supports"}
            pricingBtn={"Purchaces"}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingInner;
