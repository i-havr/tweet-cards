import { Waves } from "../";

import * as SC from "./Footer.styled.jsx";

export const Footer = () => {
  return (
    <SC.Footer>
      <Waves />
      <SC.DeveloperContacts
        href="https://i-havr.github.io/portfolio-havrylov/"
        target="_blank"
      >
        © 2023 | Developed by Ihor Havrylov
      </SC.DeveloperContacts>
    </SC.Footer>
  );
};
