import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CardStyled } from "./styled/CardStyled";
import { ArrowLinkRight } from "../arrowLinkRight/arrowLinkRight";

export const Card = ({
  img = "",
  tag = "",
  title = "",
  desc = "",
  link = "",
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={animationVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <CardStyled>
        <div className="card_header">
          <img src={img} alt="" />
        </div>
        <div>
          <span className="tag">{tag}</span>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <ArrowLinkRight link={link || "/"} />
      </CardStyled>
    </motion.div>
  );
};
