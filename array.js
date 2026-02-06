// Array -- Hold multiple values at same time
// ["Mobile", "Laptop", "Tablet", 5000, 25, 588]
// ["a", "b", "Hello"]
// [2, 4, 5, 6]
 
// create
// variable_name = [values]
let arr = [1, 2, 3, 4];
 
// access
// position = [0 1 2 3]
// access
// array_name[position / index]
arr[0]
 
// modify
// array_name[position] = new value
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
 
 
// Array Methods:
// push, pop, shift, unshift, splice, slice, reverse, sort
// push --> enter new value into array -- place it into last
 
let a = [1, 2, 3, 4, 5];
 
// variable || function.method --> koi variable ke function in pachh
a.push(700, 200);
a.pop();
 
// use case -- enter new producats into existing producats list
 
 
// pop --> remove last value into array
 
let b = [10, 20, 30, 40];
b.pop(1);
b.push(50);
b.shift(2);
 
// use case -- remove last producat you add into your list
 
// shift -- remove first value into Array
 
let c = [10, 20, 30, 40];
c.shift();
// use case -- remove old producat automatic after sometimes
 
 
// unshift -- add value into array -- first
 
let d = [52, 35, 65, 85];
d.unshift(20, 25);
 
// use case -- add a value into top of that data you receive
 
// splice - remove value into array -- specific position and
// specific number of values
 
// into () - first index(position), how many value you want to remove
 
let e = [50, 60, 30, 40, 10];
e.splice(1, 4);
// e.splice(3, 0, 50, 100)
 
let E = ["red", "green", "blue", "yellow"];
E.splice(1, 2);
 
// use case -- select msg and remove multiple msg at on click
 
 
// slice - copy values from array -- specific position and
// specific number of values
 
// new variable = array_name.slice(start index, end index)
// start index -- include into copy
// end index -- not include into copy
 
let f = [100, 50, 25, 0];
temp_f = f.slice(1,3);
// let new_f = f.slice(1, 3);
 
let F = ["red", "green", "blue", "yellow"];
F.slice(1, 2);
 
// use case -- copy specific data and save it into new variable
// generate a report based on data and generate a file or save the
 
 
// reverse -- reverse value of array
 
let g = [25, 30, 35, 40, 85];
// g.reverse();
 
let G = [100, 250, 400, 350];
G.reverse();
 
// use case -- show latest update first into your fronted
 
 
// sort -- set into ascending order
 
let h = [50, 20, 80, 10, 40];
// h.sort();
 
let H = [100, 250, 400, 350];
H.sort();
H.reverse().sort();
 
let h1 = [11, 62, 3, 4, 25];
let sr = h1.sort(function(a, b){
    return a - b; // ascending order
})
 
let tasks = ['Wake up', 'Brush teeth'];
tasks.push("buy milk");
 
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();
 
let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift();
 
let playlist = ['Song B', 'Song C'];
playlist.unshift('song A');
 
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1, 1, 'john', 'sara');
 
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1, 2);
 
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekday = days.slice(5, 8);
 
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();
 
let scores = [45, 12, 78, 34, 89];
scores.sort();
 
let prices = [199, 49, 999, 299, 149];
let pri = prices.sort(function(a, b){
    return a - b; // ascending order
})
 
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let pro = products.splice(0, 3);
 
let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse(). push('final steps');
 
let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push('Inception')
movies.shift()
movies.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
 
let nums1 = [1, 2, 3, 4];
nums1.splice(1, 2);
 
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);
 
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();
 
let arr1 = ['x', 'y', 'z'];
arr1.splice(1, 0, 'new');
 
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);
 
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());
 
// For Each Loop
// for Each -- Array ni darek value mate loop chalse
 
let i = [10, 35, 40, 68];
 
i.forEach((val) => {
    let new_val = val + 10;
    console.log(new_val);
});
 
[5, 58, 42, "Hello"].forEach(val => {
    let new_arr = val + 2;
    console.log(new_arr)
});

// For Each Loop
// for Each -- Array ni darek value mate loop chalse
let j = [10, 35, 40, 68];

j.forEach((val) => {
  let new_val = val + 10;
  console.log(new_val);
});

[5, 58, 42, "Hello"].forEach(val => {
  let new_arr = val + 2;
  console.log(new_arr);
});

// .map() Method:
// map tyare j use karvu ke jyare ek new array create karvo chhe
// first map create a black array -- only for understanding

let data = [10, 20, 50, 40, 15];

// same like a for each loop but map return a new array
let temp_data = data.map((val) => {
  if (val > 20) {
    return val;
  }
});

// new array ma store karva hoy
// if you want to show only electronics producat on your homepage

let marks = [10, 5, 20, 25, 15];

let final_marks = marks.map((val) => {
  if (val == 5) {
    return val + 4;
  }
  return val;
});

// filter
// filter tyare use karvu ke jyare ek new array create karvo chhe with condition
// in return true/false
// if true --> add into new array
// if else(false) --> not add into new array

let laptops_price = [15000, 20000, 30000, 65000, 99000, 45000];

let expensive_laptops = laptops_price.filter((price) => {
  if (price > 30000) return true;
  console.log(laptops_price);
});

// use case -- data ma thi specific data new array ma store karvo hoy based on condition
// ex. product ma thi specific price na producat new array ma store karva hoy
// if you want to show only expensive producat on your homepage
// if you want to filter producat based on price

let product_type = ["Mobile", "Tablet", "Laptop", "Mouse", "Keyborad"];

let filter_product_type = product_type.filter((type) => {
  if (type === "Tablet" || type === "Mobile") return true;
  console.log(product_type);
});

// reduce
// reduce tyare j use karvu ke jare ek single value calculate karvi hoy from array

let total_price = [10, 68, 45, 58, 52, 48];

let final_price = total_price.reduce((accumulator, val) => {
  return accumulator + val;
}, 0); // intial value of accumulator

// 0 + 10 => 10
// 10 + 68 => 78
// 78 + 45 => 123

console.log("Final Price :", final_price);
// accumulator --> je value function ma retun thase
// te accumulator ma store thase --> accumulator name
// change kari sako cho
// val --> array ni darek value

// find
// find tyare j use karvu ke jare array mathi ek value find karvi hoy based on condition
// find() return kare che array no element --> callback no return value nahi
// never returns what you return inside it
// returns the array element itself -- not return array
// .find() stops at the first match
// It does not continue looping

let product = ["Laptop", "Mobile", "Tablet", "Desktop", "Smart Watch"];

let find_product = product.find((item) => {
  console.log("can't find product"); // not working why??

  if (item === "Tablet") {
    return true;
  } else if (item === "Desktop") {
    return true;
  } else {
    return "Not Found";
  }
});

// find vs filter
// Real-life Scenario: Shopping Mall Security
// your are a security guard at a shopping mall
// chack the list of visitors

let people = ["John", "Sara", "Mike", "Anna", "David", "Sara"];

// find --> you are looking for the first person named "Sara" in the list
// and stop searching (Pehli var j male, bas e j and Anagal check j na kare)

let person = people.find((name) => name === "Sara");
console.log(person);

//filter --> you want to find all visitors named "sara" in the list (all data check kare and list na end sudhi check kare)
let Allsara = people.filter((name) => name === "Sara");
console.log(Allsara);

//eaxmple 2: books bus for travel
// some
// check kare chhe ke array ma koi pan ek item 
// codition satisfy kare chhe ke nahi
// condition true aave tyare stop kare
// some() vs find() --> some() can't return you value
// its return true or false, find() return value of array 
// give ans in true and false
let marks1 = [10, 20, 35, 80];
let any = marks1.some( (val) => {
    if (val > 85) return 12;
    // if (val < 85) return "need improvement";
});

// use case -- check if some product are out of stock
// in your cart


// every
// check kare chhe ke array ma baddha j items
// condition satisfy kare chhe ke nahi
// true -- baha items condition match kare
// false -- ek pan fail thay to

let def = [20, 30, 40, 50];
let num = def.every(function(val){
    return val < 60;
})

// use case --> check all student is pass or not
// some(), find(), filter(), every()
// let products = ["Tablet", "Mobile", "Laptop", "Mobile"]
// use case --> check all student is pass or not
// some(), find(), filter(), every()
// let products = ["Tablet", "Mobile", "Laptop","Mobile"]
// method --> condition --> output
// .some()   --> item === "Mobile" --> true
// .find()   --> item === "Mobile" --> "Mobile"
// .filter() --> item === "Mobile" --> ["Mobile",
// "Mobile"]
// .every()  --> item === "Mobile" --> false

// Destructuring oprator -- give value to variable
// (ex. we don't use every time arr1[1], just save it 
// into variable let [ ,k] = arr1)
let arr4 = [1, 2, 3, 4, 5]
let [ , , k] = arr4; // --> destructuring
// let [j, , k] = arr;
console.log(k);
let user_data = ["text", "text@gmail.com", "Male", "Surat"]


// spread oprator -- copy value from main array
let arr8 = [1, 2, 3, 4, 5, 6, 7];
// let arr4 = arr3 ; // - just give reference not 
// copy value(when you change into arr4 that will be 
// change arr3 too)
// let arr9 = [...arr8];
// ... --> rest --> into function
// ... --> spred --> into Array and Object


// Examples of array:-

// 1 Double daily steps count
// Real life: Fitness app doubling step goal

const step = [1000, 2000, 3000];

function doubleSteps(step) {
  return step * 2;
}

const newSteps = steps.map(doubleSteps);

// 2. Convert minutes to seconds
// Real life: Video duration calculation

const minutes = [1, 5, 10];

const seconds = minutes.map(function(min) {
  return min * 60;
});

// 3. Add ₹50 delivery charge to prices
// Real life: Food delivery app

const price = [200, 350, 500];

const finalPrices = prices.map(price => price + 50);

// 4. Convert exam marks to grades
// Real life: Result system

const mark = [35, 72, 88, 40];

function getGrade(mark) {
  return mark >= 40 ? 'Pass' : 'Fail';
}

const grades = marks.map(getGrade);

// 5. Capitalize names
// Real life: Display usernames properly

const names = ['rahul', 'neha', 'amit'];

const formattedNames = names.map(name =>
  name[0].toUpperCase() + name.slice(1)
);

// 6. Apply 10% discount
// Real life: Shopping sale

const price1 = [500, 1000, 1500];

function applyDiscount(price) {
  return price - price * 0.10;
}

const discounted = price1.map(applyDiscount);

// 7. Add bonus points to scores based on condition
// Real life: Game scoring system

const scores1 = [45, 60, 85];

const finalScores = scores.map(score => {
  if (score >= 80) return score + 20;
  if (score >= 50) return score + 10;
  return score;
});

// 8. Convert temperatures with formula
// Real life: Weather app

const celsius = [0, 20, 30];

function toFahrenheit(temp) {
  return (temp * 9/5) + 32;
}

const fahrenheit = celsius.map(toFahrenheit);

// 9. Generate table of numbers
// Real life: Math learning app

const numbers = [1, 2, 3, 4];

const tableOfTwo = numbers.map(num => num * 2);

// 10. Combine map with string formatting
// Real life: SMS notification system

const balances = [500, 1200, 300];

const messages = balances.map(balance =>
  `Your balance is ₹${balance}`
);


// JavaScript .filter() Method Example:

// 1. Get even numbers
// **Real life:** Find even roll numbers

const numbers1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers1.filter(num => num % 2 === 0);

// 2. Filter adults
// **Real life:** Allow only 3+ users

const ages = [2, 1, 10, 16, 5];
function isAdult(age) {
  return age >= 18;
}
const adults = ages.filter(isAdult);

// 3. Remove empty items
// **Real life:** Clean user input

const inputs = ['Hello', '', 'World', '', 'JS'];
const validInputs = inputs.filter(text => text !== '');

// ### 4. Filter passing marks
// **Real life:** Exam result system

const marks2 = [35, 72, 88, 40, 25];
const passedStudents = marks2.filter(mark => mark >= 40);

// 5. Get affordable prices
// **Real life:** Shopping app price filter

const prices2 = [199, 499, 999, 1499, 299];
const affordable = prices2.filter(price => price <= 500);

// 6. Filter long words
// **Real life:** Search keyword validation

const words = ['hi', 'hello', 'javascript', 'ok'];
function isLongWord(word) {
  return word.length > 3;
}
const longWords = words.filter(isLongWord);

// 7. Filter positive numbers
// **Real life:** Bank transaction validation

const transactions = [200, -100, 500, -50, 300];
const credits = transactions.filter(amount => amount > 0);

// 8. Filter numbers within a range
// **Real life:** Score selection

const scores3 = [45, 60, 85, 30, 90];
const selectedScores = scores3.filter(score => score >= 50 && score <= 90);

// JavaScript .reduce() Method Example:

// ### 1. Total money in wallet
// **Real life:** Add all cash amounts

const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);

// 2
const steps3 = [3000, 5000, 4000, 6000];
function addSteps(total, step) {
  return total + step;
}
const weeklySteps = steps3.reduce(addSteps, 0);

// 3
const prices3 = [499, 299, 199];
const totalPrice = prices.reduce((total, price) => total + price, 0);

// 4
const marks3 = [45, 88, 67, 92];
const highest = marks3.reduce((max, mark) => {
  return mark > max ? mark : max;
}, marks[0]);

// 5
const words1 = ['Hi', 'Hello', 'JS'];
const totalChars = words1.reduce((count, word) => count + word.length, 0);

// 6
const words2 = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words2.reduce((text, word) => text + ' ' + word);

// 7
const marks4 = [35, 72, 88, 40, 25];
const passCount = marks4.reduce((count, mark) => {
  return mark >= 40 ? count + 1 : count;
}, 0);

// 8
const transactions1 = [1000, -200, -300, 500];
const finalBalance = transactions1.reduce((balance, amount) => balance + amount, 0);

// 9
const items = ['Pen', 'Book', 'Pencil'];
const result1 = items.reduce((text, item) => text + ', ' + item);