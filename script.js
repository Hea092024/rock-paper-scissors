// console.log("Hello World")

function getComputerChoice () {
    let choices = ["Rock", "Scissors","Paper"]
    // console.log(choices)
    return choices [Math.floor(Math.random() * choices.length)]
};

getComputerChoice();
// console.log(getComputerChoice())

function getHumanChoice() {
    let input = prompt ("Pick your choice:\n1 - Rock\n2 - Paper\n3 - Scissors\nPlease enter 1, 2, or 3:");

    if (input === '1' || input === '2' || input ==='3'){
        return input;
    } else {
        alert("Invalid choice! Please enter 1, 2 or 3.")
        return null;
    }
    // console.log(input)
}

// getHumanChoice() //commented out to prevent prompt to pop up all the time
// console.log(getHumanChoice())