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
    return capitalizedPlayerSelection === "Rock"
      ? "A tie!"
      : capitalizedPlayerSelection === "Paper"
      ? "You win! Paper beats Rock"
      : "You lose! Rock beats Scissors";
  } else if (computerSelection === "Paper") {
    return capitalizedPlayerSelection === "Rock"
      ? "You lose! Paper beats Rock"
      : capitalizedPlayerSelection === "Paper"
      ? "A tie!"
      : "You win! Scissors beats Paper";
  } else {
    return capitalizedPlayerSelection === "Rock"
      ? "You win! Rock beats Scissors"
      : capitalizedPlayerSelection === "Paper"
      ? "You lose! Scissors beats Paper"
      : "A tie!";
  }
}
