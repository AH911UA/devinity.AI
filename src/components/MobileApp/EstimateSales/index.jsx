import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import fonts from "../../fonts";

import imagePlanetFull from "../../../images/planet-full.png";
import ButtonSquare from "../../UI/ButtonSquare";
import { updateShowCalculator } from "../../../state/actions";

const EstimateSales = ({ withRequestBtn = true }) => {
  const dispatch = useDispatch();
  const [currentTime, setCurrentTime] = useState(new Date(0));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime((prevTime) => new Date(prevTime.getTime() + 1000));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const accumulator =
    ((new Date().getTime() / 1000).toFixed(2) - 1708968457) * 0.17;
  const sum = 1318887 + accumulator;
  const formattedSum = sum.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <EstimateSalesContainer
      style={{
        margin: "80px 0",
      }}
    >
      <div>
        <h3>
          So Far We Have Generated An <br /> Estimate Of{" "}
          <span>${formattedSum}</span> In Sales <br /> Revenue for Our Clients.
        </h3>
        {withRequestBtn && (
          <div
            className={"button"}
            style={{
              marginTop: 20,
            }}
            onClick={() => dispatch(updateShowCalculator(true))}
          >
            <ButtonSquare
              style={{
                width: "-webkit-fill-available",
              }}
            >
              Request Your Custom App
            </ButtonSquare>
          </div>
        )}
      </div>

      <img
        className={"planet-img"}
        src={imagePlanetFull}
        alt={"Planet Green Devinity LLC"}
      />
    </EstimateSalesContainer>
  );
};

export default EstimateSales;

const EstimateSalesContainer = styled.div`
  position: relative;
  width: calc(100vw - 200px);
  padding: 0 100px;
  margin: 200px 0;

  > div {
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(25px);
    text-align: center;

    padding: 65px 100px;

    h3 {
      color: #e8e8e8;
      text-align: center;
      font-family: ${fonts.oxanium};
      font-size: 56px;
      font-weight: 700;
      line-height: 70px;
      margin: 0;

      white-space: break-spaces;
      display: inline;

      span {
        color: #62ed2e;
        border-radius: 15px;
        border: 1px solid #62ed2e;
        padding: 10px 20px;
      }
    }
  }

  .planet-img {
    position: absolute;
    z-index: -1;
  }

  @media (min-width: 1101px) {
    .planet-img {
      height: 200px;
      top: -100px;
      right: 50px;
    }
  }

  @media (max-width: 1100px) {
    width: calc(100vw - 40px);
    padding: 0 20px;
    margin: 90px 0;

    > div {
      padding: 25px 20px;

      h3 {
        font-size: 25px;
        line-height: 34px;

        span {
          border-radius: 5px;
          padding: 5px 10px 0;
        }
      }
    }

    .planet-img {
      height: 100px;
      left: 0;
      bottom: -50px;
    }
  }
`;
