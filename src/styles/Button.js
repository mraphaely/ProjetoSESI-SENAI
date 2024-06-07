import { styled } from "styled-components";
import { Cor } from "./App";

export const Main = styled.main`
    display: grid;
    background-color: ${Cor.Dark_Green};
    width: 350px;
    height: 350px;
    border-radius: 50px;
    opacity: 0.9;
    box-shadow: 1px 1px 20px black;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 150px;
    
`
export const Button = styled.a `
    padding: 15px 25px;
    border: unset;
    border-radius: 15px;
    color: ${Cor.Black};
    z-index: 1;
    background: ${Cor.White};
    position: relative;
    text-decoration: none;
    font-weight: 1000;
    font-size: 17px;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
    box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
    transition: all 250ms;
    overflow: hidden;

    &::before {
         content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        border-radius: 15px;
        background-color: ${Cor.vibration_Green};
        z-index: -1;
        -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        transition: all 250ms
    }

    &:hover {
        color: #e8e8e8;
    }

    &:hover::before {
        width: 100%;
    }
`

export const Card =styled.article `
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    display: flex;
`