import whychooseShape from "/assets/images/choose/choose-shape.png";
import Counter from "./Counter";
import WhyChooseMian from "./WhyChooseMian";

const WhyChoose = () => {
  return (
    <section className="bg-[#f5f6f8] relative z-10">
      <WhyChooseMian />
      <Counter />
      <div className="absolute -bottom-8 right-0 -z-10 animate-[dance2_3s_alternate_infinite]">
        <img src={whychooseShape} />
      </div>
    </section>
  );
};

export default WhyChoose;
