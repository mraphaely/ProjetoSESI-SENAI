const nome = document.getElementById("nome");
const cpf = document.getElementById("cpf").value
const botao = document.getElementById("enviar")
const validaçãoColaborador = () => {
    const nome = nome.value
    const cpf = parseInt(cpf)
    if(nome === '' && isNaN(cpf) ){
        alert('Preencha os dados corretamente')
        nome = ""
        cpf = ""
        return 
    }

}
botao.addEventListener('click', validaçãoColaborador)