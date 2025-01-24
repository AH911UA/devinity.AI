import React from "react";
import HeadingText from "../../../UI/HeadingText";
import {AboutProjectHorizontal} from "./styled/AboutProjectHorizontal";
import Image from "../../../UI/Image";
import H3 from "../../../UI/H3";

const AboutProject = ({ data }) => {
  return (
    <>
      <HeadingText
        padding={'70px 0 25px'}
        paddingMobile={"20px 0 0"}
        maxWidth={'auto'}
      >
        About project:
      </HeadingText>

      <AboutProjectHorizontal>
        <Image
          filename={ data?.picture }
          alt={ data?.title }
          style={{
            width: '100%',
          }}
          styleImg={{}}
        />

        <H3
          style={{marginTop: 0}}

          dangerouslySetInnerHTML={{ __html: data?.description }}
        />
      </AboutProjectHorizontal>
    </>
  )
}

export default AboutProject;
