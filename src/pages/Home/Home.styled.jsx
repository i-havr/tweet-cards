import styled from "styled-components";
import { Link } from "react-router-dom";

export const Home = styled.main`
  display: block;
  width: 100%;
  min-height: 100%;
`;

export const Section = styled.section`
  display: block;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 80%;
  min-height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40vh;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 14px;
`;

export const LinkWrapper = styled(Link)`
  background: linear-gradient(
    114.99deg,
    #281d44 -0.99%,
    #6e35f4 54.28%,
    #3e0eaf 78.99%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover,
  &:focus {
    border-bottom: 3px solid #ebd8ff;
    cursor: pointer;
  }
`;
