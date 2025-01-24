import React from "react";
import Button from "../../UI/Button";
import {BrandsContainer} from "./styled/BrandsContainer";
import {BrandsLabel} from "./styled/BrandsLabel";
import BrandsList from "./styled/BrandsList";
import Image from "../../UI/Image";

import iconArrowRight from "../../../images/svg/icon-arrow-right.svg";

const Brands = ({data}) => {
  return (
    <BrandsContainer>
      <div>
        <BrandsLabel>
          Experienced team,
          <br/>
          taking on projects of any difficulty
        </BrandsLabel>

        <BrandsList>
          {data?.length && data?.map(img => (
            <Image
              filename={img}
              style={{height: 100}}
            />
          ))}
        </BrandsList>

        <Button
          to={'/portfolio'}
          $opacity={0.06}
        >
          Open Portfolio

          <img src={iconArrowRight} alt={'Icon Arrow Right Devinity LLC'}/>
        </Button>
      </div>
    </BrandsContainer>
  )
}

export default Brands;
