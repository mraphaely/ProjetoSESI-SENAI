import { Card } from '../styles/Header';
import logoSS  from '../assets/LogoSS.svg'

const Header = () => {
    return(
        <>
        <Card>
          {/* <Titulo>Achados & Perdidos</Titulo> */}
          <img src={logoSS} alt="Logo SESI SENAI" className='Logo' />
        </Card>
        </>
    )
}

export default Header;