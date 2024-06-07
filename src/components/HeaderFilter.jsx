import { Card } from '../styles/Header';
import logoSS  from '../assets/LogoSS.svg'
// import { Link } from "react-router-dom";

const HeaderFilter = () => {
    return(
        <>
        <Card>
          {/* <Titulo>Achados & Perdidos</Titulo> */}
          <img src={logoSS} alt="Logo SESI SENAI" className='Logo' />
        </Card>
        </>
    )
}

export default HeaderFilter;
