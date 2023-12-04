let contador = 0;
let posicao;
let progresso = 0;
const dataAlvo = new Date('2023-11-27T00:00:00').getTime();

function calcularDiferenca() {
    const dataAtual = new Date().getTime();
    const diferenca = dataAlvo - dataAtual;

    // Se a diferença for menor ou igual a zero, chegamos à data alvo
    if (diferenca <= 0) {
        pausarContador();
        contador = 0;
        progresso = 0;
        document.getElementById('contador').textContent = contador;
        document.getElementById('progresso').style.width = '0';
    } else {
        // Calcula os minutos e segundos restantes
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        // Exibe a contagem regressiva
        document.getElementById('contador').textContent = minutos + 'm ' + segundos + 's';

        // Atualiza a barra de progresso
        progresso = ((dataAlvo - diferenca) / dataAlvo) * 100;
        document.getElementById('progresso').style.width = progresso + '%';
    }
}

function atualizarContador() {
    contador++;
    calcularDiferenca();
}

function iniciarContador() {
    posicao = setInterval(atualizarContador, 1000);
    calcularDiferenca();
}

function pausarContador() {
    clearInterval(posicao);
}

function reiniciarContador() {
    pausarContador();
    contador = 0;
    progresso = 0;
    document.getElementById('contador').textContent = contador;
    document.getElementById('progresso').style.width = '0';
    iniciarContador();
}

// Inicia o contador assim que a página é carregada
window.onload = iniciarContador();