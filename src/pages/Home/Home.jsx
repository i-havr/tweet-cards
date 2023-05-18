import * as SC from "./Home.styled.jsx";

export default function Home() {
  return (
    <SC.Home>
      <SC.Section>
        <SC.Container>
          <SC.Title>
            Hi there!{" "}
            <span role="img" aria-label="wawing hand">
              👋
            </span>
          </SC.Title>
          <h2>
            How about some{" "}
            <SC.LinkWrapper to={"/tweets"}>tweets</SC.LinkWrapper>?
          </h2>
        </SC.Container>
      </SC.Section>
    </SC.Home>
  );
}
