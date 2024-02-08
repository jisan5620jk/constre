import projectDetailsimg from "/assets/images/project-details/project-details-thumb.jpg";
import projectDetialsBoxImg from "/assets/images/project-details/project-details-box-thumb.jpg";
import projectDetialsBoxImg2 from "/assets/images/project-details/project-details-box-thumb2.jpg";
import { IoIosCheckmarkCircleOutline, IoMdCheckmark } from "react-icons/io";

const ServiceDetials = () => {
  return (
    <section>
      <div className="Container">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <div>
              <img src={projectDetailsimg} />
            </div>
            <h2 className="font-Yantramanav font-bold text-[34px] text-PrimaryColor-0 mt-8 mb-3">
              Construction Building Designing
            </h2>
            <p className="font-Archivo text-[#575f66]">
              Credibly morph resource maximizing applications rather than fully
              tested materials. Enthusiastically e-enable levera metrics via
              intermandated expertise. Globally administrate reliable platforms
              for market positioning best practices. Globally brand seamless
              systems through parallel products. Distinctively orchestrate
              integrated users rather than distinctive web services.
            </p>
            <p className="font-Archivo text-[17px] text-PrimaryColor-0 italic mt-7 mb-9">
              Credibly morph resource maximizing applications rather than fully
              tested materials. Enthusiastically enable metrics via
              intermandated expertise. Globally administrate reliable
            </p>
            <h2 className="font-Yantramanav font-bold text-[34px] text-PrimaryColor-0 mt-16 mb-4">
              What the Benifits?
            </h2>
            <p className="font-Archivo text-[#575f66]">
              Metrics via intermandated expertise. Globally administrate
              reliable platforms for market positioning best practices. Globally
              brand seamless systems through parallel products orchestrate
            </p>
            <div className="grid grid-cols-2 gap-7 mt-9 mb-24">
              <div className="text-center group">
                <div className="overflow-hidden">
                  <img
                    src={projectDetialsBoxImg}
                    className="transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="bg-white [filter:drop-shadow(0px_5px_30px_rgba(117,117,117,0.1))] inline-block pt-7 pl-8 pb-7 w-4/5 -mt-5">
                  <h4 className="font-Yantramanav text-PrimaryColor-0 font-semibold text-[22px] text-left mb-3">
                    Design Architect
                  </h4>
                  <ul>
                    <li className="flex items-center gap-2 text-[#575f66] font-Archivo mb-2">
                      <IoMdCheckmark className="text-SecondaryColor-0 text-xl" />
                      Construction Equipments
                    </li>
                    <li className="flex items-center gap-2 text-[#575f66] font-Archivo">
                      <IoMdCheckmark className="text-SecondaryColor-0 text-xl" />
                      Expert’s Engineers
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center group">
                <div className="overflow-hidden">
                  <img
                    src={projectDetialsBoxImg2}
                    className="transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="bg-white [filter:drop-shadow(0px_5px_30px_rgba(117,117,117,0.1))] inline-block pt-7 pl-8 pb-7 w-4/5 -mt-5">
                  <h4 className="font-Yantramanav text-PrimaryColor-0 font-semibold text-[22px] text-left mb-3">
                    Build Construction
                  </h4>
                  <ul>
                    <li className="flex items-center gap-2 text-[#575f66] font-Archivo mb-2">
                      <IoMdCheckmark className="text-SecondaryColor-0 text-xl" />
                      Construction Equipments
                    </li>
                    <li className="flex items-center gap-2 text-[#575f66] font-Archivo">
                      <IoMdCheckmark className="text-SecondaryColor-0 text-xl" />
                      Expert’s Engineers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetials;
