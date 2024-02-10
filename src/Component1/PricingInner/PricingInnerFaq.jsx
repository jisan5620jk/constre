import Faq from "react-faq-Component1";

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
  ],
};

const styles = {
  titleTextColor: "blue",
  rowTitleColor: "blue",
};

const config = {
  // your config options here
};

export default function PricingInnerFaq() {
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}
