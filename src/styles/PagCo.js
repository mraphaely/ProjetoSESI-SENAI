import { styled } from "styled-components";
import {Cor} from "../styles/App"

export const ContainerMain = styled.main`
height: 300px;
width: 300px;
background-color: ${Cor.Green};
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
position: fixed;
top: 30%;
margin: 0px 42%;
padding-top: 50px;
border-radius: 50px;
box-shadow: 1px 1px 20px black;
`

export const LoginFiscal = styled.h1`
color: ${Cor.White};
background-color: ${Cor.Green};
`

export const CPF = styled.h5`
color: white;
background-color: ${Cor.Green};
margin-top: 28px;
margin-right: 40px;
`
export const CampoInput = styled.input`
border-radius: 5px;
background-color: ${Cor.White};
margin-top: 15px;
border-color: ${Cor.White};
height: 25px;
width: 210px;
`

export const EnviarFiscal = styled.button`
height: 25px;
width: 80px;
margin-top: 28px;
color: ${Cor.Dark_Green};
border-radius: 5px;
border: none;
&:hover{
 color: ${Cor.White};
 background-color: ${Cor.vibration_Green};
 box-shadow: 1px 1px 20px black;
}
`

export const Fundo = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: ${Cor.ice_White};
    z-index: 0;
`
export const InputNomeCo = styled.input`
border-radius: 5px;
background-color: ${Cor.White};
margin-top: 15px;
border-color: ${Cor.White};
height: 25px;
width: 210px;
`
export const ImgIniciaisCo = styled.img`
margin-bottom: 50px;
width: 100px;
height: 100px;
`