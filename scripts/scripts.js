const resultDiv = document.querySelector("#results");
const buttons = document.querySelectorAll("#player-choice");
const resetButton = document.querySelector("#reset");

resultDiv.setAttribute("style", "white-space: pre;");

gameRound = 0;
playerWinsCount = 0;
computerWinsCount = 0;

function getComputerChoice() {
  const randomNumber = Math.ceil(Math.random() * 3);

  return randomNumber === 1
    ? "Rock"
    : randomNumber === 2
    ? "Paper"
    : "Scissors";
}

function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

function resetGame() {
  resultDiv.textContent = "";
  gameRound = 0;
  playerWinsCount = 0;
  computerWinsCount = 0;

  buttons.forEach((button) => {
    button.toggleAttribute("disabled");
  });

  resetButton.toggleAttribute("hidden");
}

function announceWinner() {
  if (gameRound === 4) {
    alert(
      playerWinsCount > computerWinsCount
        ? "You are the Winner!"
        : playerWinsCount < computerWinsCount
        ? "You lose!"
        : "Draw!"
    );

    buttons.forEach((button) => {
      button.toggleAttribute("disabled");
    });

    resetButton.toggleAttribute("hidden");
  }
}

function playRound(playerSelection, computerSelection) {
  const capitalizedPlayerSelection = capitalize(playerSelection);

  if (computerSelection === "Rock") {
    if (capitalizedPlayerSelection === "Rock") {
      resultDiv.textContent += "\r\nA tie!";
    } else if (capitalizedPlayerSelection === "Paper") {
      resultDiv.textContent += "\r\nYou win! Paper beats Rock";
      playerWinsCount++;
    } else {
      resultDiv.textContent += "\r\nYou lose! Rock beats Scissors";
      computerWinsCount++;
    }
  } else if (computerSelection === "Paper") {
    if (capitalizedPlayerSelection === "Rock") {
      resultDiv.textContent += "\r\nYou lose! Paper beats Rock";
      computerWinsCount++;
    } else if (capitalizedPlayerSelection === "Paper") {
      resultDiv.textContent += "\r\nA tie!";
    } else {
      resultDiv.textContent += "\r\nYou win! Scissors beats Paper";
      playerWinsCount++;
    }
  } else {
    if (capitalizedPlayerSelection === "Rock") {
      resultDiv.textContent += "\r\nYou win! Rock beats Scissors";
      playerWinsCount++;
    } else if (capitalizedPlayerSelection === "Paper") {
      resultDiv.textContent += "\r\nYou lose! Scissors beats Paper";
      computerWinsCount++;
    } else {
      resultDiv.textContent += "\r\nA tie!";
    }
  }

  gameRound++;
}

resetButton.addEventListener("click", resetGame);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.textContent, getComputerChoice(), announceWinner());
  });
});
