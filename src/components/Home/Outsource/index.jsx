import React from "react";
import Button, { ButtonEvent } from "../../UI/Button";
import { OutsourceContainer } from "./styled/OutsourceContainer";
import { OutsourceLabel } from "./styled/OutsourceLabel";
import { OutsourceDescription } from "./styled/OutsourceDescription";
import { OutsourceKeys } from "./styled/OutsourceKeys";
import ContainerPadding from "../../UI/ContainerPadding";

import imageOutsource from "../../../images/svg/outsource.svg";
import { useDispatch } from "react-redux";
import { updateShowCalculator } from "../../../state/actions";

const Outsource = () => {
  const dispatch = useDispatch();
  return (
    <ContainerPadding>
      <OutsourceContainer>
        <div>
          <OutsourceLabel>Outsource like never before!</OutsourceLabel>

          <OutsourceDescription>
            Competitive quotes
            <span> + </span>
            stellar end product quality
            <span>{` = Devinity.AI `}</span>
          </OutsourceDescription>

          <div>
            <OutsourceKeys>
              <div>
                <p>Top-tier talent.</p>

                <p>Pay-on-delivery model.</p>

                <p>Scalable and polished code.</p>
              </div>
            </OutsourceKeys>

            <div className={"mobile-img"}>
              <img
                src={imageOutsource}
                style={{ height: 150, margin: "0 auto" }}
                alt={"Outsource like never before Devinity LLC"}
              />
            </div>
          </div>


            <div className={"footer"}>
              <Button
                to={"/contact"}
                color={"#000"}
                background={"#62ED2E"}
                $borderColor={"#62ED2E"}
                style={{
                  cursor: "pointer",
                  width: 'auto',
                  margin: '0'
                }}
                whitespace={"nowrap"}
              >
                Contact Now
              </Button>

              <ButtonEvent
                color={"#fff"}
                background={"transperent"}
                $borderColor={"#62ED2E"}
                style={{
                  cursor: "pointer",
                  width: 'auto',
                }}
                whitespace={"nowrap"}
                onClick={() => dispatch(updateShowCalculator(true))}
                widthMobile={''}
              >
                Project Evaluation
              </ButtonEvent>
            </div>

        </div>

        <div className={"desktop-img"}>
          <img
            src={imageOutsource}
            style={{ height: 250 }}
            alt={"Outsource like never before Devinity LLC"}
          />
        </div>
      </OutsourceContainer>
    </ContainerPadding>
  );
};

export default Outsource;
