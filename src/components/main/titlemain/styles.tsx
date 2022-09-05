import styled from "styled-components";

export default {
    Container: styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

    `,
    ContainerTitle: styled.div`
        width: 80%;
        margin: 0 auto;
    `,
    ContainerText: styled.div`
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;

    `,
    TextApresentation: styled.h3`
        font-size: 1rem;
        font-weight: 400;
        color: #42c6a7;
        font-family: 'Fira Code', monospace;
        margin-bottom: 17px;
    `,
    TextName: styled.h1`
        font-size: 4rem;
        font-weight: bold;
        color: #ccd6f6;
        margin-bottom: 12px;
        font-family: 'Inter', sans-serif;
    `,
    TextSubname: styled.h1`
        font-size: 4rem;
        font-weight: bold;
        color: #8892b0;
        font-family: 'Inter', sans-serif;
        margin-bottom: 17px;
    `,
    TextParagraph: styled.p`
        font-size: 1rem;
        font-weight: 200;
        color: #8892b0;
        font-family: 'Inter', sans-serif;
        max-width: 50%;
        line-height: 25px;
    `,
    ContainerButton: styled.div`
        width: 80%;
        margin-left: auto; 
        margin-right: auto;
        margin-top: 40px;
    `,
    Button: styled.button`
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
        &:hover{
            background-color: #073043;
            transition: 0.3s;
        }
        `,

}