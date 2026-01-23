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


