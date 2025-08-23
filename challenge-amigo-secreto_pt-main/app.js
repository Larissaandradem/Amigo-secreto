// Lista para armazenar os nomes
let nomes = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    let input = document.querySelector('#amigo');
    let amigo = input.value.trim();

    if (amigo === "") {
        alert('Por favor, digite um nome');
    } else {
        nomes.push(amigo);
        console.log(nomes); // só para depuração
        limparCampo();
        atualizarLista();
    }
}

// Função para limpar campo de input
function limparCampo() {
    document.querySelector('#amigo').value = "";
}

// Função para atualizar a lista de amigos no HTML
function atualizarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";

    nomes.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear amigo
function sortearAmigo() {
    if (nomes.length === 0) {
        alert("Você não possui amigos para sortear");
    } else {
        let indiceSorteado = Math.floor(Math.random() * nomes.length);
        let nomeSorteado = nomes[indiceSorteado];

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>Amigo sorteado: <strong>${nomeSorteado}</strong></li>`;
    }
}
