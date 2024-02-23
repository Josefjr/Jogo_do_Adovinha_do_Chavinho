// Gera um número aleatório de 1 a 10
let numeroSecreto = parseInt(Math.random() * 10 + 1);
//console.log(numeroSecreto)
let tentativas = 0;

// Elementos da página
const inputChute = document.getElementById('chute');
const btnEnviar = document.getElementById('enviar');
const btnReiniciar = document.getElementById('reiniciar');
const resultadoTexto = document.getElementById('resultado');
const feedbackTexto = document.getElementById('texto-feedback');
const audio = document.getElementById('audio');

// Função para verificar o chute do usuário
function verificarChute() {
    const chute = parseInt(inputChute.value);

    if (chute === numeroSecreto) {
        resultadoTexto.textContent = "Você acertou!";
        feedbackTexto.textContent = "Você descobriu o número secreto!";
        btnReiniciar.style.display = "inline"; // Mostra o botão de reiniciar
    } else {
        tentativas++;
        if (tentativas >= 5) { // Se exceder um número de tentativas
            audio.play(); // Reproduz o áudio
            btnReiniciar.style.display = "inline"; // Mostra o botão de reiniciar
            btnEnviar.disabled = true; // Desativa o botão de enviar
        }

        // Verifica se o usuário está próximo do número secreto
        const diferenca = Math.abs(chute - numeroSecreto);
        if (diferenca <= 2) {
            feedbackTexto.textContent = "Você está perto!";
        } else {
            // Dica se o chute está acima ou abaixo do número secreto
            if (chute > numeroSecreto) {
                feedbackTexto.textContent = "Tente um número menor!";
            } else {
                feedbackTexto.textContent = "Tente um número maior!";
            }
        }
    }
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    tentativas = 0;
    resultadoTexto.textContent = "";
    feedbackTexto.textContent = "";
    btnReiniciar.style.display = "none"; // Esconde o botão de reiniciar
    btnEnviar.disabled = false; // Habilita o botão de enviar
    inputChute.value = ""; // Limpa o campo de entrada
}

// Evento de clique no botão Enviar
btnEnviar.addEventListener('click', verificarChute);

// Evento de clique no botão Reiniciar Jogo
btnReiniciar.addEventListener('click', reiniciarJogo);
