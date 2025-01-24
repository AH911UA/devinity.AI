import React from "react";
import ContactFormFooter from "../../UI/Form/ContactFormFooter";
import { ContactFormContainer } from "./styled";

import imageContactUs from "../../../images/image-contact-us.png";

const ContactForm = () => {
  return (
    <ContactFormContainer>
      <div>
        <h3>
          Your Idea. Our Skills. <br />
          Let's match them.
        </h3>

        <ContactFormFooter />
      </div>

      <div>
        <img src={imageContactUs} alt={"Contacts Devinity LLC"} />
      </div>
    </ContactFormContainer>
  );
};

export default ContactForm;
