//inicia game

function removeInit() {
  const primaryScreen = document.getElementById("primary-screen");
  const secondaryScreen = document.getElementById("secondary-screen");
  primaryScreen.classList.add("hidden");
  secondaryScreen.classList.remove("hidden");
}

const initGame = document.getElementById("init-game");
initGame.addEventListener("click", removeInit);

const questions = [
  {
    question: "Qual é a prevalência estimada de autismo na população mundial?",
    answers: ["1 em 1000", "1 em 100", "1 em 10"],
    correctAnswer: 1,
    id: 1,
  },
  {
    question: "Qual é o gênero mais afetado pelo autismo??",
    answers: ["Masculino", "Feminino", "Não há diferença de gênero"],
    correctAnswer: 0,
    id: 2,
  },
  {
    question: "Qual é a idade mais comum para o diagnóstico de autismo?",
    answers: ["6 meses", "2 anos", "6 anos"],
    correctAnswer: 1,
    id: 3,
  },
  {
    question: "Qual é a causa mais comum de comportamento repetitivo em pessoas com autismo?",
    answers: ["Ansiedade", "Tédio", "Estimulação sensorial"],
    correctAnswer: 2,
    id: 4,
  },
  {
    question: "Qual é o método de comunicação preferido para algumas pessoas com autismo?",
    answers: ["Linguagem de sinais", "Comunicação aida por computadossistr", "Comunicação verbal"],
    correctAnswer: 1,
    id: 5,
  },
  {
    question: "Qual é a diferença entre autismo de alto funcionamento e autismo de baixo funcionamento?",
    answers: ["Nenhum, são os mesmos.", "Autismo de alto funcionamento é quando a pessoa tem um QI alto e boa habilidade de linguagem, enquanto o autismo de baixo funcionamento é quando a pessoa tem um QI baixo e dificuldade de linguagem.", "Autismo de alto funcionamento é quando a pessoa tem boa habilidade de linguagem, enquanto o autismo de baixo funcionamento é quando a pessoa tem dificuldade de linguagem e habilidades motoras limitadas."],
    correctAnswer: 2,
    id: 6,
  },
];

let currentQuestionIndex = 0;

// Função para exibir a pergunta atual
function displayQuestion() {
  const questionContainer = document.getElementById("quiz-container");
  questionContainer.innerHTML = "";

  const questionElement = document.createElement("p");
  questionElement.textContent = questions[currentQuestionIndex].question;
  questionContainer.appendChild(questionElement);

  const answerContainer = document.createElement("div");
  questionContainer.appendChild(answerContainer);

  const answers = questions[currentQuestionIndex].answers;
  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = i;
    radio.classList.add("radio-button"); // Adiciona a classe "radio-button" ao botão de rádio
    answerContainer.appendChild(radio);

    const label = document.createElement("label");
    label.textContent = answer;
    label.classList.add("answer-label"); // Adiciona a classe "answer-label" à etiqueta do texto
    answerContainer.appendChild(label);

    const lineBreak = document.createElement("br");
    answerContainer.appendChild(lineBreak);
  }
  nextButton.classList.add("hidden");
}

let hitCount = 0;
let errorCount = 0;

function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (selectedAnswer) {
    const answerIndex = parseInt(selectedAnswer.value);

    if (answerIndex === questions[currentQuestionIndex].correctAnswer) {
      Swal.fire("Bom trabalho!", "Resposta Correta!", "success");
      hitCount++; // contador de acertos
      console.log(hitCount);

    } else {
      Swal.fire({
        icon: "error",
        title: "Lamentamos",
        text: "Resposta errada!",
      });
      errorCount++; // contador de erros
      console.log(errorCount);
    }

    const checkButton = document.getElementById("check-answer");
    checkButton.classList.add("hidden");

    const nextButton = document.getElementById("next-question");
    nextButton.classList.remove("hidden");

    displayAnswerSummary(currentQuestionIndex, answerIndex); // Exibe o resumo da resposta

  } else {
    Swal.fire("Por favor, selecione uma resposta.");
  }

}

// Função para exibir o resumo da resposta
function displayAnswerSummary(questionIndex, answerIndex) {
  const answerSummaryContainer = document.getElementById("answer-summary");
  const question = questions[questionIndex];
  answerSummaryContainer.classList.remove("hidden")

  const summaryElement = document.createElement("div");
  summaryElement.classList.add("answer-summary-item");

  const correctAnswerElement = document.createElement("p");
  correctAnswerElement.textContent = `Resposta correta: ${question.answers[question.correctAnswer]}`;
  summaryElement.appendChild(correctAnswerElement);

  const explanationElement = document.createElement("p");
  explanationElement.textContent = getExplanation(question.id -1);
  summaryElement.appendChild(explanationElement);

  answerSummaryContainer.appendChild(summaryElement);
}

// Função para obter a explicação com base no ID da pergunta
function getExplanation(questionId) {
  switch (questionId) {
    case 0:
      return "A prevalência estimada de autismo na população mundial é de 1 em 100. Isso significa que aproximadamente 1% da população mundial tem algum grau de autismo. O autismo é considerado um transtorno do espectro autista, o que significa que existem variações significativas nos sintomas e no grau de funcionamento das pessoas com autismo.";
    case 1:
      return "O gênero mais afetado pelo autismo é o masculino. Estudos demonstraram consistentemente que o autismo é mais comum em meninos do que em meninas. No entanto, isso não significa que as meninas não possam ter autismo. O autismo pode ser subdiagnosticado em meninas devido a diferenças na manifestação dos sintomas.";
    case 2:
      return "A idade mais comum para o diagnóstico de autismo é por volta dos 2 anos de idade. No entanto, é importante ressaltar que o diagnóstico pode ser feito em idades mais precoces, como 18 meses, se os sintomas forem evidentes. Quanto mais cedo o diagnóstico e a intervenção adequada forem realizados, melhores serão as oportunidades de desenvolvimento da criança.";
    case 3:
      return "A causa mais comum de comportamento repetitivo em pessoas com autismo é a estimulação sensorial. Pessoas com autismo podem apresentar hipersensibilidade ou hiposensibilidade sensorial, o que pode resultar em comportamentos repetitivos como bater as mãos, balançar o corpo, entre outros. Esses comportamentos podem ajudar a modular ou lidar com a estimulação sensorial excessiva ou insuficiente.";
    case 4:
      return "O método de comunicação preferido para algumas pessoas com autismo é a comunicação assistida por computador (CAC). A CAC envolve o uso de dispositivos eletrônicos, como tablets ou computadores, para auxiliar na comunicação. Esses dispositivos podem ter aplicativos ou softwares específicos que permitem que a pessoa com autismo se comunique por meio de texto, símbolos ou imagens.";
    case 5:
      return "A diferença entre autismo de alto funcionamento e autismo de baixo funcionamento é que o autismo de alto funcionamento é quando a pessoa tem boa habilidade de linguagem, enquanto o autismo de baixo funcionamento é quando a pessoa tem dificuldade de linguagem e habilidades motoras limitadas. No entanto, é importante ressaltar que o funcionamento do indivíduo com autismo não se resume apenas à linguagem e habilidades motoras, e que o espectro autista abrange uma ampla variedade de características e desafios individuais.";
    default:
      return "";
  }
}

// new code
// Função para avançar para a próxima pergunta
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();

    const checkButton = document.getElementById("check-answer");
    checkButton.classList.remove("hidden");

    const nextButton = document.getElementById("next-question");
    nextButton.classList.add("hidden");
    clearAnswerSummary();
  } else {
    nextButton.classList.add("hidden");
    finishGame();
    Swal.fire({
      title: 'Fim do Quiz!',
      text: 'Obrigado por ter chegado até aqui.',
      imageUrl: './img/autism-heart.png',
      imageWidth: 300,
      imageHeight: 234,
      imageAlt: 'Coração de quebra-cabeça com cores do autismo.',
    })
    clearAnswerSummary();
  }
  
}

// Adicionar eventos aos botões
const checkButton = document.getElementById("check-answer");
checkButton.addEventListener("click", checkAnswer);

const nextButton = document.getElementById("next-question");
nextButton.addEventListener("click", nextQuestion);



// Exibir a primeira pergunta
displayQuestion();


//Limpa resumo

function clearAnswerSummary() {
  const answerSummaryContainer = document.getElementById("answer-summary");
  while (answerSummaryContainer.firstChild) {
    answerSummaryContainer.removeChild(answerSummaryContainer.firstChild);
  }
  answerSummaryContainer.classList.add("hidden");
}

//Fim de jogo
function finishGame() {
  const questionContainer = document.getElementById("quiz-container");
  questionContainer.classList.add("hidden");
  const tertiaryScreen = document.getElementById("tertiary-screen");
  tertiaryScreen.classList.remove("hidden");
  let finishPage = document.createElement("div");
  finishPage.innerHTML = `<div class="container d-flex flex-column align-items-center justify-content-center"><h4>Fim de Jogo. <div>Placar: ${hitCount} acerto(s), ${errorCount} erro(s).</div></h4><p>Obrigado por participar.</p></div>`;
  tertiaryScreen.appendChild(finishPage);
  const quarteraryScreen = document.getElementById("quarterary-screen")
  quarteraryScreen.classList.remove("hidden");

}

//contador de acertos
//sem uso por enquanto
/*
function hitCounter() {
  if (hitCount < questions.length) {
    console.log("Vc nao acertou todas as questoes");
  }
}
*/