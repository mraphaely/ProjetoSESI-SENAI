import { styled } from "styled-components";
import { Cor } from "./App";

export const Fundo = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: ${Cor.ice_White};

`
export const ContainerBox = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;

`
export const Suporte = styled.section `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: ${Cor.ice_White};
    width: auto;
    z-index: auto;
    margin-bottom: 450px;
`
export const Div1 = styled.div`
    background-color: ${Cor.Blue};
    width: 300px;
    height: 300px;
    border-radius: 50px;
    position: absolute;
    z-index: 1;
    opacity: 0.9;
    left: 20%;
    top: 25%;
    box-shadow: 1px 1px 20px black;
    text-align: center;
    padding-top: 115px;
    font-size: 50px;
    &:hover{
        background-color: ${Cor.Black};
        box-shadow: 1px 1px 20px yellow;
    }
`
export const Div2 = styled.div`
    background-color: ${Cor.vibration_Green};
    width: 300px;
    height: 300px;
    border-radius: 50px;
    position: absolute;
    z-index: 1;
    opacity: 0.9;
    left: 60%;
    top: 25%;
    box-shadow: 1px 1px 20px black;
    text-align: center;
    padding-top: 115px;
    font-size: 50px;
    &:hover{
        background-color: ${Cor.Black};
        box-shadow: 1px 1px 20px green;
    }
`
export const Div3 = styled.div`
    background-color: ${Cor.vibration_Green};
    width: 300px;
    height: 300px;
    border-radius: 50px;
    position: absolute;
    z-index: 1;
    opacity: 0.9;
    left: 20%;
    top: 60%;
    box-shadow: 1px 1px 20px black;
    text-align: center;
    padding-top: 115px;
    font-size: 50px;
    &:hover{
        background-color: ${Cor.Black};
        box-shadow: 1px 1px 20px green;
    }
`
export const Div4 = styled.div`
    background-color: ${Cor.Blue};
    width: 300px;
    height: 300px;
    border-radius: 50px;
    position: absolute;
    z-index: 1;
    opacity: 0.9;
    left: 60%;
    top: 60%;
    box-shadow: 1px 1px 20px black;
    text-align: center;
    padding-top: 115px;
    font-size: 50px;
    &:hover{
        background-color: ${Cor.Black};
        box-shadow: 1px 1px 20px yellow;
    }
`