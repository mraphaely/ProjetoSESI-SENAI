import { ContainerMain, CampoInput, CPF, LoginFiscal, EnviarFiscal } from "../styles/PagCo"
import  {Fundo} from '../styles/Home';
import HeaderFilter from "../components/HeaderFilter"
import Footer from "../components/Footer"
import Imagem from '../assets/ImgFundo.svg'
const PagCo = () => {
 return (
  <>
   <HeaderFilter />
   <Fundo>
    <img src={Imagem} alt="Fundo" />
   </Fundo>
   <ContainerMain>
    <LoginFiscal>
     Login
    </LoginFiscal>
    <CPF>
     CPF do Fiscal De Disciplina:
    </CPF>
    <CampoInput placeholder="Digite aqui..."/>
    <EnviarFiscal>
     Enviar
    </EnviarFiscal>
   </ContainerMain>
   <Footer />
  </>
 )
}

export default PagCo
