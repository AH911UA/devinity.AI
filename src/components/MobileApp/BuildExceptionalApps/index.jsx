import React from "react";
import styled from "styled-components";
import ButtonSquare from "../../UI/ButtonSquare";
import fonts from "../../fonts";
import Image from "../../UI/Image";

const BuildExceptionalApps = ({ isWhatsApp = false }) => {
  return (
    <BuildExceptionalAppsContainer
      style={{
        // TODO maybe will need to feature this component
        display: "none",
      }}
    >
      <div>
        <h2>Build Exceptional Apps with Devinity.AI LLC</h2>
        <p>
          Devinity.AI LLC delivers top-tier app development services to craft
          custom applications that align with your unique business goals. Our
          adept developers harness Java, JavaScript, Python, C#, and C++ to
          develop high-performance, scalable, secure, and intuitive
          applications. We engage with you to deeply understand your needs and
          provide solutions that not only meet but exceed your expectations,
          propelling you to success in the ever-changing digital world.
          <br />
          Application Development Services Advanced Enterprise Development
          Solutions We offer comprehensive development services that span the
          entire enterprise app development spectrum, constructing applications
          that offer a comprehensive, engaging user experience. These tools
          enable seamless management of ERP, CRM, SCM, and overall business
          aims.
          <br />
          For the Workforce We build robust, feature-packed employee-centric
          apps for efficient project management, facilitating smooth tracking
          and assignment of projects, statuses, and tasks.
          <br />
          For Departments Our tailored Department-Level Applications come with
          modules for streamlining internal processes, communication,
          accounting, sales, and marketing, enhancing departmental productivity.
          <br />
          For the Organization We specialize in creating interconnected
          Company-Level Applications, forming a unified platform for employees
          to access vital organizational resources such as databases and
          documents.
          <br />
          For Startups We provide agile app development services that cater to
          the entrepreneurial spirit of startups. Our skilled developers use
          Java, JavaScript, Python, C#, and C++, creating scalable, secure, and
          captivating apps designed for the unique challenges and opportunities
          of new ventures. Collaborating closely with founders, we ensure that
          every solution we deliver is customized to propel innovation, engage
          users, and achieve market success.
        </p>

        <div className={"button"}>
          <ButtonSquare
            href={process.env.GATSBY_WHATSAPP}
            target={"_blank"}
            style={{
              gap: 10,
            }}
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
          filename={"mobile-build-exceptional-apps.png"}
          alt={"Cross-Platform Mobile Development Devinity LLC"}
          style={{ maxWidth: 467 }}
          styleImg={{ maxWidth: 467 }}
        />
      </div>
    </BuildExceptionalAppsContainer>
  );
};

export default BuildExceptionalApps;

const BuildExceptionalAppsContainer = styled.div`
  width: calc(100% - 200px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 100px 0 50px;

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
`;
