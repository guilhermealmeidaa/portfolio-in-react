import { useRef } from "react";
import { About } from "./about/about";
import { Experience } from "./experience";
import { Container } from "./styles";
import { Title } from "./titlemain/title";

interface MainProps {
  aboutRef: React.MutableRefObject<HTMLDivElement | null>;
  experienceRef: React.MutableRefObject<HTMLDivElement | null>;
}

export function Main(props: MainProps) {
  return (
    <Container>
      <Title />
      <About ref={props.aboutRef} />
      <Experience ref={props.experienceRef} />
    </Container>
  );
}
