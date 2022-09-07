import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: auto;
    background-color: aliceblue;
    margin-top: 200px;
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
    display: flex;
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