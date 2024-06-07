import { Main, CampInp, Ra, Login, Enviar } from "../styles/PagRa"
import  {Fundo} from '../styles/Home';
import HeaderFilter from "../components/HeaderFilter"
import Footer from "../components/Footer"
import Imagem from '../assets/ImgFundo.svg'
const PagRa = () => {
 return (
  <>
   <HeaderFilter />
   <Fundo>
    <img src={Imagem} alt="Fundo" />
   </Fundo>
   <Main>
    <Login>
     Login
    </Login>
    <Ra>
     Registro do Aluno(RA):
    </Ra>
    <CampInp placeholder="Digite aqui..."/>
    <Enviar>
     Enviar
    </Enviar>
   </Main>
   <Footer />
  </>
 )
}

export default PagRa
