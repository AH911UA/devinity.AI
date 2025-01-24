import styled, { keyframes } from "styled-components";

const glowingAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
`;

const Glowing = styled.div`
  position: ${({ position }) => position || "absolute"};
  width: ${({ width }) => width || "300px"};
  height: ${({ height }) => height || "300px"};
  top: ${({ top }) => top || "auto"};
  left: ${({ left }) => left || "auto"};
  right: ${({ right }) => right || "auto"};
  bottom: ${({ bottom }) => bottom || "auto"};
  border-radius: 50%;

  filter: ${({ blur }) => blur || "blur(150px)"};
  z-index: ${({ zIndex }) => zIndex || "-1"};
  background: radial-gradient(
    ellipse at center,
    rgba(0, 255, 0, 0.7) 0%,
    rgba(0, 128, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );

  animation: ${glowingAnimation} 10s infinite;
`;

export default Glowing;

export const GlowingContainer = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 100vw;
  height: max-content;
`;
