import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import ContactBox from "./ContactBox";
import ContactForm from "./ContactForm";
import ContactLocation from "./ContactLocation";

const ContactInnerPage = () => {
    return (
        <>
            <Breadcamp breadCampTitle={"Contact Us"}
            breadCampLink={"Contact Us"}/>
            <ContactBox />
            <ContactForm />
            <ContactLocation />
        </>
    );
};

export default ContactInnerPage;