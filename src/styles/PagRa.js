import { styled } from "styled-components";
import {Cor} from "../styles/App"

export const Main = styled.main`
background-color: ${Cor.vibration_Green};
max-width: 500px;
height: 500px;
border-radius: 50px;
position: absolute;
z-index: 1;
left: 30%;
top: 20%;
opacity: 0.9;
box-shadow: 1px 1px 20px black;
text-align: center;
padding-top: 50px;
font-size: 28px;
display: flex;
flex-direction: column;
align-items: center;
padding: 40px;
padding-top: 40px;
`

export const Titulo = styled.h1`
color: ${Cor.White};
font-size: 48px;
background-color: ${Cor.Green};
`

export const Ra = styled.h4`
color: white;
font-size: 20px;
padding-left: 38px;
background-color: ${Cor.Green};
margin-top: 28px;
margin-right: 40px;
`
export const CampInp = styled.input`
border-radius: 5px;
background-color: ${Cor.White};
margin-top: 15px;
border-color: ${Cor.White};
height: 30px;
width: 210px;
&:hover{
    background-color: ${Cor.Yellow};
    color: ${Cor.White};
}
`

export const Enviar = styled.button`
height: 30px;
width: 100px;
font-size: medium;
margin-top: 28px;
color: ${Cor.Dark_Green};
border-radius: 5px;
border: none;
&:hover{
    background-color: ${Cor.Yellow};
    color: ${Cor.White};
}
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
height: 30px;
width: 210px;
&:hover{
    background-color: ${Cor.Yellow};
    color: ${Cor.White};
}
`
export const ImgIniciais = styled.img`
margin-bottom: 10px;
width: 100px;
height: 100px;
border-radius: 10px;
`