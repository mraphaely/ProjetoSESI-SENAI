import { Card } from '../styles/Header';
import logoSS  from '../assets/LogoSS.svg'
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
        <Card>
        
        
          <Link to={'home'} className='links'>  
          <img src={logoSS} alt="Logo SESI SENAI" className='Logo' />
          </Link>

            <Link to={'sobre'}  className='links'> Sobre </Link>
        </Card>
        </>
    )
}

export default Header;
