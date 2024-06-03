import { Card, Titulo } from '../styles/Header';
import logoSS  from '../assets/LogoSS.svg'


const Header = () => {
    return(
        <>
        <Card>
          <img src={logoSS} alt="Logo SESI SENAI" className='Logo' />
          <Titulo>Achados & Perdidos</Titulo>
        </Card>
        </>
    )
}

export default Header;