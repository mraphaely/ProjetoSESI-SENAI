import { Container, Title, ItemContainer, Item, ItemDetails, ItemImage} from "../styles/achadosEperdidos"

 const Garrafas = () => {
     return(
            <Container>
              <Title>Garrafas</Title>
              <ItemContainer className="ItemContainer">
                <Item>
                  <ItemImage src="https://th.bing.com/th/id/OIP.P4emAcIqB90aGbattn62PwHaHa?rs=1&pid=ImgDetMain" alt="Garrafa 1" />
                  <ItemDetails>
                    <div>Local:</div>
                    <div>Data:</div>
                    <div>Responsável:</div>
                  </ItemDetails>
                </Item>
                <Item>
                  <ItemImage src="https://tudosobreprodutos.com.br/img/squeeze-garrafa-de-agua-900ml-em-plastico-roxa-clink.png" alt="Garrafa 2" />
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
 
 export default Garrafas