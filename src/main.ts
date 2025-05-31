import "./style.css";
import { displayQuestion, setupQuiz } from "./quiz";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1>Math Quiz: Multiplication and Division</h1>
    <div class="question" id="question"></div>
    <input type="text" id="answer" placeholder="Your answer">
    <button id="check_answer">Submit</button>
    <div class="feedback" id="feedback"></div>
    <div class="score" id="score"></div>
`;

setupQuiz();
displayQuestion();
