import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-use";
import { Link } from "gatsby";
import styled from "styled-components";

// redux
import { updateShowCalculator } from "../../state/actions";

// images
import logo from "../../images/svg/logoOnly.svg";
import iconLinkedin from "../../images/svg/brands/Linkedin_Silver.svg";
import iconWhatsApp from "../../images/whatsapp-icon.png";

// constants
import routes from "../../routes";

// styles
import { GetQuoteButton } from "./styled/GetQuoteButton";
import colors from "../colors";
import fonts from "../fonts";

const DesktopMenu: FunctionComponent = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  const scrollTo = (id: string) => {
    if (location.pathname === "/" && id.includes("services")) {
      const cleanId = id.replace("#", "");
      const element = document.getElementById(cleanId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else if (id.includes("services")) window.location.href = `/${id}`;
  };

  return (
    <Menu>
      <img src={logo} alt={"Logo Devinity LLC"} />

      <nav>
        <ul>
          {routes.map((route, idx) => {
            const isActive =
              (idx === 0 && location?.pathname === "/") ||
              (idx && location?.pathname?.includes(route.href));
            return (
              <li
                key={route.title}
                onClick={() => {
                  scrollTo(route.href);
                }}
              >
                <Link
                  className={isActive ? "active" : ""}
                  // @ts-ignore
                  to={route.href.includes("services") ? undefined : route.href}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  {route.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <SecondContainer>
        <a href={process.env.GATSBY_LINKEDIN} target={"_blank"} rel="nofollow">
          <img src={iconLinkedin} alt={"Icon Linkedin Devinity LLC"} />
        </a>
        <a href={"https://wa.me/17868331118"} target={"_blank"} rel="nofollow">
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
          style={{
            cursor: "pointer",
          }}
        >
          Get Quote
        </GetQuoteButton>
      </SecondContainer>
    </Menu>
  );
};

export default DesktopMenu;

const Menu = styled.header`
  position: absolute;
  z-index: 1;

  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  // background: ${colors.black};

  > img {
    padding: 25px 34px;
  }

  > nav {
    flex: 1;

    ul {
      display: flex;
      flex-direction: row;
      list-style: none;
      gap: 55px;

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

    @media (min-width: 1450px) {
      padding-left: calc((100% - 1200px - 250px) / 2);
    }
  }

  @media (max-width: 1270px) {
    display: none;
  }
`;

const SecondContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 40px;
`;
