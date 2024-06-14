import { styled } from "styled-components";
import {Cor} from "../styles/App"

export const Main = styled.main`
height: 350px;
width: 350px;
background-color: ${Cor.Green};
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
position: relative;
padding-top: 50px;
border-radius: 50px;
box-shadow: 1px 1px 20px black;
`

export const Login = styled.h1`
color: ${Cor.White};
background-color: ${Cor.Green};
`

export const Ra = styled.h4`
color: white;
background-color: ${Cor.Green};
margin-top: 28px;
margin-right: 40px;
`
export const CampInp = styled.input`
border-radius: 5px;
background-color: ${Cor.White};
margin-top: 15px;
border-color: ${Cor.White};
height: 25px;
width: 210px;
`

export const Enviar = styled.button`
height: 25px;
width: 80px;
margin-top: 28px;
color: ${Cor.Dark_Green};
border-radius: 5px;
border: none;
`

export const Fundo = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: ${Cor.ice_White};
    z-index: 0;
`
export const InputNome = styled.input`
border-radius: 5px;
background-color: ${Cor.White};
margin-top: 15px;
border-color: ${Cor.White};
height: 25px;
width: 210px;
`
export const ImgIniciais = styled.img`
margin-bottom: 50px;
width: 100px;
height: 100px;
`