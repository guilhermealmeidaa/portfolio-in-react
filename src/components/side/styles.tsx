import styled from "styled-components";

export default {
    sideElement: styled.div`
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: 40px;
    right: auto;
    z-index: 10;
    color: #a8b2d1;
    `,
    sideUl: styled.ul`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
    &::after, &::before {
        box-sizing: inherit;
    }
    `,
    sideLi: styled.li`
    display:list-item;
    text-align: -webkit-match-parent;
    `,
}