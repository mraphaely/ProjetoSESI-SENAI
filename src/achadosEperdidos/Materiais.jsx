import { Container, Title, ItemContainer, Item, ItemDetails, ItemImage} from "../styles/achadosEperdidos"


 const Materiais = () => {
     return(
        <Container>
        <Title>Material</Title>
        <ItemContainer>
          <Item>
            <ItemImage src="https://i.pinimg.com/originals/9d/52/38/9d523858da389018fc9ef30639232902.jpg" alt="Material 1" />
            <ItemDetails>
              <div>Local:</div>
              <div>Data:</div>
              <div>Responsável:</div>
            </ItemDetails>
          </Item>
          <Item>
            <ItemImage src="https://th.bing.com/th/id/R.d0a02cd81d1e8888a120678d0bdadbad?rik=z3dvA%2fb357Im7Q&pid=ImgRaw&r=0" alt="Material 2" />
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
 
 export default Materiais