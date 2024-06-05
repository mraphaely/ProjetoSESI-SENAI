import { Card, Rodape, Info, RodapeText } from '../styles/Footer';
import Wpp  from '../assets/whatsApp.svg'
import Face  from '../assets/FaceBook.svg'
import Insta  from '../assets/InstaGram.svg'

const Footer = () => {
    return(
        <Card>
            <Info>
            <a href="https://www.whatsapp.com" className='Social'>
                <img src={Wpp} alt="WhatsApp" className='Social'/>
            </a>
            <a href="https://www.facebook.com/sesialagoas" className='Social'>
                <img src={Face} alt="FaceBook" className='Social'/>
            </a>  
            <a href="https://www.instagram.com/sesialagoas" className='Social'>  
                <img src={Insta} alt="InstaGram" className='Social'/>
            </a>
            </Info>
            <Rodape>
                <RodapeText>Achados & Perdidos &copy;2024 - Todos os direitos reservados</RodapeText>
            </Rodape>
        </Card>
    )
}

export default Footer;