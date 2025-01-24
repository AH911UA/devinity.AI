import React, { FunctionComponent, useEffect, useState } from "react";

// hooks
import { toggleOverflow } from "../../hooks/lock-scroll";

// constants
import { COOKIE_KEY_LOCAL_STORAGE } from "../../constants";

// styles
import * as styles from "./styles.module.css";

const LinePrivacyPolicy: FunctionComponent = () => {
  const [isShow, setIsShow] = useState(false);

  const lockBodyScroll = (bool?: boolean) => {
    const body = document.querySelector("body");
    const isCookieJSON = localStorage.getItem(COOKIE_KEY_LOCAL_STORAGE);

    if (body && isCookieJSON === null) {
      window.scrollTo(0, 0);
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  const onPress = (resultIsCookie: boolean) => {
    localStorage.setItem(
      COOKIE_KEY_LOCAL_STORAGE,
      JSON.stringify(resultIsCookie)
    );
    setIsShow(false);
    toggleOverflow("auto");
  };

  useEffect(() => {
    lockBodyScroll(true);
  }, []);

  if (!isShow) return null;
  return (
    <>
      <div className={styles.containerMobile}>
        <p className={styles.titleMobile}>
          We use cookies to make our site work. View our cookie policy{" "}
          <a href="/privacy-policy" className={styles.linkTitleMobile}>
            here
          </a>
          .
        </p>
        <div className={styles.buttonsMobile}>
          <button
            className={styles.buttonMobile}
            onClick={() => onPress(true)}
            type="button"
          >
            <p className={styles.titleButtonMobile}>Accept</p>
          </button>
          <button
            className={styles.buttonMobile}
            onClick={() => onPress(false)}
            type="button"
          >
            <p className={styles.titleButtonMobile}>Decline</p>
          </button>
        </div>
      </div>
      <div className={styles.container}>
        <p className={styles.title}>
          We use essential cookies to make our site work. With your consent, we
          may also use non-essential cookies to improve user experience and
          analyze website traffic.
        </p>
        <button
          onClick={() => onPress(false)}
          type="button"
          className={styles.buttonCancel}
        >
          <p className={styles.titleButtonCancel}>I do not accept</p>
        </button>
        <button
          onClick={() => onPress(true)}
          type="button"
          className={styles.buttonAccept}
        >
          <p className={styles.titleButtonAccept}>I accept</p>
        </button>
      </div>
    </>
  );
};

export default LinePrivacyPolicy;
