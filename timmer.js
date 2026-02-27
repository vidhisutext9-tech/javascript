// setTimeout, cleartimeout

// setTime ---> run only one time
// timeout -- in ms
setTimeout(() => {
    console.log("hello");
}, 2000);

// setInterval, ClearInterval
// setInterval ---> run into loop(infinte times)
let timmer = setInterval(() => {
    console.log("hi, set interval");
}, 2000);


//counter

let number = 0;
let num_counter = setInterval (() => {
    if (number <=10) {
        console.log(number);
    }
},1000);


// popup window
let button = document.querySelector("button");
let card = document.querySelector(".card");
setTimeout(() => {
    card.style.display = "block";
}, 5000);

button.addEventListener("click", () => {
  card.style.display = "none";
});