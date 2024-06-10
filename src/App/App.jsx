import {  } from '../styles/App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fundo, Suporte} from '../styles/Home';
import Sobre from "../Sobre/Sobre";
import Imagem from '../assets/ImgFundo.svg'
import Suport from '../assets/Suporte.svg'
import Garrafas from '../achadosEperdidos/Garrafas';
import Roupas from '../achadosEperdidos/Roupas';
import Materiais from '../achadosEperdidos/Materiais';
import Outros from '../achadosEperdidos/Outros';



const App = () => {
    return(
        <>
      <BrowserRouter>
        <Header/>
        <Fundo> 
        <img src={Imagem} alt="Fundo" />
        </Fundo>
        <Suporte>
        <img src={Suport} alt="Logo SESI SENAI"/>
        </Suporte>
        <Routes>
                <Route path="/Home" element={<Home/>}  className='links'/>
                <Route path="/Sobre" element={<Sobre/>}  className='links'/>

                <Route path="Home/Garrafas" element={<Garrafas/>}  className='links'/>
                <Route path="Home/Roupas" element={<Roupas/>}  className='links'/>
                <Route path="Home/Materiais" element={<Materiais/>}  className='links'/>
                <Route path="Home/Outros" element={<Outros/>}  className='links'/>
 
        </Routes>  
        <Footer/>
        </BrowserRouter>
        </>
    )
}

export default App;