function alterarCor() {
    const primeiroConteudo = document.querySelector(".content")

    primeiroConteudo.classList.toggle("ativo");

}

//primeiroConteudo.innerHTML = "<p>Alterado Inner HTML</p>"

//const listaConteudo = document.querySelectorAll(".content");

//console.log(listaConteudo)
                        // = >
//listaConteudo.forEach(item => {
//    item.firstElementChild.textContent = "Alterado Via forEach";
//})

function criarParagrafo() {
    const primeiraDiv  = document.querySelector(".content");

    const paragrafo = document.createElement("p");

    paragrafo.textContent = "Texto criado via JS"

    primeiraDiv.appendChild(paragrafo);
}

function cadastrar(evento) {
    //Cancelar comportamento padrão
    evento.preventDefault()
    
    //Capturar elemento que gerou evento
    const form = evento.target;

    //Capturando valores
    const nomeProduto = form[0].value;
    const quantidadeProduto = form[1].value;

    //Criando elemento
    const li = document.createElement("Li");

    //Criando mensagem textual
    const msg = "Produto:" + nomeProduto
        + " - Quantidade:" + quantidadeProduto;
    //Definindo mensagem
    li.innerText = msg;

    //Capturando elemento pai
    const ul = document.querySelector(".lista");

    //Definindo elemento filho
    ul.appendChild(li);

    //Resetando formulário 
    form[0].value = "";
    form[1].value = "";
}