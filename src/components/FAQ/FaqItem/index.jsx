import React, {useState} from "react";
import {FaqComponent} from "../styled";

import iconMinus from "../../../images/svg/faq_minus.svg";
import iconPlus from "../../../images/svg/faq_plus.svg";

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(faq.open || false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <FaqComponent>
      <dt aria-expanded={isOpen ? 'true' : 'false'} onClick={toggle}>
        {faq.question}
        <img
          src={ isOpen ? iconMinus : iconPlus }
          alt={ isOpen ? 'icon minus Devinity LLC' : 'icon plus Devinity LLC' }
          width="20"
          height="20"
        />
      </dt>
      <dd className={!isOpen ? 'hidden' : undefined}>{faq.answer}</dd>
    </FaqComponent>
  )
}

export default FaqItem;
