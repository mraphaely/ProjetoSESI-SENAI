import { ContainerMain, CampoInput, CPF, LoginFiscal, EnviarFiscal, ImgIniciaisCo, InputNomeCo } from "../styles/PagCo"
import  {Fundo} from '../styles/Home';
import HeaderFilter from "../components/HeaderFilter"
import Footer from "../components/Footer"
import Imagem from '../assets/ImgFundo.svg'
import React from "react";  

const PagCo = () => {

 function validaLogin(){
    const cpf = parseInt(cpf)
    if(nome === '' && isNaN(cpf) ){
        alert('Preencha os dados corretamente')
        return
    }}
    const [cpf, setCpf] = React.useState("")

 const [nome, setNome] = React.useState("")
    const urlIniciais = "https://api.dicebear.com/8.x/initials/svg?seed="
    return (
  <>
   <HeaderFilter />
   <Fundo>
    <img src={Imagem} alt="Fundo" />
   </Fundo>
   <ContainerMain>
    <ImgIniciaisCo src={urlIniciais + nome}/>
    <LoginFiscal>
     Login
    </LoginFiscal>
    <InputNomeCo 
    placeholder="Maria Conceição"
           required
           autoFocus
           id="nome"
           type='text'
           value={nome}
          onChange={(event) => setNome(event.target.value)}/>
    <CPF>
     CPF do Fiscal De Disciplina:
    </CPF>
    <CampoInput     
    placeholder="XXX.XXX.XXX-XX"
           required
           autoFocus
           id="cpf"
           type='number'
           value={cpf}
           maxLength="11"
          onChange={(event) => setCpf(event.target.value)}
          />
    <EnviarFiscal onClick={()=>{
      if(nome === "" && isNaN(cpf)){
         alert("Preencha os campos de maneira correta.")
         nome = ""
         cpf = ""
         return
      }else{
                  window.location.href = "./Home/home.jsx"
      }
    }}>
     Enviar
    </EnviarFiscal>
   </ContainerMain>
   <Footer />
  </>
 )
}

export default PagCo
