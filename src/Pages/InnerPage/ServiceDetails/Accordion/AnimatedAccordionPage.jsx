import Accordion from "./Accordion";

const AnimatedAccordionPage = () => {
  //  All Faqs and  answers.
  const faqs = [
    {
      title: "What is the Popular Equipment for Construction?",
      text: "Credibly morph resource maximizing applications rather than fully tested materials. Enthusiastically e-enable le metrics via intermandated expertise. Globally administrate reliable platforms for market positioning best practic Globally brand seamless systems through parallel products orchestrate",
      active: false,
    },

    {
      title: "How to Contact Your Agency for my Project?",
      text: "Credibly morph resource maximizing applications rather than fully tested materials. Enthusiastically e-enable le metrics via intermandated expertise. Globally administrate reliable platforms for market positioning best practic Globally brand seamless systems through parallel products orchestrate",
      active: false,
    },

    {
      title: "How much Cost A Design Projects?",
      text: "Credibly morph resource maximizing applications rather than fully tested materials. Enthusiastically e-enable le metrics via intermandated expertise. Globally administrate reliable platforms for market positioning best practic Globally brand seamless systems through parallel products orchestrate",
      active: false,
    },
  ];

  return (
    <main className="relative flex flex-col justify-center  overflow-hidden">
      <div className="w-full mx-auto">
        <div data-aos="zoom-in-up" data-aos-duration="1000">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              title={faq.title}
              id={`faqs-${index}`}
              active={faq.active}
            >
              {faq.text}
            </Accordion>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AnimatedAccordionPage;

