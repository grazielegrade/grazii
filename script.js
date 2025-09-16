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
const perguntas = [
    {
        pergunta: 'Qual é a capital da França?',
        alternativas: ['A. Madrid', 'B. Paris', 'C. Roma', 'D. Berlim'],
        respostaCorreta: 'B'
    },
    {
        pergunta: 'Quem escreveu o livro "1984"?',
        alternativas: ['A. George Orwell', 'B. Aldous Huxley', 'C. J.K. Rowling', 'D. Ernest Hemingway'],
        respostaCorreta: 'A'
    },
    {
        pergunta: 'Em que ano o Brasil conquistou a independência?',
        alternativas: ['A. 1808', 'B. 1822', 'C. 1889', 'D. 1500'],
        respostaCorreta: 'B'
    },
    {
        pergunta: 'Qual o maior animal terrestre?',
        alternativas: ['A. Elefante africano', 'B. Girafa', 'C. Urso polar', 'D. Hipopótamo'],
        respostaCorreta: 'A'
    },
    {
        pergunta: 'Qual é o símbolo químico do ouro?',
        alternativas: ['A. Ag', 'B. Au', 'C. Fe', 'D. Hg'],
        respostaCorreta: 'B'
    },
    {
        pergunta: 'Quem pintou "A Última Ceia"?',
        alternativas: ['A. Vincent van Gogh', 'B. Pablo Picasso', 'C. Leonardo da Vinci', 'D. Michelangelo'],
        respostaCorreta: 'C'
    },
    {
        pergunta: 'Qual é o menor continente do mundo?',
        alternativas: ['A. África', 'B. Oceania', 'C. Europa', 'D. Ásia'],
        respostaCorreta: 'B'
    },
    {
        pergunta: 'Em que ano a Primeira Guerra Mundial começou?',
        alternativas: ['A. 1905', 'B. 1914', 'C. 1939', 'D. 1910'],
        respostaCorreta: 'B'
    },
    {
        pergunta: 'Qual é o nome do planeta mais próximo do Sol?',
        alternativas: ['A. Marte', 'B. Vênus', 'C. Mercúrio', 'D. Terra'],
        respostaCorreta: 'C'
    },
    {
        pergunta: 'O que é a fotossíntese?',
        alternativas: ['A. Processo de reprodução das plantas', 'B. Processo em que as plantas geram energia utilizando a luz solar', 'C. Processamento de alimentos nas plantas', 'D. Absorção de nutrientes do solo pelas plantas'],
        respostaCorreta: 'B'
    },
    {
        pergunta: 'Qual o nome do famoso explorador que viajou até a América em 1492?',
        alternativas: ['A. Vasco da Gama', 'B. Cristóvão Colombo', 'C. Fernão de Magalhães', 'D. Marco Polo'],
        respostaCorreta: 'B'
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

    // Desabilita o botão "Próxima" até que o usuário escolha uma alternativa
    document.getElementById('nextBtn').disabled = true;
}

function verificarResposta(indice) {
    const pergunta = perguntas[perguntaAtual];
    const letraResposta = String.fromCharCode(65 + indice); // A, B, C, D
    const alternativas = document.querySelectorAll('#alternativas li');
    
    // Marca a resposta correta ou errada
    if (letraResposta === pergunta.respostaCorreta) {
        acertos++;
        alternativas[indice].style.backgroundColor = '#4CAF50'; // Verde para resposta correta
    } else {
        alternativas[indice].style.backgroundColor = '#f44336'; // Vermelho para resposta errada
        // Marca a resposta correta com um verde
        const indiceCorreto = pergunta.alternativas.indexOf(`${pergunta.respostaCorreta}. ${pergunta[pergunta.respostaCorreta]}`);
        alternativas[indiceCorreto].style.backgroundColor = '#4CAF50';
    }

    // Habilita o botão "Próxima"
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        exibirPergunta();
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
}

window.onload = () => {
    exibirPergunta();
};
