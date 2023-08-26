import { motion } from "framer-motion";
import styled from "styled-components";
export interface StateProps {
  background: string;
  color: string;
}

export const Container = styled.div`
  width: 70%;
  height: 40vh;
  /* background-color: red; */
  margin: auto;
  display: flex;
  flex-direction: column;
`;
export const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  /* background-color: aliceblue; */
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const InfoMain = styled(motion.div)`
  width: 60%;
  height: 10%;
  /* background-color: aliceblue;  */
  @media only screen and (max-width: 768px) {
    width: 120%;
  }
`;
export const InfoCargo = styled.text`
  font-family: "Fira Code", monospace;
`;

export const StatesContainer = styled.div`
  width: 50%;
  height: 40%;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    flex-direction: row;
    width: 120%;
    height: 90px;
  }
`;

export const State = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: StateProps) => props.background};
  cursor: pointer;
  border-left: 2.3px solid #42c6a7;
  /* border-left: 2.3px solid #42c6a7; */
  border-color: ${(props) => props.color};
  &:hover {
    background-color: #113140;
  }
  @media only screen and (max-width: 768px) {
    border-left: none;
    border-bottom: 2.3px solid #42c6a7;
    height: 50%;
  }
`;
export const Text = styled.text`
  color: ${(props) => props.color};
  font-family: "Fira Code", monospace;
  font-size: 14px;
`;
