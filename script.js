const perguntas = [
    {
        pergunta: 'Qual é a capital da frança?',
        alternativas: ['A. Madrid', 'B. Paris', 'C. Roma', 'D. Berlim'],
        respostaCorreta: 'B'
    },
    {
        pergunta: 'Em que ano a primeira guerra mundial começou?',
        alternativas: ['A. 1905', 'B. 1914', 'C. 1939', 'D. 1910'],
        respostaCorreta: 'B'
    },
    {
        pergunta: 'Em que ano o Brasil conquistou a independência?',
        alternativas: ['A. 1808', 'B. 1822', 'C. 1889', 'D. 1500'],
        respostaCorreta: 'B'
    },
    {
        pergunta: 'Quem pintou a Mona Lisa?',
        alternativas: ['A. Pablo Picasso', 'B. Leonardo da Vinci', 'C. Vincent van Gogh', 'D. Claude Monet'],
        respostaCorreta: 'B'
    },
    {
        pergunta: 'Qual é o maior oceano do mundo?',
        alternativas: ['A. Oceano Atlântico', 'B. Oceano Pacífico', 'C. Oceano Índico', 'D. Oceano Ártico'],
        respostaCorreta: 'B'
    },
    {
        pergunta: 'Qual o continente com maior números de países?',
        alternativas: ['A. Ásia', 'B. África', 'C. Europa', 'D. América'],
        respostaCorreta: 'B'
    },
    {
        pergunta: 'Qual é o elemento químico representado pela sigla H?',
        alternativas: ['A. Hidrogênio', 'B. Hélio', 'C. Oxigênio', 'D. Carbono'],
        respostaCorreta: 'A'
    },
    {
        pergunta: 'Quem escreveu "Dom Casmurro"?',
        alternativas: ['A. Machado de Assis', 'B. José de Alencar', 'C. Clarice Lispector', 'D. Érico Veríssimo'],
        respostaCorreta: 'A'
    },
    {
        pergunta: 'Qual a unidade de medida de temperatura no Sistema Internacional?',
        alternativas: ['A. Celsius', 'B. Fahrenheit', 'C. Kelvin', 'D. Newton'],
        respostaCorreta: 'C'
    },
    {
        pergunta: 'Quem foi o primeiro presidente do Brasil?',
        alternativas: ['A. Getúlio Vargas', 'B. Juscelino Kubitschek', 'C. Marechal Deodoro da Fonseca', 'D. Washington Luís'],
        respostaCorreta: 'C'
    }
];

let perguntaAtual = 0;
let acertos = 0;

function exibirPergunta() {
    const pergunta = perguntas[perguntaAtual];
    document.getElementById('pergunta').textContent = pergunta.pergunta;

    const alternativasElement = document.getElementById('alternativas');
    alternativasElement.innerHTML = '';

    pergunta.alternativas.forEach((alternativa, index) => {
        const li = document.createElement('li');
        li.textContent = alternativa;
        li.onclick = () => verificarResposta(index);
        alternativasElement.appendChild(li);
    });
}

function verificarResposta(indice) {
    const pergunta = perguntas[perguntaAtual];
    const letraResposta = String.fromCharCode(65 + indice); // A, B, C, D

    if (letraResposta === pergunta.respostaCorreta) {
        acertos++;
    }

    const nextBtn = document.getElementById('nextBtn');
    nextBtn.disabled = false;
}

function nextQuestion() {
    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        exibirPergunta();
        document.getElementById('nextBtn').disabled = true;
    } else {
        exibirResultado();
    }
}

function exibirResultado() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('acertos').textContent = `Você acertou ${acertos} de 10 perguntas!`;
}

function reiniciarQuiz() {
    perguntaAtual = 0;
    acertos = 0;
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('resultado').style.display = 'none';
    exibirPergunta();
    document.getElementById('nextBtn').disabled = true;
}

window.onload = () => {
    exibirPergunta();
    document.getElementById('nextBtn').disabled = true;
};
