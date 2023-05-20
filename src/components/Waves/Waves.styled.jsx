import styled from "styled-components";

export const Waves = styled.svg`
  width: 100%;
  height: 140px;
  min-height: 100px;
  max-height: 150px;
`;

export const Parallax = styled.g`
  & > use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }

  & > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }

  & > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  & > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  & > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }

  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(85px, 0, 0);
    }
  }
`;
