<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error: Uncaught ReferenceError: Cannot access 'nm' before initialization
(anonymous) @ variable.js:86Understand this error </p>
<p>Why : beacuse in let we have to defiend at the first that not correct way so give the error</p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error: undefined </p>
<p>Why : beacause there are defined before the variable declared </p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error:2 </p>
<p>Why : var is give the outside answer is from BLOCK scope</p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error:Inside: 20
                  :Outside: 10 </p>
<p>Why : beacuse we use let variable so they print GLOBAL variable in OUTSIDE  & in INSIDE variable print their BLOCK variable</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "aditi"}; </p>
on console.log
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error: user</p>
<p>Why : it gives you the const value user beacuse const value can not be changed , property change thay pan variable  ma e pan person nu e change nai thay pan property change thay sake em </p>
</div>

<!--day-2-->
<h3>Example 1 :</h3>
<p>true + false </p>
<p>Answer or Error: 1 </p>
<p>Why : beacuse that consider true means 1 and false means 0 so its sum of didgit is 1 </p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>null + 1 </p>
<p>Answer or Error: 1 </p>
<p>Why : it's consider null means 0 so goive the actual value of the second value</p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>"12" + 12 </p>
<p>Answer or Error:1212 </p>
<p>Why : beacuse it's combine string or number</p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>!! undefined</p>
<p>Answer or Error: false</p>
<p>Why : when there are !undefined that gives you true then there are two !! that refers that assign the not so its give you the false answer</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>"12" - 1 </p>
<p>Answer or Error: 11</p>
<p>Why : it's gives you subtraction of 12 -1 so 11</p>
</div>
 
<div>
<p> why typeof NaN --> number </p> 
<p>NaN is a failed number oprations that why that type is number</p>
<p> ex. "hello" + 5 --> NaN</p>
<p>Answer or Error: number </p>
<p>Why :NaN is a failed number oprations that why that type isnumber</p>
</div>
 
<div>
<p>Undefined vs Null</p>
<p>let x;</p>
<p>console.log(x);</p>
<p>let y = null;</p>
<p>console.log(y);</p>
<p>Answer or Error: 1.undefined 2.null </p>
<p>Why : 1. don't store any value so it return undefined, 2.it consider null value so return null </p>
</div>

<!--day-3-->

<div>
<h1>Example 1 :</h1>
<p>let x = 10;</p>
<p>let y = 20;</p>
<p>if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}</p>
<p>Answer or Error: Both are greater than 5  </p>
<p>Why : both conditions are true then give a first statement </p>
</div>

<div>
<h1>Example 2 :</h1>
<p>let isAdmin = true;</p>
<p>let isLoggedIn = false;</p>
<p>if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}</p>
<p>Answer or Error: Acess granted </p>
<p>Why : OR needs only one true vaaule</p>
</div>

<div>
<h1>Example 3 :</h1>
<p>let temp = 35;</p>
<p>if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}</p>
<p>Answer or Error: Pleasant day </p>
<p>Why : there are 35 is grater number but there are grater but ! sign means answer consider as second </p>
</div>

<div>
<h1>Example 4 :</h1>
<p>let a = 0;</p>
<p>if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}</p>
<p>Answer or Error: Falsy value </p>
<p>Why : statement A MEANS 0 so its consider false so take the second statement   </p>
</div>

<div>
<h1>Example 5 :</h1>
<p>let score = 78;</p>
<p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
<p>console.log("Grade:", grade);</p>
<p>Answer or Error: c </p>
<p>Why : there are 78 grater than equals to 70 so condition true then it prints c </p>
</div>

<div>
<h1>Example 6 :</h1>
<p>let points = 120;</p>
<p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
<p>console.log("Status:", status);</p>
<p>Answer or Error:  Gold</p>
<p>Why : there are first condition true beacause there are grater than 120 so </p>
</div>

<div>
<h1>Example 7:</h1>
<p>let loggedIn1 = true;</p>
<p>let hasToken = false;</p>
<p>let access = loggedIn1 && hasToken ? "Allow" : "Deny";</p>
<p>console.log("access:", access);</p>
<p>Answer or Error:deny  </p>
<p>Why : there are one false in && so give a second statement </p>
</div>

<div>
<h1>Example 8:</h1>
<p>let a = 5;</p>
<p>a++</p>
<p>console.log(a);</p>
<p>Answer or Error: 6 </p>
<p>Why : a++ in console log mandatory beacuse after we write that print 6, a++ so 5+1 = 6 that's reason  </p>
</div>

<div>
<h1>Example 9:</h1>
<p>let a = 8;</p>
<p>++a</p>
<p>console.log(a);</p>
<p>Answer or Error: 9  </p>
<p>Why : ++a in console log not mandatory beacuse after we write that print 9, ++a so 8+1 = 9 that's reason  </p>
</div>

<div>
<h1>Example 10:</h1>
<p>let b = 4;</p>
<p>let c = b++</p>
<p>console.log(b, c);</p>
<p>Answer or Error: 5 4  </p>
<p>Why : when there are in b we only declared the (postincrement) b++ but when we do the console that time that value print 5 and c have value 4 </p>
</div>

<div>
<h1>Example 11:</h1>
<p>let b = 4;</p>
<p>let c = ++b</p>
<p>console.log(b, c);</p>
<p>Answer or Error: 5 5 </p>
<p>Why :  when there are in b we only declared the preincrement ++b so b = 5 and c=5 beacuse it's consider without console log</p>
</div>

<div>
<h1>Example 12:</h1>
<p>let m = 10;</p>
<p>console.log(m--)</p>
<p>console.log(m);</p>
<p>Answer or Error: m-- = 10 , m=9 </p>
<p>Why : it's post decrement,so it's 1st show original value when it drecrese and then print 9 </p>
</div>

<div>
<h1>Example 13:</h1>
<p>let n = 5;</p>
<p>let result = n++ + ++n;</p>
<p>console.log(result);</p>
<p>Answer or Error:12  </p>
<p>Why :  it addition the post increment and pre incrment</p>
</div>

<div>
<h1>Example 14:</h1>
<p>let likes = 100;</p>
<p>function likePost(){
result ++likes;
}</p>
<p>console.log(likePost());</p>
<p>console.log(likes);</p>
<p>Answer or Error:error  </p>
<p>Why : function doesnt return anything, likes++ increase to 101 </p>
</div>

<div>
<h1>Example 15:</h1>
<p>let count = 5;</p>
<p>if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}</p>
<p>Answer or Error: Matched </p>
<p>Why :  </p>
</div>

<div>

<!--day-4-->
<h1>Example 1 :</h1>
<p>let x = 2;</p>
<p>switch(x){
   case 2:
   console.log("Two");
   case 3:
   console.log("Three");
}</P>
<p>Answer or Error: two  three </p>
<p>Why : it's simple print message </p>
<div>



<div>
<h1>Example 2 :</h1>
<p>Write a function getGrade(score) that:</p>
<p> Takes A student's score as input (0 to 100)</P>
<p>Returns the grade based on below logic:</P>
<p>90-100 A+</P>
<p>80-89 A</P>
<p>70-79 B</P>
<p>60-69 C</P>
<p>33-59 D</P>
<p>0-32 Fail</P>
<p>Anything Else Invalid Marks</P>
<p>Answer or Error: A+ </p>
<p>Why : when we write input value 95 its consider a+  </p>
<div>



<div>
<h1>Example 3 :</h1>
<p>Rock-Paper-Scissors:</p>
<p>rock - scissors --> rock</P>
<p>paper - rock --> paper</P>
<p>scissors - paper --> scissors</P>
<p>Answer or Error:  Rock scissors ne tori nakhe che (rock wins)
                    Paper rock ne cover kare che (paper wins)
                    Scissors paper ne kaapi nakhe che (scissors wins)</p>
<p>Why :  </p>
<div>

<div>
<h1>Example 1:</h1>
<p>Print number from 1 to 10 using a for loop.</p>
<p>for(let a = 1; a<=10;a++){
    console.log("loop",a);
    }
</p>
</div>

<div>
<h1>Example 2:</h1>
<p>Print number from 10 to 1 using while loop.</p>
<p>let a = 10;
while(a>=1){
    console.log(a);
    a--;
}
</P>
</div>

<div>
<h1>Example 3:</h1>
<p>Print even numbers from 1 to 20 using for loop.</p>
<p>for(let i=1; i<=20; i++){
    if(i%2 ===0){
    console.log(i);
    }
}</p>
</div>

<div>
<h1>Example 4:</h1>
<p>Print odd numbers from 1 to 15 using while loop.</p>
<p>let i= 1;</p>
<p>while(i<=15){
    if(i%2 !==0){ // or (i%2 ===1)
    console.log(i);
    }
    i++;
}</p>
</div>

<div>
<h1>Example 5:</h1>
<p>Print the multiplication table of 5.</p>
<p>
for(let i=1; i<=10; i++){
    console.log(`5 x ${i} = ${5*i}`);
}
</p>
</div>

<div>
<h1>Example 6:</h1>
<p>Find the sum of numbers from 1 to 100 using a loop.</p>
<p>
let sum = 0;
for(let i=1; i<=100; i++){
    // let sum =0;
    sum = sum + i;
    // console.log(sum);
}
console.log(sum);
</p>
</div>

<div>
<h1>Example 7:</h1>
<p>Print all numbers between 1 to 50 that are divisible by 3.</p>
<p>
for(let i=1; i<=50; i++){
    if(i%3 === 0){
        console.log(i);
    }
}
</p>
</div>

<div>
<h1>Example 8:</h1>
<p>Ask the user for a number and print whether each number from 1 to that number is even or odd.</p>
<p>
let num = prompt("give a number");
for(let i=1; i <=numl i++){
    if(i%2 ===0){
        console.log(i, " is even");
    }else{
        console.log(i, " is odd");
    }
}
</p>
</div>

<div>
<h1>Example 9:</h1>
<p>Count how many numbers between 1 to 100 are divisible by 3 or 5.</p>
<p>
for(let i=1; i<=100; i++){
    if(i%3 ===0 || i%5 ===0){
        console.log(i);
    }
}
</p>
</div>

<div>
<h1> (Break and Continue)Example 10:</h1>
<p>Stop at First Multiple of 7</p>
<p>Write a Loop from 1 to 100 that:</p>
<p>Prints Each number</p>
<p>Stop Completely when it finds the first number divisible by 7</p>
<p>
for(let i=1; i<=100; i++){
    console.log(i);
    if(i%7 ===0){
        break;
    }
}
</p>
</div>

<div>
<h1> (Break and Continue)Example 11:</h1>
<p>Skip Multiples of 3</p>
<p>Write a Loop From 1 to 20 that:</p>
<p>Skip number divisible by 3</p>
<p>Prints all other numbers</p>
<p>
for(let i=1; i<=20; i++){
    if(i%3 ===0){
        continue;
    }
    console.log(i);

}
</p>
</div>

<div>
<h1> (Break and Continue)Example 12:</h1>
<p>Print First 5 Odd Numbers</p>
<p>Write a loop from 1 to 100 that:</p>
<p>Prints only 5 odd numbers</p>
<p>Then stops the loop</p>
<p>Use Both if, continue and a counter + break</p>
<p>
count = 0;
for(let i =1; i<=100; i++){
    if(i%2 ===1){
        count++;
        console.log(i)
    }
    console.log(i);
    if(count ===5){cha
        break;
    }
}
</p>
</div>

<!--date:03/02/2026-->

## Function Examples
<hr>
<div>
<h1> Example 1: </h1>
<p>What's the difference between function declaration and function expression in terms of hoisting?</p>
<p>Answer or Error: function declaration is Fully hoisted and function expression is Only variable hoisted. </p>
</div>

<div>
<h1> Example 2: </h1>
<p>greet();</p>
<p>function greet(){
    console.log("Hello!");
}</p>
<p>Ans or Err: Hello!  and Why : it's using hosting function means function declaration use kre che</p>
</div>

<div>
<h1> Example 3: </h1>
<p>Convert normal function to Arrow Function</p>
<p>function add(a, b){
    return a + b;
}</p>
<p>function add=(a, b)=>{
    return a + b;
};</P>
<p>Ans:a = 5;
        b = 3;
        a+b;
        =8 
    And How: it's do addition of this arrow funcation </p>
</div>

<div>
<h1> Example 4: </h1>
<p>Identify what is parms and what is args</p>
<p>function welcome(name){
    console.log("Welcome " + name);
}</p>
<p>welcome("user");</p>
<p>Ans:params:name
        argument:user and why: function define parameter and function call time define argument. </p>
</div>

<div>
<h1> Example 5: </h1>
<p>how many parameters and args</p>
<p>function temp (a, b, c){
    console.log(a,b,c);
}</p>
<p>temp(1, 2)</p>
<p> Ans:parameters:3
        args:2
    ,Err:no error 
    and Why: argument ni under parameter missing che</p>
</div>

<div>
<h1> Example 6: </h1>
<p>Predict the output</p>
<p>function temp_user(name = "Guest"){
    console.log("Hello " + name);
}</p>
<p>temp_user();</p>
<p>Ans:Hello Guest,
 Err:no error
  and Why:deafault parameter che etle guest aave em</p>
</div>

<div>
<h1> Example 7: </h1>
<p>what is ... operator and why use it  in function</p>
<p>function number(...numbers){
    console.log(numbers);
}</p>
<p>number(1, 2, 3, 4, 5)</p>
<p>Ans:[1, 2, 3, 4, 5]
, Err:no error
 and why:REST operator che</p>
</div>

<div>
<h1> Example 8: </h1>
<p>Use rest Parameters to accept any number of scores and return the total</p>
<p>function calculateTotal(...scores){
    let total = 0;
    for(let i=0; i<=scores.length; i++){
        total += scores[i];
    }
    return total;
}</p>
<p>function calculateTotal(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
}</p>
<p>calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>let sumtotal = calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>Ans:1st nu output NaN & 2nd nu output 150
    , Err:1st ma error beacause of logical error 2nd no error 
    and Why:1ST ma less than qual to che jyre ema error aave che logical ni and 2nd ma rest parameter che je value add kare</p>
</div>

<div>
<h1> Example 9: </h1>
<p>Fix the function using early return</p>
<p>function checkAge(age){
    if(age < 18){
        console.log("Too Young");
    } else {
        console.log("Access Granted");
    }
}</p>
<p>Ans:checkAge(16);
 And how:Condition true hoy toh if
Condition false hoy toh else</p>

</div>

<div>
<h1> Example 10: </h1>
<p>What is the return value of above function</p>
<p>function f(){ return;}</p>
<p>Ans:function f() { 
    return; 
}
 and Why:return; koi value specify nathi karto ,Etle function default value undefined return kare che.</p>
</div>

<div>
<h1> Example 11: </h1>
<p>What does is mean when we say "functions are first-class citizens"?</p>
<p>Ans and Why </p>
</div>

<div>
<h1> Example 12: </h1>
<p>Can You assign a function to a variable and then all it?</p>
<p>let a = function(){console.log("Hello");}</p>
<p>a();</p>
</div>

<div>
<h1> Example 13: </h1>
<p>Pass A function into anthor funtion and excute it inside.</p>
<p>Ans and Why, How</p>
<p>function abcd(val){val()}</p>
<p>abcd(function(){ console.log("Hello")})</p>
</div>

<div>
<h1> Example 14: </h1>
<p>What is higer order function?</p>
<p>Ans and Why</p>
</div>

<div>
<h1> Example 16: </h1>
<p>pure or impure function?</p>
<p>let a = 5;</p>
<p>function num(num){
total += num;
}
<p>num(3);</p>
<p>Ans and Why</p>
</div>

<div>
<h1> Example 17: </h1>
<p>convert example 16 function into pure function?</p>
<p>Ans and how</p>
</div>

<div>
<h1> Example 18: </h1>
<p>What is Closure? When is it created?</p>
<p>Ans and Example</p>
</div>

<div>
<h1> Example 19: </h1>
<p>What's logged?</p>
<p>function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}</p>
<p>const counter = outer();</p>
<p>counter();</p>
<p>counter();</p>
<p>Ans, Err and Why</p>
</div>

<div>
<h1> Example 20: </h1>
<p>Convert below function into an IIFE:</p>
<p>function init(){
    console.log("Initialized");
}</p>
<p>Ans and Why</p>
</div>

<div>
<h1> Example 21: </h1>
<p>What is the use of IIFE? Name one real-world use case.</p>
<p>let fun=(function(){
    let score = 0; // this is private variable
    return{
        getScore: function(){
            console.log(score);
        },
        setScore: function(val){
            score = val;
        }
    }
})()</p>
<p>Ans and Why</p>
</div>

<div>
<h1> Example 22: </h1>
<p>What will be the output here and why?</p>
<p>temp_var();</p>
<p>var temp_var = function(){
    console.log("Hello");
}</p>
<p>Ans and Why</p>
</div>

<div>
<h1> Example 23: </h1>
<p>What will be the output here and why?</p>
<p>temp_var();</p>
<p>function temp_var(){
    console.log("Hello");
}</p>
<p>Ans and Why</p>
</div>

 <!--day:7(array)-->
 // Q1. push()
// You are building a to-do app. Add a new task 'Buy milk' to the tasks array.
let tasks = ['Wake up', 'Brush teeth'];
ans:task.push('Buy milk');
['Wake up', 'Brush teeth','Buy milk]
why:add the value into the end

// Q2. pop()
// Remove the last notification from the notifications array.
let notifications = ['Email', 'Message', 'Reminder'];
ans:notifications.pop();
['Email', 'Message']
why:remove the value into the end


// Q3. shift()
// A queue system removes the first customer. Remove the first customer.
let customers = ['Customer1', 'Customer2', 'Customer3'];
ans:customers.shift();
['Customer2', 'Customer3'];
why:remove the value into the first


// Q4. unshift()
// A new song is added to the beginning of the playlist.
let playlist = ['Song B', 'Song C'];
ans:playlist.unshift('Song A');
['Song A','Song B', 'Song C']
why:add the value into the first point

// Q5. splice()
// In a classroom list, remove 'Alex' and add 'John' and 'Sara' in the same position.
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
ans:students.splice(1,1,'john','sara');
['Mike', 'Emma', 'Sophia']--remove
['Mike', 'john', 'sara', 'Emma', 'Sophia']--remove and add
why:remove value into array--specific position and specific number of values

// Q6. splice()
// From the menu, remove 2 items starting from index 1.
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
ans:menu.splice(1,2);
['Burger','Salad']
why:remove value into array--specific position and specific number of values


// Q7. slice()
// Create a new array that contains only weekend days.
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
ans:let weekday = days1.slice(5,8);
['Saturday', 'Sunday']
why:copy values from array specific position and specific number of values


// Q8. reverse()
// Reverse the order of levels in a game.
let levels = ['Easy', 'Medium', 'Hard'];
ans:levels.reverse();
['Hard', 'Medium', 'Easy']
why: reverse the value 


// Q9. sort()
// Sort the scores in ascending order.
let scores = [45, 12, 78, 34, 89];
ans:scores.sort();
[12, 34, 45, 78, 89]
why: sort the value into assending.


// Q10. sort() with numbers
// Sort the prices from lowest to highest.
let prices = [199, 49, 999, 299, 149];
ans:let prices = [199, 49, 999, 299, 149];
let prices1 = prices.sort
(function(a,b){
    return a-b;
})
[49, 149, 199, 299, 999]
why: sort the value into lowest to highest.


// Q11. slice() vs splice()
// From the array, create a new array of the first 3 items WITHOUT changing the original array.
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
ans:let pro = products.splice(0,3);
why: first 3 value add...

// Q12. splice() complex
// In the array below:
// 1. Remove 'Blue'
// 2. Add 'Purple' and 'Orange' at the same position
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
ans:colors.splice(2, 1, 'Purple', 'Orange')
['Red', 'Green', 'Purple', 'Orange', 'Yellow']
why:remove the  2,1 and add the pruple into the orange..


// Q13. reverse() + push()
// Reverse the array and then add 'Final Step' at the end.
let steps = ['Step 1', 'Step 2', 'Step 3'];
ans:steps.reverse().push('final round');
['Step 3', 'Step 2', 'Step 1', 'final round']
why: first reverse the value and push the value into startinfg point..


// Q14. sort() strings
// Sort names alphabetically, ignoring case sensitivity.
let names = ['alice', 'Bob', 'charlie', 'David'];
ans: names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
['alice', 'Bob', 'charlie', 'David']
why: sorting with ignoring case..


// Q15. Combination Question
// You are managing a movie watchlist:
// 1. Add 'Inception'
// 2. Remove the first movie
// 3. Sort the list alphabetically
let movies = ['Avatar', 'Titanic', 'Gladiator'];
ans:movies.push("inseption");
    movies.shift();
    movies.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
['Gladiator', 'inseption', 'Titanic']
why: add alre remove kare and sorting kare

// Q16. splice() return value
// What does the splice method return in this case?
let nums1 = [1, 2, 3, 4];
nums1.splice(1, 2);
ans:[1, 4]
why:1 to 2 remove kare index etle 1 and 4 aave



// Q17. slice() immutability check
// After executing slice, does the original array change?
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);
ans:[20,30]
why:1 to 3 remove kare index etle 20 and 30 aave


// Q19. reverse() mutation
// After reversing, what happens to the original array reference?
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();
ans:['c', 'b', 'a']
why:reverse the letter


// Q21. splice() edge case
// What happens if deleteCount is 0?
let arr = ['x', 'y', 'z'];
arr.splice(1, 0, 'new');
ans:['x', 'new', 'y', 'z']
why: add value into index 1 that's new 


// Q23. slice() negative index
// What elements are returned?
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);
ans:[300, 400]
why: negative value start form last value that's -1 so count -3 and -1 ,,,-3 means300 -1 means 500 so give the 300 and 400 starting value print nai kare jyre ending value print kare em


// Q24. splice() vs slice() decision
// Which method would you use if you want to:
// a) Update the original array -->splice()-->beacuse they change the original array and slice don't change original array
// b) Keep the original array unchanged-->slice()--> keep original array and create snew array


// Q25. Chained methods (brain teaser)
// What is the final value of arr?
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());
ans:[2, 3, 1]
why: shift() --> removes first element-->[2,3]-->REMOVE THAY 1
    push() → adds element to the end-->[2,3,1]-->1 ADD THAY EM 

<!--DAY:08(01)""-->
1. Double daily steps count

Real life: Fitness app doubling step goal

const step = [1000, 2000, 3000];

function doubleSteps(step) {
  return step * 2;
}

const newSteps = step.map(doubleSteps);
answer:[2000, 4000, 6000]


2. Convert minutes to seconds

Real life: Video duration calculation

const minutes = [1, 5, 10];

const seconds = minutes.map(function(min) {
  return min * 60;
});
answer:[60, 300, 600]


3. Add ₹50 delivery charge to prices

Real life: Food delivery app

const prices = [200, 350, 500];

const finalPrices = prices.map(price => price + 50);
answer:[250, 400, 550]


4. Convert exam marks to grades

Real life: Result system

const mark = [35, 72, 88, 40];

function getGrade(mark) {
  return mark >= 40 ? 'Pass' : 'Fail';
}

const grades = mark.map(getGrade);
answer:['Fail', 'Pass', 'Pass', 'Pass']


5. Capitalize names

Real life: Display usernames properly

const names = ['rahul', 'neha', 'amit'];

const formattedNames = names.map(name =>
  name[0].toUpperCase() + name.slice(1)
);
answer:['Rahul', 'Neha', 'Amit']


6. Apply 10% discount

Real life: Shopping sale

const prices = [500, 1000, 1500];

function applyDiscount(price) {
  return price - price * 0.10;
}

const discounted = prices.map(applyDiscount);
answer:[450, 900, 1350]


7. Add bonus points to scores based on condition

Real life: Game scoring system

const scores = [45, 60, 85];

const finalScores = scores.map(score => {
  if (score >= 80) return score + 20;
  if (score >= 50) return score + 10;
  return score;
});
answer:[45, 70, 105]


8. Convert temperatures with formula

Real life: Weather app

const celsius = [0, 20, 30];

function toFahrenheit(temp) {
  return (temp * 9/5) + 32;
}

const fahrenheit = celsius.map(toFahrenheit);
answer:[32, 68, 86]


9. Generate table of numbers

Real life: Math learning app

const numbers = [1, 2, 3, 4];

const tableOfTwo = numbers.map(num => num * 2);
answer:[2, 4, 6, 8]


10. Combine map with string formatting

Real life: SMS notification system

const balances = [500, 1200, 300];

const messages = balances.map(balance =>
  `Your balance is ₹${balance}`
);
answer:['Your balance is ₹500', 'Your balance is ₹1200', 'Your balance is ₹300']

<!--day-8(2"filter")-->

### 1. Get even numbers
**Real life:** Find even roll numbers
```js
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
```
answer: [2, 4, 6]

---

### 2. Filter adults
**Real life:** Allow only 3+ users
```js
const ages = [2, 1, 10, 16, 5];
function isAdult(age) {
  return age >= 18;
}
const adults = ages.filter(isAdult);
```
answer: [18];
---

### 3. Remove empty items
**Real life:** Clean user input
```js
const inputs = ['Hello', '', 'World', '', 'JS'];
const validInputs = inputs.filter(text => text !== '');
```
answer:['Hello', 'World', 'JS']

---

### 4. Filter passing marks
**Real life:** Exam result system
```js
const marks = [35, 72, 88, 40, 25];
const passedStudents = marks.filter(mark => mark >= 40);
```
answer:[72, 88, 40]
---

### 5. Get affordable prices
**Real life:** Shopping app price filter
```js
const prices = [199, 499, 999, 1499, 299];
const affordable = prices.filter(price => price <= 500);
```
answer:500 karta oochi [199, 499, 299]
---

### 6. Filter long words
**Real life:** Search keyword validation
```js
const words = ['hi', 'hello', 'javascript', 'ok'];
function isLongWord(word) {
  return word.length > 3;
}
const longWords = words.filter(isLongWord);
```
answer:['hello', 'javascript'] 3 thi vadhare hoy e print thay

### 7. Filter positive numbers
**Real life:** Bank transaction validation
```js
const transactions = [200, -100, 500, -50, 300];
const credits = transactions.filter(amount => amount > 0);
```
answer:[200, 500, 300] 0 thi vadhare hoy e print thay
---

### 8. Filter numbers within a range
**Real life:** Score selection
```js
const scores = [45, 60, 85, 30, 90];
const selectedScores = scores.filter(score => score >= 50 && score <= 90);
```
answer:[60, 85, 90] 50 thi vadhu and 90 thi oochu..

<!-- JavaScript .reduce() Method Example: -->

### 1. Total money in wallet
**Real life:** Add all cash amounts
```js
const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);
```
answer: totalMoney = 350

### 2. Total steps walked in a week
**Real life:** Fitness tracker
```js
const steps = [3000, 5000, 4000, 6000];
function addSteps(total, step) {
  return total + step;
}
const weeklySteps = steps.reduce(addSteps, 0);
```
answer: weeklySteps = 18000

### 3. Find total cart price
**Real life:** Shopping bill
```js
const prices = [499, 299, 199];
const totalPrice = prices.reduce((total, price) => total + price, 0);
```
answer: totalPrice = 997

### 4. Find maximum score
**Real life:** Highest exam mark
```js
const marks = [45, 88, 67, 92];
const highest = marks.reduce((max, mark) => {
  return mark > max ? mark : max;
}, marks[0]);
```
answer: highest = 92

### 5. Count total characters
**Real life:** Text length calculation
```js
const words = ['Hi', 'Hello', 'JS'];
const totalChars = words.reduce((count, word) => count + word.length, 0);
```
answer: totalChars = 9

### 6. Combine words into a sentence
**Real life:** Message builder
```js
const words = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words.reduce((text, word) => text + ' ' + word);
```
answer: sentence = "Learning JavaScript is fun"

### 7. Count passed students
**Real life:** Result summary
```js
const marks = [35, 72, 88, 40, 25];
const passCount = marks.reduce((count, mark) => {
  return mark >= 40 ? count + 1 : count;
}, 0);
```
answer: passCount = 3

### 8. Calculate final balance
**Real life:** Bank account calculation
```js
const transactions = [1000, -200, -300, 500];
const finalBalance = transactions.reduce((balance, amount) => balance + amount, 0);
```
answer: finalBalance = 1000

### 10. Build comma-separated string
**Real life:** Display values in UI
```js
const items = ['Pen', 'Book', 'Pencil'];
const result = items.reduce((text, item) => text + ', ' + item);
```
answer: result = "Pen, Book, Pencil"