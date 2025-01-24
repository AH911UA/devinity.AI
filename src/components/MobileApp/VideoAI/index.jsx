import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

// components
import ButtonSquare from "../../UI/ButtonSquare";
import VideoComponent from "../../VideoComponent";
import Image from "../../UI/Image";

// images
import imageVideo from "../../../images/FestoVideoAI.jpg";

// styles
import fonts from "../../fonts";

const VideoAI = ({ type, isWhatsApp }) => {
  const dataVideos = useStaticQuery(
    graphql`
      query {
        allVideoFfmpeg {
          edges {
            node {
              webm: transcode(
                outputOptions: ["-crf 20", "-b:v 0"]
                maxWidth: 900
                maxHeight: 480
                fileExtension: "webm"
                codec: "libvpx-vp9"
              ) {
                width
                src
                presentationMaxWidth
                presentationMaxHeight
                originalName
                height
                fileExtension
                aspectRatio
              }
              mp4: transcode(
                maxWidth: 900
                maxHeight: 480
                fileExtension: "mp4"
                codec: "libx264"
                audioCodec: "aac"
              ) {
                width
                src
                presentationMaxWidth
                presentationMaxHeight
                originalName
                height
                fileExtension
                aspectRatio
              }
            }
          }
        }
      }
    `
  );

  if (type === "devinity") {
    return (
      <VideoAIContainer>
        <div>
          <p>
            At Devinity.AI | Mobile, Web and AI Developers , we excel in AI
            implementation, creating innovative and customized solutions that
            align with your business goals. One standout example of our
            capabilities is MYND, a cutting-edge meditation and AI psychologist
            app.
            <br />
            MYND revolutionizes the user experience by generating personalized
            meditations based on individual prompts, moods, and goals. The AI
            psychologist component offers real-time counseling and advice,
            tailored to the user’s mood, responses, and unique circumstances.
            This dynamic interaction ensures a deeply personalized and effective
            mental health support system.
            <br />
            To achieve success we have leveraged a variety of advanced
            technologies and custom libraries. For instance, we utilized React
            Native for the front end, Node.Js for backend, Eleven Labs TTS,
            OpenAI LLM, WebSockets, and many other libraries and technologies.
            Additionally, we created our own custom libraries to ensure seamless
            and efficient performance.
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
          <VideoComponent
            image={imageVideo}
            videoOrigin={"mobile-mynd.mov"}
            data={dataVideos}
            height={"700px"}
            width={"auto"}
            enableBorder={true}
          />
        </div>
      </VideoAIContainer>
    );
  }

  return (
    <VideoAIContainer>
      <div>
        <h2>Transform Your Business with Custom App Development</h2>
        <p>
          We deliver custom apps that align with your business goals. Our
          skilled developers use Java, JavaScript, Python, C#, and C++ to build
          high-performance, scalable, and secure applications. We work closely
          with you to understand your needs and deliver solutions that exceed
          expectations, leveraging technologies like React Native and the MERN
          stack for efficient development.
          <br />
          We build advanced enterprise solutions that enhance user experience
          and streamline business operations, including ERP, CRM, SCM, and more.
          <br />
          Our employee-centric apps improve project management, making it easy
          to track and assign tasks efficiently.
          <br />
          We develop department-specific apps to streamline processes,
          communication, accounting, sales, and marketing, boosting
          productivity.
          <br />
          Our company-level apps connect your team to essential resources like
          databases and documents, creating a unified platform.
          <br />
          We offer agile app development tailored for startups, using Java,
          JavaScript, Python, C#, and C++ to create scalable, secure, and
          engaging apps. We work with founders to deliver innovative solutions
          that drive user engagement and market success.
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
        <VideoComponent
          image={imageVideo}
          videoOrigin={"FestoAIDemo.MOV"}
          data={dataVideos}
          height={"700px"}
          width={"auto"}
          enableBorder={true}
        />
      </div>
    </VideoAIContainer>
  );
};

export default VideoAI;

const VideoAIContainer = styled.div`
  width: calc(100% - 200px);
  display: flex;
  flex-direction: row-reverse;
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
    display: flex;

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
