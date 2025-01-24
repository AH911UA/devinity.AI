import React, { FunctionComponent, MouseEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";

// redux
import { updateShowFeedback } from "../../../../state/actions";
import { useAppSelector } from "../../../../state/reducers";

// components
import { Modal, ModalOverlay } from "../Calculator/ModalCalculatorStyled";
import CalculatorFormFeedback from "./components/CalculatorFormFeedback";
import FormFeedback from "./components/FormFeedback";
import Button from "../../Button";

// images
import logo from "../../../../images/svg/logo.svg";
import iconClose from "../../../../images/svg/close-silver.svg";
import iconPreloader from "../../../../images/gif/loader-purple.gif";
import styles from "./styles";

const ModalFeedback: FunctionComponent = () => {
  const dispatch = useDispatch();
  const show = useAppSelector((state) => state.showFeedback);
  const [loader, setLoader] = useState(false);
  const sendBtnRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef(null);

  const handleOverlayClick = (event: MouseEvent) => {
    if (modalRef.current === event.target) dispatch(updateShowFeedback(false));
  };

  if (!show) return null;

  return (
    <ModalOverlay ref={modalRef} onClick={handleOverlayClick}>
      <Modal style={styles.modal}>
        <div style={styles.containerForm}>
          <img src={logo} alt={"Logo Devinity LLC"} />
          <img
            src={iconClose}
            alt={"Icon Close Devinity LLC"}
            width={15}
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(updateShowFeedback(false))}
          />
        </div>
        <CalculatorFormFeedback>
          <p>Contact information:</p>
          <FormFeedback
            sendBtnRef={sendBtnRef}
            loader={loader}
            setLoader={setLoader}
            onClose={() => dispatch(updateShowFeedback(false))}
          />
        </CalculatorFormFeedback>
        <div style={styles.containerButtons}>
          <div onClick={() => sendBtnRef.current?.click()}>
            <Button to={""} style={styles.buttonSubmit}>
              <span>Submit</span>
              {loader && (
                <img
                  src={loader ? iconPreloader : ""}
                  width={loader ? 30 : 17}
                  alt={"Icon Right Preloader Devinity LLC"}
                />
              )}
            </Button>
          </div>
        </div>
      </Modal>
    </ModalOverlay>
  );
};

export default ModalFeedback;
