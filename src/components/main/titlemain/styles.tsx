import styled, { keyframes } from "styled-components";
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
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding-bottom: 60px;
        margin-bottom: 90px;
    `;
    export const ContainerTitle = styled.div`
        width: 80%;
        margin: 0 auto;
    `;
    export const ContainerText = styled.div`
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;

    `;
    export const TextApresentation = styled.h3`
        font-size: 1rem;
        font-weight: 400;
        color: #42c6a7;
        font-family: 'Fira Code', monospace;
        margin-bottom: 17px;
        animation: ${rotate} 1000ms ease-in;
    `;
    export const TextName = styled.h1`
        font-size: 4rem;
        font-weight: bold;
        color: #ccd6f6;
        margin-bottom: 12px;
        font-family: 'Inter', sans-serif;
        animation: ${rotate} 1200ms ease-in;

        /* opacity: 0;
        transition: opacity 500ms ease-in */
    `;
    export const TextSubname = styled.h1`
        font-size: 3.5rem;
        font-weight: bold;
        color: #8892b0;
        font-family: 'Inter', sans-serif;
        margin-bottom: 17px;
        animation: ${rotate} 1400ms ease-in;

    `;
    export const TextParagraph = styled.p`
        font-size: 1rem;
        font-weight: 200;
        color: #8892b0;
        font-family: 'Inter', sans-serif;
        max-width: 50%;
        line-height: 25px;
        animation: ${rotate} 1600ms ease-in;

    `;
    export const ContainerButton = styled.div`
        width: 80%;
        margin-left: auto; 
        margin-right: auto;
        margin-top: 40px;
    `;
    export const Button = styled.button`
        border: solid 0.5px #42c6a7;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 34px;
        padding-right: 34px;
        color: #42c6a7;
        border-radius: 5px;
        font-family: 'Fira Code', monospace;
        font-size: 13px;
        background-color: #00000000;
        cursor: pointer;
        animation: ${rotate} 1800ms ease-in;
        &:hover{
            background-color: #073043;
            transition: 0.3s;
        }
        `;
