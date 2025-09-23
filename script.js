const perguntas = [
    {
        pergunta: 'Qual o maior planeta do Sistema Solar?',
        alternativas: ['A. Terra', 'B. Júpiter', 'C. Saturno', 'D. Netuno'],
        respostaCorreta: 'B'
    },
    {
        pergunta: 'Qual é o símbolo químico do Ouro?',
        alternativas: ['A. Au', 'B. Ag', 'C. O', 'D. Hg'],
        respostaCorreta: 'A'
    },
    {
        pergunta: 'Quem descobriu a América?',
        alternativas: ['A. Cristóvão Colombo', 'B. Vasco da Gama', 'C. Pedro Álvares Cabral', 'D. Marco Polo'],
        respostaCorreta: 'A'
    },
    {
        pergunta: 'Qual o país com maior população do mundo?',
        alternativas: ['A. Estados Unidos', 'B. China', 'C. Índia', 'D. Rússia'],
        respostaCorreta: 'B'
    },
    {
        pergunta: 'Qual é o continente com maior área?',
        alternativas: ['A. América', 'B. Ásia', 'C. Europa', 'D. África'],
        respostaCorreta: 'B'
    },
    {
        pergunta: 'Em qual cidade está localizada a Torre Eiffel?',
        alternativas: ['A. Londres', 'B. Roma', 'C. Paris', 'D. Madrid'],
        respostaCorreta: 'C'
    },
    {
        pergunta: 'Qual é o elemento químico representado pela sigla O?',
        alternativas: ['A. Oxigênio', 'B. Ouro', 'C. Ozone', 'D. Osmium'],
        respostaCorreta: 'A'
    },
    {
        pergunta: 'Qual é o esporte mais popular do mundo?',
        alternativas: ['A. Futebol', 'B. Basquete', 'C. Tênis', 'D. Vôlei'],
        respostaCorreta: 'A'
    },
    {
        pergunta: 'Quem foi o primeiro homem a pisar na Lua?',
        alternativas: ['A. Neil Armstrong', 'B. Yuri Gagarin', 'C. Alan Shepard', 'D. John Glenn'],
        respostaCorreta: 'A'
    },
    {
        pergunta: 'Qual é a maior cadeia de montanhas do mundo?',
        alternativas: ['A. Andes', 'B. Alpes', 'C. Himalaias', 'D. Pirineus'],
        respostaCorreta: 'C'
    }
];

let perguntaAtual = 0;
let acertos = 0;
let erros = 0;

function exibirPergunta() {
    if (perguntaAtual < perguntas.length) {
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

        // Desabilitar o botão "Próxima" enquanto não responder
        document.getElementById('nextBtn').disabled = true;
    } else {
        exibirResultado();
    }
}

function verificarResposta(indice) {
    const pergunta = perguntas[perguntaAtual];
    const letraResposta = String.fromCharCode(65 + indice); // A, B, C, D
    const alternativas = document.querySelectorAll('#alternativas li');
    
    if (letraResposta === pergunta.respostaCorreta) {
        acertos++;
        alternativas[indice].classList.add('correct'); // Luz verde
        alternativas[indice].textContent += " - Você acertou!";
    } else {
        erros++;
        alternativas[indice].classList.add('incorrect'); // Luz vermelha
        alternativas[indice].textContent += " - Você errou!";
    }

    // Habilita o botão "Próxima"
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    perguntaAtual++;
    exibirPergunta();
}

function exibirResultado() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('acertos').textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas!`;
    document.getElementById('erros').textContent = `Você errou ${erros} de ${perguntas.length} perguntas!`;
}

function reiniciarQuiz() {
    perguntaAtual = 0;
    acertos = 0;
    erros = 0;
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('resultado').style.display = 'none';
    exibirPergunta();
}

window.onload = () => {
    exibirPergunta();
};
