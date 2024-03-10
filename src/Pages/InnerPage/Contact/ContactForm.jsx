const ContactForm = () => {
    return (
      <section>
        <div className="Container -mb-20 relative z-10">
          <div className="border-t-[6px] border-SecondaryColor-0 bg-PrimaryColor-0 px-[50px] py-20 text-center w-[100%] md:w-[700px] lg:w-[910px] m-auto">
            <h5 className="section-sub-title">Contact Us</h5>
            <h1 className="text-[30px] leading-9 md:text-[40px] font-bold mb-5 font-Yantramanav text-white pt-3">
              Get In Touch Contact Us
            </h1>
            <form action="#" method="post">
              <div className="flex flex-col sm:flex-row gap-0 sm:gap-6 mt-10">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name*"
                  className="w-full h-[60px] bg-white p-5 mb-6"
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your E-Mail*"
                  className="w-full h-[60px] bg-white p-5 mb-6"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Your Subject"
                className="w-full h-[60px] bg-white p-5 mb-6"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Write A Message..."
                className="w-full h-[200px] bg-white p-5 resize-none mb-8"
              ></textarea>
              <button type="submit" className="primary-button before:bg-white after:bg-white hover:text-SecondaryColor-0 ">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
};

export default ContactForm;