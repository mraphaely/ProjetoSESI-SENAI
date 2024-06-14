import { Main, CampInp, Ra, Login, Enviar, InputNome, ImgIniciais } from "../styles/PagRa"
import  {Fundo} from '../styles/Home';
import HeaderFilter from "../components/HeaderFilter"
import Footer from "../components/Footer"
import Imagem from '../assets/ImgFundo.svg'
import React from "react";

const PagRa = () => {
    const [nome, setNome] = React.useState("")
    const [ra, setRa] = React.useState("")
    const urlIniciais = "https://api.dicebear.com/8.x/initials/svg?seed="
    return ( 
  <>
   <HeaderFilter />
   <Fundo>
    <img src={Imagem} alt="Fundo" />
   </Fundo>
   <Main>
    <ImgIniciais src={urlIniciais + nome}/>
    <Login>
     Login
    </Login>
    <InputNome placeholder="Maria Conceição"
       required
       autoFocus
       id="nome"
       type='text'
       value={nome}
       onChange={(event) => setNome(event.target.value)}
      />
    <Ra>
     Registro do Aluno(RA):
    </Ra>
    <CampInp placeholder="Digite aqui..."
    required
    autoFocus
    id="ra"
    type='number'
    value={ra}
    onChange={(event) => setRa(event.target.value)}/>
    <Enviar onClick={()=>{
      if(nome === "" && isNaN(ra)){
         alert("Preencha os campos de maneira correta.")
         nome = ""
         ra = ""
         return
      }else{
         window.location.href = "./Home/home.jsx"
      }
    }}>
     Enviar
    </Enviar>
   </Main>
   <Footer />
  </>
 )
}

export default PagRa
