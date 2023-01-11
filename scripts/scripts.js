const resultDiv = document.querySelector("#results");
const buttons = document.querySelectorAll("button");

resultDiv.setAttribute("style", "white-space: pre;");

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
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.textContent, getComputerChoice());
  });
});
