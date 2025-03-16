// console.log("Hello World")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ["Rock", "Scissors", "Paper"];
  // console.log(choices)
  return choices[Math.floor(Math.random() * choices.length)];
}

getComputerChoice();
// console.log(getComputerChoice())

function getHumanChoice() {
  let input = prompt(
    "Pick your choice:\n1 - Rock\n2 - Paper\n3 - Scissors\nPlease enter 1, 2, or 3:"
  );

  if (input === "1") {
    return "Rock";
  } else if (input === "2") {
    return "Paper";
  } else if (input === "3") {
    return "Scissors";
  } else {
    alert("Invalid choice! Please enter 1, 2 or 3.");
    return null;
  }
  // console.log(input)
}

// getHumanChoice() //commented out to prevent prompt to pop up all the time
// console.log(getHumanChoice())

function playRound() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  let combinedChoice = humanSelection + "-" + computerSelection;

  switch (combinedChoice) {
    case "Rock-Paper":
      console.log("You Lose! Paper beats Rock");
      computerScore++;
      break;
    case "Paper-Scissors":
      console.log("You Lose! Scissors beats Paper");
      computerScore++;
      break;
    case "Scissors-Rock":
      console.log("You Lose! Rock beats Scissors");
      computerScore++;
      break;
    case "Rock-Rock":
    case "Scissors-Scissors":
    case "Paper-Paper":
      console.log("Its a draw!");
      break;
    default:
      console.log("You Win! " + humanSelection + " beats " + computerSelection);
      humanScore++;
      break;
  }
  //   return playRound(humanSelection, computerSelection);
}
playRound();