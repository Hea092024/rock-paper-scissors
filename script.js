// console.log("Hello World")

function getComputerChoice () {
    let choices = ["Rock", "Scissors","Paper"]
    // console.log(choices)
    return choices [Math.floor(Math.random() * choices.length)]
};

getComputerChoice();
// console.log(getComputerChoice())