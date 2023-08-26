import styled, { css } from "styled-components";
import { motion } from "framer-motion";
interface ContainerProps {
  isSelected: boolean;
}

export const Container = styled(motion.div)<ContainerProps>`
  width: 70%;
  height: 40vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const TitleText = styled.text`
  font-size: 17px;
  color: #ccd6f6;
  font-family: "Fira Code", monospace;
  font-weight: 600;
  margin-bottom: 5px;
`;
export const TimeText = styled.text`
  font-size: 12px;
  font-family: "Fira Code", monospace;
  color: #8892b0;
  margin-bottom: 12px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const DescriptionItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const DescriptionText = styled.text`
  font-size: 13px;
  font-family: "Fira Code", monospace;
  color: #8892b0;
  margin-bottom: 7px;
  max-width: 90%;
  @media only screen and (max-width: 768px) {
    max-width: 70%;
  }
`;

export const Card = styled(motion.div)`
  width: 100%;
  height: 100%;
  /* border: solid 2px #073043; */
  background-color: #112140;
  border-radius: 20px;
`;

export const CardHeader = styled(motion.div)`
  width: 100%;
  height: 8%;
  margin: auto;
  display: flex;
  align-items: center;
  background-color: #112140;
  justify-content: end;
  border-radius: 15px;
`;

export const HeaderButton = styled(motion.div)`
  border: solid 0.5px #42c6a7;
  padding: 10px;
  color: #42c6a7;
  border-radius: 50%;
  margin-right: 20px;
  font-family: "Fira Code", monospace;
  font-size: 11px;
  font-weight: bold;
  background-color: #112140;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  cursor: pointer;
  &:hover {
    background-color: #0a4360;
    transition: 0.3s;
  }
`;

export const CardMain = styled(motion.div)`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: #112140;
  justify-content: center;
  /* background-color: red; */
`;

export const CardTitle = styled(motion.text)`
  background-color: #112140;
  font-size: 22px;
  color: #ccd6f6;
  font-family: "Fira Code", monospace;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const CardTime = styled(motion.text)`
  font-size: 15px;
  font-family: "Fira Code", monospace;
  color: #8892b0;
  margin-bottom: 12px;
  background-color: #112140;
  margin-top: 2%;
  margin-bottom: 20px;
`;

export const CardDescriptionItem = styled(motion.text)`
  display: flex;
  flex-direction: row;
  gap: 10px;
  background-color: #112140;
`;

export const CardDescription = styled(motion.text)`
  font-size: 15px;
  font-family: "Fira Code", monospace;
  color: #8892b0;
  margin-bottom: 7px;
  max-width: 90%;
  background-color: #112140;
`;

export const CardInfo = styled(motion.text)`
  font-size: 15px;
  font-family: "Fira Code", monospace;
  color: #6c7280;
  margin-bottom: 7px;
  font-weight: 600;
  max-width: 90%;
  background-color: #112140;
  margin-top: 20px;
`;
