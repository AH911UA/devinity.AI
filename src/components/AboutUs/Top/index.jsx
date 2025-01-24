import React from "react";
import HeadingText from "../../UI/HeadingText";
import Image from "../../UI/Image";
import Horizontal from "../../UI/Horizontal";
import H3 from "../../UI/H3";
import Button from "../../UI/Button";
import { useHomeData } from "../../../hooks/query";
import { useDispatch } from "react-redux";
import { updateShowCalculator } from "../../../state/actions";

import logo from "../../../images/svg/logo.svg";
import iconPlus from "../../../images/svg/icon_green_plus.svg";
import { H1AboutUs } from "./styled/H1AboutUs";

const Top = () => {
  const {
    aboutUs: { description, list },
  } = useHomeData();

  const dispatch = useDispatch();

  const showText = (text) => {
    const firstText = text.split(":")[0];
    const secondText = text.split(":")[1];
    return (
      <>
        <b>{firstText}:</b>
        {secondText}
      </>
    );
  };

  return (
    <>
      <img src={logo} alt={"Logo Devinity LLC"} />

      <Horizontal style={{ gap: 118 }}>
        <div>
          <HeadingText paddingMobile={"20px 0"} padding={"70px 0 20px"}>
            <H1AboutUs>About Us 👋</H1AboutUs>
          </HeadingText>

          <H3
            style={{
              maxWidth: "410px",
              lineHeight: "30px",
            }}
          >
            {/* <b
              style={{
                fontWeight: "700",
              }}
            >
              Why We Founded Devinity:
            </b> */}

            {` ${description}`}

            {/* <ul>
              {list?.map((item, index) => (
                <li key={index}>{showText(item)}</li>
              ))}
            </ul> */}
          </H3>

          <div onClick={() => dispatch(updateShowCalculator(true))}>
            <Button style={{ marginTop: 32 }}>
              Get estimation
              <img src={iconPlus} alt={"Icon Plus"} />
            </Button>
          </div>
        </div>

        <Image
          filename={"aboutUs.png"}
          style={{ width: "100%", flex: "1 1 450px", top: "-50px" }}
          styleImg={{}}
        />
      </Horizontal>
    </>
  );
};

export default Top;
