import React, { FunctionComponent, useEffect, useState } from "react";
import { Link } from "gatsby";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";

// components
import ModalCalculator from "../UI/Modal/Calculator";
import ModalFeedback from "../UI/Modal/Feedback";

// others
import { routesOther } from "../../routes";

// images
import logo from "../../images/svg/logoOnly.svg";
import iconWhatsApp from "../../images/svg/socials/whatsAppGreen.svg";
import iconWhatsAppBlack from "../../images/svg/socials/whatsAppBlack.svg";
import iconSocialInstagram from "../../images/svg/socials/insta.svg";
// import iconSocialFacebook from "../../images/svg/socials/face.svg";
import iconSocialLinkedin from "../../images/svg/socials/linked.svg";

import iconPortfolioFesto from "../../images/brands/brand_festo.png";
import iconPortfolioFestoWeb from "../../images/brands/brand_festo_web.png";
import iconPortfolioCargo from "../../images/brands/brand_cargo.png";

import planetBannerLeft from "../../images/planet-green-left.png";
import planetBannerRight from "../../images/planet-green-right.png";
import iconPreloader from "../../images/gif/loader-black.gif";
import ufoImg from "../../images/blog/ufo.png";

// styles
import FooterContainer from "./styled";
import { useLocation } from "react-use";

const Footer: FunctionComponent = () => {
  const [emailUser, setEmailUser] = useState("");
  const [loader, setLoader] = useState(false);

  const [isUfo, setIsUfo] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsUfo(!!location.pathname?.includes('blog'));
  }, [location])


  const onSubmit = async () => {
    if (loader) return;

    setLoader(true);

    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailUser)) {
        toast.error("Please enter a valid email address", {
          position: 'bottom-left',
          autoClose: 5000,
        });
        return;
      }

      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: "Email Subscribe",
          email: emailUser,
          phone: "",
          country_code: "",
        }),
      });

      if (response.ok) {
        toast.success("The message was not sent, try again", {
          position: 'bottom-left',
          autoClose: 5000,
        });
        setEmailUser("");
      } else {
        toast.error("The message was not sent, try again", {
          position: 'bottom-left',
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error("Error:", error);

      toast.error("The message was not sent, try again", {
        position: 'bottom-left',
        autoClose: 5000,
      });
    } finally {
      setLoader(false);
    }
  };

  return (
    <FooterContainer>
     {isUfo && <div className="img_blog">
        <img src={ufoImg} alt="ufo" />
      </div>}
      <div className={"banner"}>
        <div>
          <h2>READY TO TRANSFORM YOUR IDEAS INTO TECH SOLUTIONS?</h2>

          <div className={"buttons"}>
            <Link to={"/portfolio"}>Open Portfolio</Link>

            <a
              href={process.env.GATSBY_WHATSAPP}
              target={"_blank"}
              rel="nofollow"
            >
              <img src={iconWhatsAppBlack} alt={"icon whatsapp Devinity LLC"} />
              Whatsapp
            </a>
          </div>

          <img
            className={"planet-left"}
            alt={"Planet Green Devinity LLC"}
            src={planetBannerLeft}
          />
          <img
            className={"planet-right"}
            alt={"Planet Green Devinity LLC"}
            src={planetBannerRight}
          />
        </div>
      </div>

      <div className={"general"}>
        <img src={logo} alt={"Logo Devinity LLC"} />

        <div className={"blocks"}>
          <div className={"left"}>
            <p>Follow us</p>

            <div className={"socials"}>
              <a
                href={process.env.GATSBY_INSTAGRAM}
                target={"_blank"}
                rel="nofollow"
              >
                <img
                  src={iconSocialInstagram}
                  alt={"Icon Instagram Devinity LLC"}
                />
              </a>

              {/*<a>*/}
              {/*  <img src={iconSocialFacebook}/>*/}
              {/*</a>*/}

              <a
                href={process.env.GATSBY_LINKEDIN}
                target={"_blank"}
                rel="nofollow"
              >
                <img
                  src={iconSocialLinkedin}
                  alt={"Icon Linkedin Devinity LLC"}
                />
              </a>
            </div>
          </div>

          <div className={"center"}>
            <p>Contact Via</p>

            <a
              href={process.env.GATSBY_WHATSAPP}
              target={"_blank"}
              rel="nofollow"
            >
              <img src={iconWhatsApp} alt={"Icon WhatsApp Devinity LLC"} />{" "}
              WhatsApp
            </a>

            <a className={"address"}>
              30 N Gould St Ste R, Sheridan, WY 82801, USA
            </a>
          </div>

          <div className={"right"}>
            <p>Email Us</p>

            <div className={"input-email"}>
              <input
                type={"email"}
                placeholder={"Email Address"}
                value={emailUser}
                onChange={(e) => setEmailUser(e.target.value)}
              />

              <button onClick={onSubmit}>
                Submit
                {loader && (
                  <img
                    src={iconPreloader}
                    height={18}
                    style={{ marginLeft: 5 }}
                    alt={"Icon Preloader Devinity LLC"}
                  />
                )}
              </button>
            </div>

            <div className={"logos"}>
              <img
                src={iconPortfolioFesto}
                alt={"Logo Festo App Devinity LLC"}
              />
              <img
                src={iconPortfolioFestoWeb}
                alt={"Logo Festo Web Devinity LLC"}
              />
              <img src={iconPortfolioCargo} alt={"Logo Cargo Devinity LLC"} />
            </div>
          </div>
        </div>

        <div className={"bottom"}>
          <div>
            <div>
              <p>
                Copyright &copy; 2022-{new Date().getFullYear()} All Rights
                Reserved
              </p>
            </div>

            <div>
              <ul>
                <Link to={routesOther.termsOfService || ''}>
                  <li>Terms & Conditions</li>
                </Link>

                <Link to={routesOther.privacyPolicy || ''}>
                  <li>Privacy policy</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ModalCalculator />
      <ModalFeedback />

      <ToastContainer theme="dark"/>
    </FooterContainer>
  );
};

export default Footer;
