// Control Flow Statements in JavaScript

// If-Else Statement (if, if else, if else-if else)
// if (condition) {} --> condition true hoy to {} code run

if (12 < 13) {
    console.log(true);
}

if (15 < 13) {
    console.log(true);
} // condition is false that why if statement not run

if (!12) { //(12 = true  !12 = false)
    console.log("number");
}

if (!0) {
    console.log("number");
}

// if-else statement

if (12 < 13) {
    console.log(true);
} else {
    console.log(false);
}

if (15 < 13) {
    console.log(true);
} // condition is false that why if statement not run
else {
    console.log(false); // if if statement condition is false then run this code
}

if (!12) {
    console.log("number");
} else {
    console.log("Not A Number");
}

if (!0) {
    console.log("number");
} else {
    console.log("Not A Number");
}

// if-else if-else Statement
/*
if (condition) {
} else if (condition) {
} else{
}
*/

let loggedin = true;
let admin = false;

if (loggedin && admin) {
    console.log("welcome admin");
} else if (loggedin) {
    console.log("welcome user");
} else {
    console.log("go to login page");
}

let water = true;
let rain = true;

if (water && rain) {
    console.log("Its a rainy day");
} else if (water) {
    console.log("Its a water day");
} else {
    console.log("Its a summer day");
}

// Switch case Statement

switch ("BOGO") // value --> Case value sathe match karshe ane code run thase
{
    case "First50":
        console.log("50% Off on First Order");
        break;

    case "BOGO":
        console.log("Buy one get one");
        break;

    case "BlackFriday":
        console.log("It's Black Friday Sale - get at Rs. 50");
        break;

    default:
        console.log("Offer Not Vaild");
}

switch ("Red")
{
    case "Red":
        console.log("Stop");
        break;

    case "Yellow":
        console.log("Get Ready");
        break;

    case "Green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}


// Early Return Pattern
function score(value) {
    if (value > 90) {
        return "Value is more than 90";
    } else if (value > 80) {
        return "Value is more than 80";
    } else if (value > 70) {
        return "Value is more than 70";
    } else if (value > 60) {
        return "Value is more than 60";
    } else {
        return "Value is more than 60";
    }
}

//score(65);
    console.log(score(75))

// function score1(value) {
//     if (value > 90) return "Value is more than 90";
//     else if (value < 80) return "Value is less than 80";
//     else if (value < 70) return "Value is less than 70";
//     else if (value < 60) return "Value is less than 60";
//     else return "Value is less than 60"
// }

// score1(80);
//     console.log(score1(80))


// Javascript Controlflow Ex:


// Example:1
let x = 2;

switch (x) {
    case 2:
        console.log("Two");
        break;

    case 3:
        console.log("Three");
        break;
}

//Exmple:2
function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A+";
    } else if (score >= 80 && score <= 89) {
        return "A";
    } else if (score >= 70 && score <= 79) {
        return "B";
    } else if (score >= 60 && score <= 69) {
        return "C";
    } else if (score >= 33 && score <= 59) {
        return "D";
    } else if (score >= 0 && score <= 32) {
        return "Fail";
    } else {
        return "Invalid Marks";
    }
}

console.log(getGrade(95)); // A+
console.log(getGrade(72)); // B
console.log(getGrade(20)); // Fail
console.log(getGrade(120)); // Invalid Marks

//Example:3
function playGame(player1, player2) {
    if (player1 === player2) {
        return "Draw";
    } else if (
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "paper" && player2 === "rock") ||
        (player1 === "scissors" && player2 === "paper")
    ) {
        return player1;
    } else {
        return player2;
    }
}

console.log(playGame("rock", "scissors"));   // rock
console.log(playGame("paper", "rock"));      // paper
console.log(playGame("scissors", "paper"));  // scissors
console.log(playGame("rock", "rock"));       // Draw



