import { styled } from "styled-components";
import { Cor } from "./App";

export const Card = styled.header `
    background-color : ${Cor.Green};
    justify-content: space-around;
    align-items: center;
    padding: 2rem 1rem; 
    position: fixed;
    display: flex;
    width: 100%;
    top: 0;
`
export const Titulo = styled.h3 `
    background-color: ${Cor.Green};
    color: ${Cor.White};
    display: flex;
`