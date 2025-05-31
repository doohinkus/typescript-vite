import { question } from "./question";

// Constants for DOM element IDs
const DOM_IDS = {
  QUESTION: "question",
  ANSWER: "answer",
  SCORE: "score",
  FEEDBACK: "feedback",
  CHECK_ANSWER: "check_answer"
} as const;

// Types
interface QuestionResult {
  num1: number;
  num2: number;
  activeOperator: string;
  answer: number;
}

interface QuizState {
  score: number;
  currentQuestion: QuestionResult;
  feedback: string;
}

// Initial state
const state: QuizState = {
  score: 0,
  currentQuestion: question.generateRandomQuestion(),
  feedback: ""
};

// Helper functions
const getElement = <T extends HTMLElement>(id: string): T | null => {
  const element = document.getElementById(id);
  if (!element) {
    console.warn(`Element with id "${id}" not found`);
    return null;
  }
  return element as T;
};

const updateElementText = (id: string, text: string): void => {
  const element = getElement<HTMLElement>(id);
  if (element) {
    element.textContent = text;
  }
};

export function displayQuestion(): void {
  const { num1, num2, activeOperator } = state.currentQuestion;
  updateElementText(DOM_IDS.QUESTION, `${num1} ${activeOperator} ${num2} = ?`);
}

export function checkAnswer(): void {
  const responseInput = getElement<HTMLInputElement>(DOM_IDS.ANSWER);
  if (!responseInput) return;

  const userAnswer = parseInt(responseInput.value);
  const { answer } = state.currentQuestion;

  state.feedback = userAnswer === answer
    ? "Correct!"
    : `Incorrect. The correct answer is ${answer}.`;

  if (userAnswer === answer) {
    state.score++;
  }

  updateElementText(DOM_IDS.FEEDBACK, state.feedback);
  updateElementText(DOM_IDS.SCORE, `Score: ${state.score}`);

  state.currentQuestion = question.generateRandomQuestion();
  displayQuestion();
  responseInput.value = "";
}

export function setupQuiz(): void {
  const checkAnswerButton = getElement<HTMLButtonElement>(DOM_IDS.CHECK_ANSWER);
  if (checkAnswerButton) {
    checkAnswerButton.addEventListener("click", checkAnswer);
  }
}
