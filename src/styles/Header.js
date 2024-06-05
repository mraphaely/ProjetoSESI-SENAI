import { styled } from "styled-components";
import { Cor } from "./App";

export const Card = styled.header `
    background-color : ${Cor.Green};
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 1rem; 
`
export const Titulo = styled.h3 `
    color: ${Cor.White};
    display: flex;
    background-color: ${Cor.Green};
`