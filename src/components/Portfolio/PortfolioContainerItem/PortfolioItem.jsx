import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TitleWithIconDesc from "../../common/container/TitleWithIconDesc/TitleWithIconDesc";
import iconLink from "../../../images/svg/link.svg";
import { InfoRow } from "../../common/container/InfoRow/InfoRow";
import { TechnologyImgs } from "../../common/Image/TechnologyImgs";
import Image from "../../UI/Image";
import { PortfolioContainerItem } from "./styled/PortfolioContainerItem";
import useIsMobile from "../../../hooks/useIsMobile";

export const PortfolioItem = ({ item }) => {
  console.log("====>", item.images.length);

  const isMobile = useIsMobile(1080);
  const { ref, inView } = useInView({
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
      key={`portfolio-card-${item.link}`}
      ref={ref}
      variants={animationVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <PortfolioContainerItem>
        <div className="row">
          <div>
            <TitleWithIconDesc
              link={item.link}
              icon={iconLink}
              text={item.title}
              tag={`#${item.type}`}
            ></TitleWithIconDesc>
            <InfoRow item={item} />
            <div className="only-mobile">
              <Image
                alt={item?.title_seo}
                filename={item.picture}
                style={{}}
                className={""}
                styleImg={{}}
              />
            </div>

            <h2>About project:</h2>
            <div
              className="text"
              dangerouslySetInnerHTML={{ __html: item?.description }}
            ></div>
          </div>
          <div className="only-desktop">
            <Image
              alt={item?.title_seo}
              filename={item.picture}
              style={{}}
              className={""}
              styleImg={{}}
            />
            <div style={{marginTop: '20px'}}>
              {item.picture2 && (
                <Image
                  alt={item?.title_seo}
                  filename={item.picture2}
                  style={{}}
                  className={""}
                  styleImg={{}}
                />
              )}
            </div>
          </div>
        </div>
        <TechnologyImgs width="128px" height="80px" isMobile={isMobile} />
      </PortfolioContainerItem>
      ;
    </motion.div>
  );
};
