import styled, { keyframes } from "styled-components";
import { BiRightArrow } from "react-icons/bi";

const rotate = keyframes`
  from {
    margin-bottom: 10%;
    opacity: 0;
    width: auto;
  }
  to {
    margin-bottom: 15px;
    opacity: 1;
    width: auto;
  }
`;


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100vh;
    margin: auto;
    margin-top: 200px;
    animation: ${rotate} 1200ms ease-in;
    
    `;
export const ContainerAboutAll = styled.div`
    display: flex;
    flex-direction: row;
`;
export const AboutTitle = styled.text`
    font-size: 25px;
    color: #ccd6f6;
    font-family: 'Inter', sans-serif;
    font-weight: bold,
    `;
export const AboutNumber = styled.text`
    font-size: 20px;    
    font-family: 'Fira Code', monospace;;
    color: #42c6a7;
    `;
export const ContainerAbout = styled.div`
    display: ${props => props.onScroll ? 'nome' : 'flex'};
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
    font-family: 'Inter', sans-serif;
`;
export const ContainerAboutRight = styled.div`
    display: flex;

`;
export const HeaderImage = styled.img`
    margin-top: 40px;
    width: 300px;
    height: 300px;
    border-radius: 5px;
    filter: opacity(0.4) drop-shadow(0 0 0 #42c6a7); 
    &:hover {
        filter: opacity(1);
        transition: 200ms;
    }
  `;
export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10 bpx;
`;
export const SkillsImage = styled(BiRightArrow)`
    color: #42c6a7;
    margin-right: 10px;
    font-size: 10px;

`;
export const SkillsTitle = styled.text`
    font-size: 12px;
    color: #ccd6f6;
    font-family: 'Fira Code', monospace;
    margin-right: 50px;
`;