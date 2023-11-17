let listaJogadores = [];
let elementoTabela = document.getElementById("tabelaJogadores");

function exibirNaTela() {
    elementoTabela.innerHTML = "";
    listaJogadores.forEach((jogador, index) => {
        console.log(jogador);
        elementoTabela.innerHTML += `
            <tr>
                <td>${jogador.nome}</td>
                <td>${jogador.vitoria}</td>
                <td>${jogador.empate}</td>
                <td>${jogador.derrota}</td>
                <td>${jogador.pontos}</td>
                <td><button onClick="adicionarVitoria(${index})">Vitória</button></td>
                <td><button onClick="adicionarEmpate(${index})">Empate</button></td>
                <td><button onClick="adicionarDerrota(${index})">Derrota</button></td>
                <td><button onClick="limparPontuacao(${index})">Limpar Registros</button></td>
                <td><button onClick="removerJogador(${index})">Apagar Jogador</button></td>
            </tr>
        `;
    });
};

function criarJogador(){
    let nomeNovoJogador = document.getElementById("campoNomeJogador").value;
    document.getElementById("campoNomeJogador").value = "";

    listaJogadores.push({
        nome: nomeNovoJogador,
        vitoria: 0,
        empate: 0,
        derrota: 0,
        pontos: 0
    });
    exibirNaTela();
};

function adicionarVitoria(index) {
    listaJogadores[index].vitoria++;
    listaJogadores[index].pontos = listaJogadores[index].pontos + 3;
    exibirNaTela();
};

function adicionarEmpate(index) {
    listaJogadores[index].empate++;
    listaJogadores[index].pontos++;
    exibirNaTela();
};

function adicionarDerrota(index) {
    listaJogadores[index].derrota++;
    exibirNaTela();
};

function limparPontuacao(index){
    listaJogadores[index].vitoria = 0;
    listaJogadores[index].empate = 0;
    listaJogadores[index].derrota = 0;
    listaJogadores[index].pontos = 0;
    exibirNaTela();
};

function removerJogador(index){
    listaJogadores.splice(index, 1);
    exibirNaTela();
};

function apagarJogadores(){
    listaJogadores = [];
    exibirNaTela();
};