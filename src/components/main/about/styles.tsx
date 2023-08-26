import styled, { keyframes } from "styled-components";
import { BiRightArrow } from "react-icons/bi";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  margin: auto;
  margin-top: 200px;
  margin-bottom: 290px;
  @media only screen and (max-width: 768px) {
    margin-top: 290px;
  }
`;
export const ContainerAboutAll = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const AboutTitle = styled.text`
  font-size: 25px;
  color: #ccd6f6;
  font-family: "Inter", sans-serif;
  font-weight: 800;
`;
export const AboutNumber = styled.text`
  font-size: 20px;
  font-family: "Fira Code", monospace;
  color: #42c6a7;
`;
export const ContainerAbout = styled.div`
  display: ${(props) => (props.onScroll ? "nome" : "flex")};
  flex-direction: column;
  justify-content: space-between;
`;
export const ContainerAboutLeft = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;
export const ContainerAboutText = styled.text`
  font-size: 16px;
  line-height: 27px;
  color: #8892b0;
  margin-bottom: 10px;
  margin-right: 40px;
  font-family: "Inter", sans-serif;
`;
export const ContainerAboutRight = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  @media only screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;
export const HeaderImage = styled(motion.img)`
  margin-top: 40px;
  width: 300px;
  height: 300px;
  border-radius: 5px;
  z-index: 2;
  filter: opacity(0.7) drop-shadow(0 0 0 #42c6a7);
  &:hover {
    filter: opacity(1);
    /* transition: 200ms; */
  }
  @media only screen and (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

export const BackgroundImage = styled(motion.div)`
  margin-top: 40px;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: #42c6a7;
  border-radius: 5px;
`;

export const ModalImage = styled(motion.div)`
  margin-top: 50px;
  margin-left: 15px;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  border: 2px solid #42c6a7;
  border-radius: 5px;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10 bpx;
  /* flex-wrap: wrap; */
  @media only screen and (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: 7px;
  }
`;
export const SkillsImage = styled(BiRightArrow)`
  color: #42c6a7;
  margin-right: 10px;
  font-size: 10px;
`;
export const SkillsTitle = styled.text`
  font-size: 12px;
  color: #ccd6f6;
  font-family: "Fira Code", monospace;
  margin-right: 50px;
`;
