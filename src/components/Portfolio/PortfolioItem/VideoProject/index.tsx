import React, { FunctionComponent, useRef } from "react";

// components
import HeadingText from "../../../UI/HeadingText";
import TestimonialsSliderProject from "../../../Slider/TestimonialsSliderProject";

type VideoProjectProps = {
  videos: {
    alt: string;
    id: number;
    url: string;
    image: string;
  }[];
};

const VideoProject: FunctionComponent<VideoProjectProps> = ({ videos }) => {
  const arrowLeftRef = useRef(null);
  const arrowRightRef = useRef(null);
  if (videos.length === 0) return null;
  return (
    <>
      <HeadingText
        //@ts-ignore
        padding={"70px 0 25px"}
        paddingMobile={"20px 0 0"}
        maxWidth={"auto"}
      >
        Project Media:
      </HeadingText>
      <TestimonialsSliderProject
        arrowLeftRef={arrowLeftRef}
        arrowRightRef={arrowRightRef}
        listVideos={videos}
      />
    </>
  );
};

export default VideoProject;
