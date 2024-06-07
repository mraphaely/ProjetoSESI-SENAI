import { MainNotificada, Aviso, Alerta, Voltar } from "../styles/PagVa"
import  {Fundo} from '../styles/Home';
import HeaderFilter from "../components/HeaderFilter"
import Footer from "../components/Footer"
import Imagem from '../assets/ImgFundo.svg'

const PagVa = () => {
 return (
  <>
   <HeaderFilter />
   <Fundo>
    <img src={Imagem} alt="Fundo" />
   </Fundo>
   <MainNotificada>
    <Alerta>
     Alerta
    </Alerta>
    <Aviso>
     Seus dados não constam no banco de dados da instituição
    </Aviso>
    <Voltar>
     Voltar
    </Voltar>
   </MainNotificada>
   <Footer />
  </>
 )
}

export default PagVa
