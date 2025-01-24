import React from "react";
import styled from "styled-components";
import ButtonSquare from "../../UI/ButtonSquare";
import fonts from "../../fonts";
import Label from "../../UI/Label";
import Image from "../../UI/Image";

import CreatingWebsite1 from "../../../images/web-page/CreatingWebsite/CreatingWebsite1.png";
import CreatingWebsite2 from "../../../images/web-page/CreatingWebsite/CreatingWebsite2.png";
import CreatingWebsite3 from "../../../images/web-page/CreatingWebsite/CreatingWebsite3.png";
import CreatingWebsite4 from "../../../images/web-page/CreatingWebsite/CreatingWebsite4.png";
import CreatingWebsite5 from "../../../images/web-page/CreatingWebsite/CreatingWebsite5.png";

const CreatingWebsite = ({ isWhatsApp }) => {
  return (
    <CreatingWebsiteContainer>
      <div>
        <Label margin={"120px 0 10px"}>Creating a Website</Label>

        <p>
          There are many ways to create a website. You can hire a web developer
          to create a custom website for you, or you can use a website builder
          to create a website yourself. Website builders are often easy to use
          and can be a good option for beginners.
        </p>
      </div>

      <div className={"information"}>
        <div>
          <h2>
            Types of <span>Websites</span>
          </h2>

          <p>There are many different types of websites, including:</p>

          <ul>
            <li>
              <div>
                <img
                  src={CreatingWebsite1}
                  alt={"Develop Website Corporate websites Devinity LLC"}
                />
              </div>

              <div>
                <h4>Corporate websites</h4>

                <p>
                  We provide server solutions with advanced cloud integration
                  and microservices architecture, enabling scalable and robust
                  backend support for high-availability systems.
                </p>
              </div>
            </li>

            <li>
              <div>
                <img
                  src={CreatingWebsite2}
                  alt={"Develop Website Ecommerce websites Devinity LLC"}
                />
              </div>

              <div>
                <h4>Ecommerce websites</h4>

                <p>
                  We provide server solutions with advanced cloud integration
                  and microservices architecture, enabling scalable and robust
                  backend support for high-availability systems.
                </p>
              </div>
            </li>

            <li>
              <div>
                <img
                  src={CreatingWebsite3}
                  alt={"Develop Website Blogs Devinity LLC"}
                />
              </div>

              <div>
                <h4>Blogs</h4>

                <p>
                  We provide server solutions with advanced cloud integration
                  and microservices architecture, enabling scalable and robust
                  backend support for high-availability systems.
                </p>
              </div>
            </li>

            <li>
              <div>
                <img
                  src={CreatingWebsite4}
                  alt={"Develop Website Portfolio websites Devinity LLC"}
                />
              </div>

              <div>
                <h4>Portfolio websites</h4>

                <p>Websites that showcase a person's work or skills.</p>
              </div>
            </li>

            <li>
              <div>
                <img
                  src={CreatingWebsite5}
                  alt={"Develop Website Social Media Devinity LLC"}
                />
              </div>

              <div>
                <h4>Social Media</h4>

                <p>
                  Websites that allow users to connect with friends and family
                  and share information.
                </p>
              </div>
            </li>
          </ul>

          <p>
            Websites are an essential part of the modern world. They provide a
            way for businesses to connect with customers, organizations to share
            their mission, and individuals to express themselves.
          </p>

          <div className={"button"}>
            <ButtonSquare
              href={process.env.GATSBY_WHATSAPP}
              target={"_blank"}
              style={{ gap: 10 }}
            >
              Request a Call
              {isWhatsApp && (
                <Image
                  filename={"whatsapp-icon.png"}
                  alt={"WhatsApp"}
                  style={{
                    width: 20,
                    height: 20,
                    marginBottom: 2,
                  }}
                />
              )}
            </ButtonSquare>
          </div>
        </div>

        <div>
          <Image
            filename={"CreatingWebsite.png"}
            alt={"Creating a Website with Devinity LLC"}
            style={{ maxWidth: 467 }}
            styleImg={{ maxWidth: 467 }}
          />
        </div>
      </div>
    </CreatingWebsiteContainer>
  );
};

export default CreatingWebsite;

const CreatingWebsiteContainer = styled.div`
  > div:first-child {
    h2 {
      margin-bottom: 10px;
    }

    p {
      color: #fff;
      text-align: center;
      font-size: 1em;
      font-weight: 400;
      line-height: 28px;
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 25px;
    }
  }

  .information {
    width: calc(100% - 100px);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    gap: 50px;
    padding: 50px 50px 50px;

    > div {
      flex: 1;
    }

    > div:first-child {
      h3 {
        color: #fff;
        font-family: ${fonts.oxanium};
        font-size: 24px;
        font-weight: 700;
        line-height: 70px;

        margin: 0;

        span {
          color: #62ed2e;
        }
      }

      h2 {
        color: #fff;
        font-size: 40px;
        font-weight: 700;

        margin: 0 0 20px;

        span {
          color: #62ed2e;
        }
      }

      p {
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
        margin-bottom: 35px;

        br {
          display: block;
          content: "";
          margin-bottom: 25px;
        }
      }

      ul {
        padding: 0;

        li {
          display: flex;
          flex-direction: row;
          gap: 15px;

          img {
            width: 25px;
          }

          > div:nth-child(2) {
            h4 {
              color: #fff;
              text-align: left;
              font-family: ${fonts.oxanium};
              font-size: 20px;
              font-weight: 700;
              margin: 0 0 10px;
              padding-top: 5px;
            }

            p {
              color: #fff;
              text-align: left;
              font-size: 1em;
              font-weight: 400;
              line-height: 25px;
            }
          }
        }
      }
    }

    > div:nth-child(2) {
      text-align: center;

      .gatsby-image-wrapper {
        margin: 0 auto;
        min-width: 250px;
      }
    }

    @media (max-width: 1100px) {
      width: calc(100% - 40px);
      flex-direction: column;

      gap: 0;
      padding: 30px 20px;

      > div:first-child {
        margin-bottom: 35px;

        h3 {
          font-size: 1em;
        }

        h2 {
          font-size: 25px;
        }

        p {
          font-size: 1em;
          line-height: 22px;
        }
      }
    }
  }
`;
