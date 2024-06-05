import { Card } from '../styles/Header';
import logoSS  from '../assets/LogoSS.svg'
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
        <Card>
          <img src={logoSS} alt="Logo SESI SENAI" className='Logo' />
          {/* <Titulo>Achados & Perdidos</Titulo> */}

          <Link to={'home'} className='links'> Home </Link>
            <span className='links'> | </span>
            <Link to={'sobre'}  className='links'> Sobre </Link>
        </Card>
        </>
    )
}

export default Header;