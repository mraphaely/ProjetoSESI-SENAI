import Image from '../assets/ImgFundo.svg'
import Suport from '../assets/Suporte.svg'
import { Fundo, Suporte, Div1, Div2, Div3, Div4 } from '../styles/Home';

const Home = () => {
    return (
    <>
    <Fundo>
    <img src={Image} alt="Logo SESI SENAI"/>
    <Div1><a href="" className='Link'>Garrafas</a></Div1>
    <Div2></Div2>
    <Div3></Div3>
    <Div4></Div4>
    </Fundo>
    <Suporte>
    <img src={Suport} alt="Logo SESI SENAI"/>
    </Suporte>
    </>
    )
}
export default Home