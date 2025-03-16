// console.log("Hello World")

let humanScore = 0;
let computerScore = 0;
let combinedChoice = humanScore + "-" + computerScore;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

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

  if (input === "1" || input === "2" || input === "3") {
    return input;
  } else {
    alert("Invalid choice! Please enter 1, 2 or 3.");
    return null;
  }
  // console.log(input)
}

// getHumanChoice() //commented out to prevent prompt to pop up all the time
// console.log(getHumanChoice())

function playRound(humanSelection, computerSelection) {
  switch (combinedChoice) {
    case "rock-paper":
      console.log("You Lose! Paper beats Rock");
      computerScore++;
    case "paper - scissors":
      console.log("You Lose! Scissors beats Paper");
      computerScore++;
      case "scissors - rock":
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
        break;
        case "rock-rock":
            case "scissor-scissor":
                case"paper-paper":
                console.log("Its a draw!");
                break;
                default:
                    console.log("You Win! " + humanScore + "beats" + computerScore);
                    humanScore++;
                    break;
  }
}
