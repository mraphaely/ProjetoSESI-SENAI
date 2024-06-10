// import Image from '../assets/ImgFundo.svg'
// import Suport from '../assets/Suporte.svg'
import { Link } from 'react-router-dom';
import { Fundo, Suporte, Div1, Div2, Div3, Div4, ContainerBox } from '../styles/Home';

const Home = () => {
    return (
    <>
    <Fundo>
    {/* <img src={Image} alt="Logo SESI SENAI"/> */}
    <ContainerBox>
    <Div1><Link to={'Garrafas'} className="LinkD">Garrafas</Link></Div1>
    <Div2><Link to={'Roupas'}className="LinkD">Roupas</Link></Div2>
    <Div3><Link to={'Materiais'}className="LinkD">Materiais</Link></Div3>
    <Div4><Link to={'Outros'}className="LinkD">Outros</Link></Div4>
    </ContainerBox>
    </Fundo>
    <Suporte>
    {/* <img src={Suport} alt="Logo SESI SENAI"/> */}
    </Suporte>
    </>
    )
}
export default Home