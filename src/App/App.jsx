import {  } from '../styles/App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fundo, Suporte} from '../styles/Home';
import Sobre from "../Sobre/Sobre";
import Contato from "../Contato/Contato";
import Imagem from '../assets/ImgFundo.svg'
import Suport from '../assets/Suporte.svg'
// import PagRa from '../PagRa/PagRa';

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
                <Route path="/Contato" element={<Contato/>}  className='links'/>
        </Routes>  
        <Footer/>
        </BrowserRouter>
        </>
    )
}

export default App;
