import styled from 'styled-components'
import { Cor } from "./App";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:  #00000000;
  height: 80vh;
  padding: 20px;
  position: relative;
  z-index: 1;
  bottom: 1200px;

`;

export const Title = styled.h1`
  color: ${Cor.Dark_Green};
  font-size: 40px;
  margin: 10px 900px 100px 10px;
  background-color:  #00000000;
`;

export const ItemContainer = styled.div`
  display: flex;
  background-color:  #00000000;
  justify-content: space-around;
  width: 85%;
`;

export const Item = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 45%;
  box-shadow: 1px 1px 20px black;
  &:hover{
    box-shadow: 0 2px 5px black;
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  border-radius: 8px;
  &:hover{
    box-shadow: 0 2px 5px black;
  }
`;

export const ItemDetails = styled.div`
  margin-top: 10px;
  font-size: x-large;
`;