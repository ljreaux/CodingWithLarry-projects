import generateButtons from "./gameLogic";
import "./style.css";
import { wordList } from "./wordList";

export const allowedGuesses = 10;
const selectRandomWord = () =>
  wordList[Math.floor(Math.random() * wordList.length)];
export const word = selectRandomWord();

export const wordContainer = document.querySelector("#word-container")!;

for (let i = 0; i < word.length; i++) {
  const letter = document.createElement("span");
  if (word[i] !== " ") letter.classList.add("letter");
  else letter.classList.add("space");
  wordContainer.appendChild(letter);
}

generateButtons();
