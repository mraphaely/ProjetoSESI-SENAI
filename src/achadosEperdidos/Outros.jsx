import { Container, Title, ItemContainer, Item, ItemDetails, ItemImage} from "../styles/achadosEperdidos"

 const Outros = () => {
     return(
        <Container>
        <Title>Garrafas</Title>
        <ItemContainer>
          <Item>
            <ItemImage src="https://static.wixstatic.com/media/a27d24_f3ea544e5e7e4c5ca52b2e65b134b9ee~mv2.jpg/v1/fill/w_1000,h_604,al_c,q_90,usm_0.66_1.00_0.01/a27d24_f3ea544e5e7e4c5ca52b2e65b134b9ee~mv2.jpg" alt="Outros 1" />
            <ItemDetails>
              <div>Local:</div>
              <div>Data:</div>
              <div>Responsável:</div>
            </ItemDetails>
          </Item>
          <Item>
            <ItemImage src="https://ae01.alicdn.com/kf/HTB1n.DraovrK1RjSszfq6xJNVXaD.jpg" alt="Outros 2" />
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
 
 export default Outros