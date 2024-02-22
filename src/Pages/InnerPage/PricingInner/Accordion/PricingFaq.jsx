import PricingAccordion from "./PricingAccordion";

const PricingFaq = () => {
  //  All Faqs and  answers.
  const faqs = [
    {
      title: "How to Build my Dream House?",
      text: "Credibly morph resource maximizing applications rather than fully tested materials. Metrics via intermandated expertise. Globally administrate reliable platforms for Globally brand seamless systems",
      active: false,
    },

    {
      title: "What kinds of Construction Building?",
      text: "Credibly morph resource maximizing applications rather than fully tested materials. Metrics via intermandated expertise. Globally administrate reliable platforms for Globally brand seamless systems",
      active: false,
    },

    {
      title: "Do You have any Custom Services?",
      text: "Credibly morph resource maximizing applications rather than fully tested materials. Metrics via intermandated expertise. Globally administrate reliable platforms for Globally brand seamless systems",
      active: false,
    },

    {
      title: "How to Replace Bricks in My Building?",
      text: "Credibly morph resource maximizing applications rather than fully tested materials. Metrics via intermandated expertise. Globally administrate reliable platforms for Globally brand seamless systems",
      active: false,
    },

    {
      title: "What is your payment Process?",
      text: "Credibly morph resource maximizing applications rather than fully tested materials. Metrics via intermandated expertise. Globally administrate reliable platforms for Globally brand seamless systems",
      active: false,
    },

    {
      title: "How to Login your website?",
      text: "Credibly morph resource maximizing applications rather than fully tested materials. Metrics via intermandated expertise. Globally administrate reliable platforms for Globally brand seamless systems",
      active: false,
    },

    {
      title: "How Much days you finished a Projects?",
      text: "Credibly morph resource maximizing applications rather than fully tested materials. Metrics via intermandated expertise. Globally administrate reliable platforms for Globally brand seamless systems",
      active: false,
    },

    {
      title: "How to Build my Dream House?",
      text: "Credibly morph resource maximizing applications rather than fully tested materials. Metrics via intermandated expertise. Globally administrate reliable platforms for Globally brand seamless systems",
      active: false,
    },
  ];

  return (
    <main className="relative flex flex-col justify-center overflow-hidden py-28">
      <div className="Container">
        <div className="text-center">
          <h5 className="section-sub-title">Faq</h5>
        </div>
        <h1 className="text-[30px] leading-9 text-center md:text-5xl font-bold mb-14 font-Yantramanav text-PrimaryColor-0 pt-3">
          Frequently Asked Questions
        </h1>
        <div className="w-full mx-auto">
          <div
            className=" grid grid-cols-1 lg:grid-cols-2 gap-7"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            {faqs.map((faq, index) => (
              <PricingAccordion
                key={index}
                title={faq.title}
                id={`faqs-${index}`}
                active={faq.active}
              >
                {faq.text}
              </PricingAccordion>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PricingFaq;

