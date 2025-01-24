import React from "react";
import { useEffect, useState } from "react";
import { BlogItemStyledComponent } from "./styled/BlogItemStyledComponent";
import Image from "../../UI/Image";
import { ButtonsLine } from "../../common/container/ButtonsLine/ButtonsLine";
import imagePlanetFull from "../../../images/planet-full.png";
import useIsMobile from "../../../hooks/useIsMobile";

export const BlogItemComponent = ({
  blog: { title, subTitle, content, imgTop, tags },
}) => {
  const [domElements, setDomElements] = useState([]);
  const isMobile = useIsMobile(1000);
  useEffect(() => {
    if (!content.length) {
      return;
    }
    const domElements = [];
    for (let index = 0; index < content.length; index++) {
      const element = content[index];

      switch (element.type) {
        case "p":
          domElements.push(
            <p
              key={`paragraph-${index}`}
              dangerouslySetInnerHTML={{ __html: element.data }}
            />
          );
          break;

        case "img":
          if (element.width === 50) {
            domElements.push(
              <section key={`img-container-dynamic`}>
                <Image
                  filename={element.data}
                  key={`img-container-dynamic-${index}-1`}
                />
                <Image
                  filename={content[index + 1].data}
                  key={`img-container-dynamic-${index}-2`}
                />
              </section>
            );
            ++index;
          } else if (element.width === 100) {
            domElements.push(
              <Image
                filename={element.data}
                key={`img-container-dynamic-one-${index}`}
              />
            );
          }

          break;

        case "inner":
          domElements.push(
            <div
              key={`inner-${Date.now()}-${index}`}
              dangerouslySetInnerHTML={{ __html: element.data }}
            />
          );
          break;
      }
    }

    setDomElements(domElements);
  }, []);

  return (
    <BlogItemStyledComponent>
      <Image filename={imgTop} style={{width: '100%'}} size={400}/>
      <h3>{subTitle}</h3>
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      {domElements}
      <ButtonsLine btns={tags} isMobile={isMobile}/>
      <img
        key={`planet-full-101`}
        className={"planet-full"}
        src={imagePlanetFull}
        alt={"Planet Green Devinity LLC"}
      />
      <img
        key={`planet-full-102`}
        className={"planet-full"}
        src={imagePlanetFull}
        alt={"Planet Green Devinity LLC"}
      />
      <img
        key={`planet-full-103`}
        className={"planet-full"}
        src={imagePlanetFull}
        alt={"Planet Green Devinity LLC"}
      />
      <img
        key={`planet-full-104`}
        className={"planet-full"}
        src={imagePlanetFull}
        alt={"Planet Green Devinity LLC"}
      />
    </BlogItemStyledComponent>
  );
};
