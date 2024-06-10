import styled from "styled-components"
import { Cor } from "./App";

export const Card = styled.footer `
    position: fixed;
    display: inline;
    width: 100%;
    float: left;
    bottom: 0;
    z-index: 10;
`
export const Rodape = styled.footer `
    background-color : ${Cor.vibration_Green};
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 1.5rem; 
    width: 100%;
    
`
export const Info = styled.section `
    background-color : ${Cor.Green};
    align-items: center;
    justify-content: space-evenly;
    display: flex;
    padding: 2rem; 
    width: 100%;
`
export const RodapeText = styled.p `
    color: ${Cor.White};
    background-color: ${Cor.vibration_Green};
    font-size: 20px;
`