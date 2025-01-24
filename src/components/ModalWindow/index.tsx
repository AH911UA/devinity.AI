import React, { FunctionComponent } from "react";

// styles
import * as styles from "./styles.module.css";

type ModalWindowProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};
const ModalWindow: FunctionComponent<ModalWindowProps> = ({
  children,
  style,
}) => {
  return (
    <div className={styles.container} style={style}>
      {children}
    </div>
  );
};

export default ModalWindow;
