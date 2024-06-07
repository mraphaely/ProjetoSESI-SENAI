import { Container, Title, ItemContainer, Item, ItemDetails, ItemImage} from "../styles/achadosEperdidos"

 const Roupas = () => {
     return(
        <Container>
        <Title>Roupas</Title>
        <ItemContainer>
          <Item>
            <ItemImage src="https://th.bing.com/th/id/OIP.LtwevfEugAd3lvMkJidI5AHaHa?rs=1&pid=ImgDetMain" alt="Casaco 1" />
            <ItemDetails>
              <div>Local:</div>
              <div>Data:</div>
              <div>Responsável:</div>
            </ItemDetails>
          </Item>
          <Item>
            <ItemImage src="https://i.pinimg.com/736x/89/b9/96/89b9969a692022b151686cc7cd252c47--perdido-cardigan.jpg" alt="Casaco 2" />
            <ItemDetails>
              <div>Local:</div>
              <div>Data:</div>
              <div>Responsável:</div>
            </ItemDetails>
          </Item>
        </ItemContainer>
      </Container> 
     )
 }
 
 export default Roupas