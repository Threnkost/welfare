import styled from "styled-components";

export const ProductPaper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   background-color: #fff;
   border-radius: 5px;
   width: 250px;
   height: 250px;
   padding: 1em;
`;


export const Button = styled.button`
    outline: none;
    border: 1px solid #27AE60;
    color: #27AE60;
    background: none;
    width: 100%;
    border-radius: 3px;
    padding: 5px 10px;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 14px;

    transition: background-color 250ms;

    &:hover {
        background-color: #27AE60;
        color: #fff;
        cursor: pointer;
    }
`;