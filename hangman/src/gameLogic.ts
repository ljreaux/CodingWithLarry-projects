import createSVG from "./createSVG";
import { allowedGuesses, word, wordContainer } from "./main";
let incorrectGuesses = -1;
const app = document.querySelector<HTMLDivElement>("#app")!;
export default function generateButtons() {
  const firstRowLetters = "qwertyuiop".split("");
  const secondRowLetters = "asdfghjkl".split("");
  const thirdRowLetters = "zxcvbnm".split("");

  const buttons = [];
  const firstRow = generateRow(firstRowLetters);
  const secondRow = generateRow(secondRowLetters);
  const thirdRow = generateRow(thirdRowLetters);
  buttons.push(firstRow, secondRow, thirdRow);

  const buttonContainer = document.querySelector("#button-container")!;
  buttonContainer.append(...buttons);
}

const generateRow = (arr: string[]) => {
  const row = document.createElement("div");
  row.classList.add("row");
  arr.forEach((letter) => {
    const button = document.createElement("button");
    button.textContent = letter;
    button.value = letter;
    button.addEventListener("click", () => {
      const guess = button.value;
      checkGuess(guess);
      button.disabled = true;
      createSVG(incorrectGuesses);
    });
    row.appendChild(button);
  });
  return row;
};

const checkGuess = (currentGuess: string) => {
  const correctWord = word.toLowerCase();
  console.log(correctWord);
  const indexes: number[] = [];

  const isInWord = correctWord.includes(currentGuess);
  if (!isInWord) {
    incorrectGuesses++;
    if (incorrectGuesses >= allowedGuesses) {
      const losingMessage = `You Lose! Press the button to play again.
      The word was ${word}.`;
      const paragraph = document.createElement("p");
      paragraph.textContent = losingMessage;
      const restartButton = document.createElement("button");
      restartButton.textContent = "Play again";
      restartButton.addEventListener("click", () => {
        location.reload();
      });
      app.appendChild(paragraph);
      app.appendChild(restartButton);
      disableButtons();
    }
    return;
  }

  for (let i = 0; i < correctWord.length; i++) {
    if (correctWord[i] === currentGuess) {
      indexes.push(i);
    }
  }

  const children = wordContainer.childNodes;

  indexes.forEach((index) => {
    children[index].textContent = currentGuess.toUpperCase();
    (children[index] as HTMLElement).classList.add("correct");
  });

  const winner = Array.from(children).every((child) =>
    (child as HTMLElement).className.includes("correct")
  );

  if (winner) {
    const winningMessage = "You Win! Press the button to play again.";
    const paragraph = document.createElement("p");
    paragraph.textContent = winningMessage;
    const restartButton = document.createElement("button");
    restartButton.textContent = "Play again";
    restartButton.addEventListener("click", () => {
      location.reload();
    });
    app.appendChild(paragraph);
    app.appendChild(restartButton);
    disableButtons();
  }
};

function disableButtons() {
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    row.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
  });
}
