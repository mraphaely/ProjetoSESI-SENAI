import { styled } from "styled-components";
import {Cor} from "../styles/App"

export const MainNotificada = styled.main`
height: 350px;
width: 350px;
background-color: ${Cor.Red};
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
position: relative; 
margin: 0 auto;
z-index: 1;
bottom: 380px;
padding-top: 50px;
border-radius: 50px;
box-shadow: 1px 1px 20px black;
`

export const Alerta = styled.h1`
color: ${Cor.White};
background-color: ${Cor.Red};
`

export const Aviso = styled.p`
color: white;
background-color: ${Cor.Red};
margin-top: 28px;
width: 200px;
padding: 20px;
`
export const Voltar = styled.button`
height: 25px;
width: 80px;
margin-top: 28px;
font-size: large;
color: ${Cor.White};
border-radius: 5px;
border: 2px;
border-color:  ${Cor.White};
background-color: ${Cor.Red};

&:hover{
 background-color: ${Cor.White};
 color: ${Cor.Red};
 box-shadow: 1px 1px 20px white;
}
`
export const Fundo = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: ${Cor.ice_White};
    z-index: 0;
`
