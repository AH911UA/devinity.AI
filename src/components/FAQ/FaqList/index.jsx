import React from "react";
import FaqItem from "../FaqItem";

const FaqList = ({ faqs }) => {
  return (
    <dl>
      {faqs?.map((faq, index) => (
        <FaqItem faq={faq} key={index} />
      ))}
    </dl>
  )
}

export default FaqList;
