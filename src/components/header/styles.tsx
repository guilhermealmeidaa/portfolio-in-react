import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    /* margin-bottom: 10%; */
    opacity: 0;
    width: auto;
  }
  to {
    /* margin-bottom: 20px; */
    opacity: 1;
    width: auto;
  }
`;

    export const ContainerHeader = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 8%;
    `;
    export const ContainerMenu = styled.div`
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    margin: 30px 0px 30px 0px;
    margin-top: 40px;
    `;

    export const ContainerLogo = styled.div`
    
    `;

    export const ContainerMenuitem = styled.div`
    display: flex;
    align-items: center;
    `;
   export const MenuItem = styled.div`
    display: flex;
    gap: 30px;
    @media only screen and (max-width: 768px) {
      display: none;
    }
    `;
    export const MenuItemCouple = styled.div`
    display: flex;
    gap: 5px;
    &:hover{
        color: #42c6a7;
    }
    `;
    
    export const MenuItemText = styled.text`
    color: #8892b0;
    font-family: 'Fira Code', monospace;
    font-size: 13px;
    cursor: pointer;;
    animation: ${rotate} ${(props) => props.transform} ease-in;
    &:hover{
        color: #42c6a7;
    }
    `;
    export const MenuItemNumber = styled.text`
    color: #42c6a7;
    font-family: 'Fira Code', monospace;
    font-size: 13px;
    font-weight: 1px;
    cursor: pointer;
    &:hover menuItemText{
            color: #42c6a7;
        }
    `;
    // menuItemText: styled.text``,
    export const MenuItemButton = styled.button`
    border: solid 0.5px #42c6a7;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 17px;
    padding-right: 17px;
    color: #42c6a7;
    border-radius: 5px;
    margin-left: 40px;
    font-family: 'Fira Code', monospace;
    font-size: 13px;
    background-color: #00000000;

    cursor: pointer;
    &:hover{
        background-color: #073043;
        transition: 0.3s;
    }
    `

