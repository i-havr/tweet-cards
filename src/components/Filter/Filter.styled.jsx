import styled from "styled-components";

export const FilterWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const DropDownContent = styled.div`
  position: absolute;
  display: none;
  top: 0px;
  left: 100%;
  min-width: 120px;
  border-radius: 10.3108px;
  background-color: #f9f9f9;
  box-shadow: 2px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  z-index: 2;
`;

export const DropDownContentLink = styled.a`
  display: block;
  color: #373737;
  padding: 12px 16px;
  font-size: 12px;
  line-height: 1.22;
  text-transform: uppercase;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: rgb(92, 211, 168);
    cursor: pointer;
  }
`;
