import React from "react";
import Video from "gatsby-video/lib/Video";
import styled from "styled-components";
import isIOs from "../../utils/isIOs";

import imageIphoneBorder from "../../images/iphoneBorder.png";

const VideoComponent = ({
  image,
  videoOrigin,
  data,
  height = "500px",
  width = "100%",
  enableBorder = false,
}) => {
  const findVideo = data?.allVideoFfmpeg?.edges?.find(
    (item) => item?.node?.mp4?.originalName === videoOrigin
  );

  return (
    <VideoBlock width={width} height={height}>
      {enableBorder && (
        <img src={imageIphoneBorder} className={"iphoneBorder"} />
      )}

      {typeof window !== "undefined" && isIOs() ? (
        <picture>
          <source srcSet={findVideo?.node?.mp4?.src} type="video/mp4" />
          <img
            src={image}
            style={{
              width: width,
              height: height,
              objectFit: "cover",
            }}
            alt={"Testimonials Devinity LLC"}
          />
        </picture>
      ) : (
        <Video
          poster={image}
          autoPlay
          muted
          loop
          sources={[findVideo?.node?.webm, findVideo?.node?.mp4]}
        />
      )}
    </VideoBlock>
  );
};

export default VideoComponent;

const VideoBlock = styled.div`
  position: relative;

  > div > div,
  picture {
    height: calc(${({ height }) => height}) !important;

    > div {
      height: calc(${({ height }) => height}) !important;
      video {
        width: ${({ width }) => width} !important;
        object-fit: cover;
      }
    }
  }

  > div > div {
    padding-top: 0 !important;
  }

  .iphoneBorder {
    position: absolute;
    text-align: center;
    z-index: 1;
    left: 50%;
    top: 0;
    transform: translate(-50%, 0%);
  }
`;
