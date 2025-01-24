import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateShowCalculator } from "../../../../state/actions";
import { Modal, ModalOverlay } from "./ModalCalculatorStyled";
import StepOne from "./steps/One";
import StepTwo from "./steps/Two";
import StepThree from "./steps/Three";
import StepFour from "./steps/Four";
import StepFive from "./steps/Five";
import Steps from "./steps/Steps";
import StepFinish from "./steps/Finish";
import StepComment from "./steps/Comment";
import StepsLot from "./steps/StepsLot";
import StepForm from "./steps/StepForm";

import logo from "../../../../images/svg/logo.svg";
import iconClose from "../../../../images/svg/close-silver.svg";

const ModalCalculator = () => {
  const dispatch = useDispatch();

  const { type } = useSelector((state) => state);

  const { showCalculator: show } = useSelector((state) => state);

  const modalRef = useRef(null);

  const [step, setStep] = useState(0);
  const [localStep, setLocalStep] = useState(0);

  useEffect(() => {
    if (show) {
      setStep(0);

      localStorage.setItem("isSeeCalculator", "1");
    }

    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  if (!show) return null;

  const handleOverlayClick = (event) => {
    if (modalRef.current === event.target)
      dispatch(updateShowCalculator(false));
  };

  return (
    <ModalOverlay ref={modalRef} onClick={handleOverlayClick}>
      <Modal>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 25,
          }}
        >
          <img src={logo} alt={"Logo Devinity LLC"} />

          <img
            src={iconClose}
            alt={"Icon Close Devinity LLC"}
            width={15}
            onClick={() => dispatch(updateShowCalculator(false))}
          />
        </div>

        {(() => {
          switch (step) {
            case 1:
              return <StepTwo step={step} setStep={setStep} />;
            case 2:
              return <StepThree step={step} setStep={setStep} />;
            case 3:
              return type?.name === "LoT" ? (
                <StepsLot step={step} setStep={setStep} />
              ) : (
                <StepFour step={step} setStep={setStep} />
              );
            case 4:
              return <StepFive step={step} setStep={setStep} />;
            case 5:
              return (
                <Steps
                  step={step}
                  setStep={setStep}
                  localStep={localStep}
                  setLocalStep={setLocalStep}
                />
              );
            case 6:
              return (
                <StepComment
                  step={step}
                  setStep={setStep}
                  localStep={localStep}
                />
              );
            case 7:
              return (
                <StepForm step={step} setStep={setStep} localStep={localStep} />
              );
            case 8:
              return (
                <StepFinish
                  step={step}
                  setStep={setStep}
                  localStep={localStep}
                />
              );
            default:
              return <StepOne step={step} setStep={setStep} />;
          }
        })()}
      </Modal>
    </ModalOverlay>
  );
};

export default ModalCalculator;
