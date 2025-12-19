let questions = [
  {
    question: "What is the capital of Japan?",
    options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
    answer: "Tokyo",
  },
  {
    question: "Which gas do plants absorb?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    answer: "Carbon Dioxide",
  },
  {
    question: "What is 10 + 5?",
    options: ["12", "13", "14", "15"],
    answer: "15",
  },
  {
    question: "Which planet is known as the Blue Planet?",
    options: ["Earth", "Neptune", "Mars", "Venus"],
    answer: "Earth",
  },
];

let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 20;
let selectedAnswer = null;

const questionText = document.getElementById("question-text");
const answerOptions = document.getElementById("answer-options");
const feedback = document.getElementById("feedback-message");
const timerDisplay = document.getElementById("timer");
const submitBtn = document.getElementById("submit-answer");
const nextBtn = document.getElementById("next-question");
const finalScore = document.getElementById("final-score");

function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

function startTimer() {
  timeLeft = 20;
  timerDisplay.textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      feedback.textContent = "Time's up!";
      feedback.style.color = "red";
      submitBtn.style.display = "none";
      nextBtn.style.display = "inline-block";
    }
  }, 1000);
}

function displayQuestion() {
  selectedAnswer = null;
  feedback.textContent = "";
  submitBtn.style.display = "inline-block";
  nextBtn.style.display = "none";

  clearInterval(timer);
  startTimer();

  let q = questions[currentIndex];
  questionText.textContent = q.question;

  answerOptions.innerHTML = "";
  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("answer-btn");

    btn.onclick = () => selectAnswer(btn, option);

    answerOptions.appendChild(btn);
  });
}

function selectAnswer(button, answer) {
  selectedAnswer = answer;

  document.querySelectorAll(".answer-btn").forEach((btn) => {
    btn.style.background = "#f3f3f3";
  });

  button.style.background = "#cde3ff";
}

function checkAnswer() {
  if (!selectedAnswer) {
    alert("Please select an answer!");
    return;
  }

  clearInterval(timer);

  let correctAnswer = questions[currentIndex].answer;

  if (selectedAnswer === correctAnswer) {
    feedback.textContent = "Correct! ✓";
    feedback.style.color = "green";
    score++;
  } else {
    feedback.textContent = "Wrong! ✗ Correct answer: " + correctAnswer;
    feedback.style.color = "red";
  }

  submitBtn.style.display = "none";
  nextBtn.style.display = "inline-block";
}

function nextQuestion() {
  currentIndex++;

  if (currentIndex >= questions.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
}

function endQuiz() {
  document.querySelector("main").style.display = "none";
  finalScore.style.display = "block";
  finalScore.textContent = `Your final score: ${score}/${questions.length}`;
}

function startQuiz() {
  shuffleQuestions();
  currentIndex = 0;
  score = 0;

  document.querySelector("main").style.display = "block";
  finalScore.style.display = "none";

  displayQuestion();
}

submitBtn.onclick = checkAnswer;
nextBtn.onclick = nextQuestion;

startQuiz();
