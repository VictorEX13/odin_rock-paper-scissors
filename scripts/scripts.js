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
