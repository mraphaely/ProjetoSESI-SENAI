import { Card } from '../styles/Header';
import logoSS  from '../assets/LogoSS.svg'
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
        <Card>
          {/* <Titulo>Achados & Perdidos</Titulo> */}
          <img src={logoSS} alt="Logo SESI SENAI" className='Logo' />

          <Link to={'home'} className='links'> Home </Link>
            <span className='links'> | </span>
            <Link to={'sobre'}  className='links'> Sobre </Link>
            <span className='links'> | </span>
            <Link to={'contato'}  className='links'>    Contato</Link>
        </Card>
        </>
    )
}

export default Header;