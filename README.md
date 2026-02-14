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


<!--day-8(3 "rduce ")-->

### 1. Total money in wallet
**Real life:** Add all cash amounts
```js
const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);
```
answer:350
---

### 2. Total steps walked in a week
**Real life:** Fitness tracker
```js
const steps = [3000, 5000, 4000, 6000];
function addSteps(total, step) {
  return total + step;
}
const weeklySteps = steps.reduce(addSteps, 0);
```
answer:18000
---

### 3. Find total cart price
**Real life:** Shopping bill
```js
const prices = [499, 299, 199];
const totalPrice = prices.reduce((total, price) => total + price, 0);
```
answer:997
---

### 4. Find maximum score
**Real life:** Highest exam mark
```js
const marks = [45, 88, 67, 92];
const highest = marks.reduce((max, mark) => {
  return mark > max ? mark : max;
}, marks[0]);
```
answer:92
---

### 5. Count total characters
**Real life:** Text length calculation
```js
const words = ['Hi', 'Hello', 'JS'];
const totalChars = words.reduce((count, word) => count + word.length, 0);
```
answer:9

---

### 6. Combine words into a sentence
**Real life:** Message builder
```js
const words = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words.reduce((text, word) => text + ' ' + word);
```
answer:'Learning JavaScript is fun'
---

### 7. Count passed students
**Real life:** Result summary
```js
const marks = [35, 72, 88, 40, 25];
const passCount = marks.reduce((count, mark) => {
  return mark >= 40 ? count + 1 : count;
}, 0);
```
answer:3
---

### 8. Calculate final balance
**Real life:** Bank account calculation
```js
const transactions = [1000, -200, -300, 500];
const finalBalance = transactions.reduce((balance, amount) => balance + amount, 0);
```
answer:1000
---

---

### 10. Build comma-separated string
**Real life:** Display values in UI
```js
const items = ['Pen', 'Book', 'Pencil'];
const result = items.reduce((text, item) => text + ', ' + item);
```
answer:'Pen, Book, Pencil'
---


<!--day-8(4 "map,filter,rduce ")-->
<div>
  <h1>Example 1: Shopping App – Discounted Total</h1>
  <p>const prices = [200, 800, 1200, 450, 700];</p>
  <p>const total = prices.filter(price => price > 500)
  .map(price => price * 0.9)
  .reduce((sum, price) => sum + price, 0);</p>
  <p>Answer or Error: 2430</p>
  <p>Why: Pehle 500 se upar prices filter hue, phir 10% discount laga aur end me total nikala.</p>
</div>

<div>
  <h1>Example 2: Fitness App – Total Active Minutes</h1>
  <p>const minutes = [20, 45, 60, 15, 90];</p>
  <p>const totalCalories = minutes.filter(min => min > 30)
  .map(min => min * 5)
  .reduce((total, cal) => total + cal, 0);</p>
  <p>Answer or Error: 975</p>
  <p>Why: 30 se zyada minutes wale days select hue, calories me convert hue aur total add hua.</p>
</div>

<div>
  <h1>Example 3: Exam System – Average of Passed Marks</h1>
  <p>const marks = [35, 72, 88, 40, 25, 90];</p>
  <p>const passed = marks.filter(mark => mark >= 40);</p>
  <p>const average = passed.reduce((sum, mark) => sum + mark, 0) / passed.length;</p>
  <p>Answer or Error: 72.5</p>
  <p>Why: Sirf passing marks liye gaye aur unka average nikala.</p>
</div>

<div>
  <h1>Example 4: Salary System – Monthly Payout</h1>
  <p>const wages = [300, 800, 450, 1000, 600];</p>
  <p>const totalPayout = wages.filter(wage => wage > 500)
  .map(wage => wage + 100)
  .reduce((total, wage) => total + wage, 0);</p>
  <p>Answer or Error: 2700</p>
  <p>Why: 500 se zyada wages par bonus add karke total payout nikala.</p>
</div>

<div>
  <h1>Example 5: Online Course – Completion Points</h1>
  <p>const progress = [20, 50, 75, 40, 100];</p>
  <p>const totalPoints = progress
  .filter(p => p >= 50).map(p => p * 2)
  .reduce((sum, p) => sum + p, 0);</p>
  <p>Answer or Error: 450</p>
  <p>Why: Completed lessons ko points me convert karke total nikala.</p>
</div>

<div>
  <h1>Example 6: Bank Transactions – Final Balance</h1>
  <p>const transactions = [1000, -500, 2000, -300, 1500];</p>
  <p>const creditedAmount = transactions
  .filter(amount => amount > 0)
  .map(amount => amount * 1.02)
  .reduce((total, amount) => total + amount, 0);</p>
  <p>Answer or Error: 4590</p>
  <p>Why: Sirf credit transactions par interest add karke total calculate hua.</p>
</div>

<div>
  <h1>Example 7: Game App – Final Score</h1>
  <p>const scores = [30, 60, 90, 45, 80];</p>
  <p>const finalScore = scores.filter(score => score > 50).map(score => score + 10).reduce((sum, score) => sum + score, 0);</p>
  <p>Answer or Error: 270</p>
  <p>Why: 50 se upar scores par bonus add karke sum nikala.</p>
</div>

<div>
  <h1>Example 8: E-commerce – Total Taxed Amount</h1>
  <p>const prices = [500, 1200, 3000, 800, 1500];</p>
  <p>const finalAmount = prices.filter(price => price > 1000).map(price => price * 1.18).reduce((sum, price) => sum + price, 0);</p>
  <p>Answer or Error: 6724</p>
  <p>Why: 1000 se upar items par tax add karke final amount nikala.</p>
</div>

<div>
  <h1>Example 9: Attendance System – Reward Points</h1>
  <p>const hours = [6, 8, 9, 7, 10];</p>
  <p>const totalPoints = hours.filter(hour => hour >= 8).map(hour => hour * 10).reduce((sum, point) => sum + point, 0);</p>
  <p>Answer or Error: 270</p>
  <p>Why: 8 ya usse zyada hours par points calculate hue aur total hua.</p>
</div>

<div>
  <h1>Example 10: Interview Brain Teaser</h1>
  <p>const numbers = [1, 2, 3, 4, 5, 6];</p>
  <p>const sumOfSquares = numbers.filter(num => num % 2 === 0).map(num => num * num).reduce((sum, num) => sum + num, 0);</p>
  <p>Answer or Error: 56</p>
  <p>Why: Even numbers ke squares ka sum nikala gaya.</p>
</div>

<div>
  <h1>Example 1: Grocery Store – Total Cost</h1>
  <p>const prices = [50, 120, 300, 80, 200];</p>
  <p>const totalCost = prices.filter(p => p > 100).map(p => p * 1.05).reduce((s, p) => s + p, 0);</p>
  <p>Answer or Error: 651</p>
  <p>Why: 100 se zyada items par 5% tax lagakar total nikala.</p>
</div>

<div>
  <h1>Example 2: Fitness App – Weekly Calories</h1>
  <p>const minutes = [10, 25, 40, 15, 60];</p>
  <p>const totalCalories = minutes.filter(m => m >= 20).map(m => m * 4).reduce((s, c) => s + c, 0);</p>
  <p>Answer or Error: 500</p>
  <p>Why: 20+ minutes wale days ko calories me convert kiya.</p>
</div>

<div>
  <h1>Example 3: Exam Results – Total Passed Marks</h1>
  <p>const marks = [35, 55, 80, 20, 45];</p>
  <p>const totalMarks = marks.filter(m => m >= 40).reduce((s, m) => s + m, 0);</p>
  <p>Answer or Error: 180</p>
  <p>Why: Sirf passing marks ka sum liya gaya.</p>
</div>

<div>
  <h1>Example 4: Bank App – Total Credits</h1>
  <p>const transactions = [500, -200, 1000, -300, 700];</p>
  <p>const totalCredit = transactions.filter(t => t > 0).reduce((s, t) => s + t, 0);</p>
  <p>Answer or Error: 2200</p>
  <p>Why: Sirf positive transactions add hue.</p>
</div>

<div>
  <h1>Example 5: Online Sale – Discounted Bill</h1>
  <p>const prices = [800, 1500, 3000, 600, 1200];</p>
  <p>const totalBill = prices.filter(p => p > 1000).map(p => p * 0.85).reduce((s, p) => s + p, 0);</p>
  <p>Answer or Error: 4760</p>
  <p>Why: 1000 se upar items par 15% discount laga.</p>
</div>

<div>
  <h1>Example 6: Attendance – Reward Points</h1>
  <p>const hours = [5, 7, 8, 6, 9];</p>
  <p>const totalPoints = hours.filter(h => h >= 7).map(h => h * 10).reduce((s, p) => s + p, 0);</p>
  <p>Answer or Error: 240</p>
  <p>Why: 7+ hours ko points me convert kiya.</p>
</div>

<div>
  <h1>Example 7: Delivery App – Total Distance</h1>
  <p>const distances = [3, 6, 10, 4, 8];</p>
  <p>const totalDistance = distances.filter(d => d > 5).map(d => d + 1).reduce((s, d) => s + d, 0);</p>
  <p>Answer or Error: 27</p>
  <p>Why: 5 km se zyada trips me bonus add hua.</p>
</div>

<div>
  <h1>Example 8: Salary System – Final Salary</h1>
  <p>const salaries = [18000, 25000, 30000, 15000];</p>
  <p>const totalSalary = salaries.filter(s => s > 20000).map(s => s + 2000).reduce((t, s) => t + s, 0);</p>
  <p>Answer or Error: 59000</p>
  <p>Why: Eligible salaries me bonus add karke total.</p>
</div>

<div>
  <h1>Example 9: Study App – Total Study Time</h1>
  <p>const hours = [0.5, 1.5, 2, 0.75, 3];</p>
  <p>const totalMinutes = hours.filter(h => h > 1).map(h => h * 60).reduce((s, m) => s + m, 0);</p>
  <p>Answer or Error: 390</p>
  <p>Why: 1 ghante se zyada sessions ko minutes me badla.</p>
</div>

<div>
  <h1>Example 10: Electricity Usage – Monthly Bill</h1>
  <p>const units = [80, 120, 200, 90, 150];</p>
  <p>const totalBill = units.filter(u => u > 100).map(u => u * 6).reduce((s, b) => s + b, 0);</p>
  <p>Answer or Error: 2820</p>
  <p>Why: 100 se upar units ka bill calculate hua.</p>
</div>

<div>
  <h1>Example 11: Game Scores – Final Power Score</h1>
  <p>const scores = [30, 50, 90, 20, 70];</p>
  <p>const powerScore = scores.filter(s => s > 40).map(s => s * 2).reduce((t, s) => t + s, 0);</p>
  <p>Answer or Error: 420</p>
  <p>Why: High scores double karke sum hue.</p>
</div>

<div>
  <h1>Example 12: Travel App – Total Fare</h1>
  <p>const rides = [5, 12, 20, 8, 15];</p>
  <p>const totalFare = rides.filter(r => r > 10).map(r => r + 50).reduce((s, r) => s + r, 0);</p>
  <p>Answer or Error: 147</p>
  <p>Why: Long rides me service fee add hui.</p>
</div>

<div>
  <h1>Example 13: Office Work – Productive Hours</h1>
  <p>const hours = [4, 6, 8, 5, 9];</p>
  <p>const productiveMinutes = hours.filter(h => h >= 6).map(h => h * 60).reduce((s, m) => s + m, 0);</p>
  <p>Answer or Error: 1380</p>
  <p>Why: 6+ hours ko minutes me convert kiya.</p>
</div>

<div>
  <h1>Example 14: Shopping Cart – Reward Coins</h1>
  <p>const purchases = [300, 800, 1200, 400];</p>
  <p>const coins = purchases.filter(p => p > 500).map(p => 10).reduce((s, c) => s + c, 0);</p>
  <p>Answer or Error: 20</p>
  <p>Why: Har eligible purchase par 10 coins mile.</p>
</div>

<div>
  <h1>Example 15: Fuel App – Total Fuel Cost</h1>
  <p>const liters = [3, 6, 10, 4, 8];</p>
  <p>const totalFuelCost = liters.filter(l => l > 5).map(l => l * 105).reduce((s, c) => s + c, 0);</p>
  <p>Answer or Error: 2520</p>
  <p>Why: 5 se zyada liters ka total cost nikla.</p>
</div>

<div>
  <h1>Example 16: Interview Classic – Sum of Cubes</h1>
  <p>const numbers = [1, 2, 3, 4, 5];</p>
  <p>const sumCubes = numbers.filter(n => n % 2 !== 0).map(n => n ** 3).reduce((s, n) => s + n, 0);</p>
  <p>Answer or Error: 153</p>
  <p>Why: Odd numbers ke cubes ka sum.</p>
</div>

<div>
  <h1>Example 17: Performance Tracking – Bonus Points</h1>
  <p>const scores = [10, 20, 30, 40, 50];</p>
  <p>const avg = scores.reduce((s, n) => s + n, 0) / scores.length;</p>
  <p>const totalScore = scores.filter(s => s > avg).map(s => s + 5).reduce((t, s) => t + s, 0);</p>
  <p>Answer or Error: 100</p>
  <p>Why: Average se upar scores me bonus add hua.</p>
</div>

<div>
  <h1>Example 18: Subscription App – Final Bill</h1>
  <p>const plans = [199, 399, 599, 299];</p>
  <p>const finalBill = plans.filter(p => p > 300).map(p => p * 1.18).reduce((s, p) => s + p, 0);</p>
  <p>Answer or Error: 1180.82</p>
  <p>Why: 300 se upar plans par tax add hua.</p>
</div>

<div>
  <h1>Example 19: Learning App – Achievement Score</h1>
  <p>const scores = [45, 60, 70, 30, 80];</p>
  <p>const totalScore = scores.filter(s => s >= 60).map(s => s * s).reduce((t, s) => t + s, 0);</p>
  <p>Answer or Error: 14900</p>
  <p>Why: Eligible scores ke squares ka sum.</p>
</div>

<div>
  <h1>Example 20: Interview Finisher</h1>
  <p>const numbers = [3, 6, 9, 10, 12];</p>
  <p>const finalSum = numbers.filter(n => n % 3 === 0).map(n => n * 10).reduce((s, n) => s + n, 0);</p>
  <p>Answer or Error: 300</p>
  <p>Why: 3 se divisible numbers ka final sum.</p>
</div>



<!-- JavaScript – Interview‑Style Practice Questions (Beginner → Advanced) -->
/*****************************************************
 🟢 VARIABLES & DATA TYPES (1–15)
*****************************************************/

let a = "a";
let b = "10";
let c = 10;
let d;
let e = null;

// 1
console.log(a == "a");   // true (value check)
console.log(a === "a");  // true (value + type same)

// 2
console.log(b == c);   // true (string "10" → number 10)
console.log(b === c);  // false (string !== number)
// ERROR REASON: == does type coercion, === does not.

// 3
b = Number(b);
console.log(b === c); // true

// 4
console.log(d === undefined); // true

// 5
if (d == null) console.log("d is null or undefined");
if (e == null) console.log("e is null or undefined");

// 6
console.log(null == undefined);  // true
console.log(null === undefined); // false

// 7
console.log(c + "10"); // "1010" (string concat)
console.log(c + Number("10")); // 20 (fixed)

// 8
let result = c / "a";
console.log(Number.isNaN(result)); // true

// 9
let num1 = Number("10");
let num2 = +"10";

// 10
let str1 = String(c);
let str2 = c.toString();

// 11
console.log(Boolean(0)); // false
console.log(!!"hello");  // true

// 12
const pi = 3.14;
// pi = 3; ❌ ERROR: Assignment to constant variable

// 13
let x = 5;
let y = x;
y = 20;
console.log(x); // 5 (unchanged)

// 14
console.log(0 == false); // true (coercion)

// 15
console.log("5" === 5); // false (fixed using strict equality)



/*****************************************************
 🟢 OPERATORS (16–30)
*****************************************************/

// 16 Even without %
let n = 4;
console.log((n & 1) === 0);

// 17 Max without if or Math.max
let m1 = 5, m2 = 9;
let max = m1 > m2 ? m1 : m2;

// 18 Calculator
function calc(a,b,op){
  if(op==="+") return a+b;
  if(op==="-") return a-b;
  if(op==="*") return a*b;
  if(op==="/") return a/b;
}

// 19 Default
let username = null;
console.log(username ?? "Guest");

// 20
let age = 18;
let status = age>=18 ? "Adult":"Minor";

// 21
let marks = 85;
let grade = marks>=90?"A":marks>=75?"B":"C";

// 22
true && console.log("Executed");

// 23
console.log(false && "Won’t run");

// 24
console.log("5" == 5);  // true
console.log("5" === 5); // false

// 25
let val = null;
console.log(val ?? "Default");

// 26
console.log(0 || 100);  // 100
console.log(0 ?? 100);  // 0

// 27
let arr1=[1,2], arr2=[3,4];
let merged=[...arr1,...arr2];

// 28
function sumAll(...nums){
  return nums.reduce((a,b)=>a+b,0);
}

// 29
let copy=[...arr1];
copy.push(99);

// 30
console.log(2+3*4); // 14 (multiplication first)



/*****************************************************
 🟡 CONTROL FLOW (31–45)
*****************************************************/

// 31
function gradeSys(m){
 if(m>=90) return "A";
 else if(m>=75) return "B";
 else return "C";
}

// 32
function gradeSwitch(g){
 switch(true){
  case g>=90: return "A";
  case g>=75: return "B";
  default: return "C";
 }
}

// 33
switch(2){
 case 1: console.log("One");
 case 2: console.log("Two"); // fall-through
}

// 34
let user="admin", pass="123";
if(user==="admin"){
 if(pass==="123") console.log("Login success");
}

// 35
if(user==="admin" && pass==="123") console.log("Login success");

// 36
if(true && true) console.log("Both true");

// 37
if(age>18 || age===18) console.log("Valid");

// 38
let choice=1;
switch(choice){
 case 1: console.log("Start"); break;
 case 2: console.log("Stop"); break;
}

// 39 Missing break shows fall-through

// 40 if-else equivalent of switch done above

// 41
let num=50;
if(num>=1 && num<=100) console.log("In range");

// 42
function test(val){
 if(!val) return "Invalid";
 return "Valid";
}

// 43
let light="red";
switch(light){
 case "red": console.log("Stop"); break;
 case "green": console.log("Go"); break;
}

// 44
let rain=true;
if(rain) console.log("Take umbrella");

// 45
function divide(a,b){
 if(b===0) return "Cannot divide by zero";
 return a/b;
}



/*****************************************************
 🟡 LOOPS (46–60)
*****************************************************/

// 46
for(let i=1;i<=100;i++) console.log(i);

// 47
for(let i=2;i<=100;i+=2) console.log(i);

// 48
for(let i=1;i<=10;i++){
 if(i===5) break;
}

// 49
for(let i=1;i<=10;i++){
 if(i%3===0) continue;
}

// 50
let sum=0;
for(let i=1;i<=5;i++) sum+=i;

// 51 Reverse number
let numRev=123, rev=0;
while(numRev>0){
 rev=rev*10+numRev%10;
 numRev=Math.floor(numRev/10);
}

// 52 Count digits
let count=0,temp=12345;
while(temp>0){ count++; temp=Math.floor(temp/10); }

// 53 Factorial
let fact=1;
for(let i=1;i<=5;i++) fact*=i;

// 54 Fibonacci
let f1=0,f2=1;
for(let i=0;i<5;i++){
 let next=f1+f2;
 f1=f2; f2=next;
}

// 55 Break nested
outer: for(let i=0;i<3;i++){
 for(let j=0;j<3;j++){
  break outer;
 }
}

// 56 continue shown above

// 57 Multiplication
for(let i=1;i<=10;i++) console.log(5*i);

// 58 Infinite loop fix
let k=0;
while(k<5){ k++; }

// 59 for vs while → for when count known

// 60
[1,2,3].forEach(n=>console.log(n));



/*****************************************************
 🟡 FUNCTIONS (61–80)
*****************************************************/

// 61
function sum(a,b){ return a+b; }

// 62
const sumArrow=(a,b)=>a+b;

// 63
function greet(name="Guest"){ return name; }

// 64
function outer(){ return function(){ return "Inner"; } }

// 65
function run(fn){ fn(); }

// 66
function process(cb){ cb("Done"); }

// 67 Pure
function add(a,b){ return a+b; }

// 68 Side effect
let counter=0;
function inc(){ counter++; }

// 69 Recursion
function factRec(n){
 if(n===1) return 1;
 return n*factRec(n-1);
}

// 70 Iterative
function factIter(n){
 let r=1;
 for(let i=1;i<=n;i++) r*=i;
 return r;
}

// 71
function total(...args){
 return args.reduce((a,b)=>a+b,0);
}

// 72
function hof(fn){ return fn(5); }

// 73 Closure
function counterFn(){
 let c=0;
 return ()=>++c;
}

// 74 Counter
let cnt=counterFn();

// 75 Currying
const multiply=a=>b=>a*b;

// 76 Memoization
function memo(){
 let cache={};
 return function(n){
  if(cache[n]) return cache[n];
  return cache[n]=n*n;
 }
}

// 77
function safe(a){
 if(typeof a!=="number") return "Invalid";
 return a*2;
}

// 78 Arrow doesn’t have own this

// 79 Run once
let once=(function(){
 let done=false;
 return function(){
  if(!done){ done=true; console.log("Run"); }
 }
})();

// 80 DRY
function square(n){ return n*n; }



/*****************************************************
 🔵 ARRAYS (81–101)
*****************************************************/

let arr=[1,2,3,4,5];

// 81
arr.reduce((a,b)=>a+b,0);

// 82
Math.max(...arr);

// 83
[...new Set([1,2,2,3])];

// 84
let sorted=[...arr].sort((a,b)=>b-a);
let second=sorted[1];

// 85
arr.filter(n=>n>0);

// 86
arr.map(n=>n*n);

// 87
arr.reduce((c)=>c+1,0);

// 88
arr.filter(n=>n>2).map(n=>n*2).reduce((a,b)=>a+b,0);

// 89
arr.find(n=>n>3);

// 90
arr.some(n=>n>4);

// 91
arr.every(n=>n>0);

// 92
let [first,...rest]=arr;

// 93
[...arr,...[6,7]];

// 94 Deep clone
JSON.parse(JSON.stringify(arr));

// 95 Bubble sort
function bubble(a){
 for(let i=0;i<a.length;i++){
  for(let j=0;j<a.length-1;j++){
   if(a[j]>a[j+1]){
    [a[j],a[j+1]]=[a[j+1],a[j]];
   }
  }
 }
 return a;
}

// 96 Rotate
function rotate(a){
 return [...a.slice(1),a[0]];
}

// 97 Flatten
function flat(a){
 return a.reduce((acc,val)=>
  Array.isArray(val)?acc.concat(flat(val)):acc.concat(val),[]);
}

// 98 Custom map
Array.prototype.myMap=function(cb){
 let res=[];
 for(let i=0;i<this.length;i++){
  res.push(cb(this[i],i,this));
 }
 return res;
}

// 99 Custom filter
Array.prototype.myFilter=function(cb){
 let res=[];
 for(let i=0;i<this.length;i++){
  if(cb(this[i])) res.push(this[i]);
 }
 return res;
}

// 100 Custom reduce
Array.prototype.myReduce=function(cb,acc){
 for(let i=0;i<this.length;i++){
  acc=cb(acc,this[i]);
 }
 return acc;
}

// 101 FINAL BOSS
let final = arr
 .filter(n=>n%2===0)
 .map(n=>n*10)
 .reduce((a,b)=>a+b,0);

console.log(final);

<!-- JavaScript Core Concepts – Interview Questions (Beginner → Advanced) -->
# JavaScript Interview Q&A (Beginner to Advanced)

---

# 🟢 BEGINNER LEVEL (1–20)

## Q1. Variables

`var` is function-scoped and can be re-declared.
`let` is block-scoped and can be reassigned.
`const` is block-scoped and cannot be reassigned.

---

## Q2. Data Types

Primitive types:

* string
* number
* boolean
* undefined
* null
* bigint
* symbol

---

## Q3. Type Checking

Use `typeof` operator.

```js
typeof variable;
```

---

## Q4. Operators

`==` compares values (type coercion allowed).
`===` compares value and type (strict comparison).

---

## Q5. Arithmetic Operators

```js
let x = 10;
console.log(x + 5 * 2);
```

Output: `20`
Reason: Multiplication happens before addition.

---

## Q6. String Concatenation

```js
console.log('5' + 2);
```

Output: `'52'` (number converts to string)

---

## Q7. Boolean Logic

```js
console.log(true && false);
```

Output: `false`

---

## Q8. Functions

A function is a reusable block of code used to perform a task.

---

## Q9. Function Call

```js
function add(a, b) {
  return a + b;
}
add(2, 3);
```

Output: `5`

---

## Q10. Arrays

```js
let arr = [1, 2, 3];
```

---

## Q11. Array Access

```js
const arr = [10, 20, 30];
console.log(arr[1]);
```

Output: `20`

---

## Q12. Objects

An object stores data in key-value pairs.

---

## Q13. Object Access

```js
const user = { name: 'A', age: 20 };
console.log(user.age);
```

Output: `20`

---

## Q14. Control Flow

An `if` statement runs code only if a condition is true.

---

## Q15. Condition Check

```js
let x = 5;
if (x > 3) console.log('Yes');
```

Output: `Yes`

---

## Q16. Loops

A loop repeats code multiple times.

---

## Q17. for Loop

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

Output:

```
0
1
2
```

---

## Q18. while Loop

Use `while` when the number of iterations is unknown.

---

## Q19. Increment Operator

```js
let a = 5;
a++;
console.log(a);
```

Output: `6`

---

## Q20. Comments

Single-line:

```js
// comment
```

Multi-line:

```js
/* comment */
```

---

# 🟡 INTERMEDIATE LEVEL (21–35)

## Q21. Scope

Block scope means variables declared with `let` or `const` exist only inside `{}`.

---

## Q22. Hoisting

Hoisting moves variable and function declarations to the top of their scope before execution.

---

## Q23. Undefined vs Null

`undefined` = variable declared but not assigned.
`null` = intentional empty value.

---

## Q24. Truthy & Falsy

Falsy values:

* false
* 0
* ''
* null
* undefined
* NaN

---

## Q25. Functions vs Arrow Functions

Arrow functions:

* No own `this`
* Shorter syntax

---

## Q26. Parameters vs Arguments

Parameters = variables in function definition.
Arguments = values passed when calling.

---

## Q27. Return Keyword

If no return → function returns `undefined`.

---

## Q28. Array Methods

`push()` adds to end.
`pop()` removes from end.

---

## Q29. Loop vs Array Methods

Use loops for complex control.
Use array methods for cleaner functional style.

---

## Q30. Object Iteration

```js
for (let key in obj) {
  console.log(key, obj[key]);
}
```

---

## Q31. Break & Continue

`break` stops loop.
`continue` skips current iteration.

---

## Q32. Comparison Operators

```js
console.log(0 == false);  // true
console.log(0 === false); // false
```

---

## Q33. Ternary Operator

```js
status = age >= 18 ? 'adult' : status;
```

---

## Q34. Array Destructuring

Extract values from array into variables.

```js
let [a, b] = [1, 2];
```

---

## Q35. Spread Operator

Copies or merges arrays.

```js
let newArr = [...arr];
```

---

# 🔵 ADVANCED LEVEL (36–50)

## Q36. Closures

A closure remembers variables from its outer scope.

```js
function outer() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}
```

---

## Q37. Execution Context

Environment where JS code runs (Global & Function context).

---

## Q38. Call Stack

Stack that manages function execution order (LIFO).

---

## Q39. Pass by Value vs Reference

Primitives copy by value.
Objects/arrays copy by reference.

---

## Q40. Shallow vs Deep Copy

Shallow copy copies references.
Deep copy creates fully independent copy.

---

## Q41. Higher-Order Functions

A function that takes or returns another function.

---

## Q42. Callback Functions

A function passed as an argument to another function.

---

## Q43. Immutability

Prevents unexpected data changes and improves predictability.

---

## Q44. Event Loop

Mechanism that handles asynchronous operations in JS.

---

## Q45. Synchronous vs Asynchronous

Synchronous runs line by line.
Asynchronous runs tasks without blocking execution.

---

## Q46. forEach vs map

`forEach()` executes function but returns nothing.
`map()` returns a new array.

---

## Q47. == Interview Trap ⭐

```js
console.log([] == []);
```

Output: `false`
Reason: Different references.

---

## Q48. typeof Interview Trap ⭐

```js
console.log(typeof null);
```

Output: `'object'` (historical JS bug)

---

## Q49. NaN Check

```js
Number.isNaN(value);
```

---

## Q50. FINAL INTERVIEW QUESTION 

JavaScript execution flow:

1. Global Execution Context created.
2. Memory phase (hoisting).
3. Code execution line by line.
4. Functions pushed to Call Stack.
5. Async tasks handled by Web APIs.
6. Event Loop moves callbacks to Call Stack when ready.

---

