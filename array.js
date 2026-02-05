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
