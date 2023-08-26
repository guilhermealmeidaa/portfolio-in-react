import {
  AboutNumber,
  AboutTitle,
  BackgroundImage,
  Container,
  ContainerAbout,
  ContainerAboutAll,
  ContainerAboutLeft,
  ContainerAboutRight,
  ContainerAboutText,
  HeaderImage,
  ModalImage,
  SkillsContainer,
  SkillsImage,
  SkillsTitle,
} from "./styles";
import eu from "../../../assets/euu.jpg";
import { forwardRef, useEffect, useState } from "react";
import React from "react";
import { AnimatePresence } from "framer-motion";

interface AboutProps {
  label?: string;
}

export const variantes = {
  variantA: { x: 0, y: 0 },
  variantB: { x: -4, y: -4 },
  variantC: { x: -4, y: -4 },
  variantD: { x: 3, y: 3 },
};

export const About = forwardRef(
  (props: AboutProps, ref: React.Ref<HTMLDivElement>) => {
    const [onHover, setOnHover] = useState<boolean>(false);
    const techIveWork = [
      {
        name: "Typescript",
      },
      {
        name: "React.JS",
      },
      {
        name: "React Native",
      },
    ];
    return (
      <Container ref={ref}>
        <ContainerAbout>
          <AboutTitle>
            <AboutNumber>01. </AboutNumber>About me
          </AboutTitle>
          <ContainerAboutAll>
            <ContainerAboutLeft>
              <ContainerAboutText>
                Hello, my name is Guilherme. My interest in web development
                started right after the pandemic, when I had an endless college
                vacation and ventured into totally random subjects, like
                gastronomy. Fortunately, I also found the development area,
                which I have been passionate about ever since.
              </ContainerAboutText>
              <ContainerAboutText>
                Moving forward to today, I had the opportunity to work in some
                start-up's. Among them, MadeiraMadeira, the company where I work
                today in the development team in the Front-End area. My main
                objectives today are based on improving my knowledge and
                developing more and more autonomy.
              </ContainerAboutText>
              <ContainerAboutText>
                I also participated in the robotics team at Universidade Federal
                do ABC, where I fell in love with programming and vibrated a lot
                in several competitions.
              </ContainerAboutText>
              <ContainerAboutText>
                Here are a few technologies I’ve been working with recently:
              </ContainerAboutText>
              <SkillsContainer>
                {techIveWork.map((tech) => (
                  <div>
                    <SkillsImage /> <SkillsTitle>{tech.name}</SkillsTitle>
                  </div>
                ))}
              </SkillsContainer>
            </ContainerAboutLeft>
            <ContainerAboutRight>
              <AnimatePresence>
                <HeaderImage
                  src={eu}
                  variants={variantes}
                  initial={variantes.variantA}
                  whileHover={variantes.variantC}
                  onHoverStart={() => setOnHover(true)}
                  onHoverEnd={() => setOnHover(false)}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>
              <AnimatePresence>
                <BackgroundImage
                  variants={variantes}
                  initial={!onHover ? variantes.variantA : variantes.variantC}
                  animate={!onHover ? variantes.variantA : variantes.variantC}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>
              <ModalImage
                initial={variantes.variantC}
                animate={!onHover ? { x: 0, y: 0 } : { x: 5, y: 5 }}
              />
            </ContainerAboutRight>
          </ContainerAboutAll>
        </ContainerAbout>
      </Container>
    );
  }
);
