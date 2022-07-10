import styled from "styled-components";


export const Button = styled.button`
    color: white;
    background: transparent;
    border: 1px solid white;
    border-radius: 50%;
    height: 11rem;
    width: 11rem;
    cursor: pointer;
    padding: 0;
    z-index: 999;
    position: relative;
    user-select: none;
    color: red !important;

    ::after{
        transform: translate(-50%, -50%);
        background-color: white;
        z-index: -1;
        content: "";
        display: block;
        height: 30%;
        position: absolute;
        bottom: auto;
        left: 50%;
        right: 50%;
        top: 50%;
        border: 1px solid red;
        width: 30%;
        box-sizing: border-box;
        z-index: 1;
        border-radius: 50%;
    }
`