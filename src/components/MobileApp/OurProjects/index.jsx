import React from "react";
import Label from "../../UI/Label";
import {OurProjectsItem, OurProjectsItems} from "./styled";

import imageFestoApp from "../../../images/portfolio/minimal/festoApp.png"
import imageSample1 from "../../../images/portfolio/minimal/sample1.png"
import {Link} from "gatsby";

const OurProjects = ({ data }) => {
  return (
    <>
      <Label
        margin={'0 0 50px'}
      >
        Our <span>Projects</span>
      </Label>

      <OurProjectsItems>

        {data?.map(({ title, description, image, link }) => (
          <OurProjectsItem
            image={ image }
          >
            <Link to={link || ''}>
              <h3>{ title }</h3>
              <p>{ description }</p>
            </Link>
          </OurProjectsItem>
        ))}
      </OurProjectsItems>
    </>
  )
}

export default OurProjects;
