let tarefas = []

const inputTarefas = document.querySelector("#input-tarefas");
const botaoTarefas = document.querySelector("#botao-tarefas");
const listaTarefas = document.querySelector("#listaGeral");
const botoesFiltro = document.querySelector("#botoes");
const nomeTarefa = document.querySelector("h3")

botaoTarefas.addEventListener("click", capturarTarefas);
Array.from(botoesFiltro.children).forEach(botao => {
    botao.addEventListener("click", filtrarTarefas)
})




function capturarTarefas() {
    const lista = inputTarefas.value;
    const NovaLista = {texto: lista, concluida: false}
    tarefas.push(NovaLista)
    const posicao = tarefas.length - 1;
    
    const novoItem = document.createElement('li')
    novoItem.setAttribute('data-index', posicao)
    novoItem.addEventListener("click", marcarConcluido);
    novoItem.textContent = lista
    // novoItem.style.color = '#FF0000'
    // novoItem.style.backgroundColor = '#0a0000';
    // novoItem.style.width = 'max-content';
    listaTarefas.appendChild(novoItem)

    const botaoExcluir = document.createElement('button')
    botaoExcluir.setAttribute('data-index', posicao)
    botaoExcluir.addEventListener("click", excluirTarefa)
    // botaoExcluir.classList.add('botao-concluido')
    botaoExcluir.setAttribute('data-texto', 'excluir')
    botaoExcluir.textContent = "excluir"
    novoItem.appendChild(botaoExcluir)
    

    inputTarefas.value = ""

}






function excluirTarefa(e) {
    e.stopPropagation()
    const tarefaExcluida = this.getAttribute("data-index")
    const itemPai = this.parentElement 
    tarefas.splice(tarefaExcluida, 1)
    listaTarefas.removeChild(itemPai)
    atualizarIndices()
    
}

function atualizarIndices() {
    Array.from(listaTarefas.children).forEach((li, dataIndex) => {
        li.setAttribute("data-index", dataIndex)
        const novoIndiceBotao = li.querySelector('button')
        novoIndiceBotao.setAttribute("data-index", dataIndex)
        

    })
    

}

function marcarConcluido() {
    const indiceconcluido = this.getAttribute("data-index")
    const tarefaClicada = tarefas[indiceconcluido];
    tarefaClicada.concluida = !tarefaClicada.concluida
    this.classList.toggle("tarefaRealizada")
    // this.style.color = '#00c21a86'
}


function filtrarTarefas(){
    if (this.classList.contains("todas-tarefas")) {
        Array.from(listaTarefas.children).forEach(li => {
            li.style.display = "block"
            nomeTarefa.textContent = "TAREFAS"
        })
        
    } else if (this.classList.contains("tarefas-concluidas")) {
        Array.from(listaTarefas.children).forEach(li => {
            const indice = li.getAttribute("data-index")
            const objetoDaTarefa = tarefas[indice]
            if(objetoDaTarefa.concluida === true){
                nomeTarefa.textContent = "TAREFAS CONCLUIDAS"
                return li.style.display = "block"

            }
            else {
                return li.style.display = "none"
            }
        })
        
    }
    else {Array.from(listaTarefas.children).forEach(li => {
            const indice = li.getAttribute("data-index")
            const objetoDaTarefa = tarefas[indice]
            if(objetoDaTarefa.concluida === false){
                nomeTarefa.textContent = "TAREFAS PENDENTES"
                return li.style.display = "block"
            }
            else{
                return li.style.display = "none"
            }
    })    
         
        
    }
}









































