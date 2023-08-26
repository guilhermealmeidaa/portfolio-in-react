import { useState, useEffect, forwardRef } from "react";
import { AboutNumber, AboutTitle } from "../about/styles";
import {
  Container,
  InfoContainer,
  InfoMain,
  State,
  StatesContainer,
  Text,
} from "./styles";
import { Info } from "./info";
import { AnimatePresence, motion } from "framer-motion";

interface ExperienceProps {
  ref?: string;
}

export const states = [
  {
    name: "MadeiraMadeira",
    cargo: "Dev Front-End Web/Mobile",
    time: "Jun 2022 - Atual",
    description: {
      0: "Optimization of company data collection.",
      1: "Maintenance and refactoring of legacy code.",
      2: "Implementing events in WEB (React) and APP (React Native).",
      3: "Working on Cross-Squad projects with many stacks.",
    },
    data: "Faço parte do time Dev Front-End e da squad de Analytics na MadeiraMadeira, um unicórnio brasileiro e uma das maiores lojas online especializadas em móveis e produtos para casa do Brasil. Trabalho diariamente com TypeScript, React e React Native, aplicando minha paixão por desenvolver soluções digitais de ponta. Faço parte do time Dev Front-End e da squad de Analytics na MadeiraMadeira, um unicórnio brasileiro e uma das maiores lojas online especializadas em móveis e produtos para casa do Brasil. Trabalho diariamente com TypeScript, React e React Native, aplicando minha paixão por desenvolver soluções digitais de ponta. Estou constantemente atualizando minhas habilidades e conhecimentos para acompanhar as últimas tendências e melhores práticas do setor.",
  },
  {
    name: "Eficaz",
    cargo: "Dev Fullstack",
    time: "Jan 2020 - Jun 2022",
    description: {
      0: "Creation of Landing Pages",
      1: "Maintenance of the web and mobile platform for students.",
      2: "Technical help for clients.",
      3: "Creation of an administrative system.",
    },
    data: "aaa",
  },
  {
    name: "UpBase",
    cargo: "Dev Front-End",
    time: "Mar 2022 - Jun 2022",
    description: {
      0: "Creation of Landing Pages",
      1: "Creation and maintenance of organizational systems.",
      2: ".NET in the Back-end",
      3: "Experience of direct contact with customers.",
    },
    data: "aaa",
  },
];

export const Experience = forwardRef(
  (props: ExperienceProps, ref: React.Ref<HTMLDivElement>) => {
    const [job, setJob] = useState("MadeiraMadeira");
    const [component, setComponent] = useState(<Info jobName={job} />);

    useEffect(() => {
      setComponent(<Info jobName={job} />);
    }, [job]);

    return (
      <Container ref={ref}>
        <AboutTitle style={{ marginBottom: 40 }}>
          <AboutNumber>02. </AboutNumber>Where I’ve Worked
        </AboutTitle>
        <InfoContainer>
          <StatesContainer>
            {states.map((state) => (
              <State
                onClick={() => setJob(state.name)}
                color={job === state.name ? "#42c6a7" : "#7c839c"}
                background={"transparent"}
              >
                <Text
                  style={{ backgroundColor: "transparent" }}
                  color={job === state.name ? "#42c6a7" : "#7c839c"}
                >
                  {state.name}
                </Text>
              </State>
            ))}
          </StatesContainer>
          <InfoMain>
            <AnimatePresence>
              <motion.div
                key={job}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {component}
              </motion.div>
            </AnimatePresence>
          </InfoMain>
        </InfoContainer>
      </Container>
    );
  }
);
