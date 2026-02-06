// Array - Hold multiple values at same time
// ["Mobile", "Laptop", "Tablet", 5000, 25, 588]
// ["a", "b", "Hello"]
// [2, 4, 5, 6]
// create
// variable_name = [values]
let arr4 = [1, 2, 3, 4];
// access
// position = [0123]
// access
// array_name [position / index]
arr4[0]
// modify
// array_name [position] = new value
arr4[0] = 10;
arr4[1] = 20;
arr4[2] = 30;
arr4[3] = 40;

// Array Methods:
// push, pop, shift, unshift, splice, slice, reverse, sort
// push -> enter new value into array -place it into last
let a = [1, 2, 3, 4, 5];
// variable || function.method --> koi variable ke function in pachhal value add karva mate
a.push(700);
console.log(a);

// pop --> remove last value into array
let b = [10, 20, 30, 40];
b.pop();
console.log(b);

//example-self:1
let product = ["iphone15","iphone16","iphone17","iphone18"];
//remove the product
// use case -remove last producat you add into your list
product.pop();
console.log(product);

//add the value
// use case -enter new probucats into existing producats list
product.push("iphone19","iphone20");
console.log(product);

//shift -- remove first value into Array
let c = [30, 40, 50, 60];
c.shift();
console.log(c);


// unshift add value into array first
let d = [52, 35, 65, 85];
 d.unshift(20);
console.log(d);

// example-self:2
//remove at the first
// use case remove old producat automatic after sometimes
product.shift();
console.log(product);
//add at the first
// use case add a value into top of that data you receive -
product.unshift("iphone21");
console.log(product);

// splice remove value into array --specific position and specific number of values
// into () -first index(position), how many value you want to remove
let e = [50, 60, 30, 40, 10];
e.splice(3, 2);
 //e.splice(3, 0, 50, 100)

// use case select msg and remove multiple msg at on click
// slice -copy values from array specific position and specific number of values
// new variable array_name.slice(start index,end index) 
 // start index --include into copy
// end index -- not include into copy
let f = [100, 50, 25, 0];
let new_f = f.slice(0, 2);
console.log(f);

//example-self:3
// use case select msg and remove multiple msg at on click
let message1 =["hi","hello","good","bye"];
message1.splice(1,3);
console.log(message1);
//hi print thay

// generate a report based on date and generate a file or save the file into your local machine
// splice vs slice

// splice remove value into main array or modify new array
// use case -- copy specific data and save it into new variable
let message2 =["hi","hello","good","bye"];
let msg= message2.slice(0,2);
console.log(msg);
//hi,hello print thay

//e.splice(0,3);
//console.log(e);
// slice - copy value from main array and create a new array that hold the value that you can into I


// reverse -reverse value of array
let g = [25, 30, 35, 40, 85];
// g.reverse();


// sort -- set into ascending order
let h = [50, 20, 80, 10, 40];
//h.sort();

//example-self:3
// use case show latest update first into your fronted
let i =[500,700,300,200];
i.reverse();

let i1 =[5000,7000,3000,2000];
//i1.sort();

// use case show latest update first into your fronted
//i1.sort().reverse();


let h1 = [11, 62, 3, 4, 25];
let sr = h1.sort
    (function(a, b){
    return a - b; // ascending order -
})

//ARRAY
//5
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
//students.splice(1,1);
// students.splice(1,1);
// students.slice(0,1);
students.splice(1,1,'john','sara');
//6
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1,2);

//7
let days1 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekday = days1.slice(5,8);

//8
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();

//9
let scores = [45, 12, 78, 34, 89];
scores.sort();

//10
let prices = [199, 49, 999, 299, 149];
let prices111 = prices111.sort
(function(a,b){
    return a-b;
})

//11
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let pro = products.splice(0,3);

//12
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
colors.splice(2, 1, 'Purple', 'Orange')

//13
let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse().push('final round');

//14
let names = ['alice', 'Bob', 'charlie', 'David'];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

//15
let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push("inseption");
movies.shift();
movies.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

// movies.push("inspection").shift().sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

//17
let nums1 = [1, 2, 3, 4];
nums1.splice(1, 2);

//18
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);

//19
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();

//21
let arr1 = ['x', 'y', 'z'];
arr1.splice(1, 0, 'new');

//23
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);

//24

//25
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());

// For Each Loop
// for Each --Array ni darek value mate loop chalse
let i5= [10, 35, 40, 68];
i5.forEach((val) => {
let new_val = val + 10;
console.log(new_val);
});
// //answer:20, 45, 50,78

[5, 58, 42, "Hello"].forEach (val =>{
let new_arr = val + 2;
console.log(new_arr)
})
//answer:7, 60, 44, hello2

//.map() Method:
// map tyare j use karvu ke jyare ek new array create karvo chhe
// first map create a black array -- only for understanding
let data = [10, 20, 50, 40, 15];
// same like a for each loop but map return a newarray
let temp_data = data.map((val)=>{
if (val >= 5 ){
return val;
}
});
console.log(temp_data); 

//new array ma store karva hoy
// if you want to show only electronics producat on your homepage
let marks = [10, 5, 20, 25, 15]
let final_marks = marks.map((val) => {
if(val == 5) {
return val + 4;
}
return val;
});
console.log(final_marks); 
//answer:[10, 9, 20, 25, 15]

// filter
// filter tyare use karvu ke jyare ek new array create karvo chhe with condition
// in return true/false
// if true --> add into new array
// if else(false) --> not add into new array
let laptops_price = [15000, 20000, 30000, 65000, 99000, 45000];
let expensive_laptops = laptops_price.filter((price)=> {
     if (price > 30000) return true;
});
console.log(expensive_laptops); 
//answer:[65000, 99000, 45000]

// je value 30000 thi vadhare chhe te new array ma
//add thase and briji value ne array ma add nahi kare

// use case data ma thi specific data new array ma store karvo hoy band off condetion
// ex. poduct ma thi specific price na producat new array ma store karva hoy
// if you want to show only expensive producat on your homepage
// if you want to filter producat based on price
let product_type = ["Mobile", "Tablet", "Laptop", "Mouse", "Keyborad"];
let filter_product_type = product_type.filter((type)=>{
if (type === "Tablet" || type == "Mobile") 
    return true;
});
console.log(filter_product_type); 

// reduce
// reduce tyare j use karvu ke jare ek single value calculate karvi hoy from array

let total_price = [1, 3, 5, 7, 10];
//let total_price = [10, 68, 45, 58, 52, 48];
let final_price = total_price.reduce((accumulator,val) => {
return accumulator + val;
}, 0); // intial value of accumulator
// theta + 10 =>10
// 18 + 68 =>78
// 78 + 45 =>123
console.log("Final Price:", final_price);

// find
// find tyare j use karvu ke jare array mathi ek value find karvi hoy based on condition
// find() return kare chhe array no element > callback no return value nahi
// never returns what you return inside it
// returns the array element itself not return array
//.find() stops at the first match
// It does not continue looping
let product1 = ["Laptop", "Mobile", "Tablet", "desktop", "Smart Watch"];

let find_product1 = product1.find((item) => {
console.log("can't find product"); // not working why??
    if (item == "Tablet") {   
        return true;
    } else if (item == "Smart Watch") {
        return true;
    } else {
        return false;
    }
    });
console.log(filter_product_type); 
//answer: 3 times: can't find product
// 2 times: ['Mobile', 'Tablet']


// find vs filter
// Real-life Scenario: Shopping Mall Security
// your are a security guard at a shopping mall
// check the list of visitors
let people = ["John", "Sara", "Mike", "Anna",
"David", "Sara"];

// find ---> you are looking for the first person
// named "Sara" in the list and stop searching (Pehli

// var j male, bas e j and Anagal check ij na kare)
let person = people.find((name) => name === "Sara");
console.log(person)

//filter --> you want to find all visitors named "sara" in the list (all data check kare and list na end sudhi check kare)
let Allsara = people.filter((name) => name === "Sara");
console.log(Allsara);

//eaxmple 2: books bus for travel
// some
// check kare chhe ke array ma koi pan" ek item codition satisfy kare" chhe ke nahi
// condition true aave tyare stop kare
// some() vs find() --> some() can't return you value its return true or false, find() return value of array
// give ans in true and false
let marks2 = [10, 20, 35, 80];
let any =  marks2.some( (val) => {
if (val < 85) return 12;
// if (val < 85) return "need improvement";
});
//IF ANY 1 VALUE ADD THEN GIVE THE TRUE OTHERWISE FALSE..
// use case --check if some product are out of stock in your cart

// every
// check kare chhe ke array ma baddha j items
// condition satisfy kare chhe ke nahi
// true -- baha items condition match kare
// false -- ek pan fail thay to

let def = [20, 30, 40, 50];
let num = def.every(function(val){
    return val < 20;
})


// use case --> check all student is pass or not

// some(), find(), filter(), every()

// let products = ["Tablet", "Mobile", "Laptop","Mobile"]

// method --> condition --> output

//.some()   --> item === "Mobile" --> true
// .find()   --> item === "Mobile" --> "Mobile"
// .filter() --> item === "Mobile" --> ["Mobile",
// "Mobile"]

// .every()  --> item === "Mobile" --> false

// Destructuring operator -- give value to variable
// (ex. we don't use everytime arr4[1], just save it
// into variable let j, k) = arr1)

// let arr4 = [1, 2, 3, 4, 5]
// let [j, k] = arr4; // --> desthucturing
// //  let [j, , k] = arr4;
// console.log(k);

// let temp_a = arr4[4]
// let temp_b = arr4[2]
// let temp_c = arr4[1]
// let user_data = ["text","text@gmail.com","male","surat"]


// spread oprator --copy value from main array
let arr8 = [1, 2, 3, 4, 5, 6, 7];

// let arr4 = arr3; //just give reference not change arr3 too) copy value (when you change into arr4 that will be
let arr9 = [...arr8];
//... --> rest --> into function
//... --> spred --> into Array and Object


//excerise:day-8
//1.
const step1 = [1000, 2000, 3000];

function doubleStep(step1) {
  return step1 * 2;
}
const newSteps = step1.map(doubleStep);

//2
const minutes = [1, 5, 10];

const seconds = minutes.map(function(min) {
  return min * 60;
});

//3
const price1 = [200, 350, 500];
const finalPrices = price1.map(price1 => price1 + 50);


//4
const mark = [35, 72, 88, 40];

function getGrade(mark) {
  return mark >= 40 ? 'Pass' : 'Fail';
}

const grades = mark.map(getGrade);

//5
const names1 = ['rahul', 'neha', 'amit'];

const formattedNames = names1.map(names1 =>
  names1[0].toUpperCase() + names1.slice(1)
);

//6.
const price = [500, 1000, 1500];

function applyDiscount(price) {
  return price - price * 0.10;
}

const discounted = price.map(applyDiscount);

//7
const score = [45, 60, 85];

const finalScores = score.map(score => {
  if (score >= 80) return score + 20;
  if (score >= 50) return score + 10;
  return score;
});

//8
const celsius = [0, 20, 30];

function toFahrenheit(temp) {
  return (temp * 9/5) + 32;
}

const fahrenheit = celsius.map(toFahrenheit);

//9
const numbers111 = [1, 2, 3, 4];

const tableOfTwo = numbers111.map(num => num * 2);

//10
const balances = [500, 1200, 300];

const messages = balances.map(balance =>
  `Your balance is ₹${balance}`
);

//Day-08(2)"filter"
//1
const numbers1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers1.filter(num => num % 2 === 0);

//2
const ages = [2, 1, 18, 16, 5];
function isAdult(ages) {
  return ages >= 18;
}
const adults = ages.filter(isAdult);

//3
const inputs = ['Hello', '', 'World', '', 'JS'];
const validInputs = inputs.filter(text => text !== '');

//4
const marks1 = [35, 72, 88, 40, 25];
const passedStudents = marks1.filter(marks1 => marks1 >= 40);

//5
const price2 = [199, 499, 999, 1499, 299];
const affordable = price2.filter(price2 => price2 <= 500);

//6
const words = ['hi', 'hello', 'javascript', 'ok'];
function isLongWord(words) {
  return words.length > 3;
}
const longWords = words.filter(isLongWord);

//7
const transactions = [200, -100, 500, -50, 300];
const credits = transactions.filter(amount => amount > 0);

//8
const scores1 = [45, 60, 85, 30, 90];
const selectedScores = scores1.filter(scores1 => scores1 >= 50 && scores1 <= 90);

//Day-08(3)"reduce"
//1
const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);

//2
const step = [3000, 5000, 4000, 6000];
function addSteps(total, step) {
  return total + step;
}
const weeklySteps = step.reduce(addSteps, 0);

//3
const price11 = [499, 299, 199];
const totalPrice = price11.reduce((total, price11) => total + price11, 0);

//4
const marks11 = [45, 88, 67, 92];
const highest = marks11.reduce((max, marks11) => {
  return marks11 > max ? marks11 : max;
}, marks11[0]);

//5
const words11 = ['Hi', 'Hello', 'JS'];
const totalChars = words11.reduce((count, words11) => count + words11.length, 0);

//6
const words12 = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words12.reduce((text, words12) => text + ' ' + words12);

//7
const marks12 = [35, 72, 88, 40, 25];
const passCount = marks12.reduce((count, marks12) => {
  return marks12 >= 40 ? count + 1 : count;
}, 0);

//8
const transactions1 = [1000, -200, -300, 500];
const finalBalance = transactions1.reduce((balance, amount) => balance + amount, 0);

//10
const items = ['Pen', 'Book', 'Pencil'];
const result1 = items.reduce((text, items) => text + ', ' + items);


//day:8(map,filter,reduce)
//1
const numbers11 = [1, 2, 3, 4, 5, 6];
const evenNumbers11 = numbers11.filter(num => num % 2 === 0);

//2
const ages3 = [2, 1, 10, 16, 5];
function isAdult(ages3) {
  return ages3 >= 18;
}
const adults3 = ages3.filter(isAdult);

//3
const inputs1 = ['Hello', '', 'World', '', 'JS'];
const validInputs1 = inputs1.filter(text => text !== '');

//4
const marks4 = [35, 72, 88, 40, 25];
const passedStudents4 = marks4.filter(marks4 => marks4 >= 40);

//5
const prices2 = [199, 499, 999, 1499, 299];
const affordable2 = prices2.filter(prices2 => prices2 <= 500);

//6
const words2 = ['hi', 'hello', 'javascript', 'ok'];
function isLongWord(words2) {
  return words2.length > 3;
}
const longWords2 = words2.filter(isLongWord);

//7
const transactions2 = [200, -100, 500, -50, 300];
const credits2 = transactions2.filter(amount => amount > 0);

//8
const scores2 = [45, 60, 85, 30, 90];
const selectedScores2 = scores2.filter(scores2 => scores2 >= 50 && scores2 <= 90);

//day:08(task)
const prices11 = [50, 120, 300, 80, 200];

//filter,map,reduce
// ===============================
// MAP + FILTER + REDUCE PRACTICE
// ===============================

// Q1. Shopping App – Discounted Total
const prices112 = [200, 800, 1200, 450, 700];
const total1 = prices112
  .filter(prices112 => prices112 > 500)
  .map(prices112 => prices112 * 0.9)
  .reduce((sum, prices112) => sum + prices112, 0);
console.log('Q1 - Total to pay:', total1); // 2430

// --------------------------------------------------

// Q2. Fitness App – Total Active Minutes
const minutes1 = [20, 45, 60, 15, 90];
const totalCalories = minutes1
  .filter(min => min > 30)
  .map(min => min * 5)
  .reduce((total, cal) => total + cal, 0);
console.log('Q2 - Total calories burned:', totalCalories); // 975

// --------------------------------------------------

// Q3. Exam System – Average of Passed Marks
const marks111 = [35, 72, 88, 40, 25, 90];
const passed = marks111.filter(marks111 => marks111 >= 40);
const averagePassed = passed.reduce((sum, marks111) => sum + marks111, 0) / passed.length;
console.log('Q3 - Average of passed marks:', averagePassed); // 72.5

// --------------------------------------------------

// Q4. Salary System – Monthly Payout
const wages = [300, 800, 450, 1000, 600];
const totalPayout = wages
  .filter(wage => wage > 500)
  .map(wage => wage + 100)
  .reduce((total, wage) => total + wage, 0);
console.log('Q4 - Total payout:', totalPayout); // 2600

// --------------------------------------------------

// Q5. Online Course – Completion Points
const progress = [20, 50, 75, 40, 100];
const totalPoints = progress
  .filter(p => p >= 50)
  .map(p => p * 2)
  .reduce((sum, p) => sum + p, 0);
console.log('Q5 - Total points:', totalPoints); // 450

// --------------------------------------------------

// Q6. Bank Transactions – Final Balance
const transactions11 = [1000, -500, 2000, -300, 1500];
const creditedAmount = transactions11
  .filter(amount => amount > 0)
  .map(amount => amount * 1.02)
  .reduce((total, amount) => total + amount, 0);
console.log('Q6 - Final credited amount:', creditedAmount); // 4590

// --------------------------------------------------

// Q7. Game App – Final Score
const scores111 = [30, 60, 90, 45, 80];
const finalScore = scores111
  .filter(scores111 => scores111 > 50)
  .map(scores111 => scores111 + 10)
  .reduce((sum, scores111) => sum + scores111, 0);
console.log('Q7 - Final score:', finalScore); // 250

// --------------------------------------------------

// Q8. E-commerce – Total Taxed Amount
const prices22 = [500, 1200, 3000, 800, 1500];
const finalAmount = prices2
  .filter(prices22 => prices22 > 1000)
  .map(prices22 => prices22 * 1.18)
  .reduce((sum, prices22) => sum + prices22, 0);
console.log('Q8 - Final payable amount:', finalAmount); // 6746

// --------------------------------------------------

// Q9. Attendance System – Reward Points
const hours = [6, 8, 9, 7, 10];
const rewardPoints = hours
  .filter(hour => hour >= 8)
  .map(hour => hour * 10)
  .reduce((sum, point) => sum + point, 0);
console.log('Q9 - Total reward points:', rewardPoints); // 270

// --------------------------------------------------

// Q10. Interview Brain Teaser ⭐
const numbers = [1, 2, 3, 4, 5, 6];
const sumOfSquares = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * num)
  .reduce((sum, num) => sum + num, 0);
console.log('Q10 - Sum of squares of even numbers:', sumOfSquares); // 56

// ===============================
// MAP + FILTER + REDUCE – 20 PRACTICE
// ===============================

// Q1. Grocery Store – Total Cost
const prices1 = [50, 120, 300, 80, 200];
const totalCost = prices1
  .filter(p => p > 100)
  .map(p => p * 1.05)
  .reduce((sum, p) => sum + p, 0);
console.log('Q1 - Total cost:', totalCost); // 735

// --------------------------------------------------

// Q2. Fitness App – Weekly Calories
const minutes2 = [10, 25, 40, 15, 60];
const totalCalories2 = minutes2
  .filter(min => min >= 20)
  .map(min => min * 4)
  .reduce((sum, cal) => sum + cal, 0);
console.log('Q2 - Total calories:', totalCalories2); // 520

// --------------------------------------------------

// Q3. Exam Results – Total Passed Marks
const marks3 = [35, 55, 80, 20, 45];
const totalPassedMarks = marks3
  .filter(mark => mark >= 40)
  .reduce((sum, mark) => sum + mark, 0);
console.log('Q3 - Total passed marks:', totalPassedMarks); // 180

// --------------------------------------------------

// Q4. Bank App – Total Credits
const transactions4 = [500, -200, 1000, -300, 700];
const totalCredits = transactions4
  .filter(t => t > 0)
  .reduce((sum, t) => sum + t, 0);
console.log('Q4 - Total credits:', totalCredits); // 2200

// --------------------------------------------------

// Q5. Online Sale – Discounted Bill
const prices5 = [800, 1500, 3000, 600, 1200];
const totalPayable = prices5
  .filter(p => p > 1000)
  .map(p => p * 0.85)
  .reduce((sum, p) => sum + p, 0);
console.log('Q5 - Total payable amount:', totalPayable); // 5100

// --------------------------------------------------

// Q6. Attendance – Reward Points
const hours6 = [5, 7, 8, 6, 9];
const totalPoints6 = hours6
  .filter(h => h >= 7)
  .map(h => h * 10)
  .reduce((sum, p) => sum + p, 0);
console.log('Q6 - Total reward points:', totalPoints6); // 240

// --------------------------------------------------

// Q7. Delivery App – Total Distance
const distances7 = [3, 6, 10, 4, 8];
const totalDistance7 = distances7
  .filter(d => d > 5)
  .map(d => d + 1)
  .reduce((sum, d) => sum + d, 0);
console.log('Q7 - Total distance:', totalDistance7); // 26

// --------------------------------------------------

// Q8. Salary System – Final Salary
const salaries8 = [18000, 25000, 30000, 15000];
const totalSalary = salaries8
  .filter(s => s > 20000)
  .map(s => s + 2000)
  .reduce((sum, s) => sum + s, 0);
console.log('Q8 - Total salary payout:', totalSalary); // 59000

// --------------------------------------------------

// Q9. Study App – Total Study Time
const hours9 = [0.5, 1.5, 2, 0.75, 3];
const totalStudyMinutes = hours9
  .filter(h => h > 1)
  .map(h => h * 60)
  .reduce((sum, m) => sum + m, 0);
console.log('Q9 - Total study minutes:', totalStudyMinutes); // 390

// --------------------------------------------------

// Q10. Electricity Usage – Monthly Bill
const units10 = [80, 120, 200, 90, 150];
const totalBill = units10
  .filter(u => u > 100)
  .map(u => u * 6)
  .reduce((sum, b) => sum + b, 0);
console.log('Q10 - Total electricity bill:', totalBill); // 2820

// --------------------------------------------------

// Q11. Game Scores – Final Power Score
const scores11 = [30, 50, 90, 20, 70];
const totalPowerScore = scores11
  .filter(s => s > 40)
  .map(s => s * 2)
  .reduce((sum, s) => sum + s, 0);
console.log('Q11 - Total power score:', totalPowerScore); // 420

// --------------------------------------------------

// Q12. Travel App – Total Fare
const rides12 = [5, 12, 20, 8, 15];
const totalFare = rides12
  .filter(r => r > 10)
  .map(r => r + 50)
  .reduce((sum, r) => sum + r, 0);
console.log('Q12 - Total fare:', totalFare); // 147

// --------------------------------------------------

// Q13. Office Work – Productive Hours
const hours13 = [4, 6, 8, 5, 9];
const totalProductiveMinutes = hours13
  .filter(h => h >= 6)
  .map(h => h * 60)
  .reduce((sum, m) => sum + m, 0);
console.log('Q13 - Total productive minutes:', totalProductiveMinutes); // 1260

// --------------------------------------------------

// Q14. Shopping Cart – Reward Coins
const purchases14 = [300, 800, 1200, 400];
const totalCoins = purchases14
  .filter(p => p > 500)
  .map(p => 10)
  .reduce((sum, c) => sum + c, 0);
console.log('Q14 - Total coins earned:', totalCoins); // 20

// --------------------------------------------------

// Q15. Fuel App – Total Fuel Cost
const liters15 = [3, 6, 10, 4, 8];
const totalFuelCost = liters15
  .filter(l => l > 5)
  .map(l => l * 105)
  .reduce((sum, cost) => sum + cost, 0);
console.log('Q15 - Total fuel cost:', totalFuelCost); // 2940

// --------------------------------------------------

// Q16. Interview Classic – Sum of Cubes
const numbers16 = [1, 2, 3, 4, 5];
const sumOfCubes = numbers16
  .filter(n => n % 2 !== 0)
  .map(n => n ** 3)
  .reduce((sum, n) => sum + n, 0);
console.log('Q16 - Sum of cubes of odd numbers:', sumOfCubes); // 153

// --------------------------------------------------

// Q17. Performance Tracking – Bonus Points
const scores17 = [10, 20, 30, 40, 50];
const average17 = scores17.reduce((sum, s) => sum + s, 0) / scores17.length;
const totalBonusScore = scores17
  .filter(s => s > average17)
  .map(s => s + 5)
  .reduce((sum, s) => sum + s, 0);
console.log('Q17 - Total score with bonus:', totalBonusScore); // 110

// --------------------------------------------------

// Q18. Subscription App – Final Bill
const plans18 = [199, 399, 599, 299];
const totalBill18 = plans18
  .filter(p => p > 300)
  .map(p => p * 1.18)
  .reduce((sum, p) => sum + p, 0);
console.log('Q18 - Final subscription bill:', totalBill18); // 1181.18

// --------------------------------------------------

// Q19. Learning App – Achievement Score
const scores19 = [45, 60, 70, 30, 80];
const totalAchievementScore = scores19
  .filter(s => s >= 60)
  .map(s => s ** 2)
  .reduce((sum, s) => sum + s, 0);
console.log('Q19 - Total achievement score:', totalAchievementScore); // 15800

// --------------------------------------------------
// Q20. Interview Finisher ⭐
const numbers20 = [3, 6, 9, 10, 12];
const totalSum20 = numbers20
  .filter(n => n % 3 === 0)
  .map(n => n * 10)
  .reduce((sum, n) => sum + n, 0);
console.log('Q20 - Total sum:', totalSum20); // 300
