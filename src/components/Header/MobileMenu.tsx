import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "gatsby";
import Hamburger from "hamburger-react";
import { useClickAway, useLocation } from "react-use";
import { AnimatePresence, motion } from "framer-motion";

// redux
import { updateShowCalculator } from "../../state/actions";

// components
//import ButtonSquare from "../UI/ButtonSquare";

// constants
import routes from "../../routes";

// images
import iconWhatsApp from "../../images/whatsapp-icon.png";

// styles
import styled, { css } from "styled-components";
import { GetQuoteButton } from "./styled/GetQuoteButton";
import colors from "../colors";
import fonts from "../fonts";

const MobileMenu = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  const [isOpen, setOpen] = useState(false);
  const refMobileMenu = useRef(null);

  useClickAway(refMobileMenu, () => setOpen(false));

  const scrollTo = (id: string) => {
    if (location.pathname === "/" && id.includes("services")) {
      const cleanId = id.replace("#", "");
      const element = document.getElementById(cleanId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else if (id.includes("services")) window.location.href = `/${id}`;
  };

  return (
    <Menu ref={refMobileMenu} isOpen={isOpen}>
      <div className={"mobile-header-top"}>
        <Hamburger
          toggled={isOpen}
          size={20}
          toggle={setOpen}
          color={colors.silverText}
          direction={"right"}
        />
        {/* <ButtonSquare
          to="https://wa.me/17868331118"
          target="_blank"
          style={{
            padding: "8px 15px",
          }}
        >
          Call with us
        </ButtonSquare> */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <a
            href={"https://wa.me/17868331118"}
            target={"_blank"}
            rel="nofollow"
          >
            <img
              src={iconWhatsApp}
              alt={"Icon WhatsApp Devinity LLC"}
              style={{
                width: "32px",
                height: "30px",
              }}
            />
          </a>
          <GetQuoteButton
            onClick={() => dispatch(updateShowCalculator(true))}
            mobile
          >
            Get Quote
          </GetQuoteButton>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={"mobile-menu-list"}
          >
            <ul>
              {routes.map((route, idx) => {
                const isActive =
                  (idx === 0 && location?.pathname === "/") ||
                  (idx && location?.pathname?.includes(route.href));
                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    onClick={() => {
                      scrollTo(route.href);
                    }}
                  >
                    <Link
                      className={isActive ? "active" : ""}
                      onClick={() => setOpen((prev) => !prev)}
                      // @ts-ignore
                      to={
                        route.href.includes("services") ? undefined : route.href
                      }
                    >
                      {route.title}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </Menu>
  );
};

export default MobileMenu;

const Menu = styled.div<{ isOpen?: boolean }>`
  position: absolute;
  z-index: 1;

  ${({ isOpen }) =>
    isOpen &&
    css`
      background-color: black;
    `};

  .mobile-header-top {
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
  }

  .mobile-menu-list {
    background-color: black;

    ul {
      list-style: none;
      padding: 0;

      li {
        position: relative;
        padding: 25px;

        &:not(:last-child)::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          border-bottom: 1px solid #333;
        }

        a {
          color: #a7a7a7;

          font-family: ${fonts.oxanium};
          font-size: 18px;
          font-weight: 500;

          &.active {
            color: ${colors.green};
            font-weight: 500;
          }
        }
      }
    }
  }

  @media (min-width: 1271px) {
    display: none;
  }
`;
