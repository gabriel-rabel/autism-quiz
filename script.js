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
  },
  {
    question: "Qual é o gênero mais afetado pelo autismo??",
    answers: ["Masculino", "Feminino", "Não há diferença de gênero"],
    correctAnswer: 0,
  },
  {
    question: "Qual é a idade mais comum para o diagnóstico de autismo?",
    answers: ["6 meses", "2 anos", "6 anos"],
    correctAnswer: 1,
  } /*
  {
    question: "Qual é a causa mais comum de comportamento repetitivo em pessoas com autismo?",
    answers: ["Ansiedade", "Tédio", "Estimulação sensorial"],
    correctAnswer: 2
  },
  {
    question: "Qual é o método de comunicação preferido para algumas pessoas com autismo?",
    answers: ["Linguagem de sinais", "Comunicação aida por computadossistr", "Comunicação verbal"],
    correctAnswer: 1
  },
  {
    question: "Qual é a diferença entre autismo de alto funcionamento e autismo de baixo funcionamento?",
    answers: ["Nenhum, são os mesmos.", "Autismo de alto funcionamento é quando a pessoa tem um QI alto e boa habilidade de linguagem, enquanto o autismo de baixo funcionamento é quando a pessoa tem um QI baixo e dificuldade de linguagem.", "Autismo de alto funcionamento é quando a pessoa tem boa habilidade de linguagem, enquanto o autismo de baixo funcionamento é quando a pessoa tem dificuldade de linguagem e habilidades motoras limitadas."],
    correctAnswer: 2
  }*/,
];

let currentQuestionIndex = 0;

// Função para exibir a pergunta atual
function displayQuestion() {
  const questionContainer = document.getElementById("quiz-container");
  questionContainer.innerHTML = ""; //chama o container html

  const questionElement = document.createElement("p");
  questionElement.textContent = questions[currentQuestionIndex].question;
  questionContainer.appendChild(questionElement);

  const answerContainer = document.createElement("div");
  questionContainer.appendChild(answerContainer); //cria a div para questões

//teste novo contatiner


//teste novo container


  const answers = questions[currentQuestionIndex].answers;
  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i]; //exibe as pergunrtas em laço
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = i;
    answerContainer.appendChild(radio);

    const label = document.createElement("label");
    label.textContent = answer;
    answerContainer.appendChild(label);

    const lineBreak = document.createElement("br");
    answerContainer.appendChild(lineBreak);
  }
  nextButton.classList.add("hidden");
}


// Função para verificar a resposta
let hitCount = 0;
let errorCount = 0;
function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (selectedAnswer) {
    const answerIndex = parseInt(selectedAnswer.value);

    if (answerIndex === questions[currentQuestionIndex].correctAnswer) {
      Swal.fire("Bom trabalho!", "Resposta Correta!", "success");
      hitCount++; //contador de acertos
      console.log(hitCount);
    } else {
      Swal.fire({
        icon: "error",
        title: "Lamentamos",
        text: "Resposta errada!",
      });
      errorCount++; //contador de erros
      console.log(errorCount);
    }

    const checkButton = document.getElementById("check-answer");
    checkButton.classList.add("hidden");

    const nextButton = document.getElementById("next-question");
    nextButton.classList.remove("hidden");
  } else {
    Swal.fire("Por favor, selecione uma resposta.");
  }
}

// Função para avançar para a próxima pergunta
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();

    const checkButton = document.getElementById("check-answer");
    checkButton.classList.remove("hidden");

    const nextButton = document.getElementById("next-question");
    nextButton.classList.add("hidden");
  } else {
    nextButton.classList.add("hidden");
    finishGame();
    alert("Fim do Quiz!");
  }
}

// Adicionar eventos aos botões
const checkButton = document.getElementById("check-answer");
checkButton.addEventListener("click", checkAnswer);

const nextButton = document.getElementById("next-question");
nextButton.addEventListener("click", nextQuestion);

// Exibir a primeira pergunta
displayQuestion();

//Newlogic
//Fim de jogo
function finishGame() {
  const questionContainer = document.getElementById("quiz-container");
  questionContainer.classList.add("hidden");
  const tertiaryScreen = document.getElementById("tertiary-screen");
  tertiaryScreen.classList.remove("hidden");
  let finishPage = document.createElement("div");
  finishPage.innerHTML = `<div class="container d-flex flex-column align-items-center justify-content-center"><h1>Fim de Jogo. <div>Placar: ${hitCount} acerto(s), ${errorCount} erro(s).</div></h1><p>Aqui levará a página final ao acabar o game.</p></div>`;
  tertiaryScreen.appendChild(finishPage);
}

//contador de acertos
//sem uso por enquanto
function hitCounter() {
  if (hitCount < questions.length) {
    console.log("Vc nao acertou todas as questoes");
  }
}
