import styled from "styled-components";

export default {


    // header
    containerHeader: styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 8%;
    `,
    containerMenu: styled.div`
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    margin: 30px 0px 30px 0px;
    `,
    containerLogo: styled.div`
    
    `,
    containerMenuItem: styled.div`
    display: flex;
    align-items: center;

    `,
    menuItem: styled.div`
    display: flex;
    gap: 30px;
    `,
    menuItemCouple: styled.div`
    display: flex;
    gap: 5px;
    &:hover{
        color: #42c6a7;
    }
    `,
    menuItemText: styled.text`
    color: #8892b0;
    font-family: 'Fira Code', monospace;
    font-size: 13px;
    cursor: pointer;
    &:hover{
        color: #42c6a7;
    }
    `,
    menuItemNumber: styled.text`
    color: #42c6a7;
    font-family: 'Fira Code', monospace;
    font-size: 13px;
    font-weight: 1px;
    cursor: pointer;
    &:hover menuItemText{
            color: #42c6a7;
        }
    `,
    // menuItemText: styled.text``,
    menuItemButton: styled.button`
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
    `,
    // body


}
