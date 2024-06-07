import styled from "styled-components"
import { Cor } from "./App";

export const Rodape = styled.footer `
    position: fixed;
    width: 100%;
    bottom: 0;
`
export const Card = styled.div `
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
    font-size: 10px;
`