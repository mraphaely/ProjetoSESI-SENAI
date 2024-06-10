import { styled } from "styled-components";
import { Cor } from "./App";

export const Caixa = styled.div`
    background-color: ${Cor.vibration_Green};
    width: 600px;
    height: 700px;
    border-radius: 50px;
    position: absolute;
    z-index: 1;
    left: 30%;
    top: 20%;
    opacity: 0.9;
    box-shadow: 1px 1px 20px black;
    text-align: center;
    padding-top: 115px;
    font-size: 50px;
`
export const Title = styled.h3`
   color: ${Cor.White};
   background-color: ${Cor.vibration_Green};
` 
export const SubTitle = styled.p`
   color: ${Cor.White};
   font-size: 28px;
   background-color: ${Cor.vibration_Green};
` 
export const Texto = styled.p`
   color: ${Cor.White};
   font-size: 20px;
   padding: 90px 60px 60px 50px;
   background-color: ${Cor.vibration_Green};
` 