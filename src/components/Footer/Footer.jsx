import * as SC from "./Footer.styled.jsx";

export default function Footer() {
  return (
    <SC.Footer>
      <SC.Waves
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <SC.Parallax>
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
        </SC.Parallax>
      </SC.Waves>
      <SC.DeveloperContacts
        href="https://i-havr.github.io/portfolio-havrylov/"
        target="_blank"
      >
        © 2023 | Developed by Ihor Havrylov
      </SC.DeveloperContacts>
    </SC.Footer>
  );
}
