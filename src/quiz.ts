let score = 0;
let currentQuestion = generateQuestion();
let feedback = "";

function randomInteger(integer: number): number {
  return Math.floor(Math.random() * integer) + 1;
}

function generateQuestion() {
  const operators = ["×", "÷"];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  let num1, num2;

  if (operator === "×") {
    num1 = randomInteger(10);
    num2 = randomInteger(10);
  } else {
    num2 = randomInteger(10);
    num1 = num2 * randomInteger(10);
  }

  return { num1, num2, operator };
}

export function displayQuestion() {
  const questionElement = document.getElementById("question");
  if (questionElement) {
    questionElement.textContent = `${currentQuestion.num1} ${currentQuestion.operator} ${currentQuestion.num2} = ?`;
  }
}

export function checkAnswer() {
  const answer = document.getElementById("answer") as HTMLInputElement;
  const userAnswer = parseFloat(answer.value);
  const scoreField = document.getElementById("score");
  let correctAnswer;

  if (currentQuestion.operator === "×") {
    correctAnswer = currentQuestion.num1 * currentQuestion.num2;
  } else {
    correctAnswer = currentQuestion.num1 / currentQuestion.num2;
  }

  const feedbackElement = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedback = "Correct!";
    score++;
  } else {
    feedback = `Incorrect. The correct answer is ${correctAnswer}.`;
  }
  if (feedbackElement) {
    feedbackElement.textContent = feedback;
  }
  if (scoreField) {
    scoreField.textContent = `Score: ${score}`;
  }
  currentQuestion = generateQuestion();
  displayQuestion();
  answer.value = "";
}

export function setupQuiz() {
  if (document.getElementById("check_answer")) {
    document
      .getElementById("check_answer")
      ?.addEventListener("click", checkAnswer);
  }
}
