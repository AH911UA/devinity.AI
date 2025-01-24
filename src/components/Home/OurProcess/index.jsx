import React from "react";
import HeadingText from "../../UI/HeadingText";
import Text from "../../UI/Text";
import GeneralContainer from "../../UI/GeneralContainer";
import {OurProcessContainer} from "./styles/OurProcessContainer";
import {OurProcessBlock} from "./styles/OurProcessBlock";
import Image from "../../UI/Image";
import ContainerPadding from "../../UI/ContainerPadding";

const OurProcess = ({data}) => {
  return (
    <ContainerPadding>
      <GeneralContainer marginTop={'50px'}>
        <HeadingText paddingMobile={"20px 0 25px"}>
          Our Process
        </HeadingText>

        <OurProcessContainer>
          {data?.length && data?.map(one => (
            <OurProcessBlock>
              <div>
                <div className={'label-container'}>
                  <p className={'big-num'}>{one?.id}</p>
                  <p className={'label'}>{one?.title}</p>
                </div>

                <Text style={{marginTop: -35}}>
                  {one?.description}
                </Text>
              </div>

              <div>
                <Image
                  filename={one?.image}
                  style={{objectPosition: 'center', height: 250}}
                  size={800}
                />
              </div>
            </OurProcessBlock>
          ))}
        </OurProcessContainer>
      </GeneralContainer>
    </ContainerPadding>
  )
}

export default OurProcess;
