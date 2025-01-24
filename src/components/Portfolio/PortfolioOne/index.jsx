import React, {useState} from "react";
import Text from "../../UI/Text";
import Image from "../../UI/Image";
import {OurProjectBlock} from "../../Slider/styled/OurProjectBlock";
import iconArrow from "../../../images/svg/icon-arrow-right-white.svg";
import Button from "../../UI/Button";
import removeHtmlTags from "../../../utils/removeHtmlTags";

const PortfolioOne = ({data}) => {
  const [hover, setHover] = useState(false);

  return (
    <OurProjectBlock
      key={data?.id}
      width={'auto'}

      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div>
        <div>
          <h5>
            {data?.title}
          </h5>

          <Text color={'#913EC8'}>
            #{data?.type}
          </Text>
        </div>

        <div>
          {data?.libraries?.slice(0, 2)?.map((library) => (
            <Image
              key={library?.id}
              filename={library?.url}
              alt={library?.alt}
              style={{
                objectPosition: 'center',
                width: 50
              }}
            />
          ))}
        </div>
      </div>

      <div style={{display: 'block'}}>
        <Image
          filename={data?.images[0]?.url}
          alt={data?.images[0]?.alt}
          style={{
            objectPosition: 'center',
            height: 250
          }}
          styleImg={{
            objectPosition: 'center',
            height: 220
          }}
        />
      </div>

      <div
        className={`description ${hover ? 'show' : 'hidden'}`}
      >
        <div>
          <p>
            { removeHtmlTags(data?.description) }
          </p>

          <div style={{
            textAlign: 'right'
          }}>
            <Button
              to={`/portfolio/${data?.id}`}

              background={'#15041D'}
              color={'#FFFFFF'}
              $borderColor={'#331345'}
              padding={'20px 15px'}
              gap={'30px'}
            >
              About the project
              <img
                src={iconArrow}
                alt={'Icon Arrow Devinity LLC'}
              />
            </Button>
          </div>
        </div>
      </div>
    </OurProjectBlock>
  )
}

export default PortfolioOne;
