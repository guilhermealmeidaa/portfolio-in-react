import styled from "./styles";
import { Header } from "../../components/header/header";
import { Main } from "../../components/main/main";
import { SideRight } from "../../components/side/side";
import { useRef } from "react";

export function Home() {
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const experienceRef = useRef<null | HTMLDivElement>(null);

  const handleClick = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    try {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <styled.Container>
        <Header
          handleClick={handleClick}
          refs={{
            aboutRef: aboutRef,
            experienceRef: experienceRef,
          }}
        />
        <Main aboutRef={aboutRef} experienceRef={experienceRef}></Main>
      </styled.Container>
    </>
  );
}
