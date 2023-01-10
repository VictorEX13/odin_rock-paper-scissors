function getComputerChoice() {
  const randomNumber = Math.ceil(Math.random() * 3);

  return randomNumber === 1
    ? "Rock"
    : randomNumber === 2
    ? "Paper"
    : "Scissors";
}
