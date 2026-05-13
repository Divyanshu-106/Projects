// //JavaScript String Methods

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// document.getElementById("demo").innerHTML = text.length;

// var text = "HELLO WORLD";
// document.getElementById("demo").innerHTML = text.charAt(0);

// let text = "HELLO WORLD";
// document.getElementById("demo").innerHTML = text.charCodeAt(0);

// let text = "HELLO WORLD";
// let code = text.codePointAt(0);

// document.getElementById("demo").innerHTML = code;

// const name = "John Doe";
// let letter = name.at(2);
// document.getElementById("demo").innerHTML = letter;

// let text = "HELLO WORLD";
// document.getElementById("demo").innerHTML = text[0];

// let text = "HELLO WORLD";
// text[0] = "A"; // This will not change the string
// document.getElementById("demo").innerHTML = text;

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);

// document.getElementById("demo").innerHTML = text3;

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);

// document.getElementById("demo").innerHTML = part;

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12);

// document.getElementById("demo").innerHTML = part;

// let str = "Apple, Banana, Kiwi";
// document.getElementById("demo").innerHTML = str.substring(7, 13);

// function myFunction() {
//     let text =
//     document.getElementById("demo").innerHTML;

//     document.getElementById("demo").innerHTML = text.toUpperCase();
// }

// function myFunction() {
//     let text = document.getElementById("demo").innerHTML;
//     document.getElementById("demo").innerHTML = text.toLowerCase();
// }

// let text = "Hello World \uD800";
// let result = text.toWellFormed();

// document.getElementById("demo").innerHTML = result;

// let text1 = "Hello World";
// let text2 = text1.trim();

// document.getElementById("demo").innerHTML = "Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;

// let text1 = "       Hello World!        ";
// let text2 = text1.trimEnd();

// document.getElementById("demo").innerHTML = "Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;

// let text = "5";
// text = text.padStart(4,"0");
// document.getElementById("demo").innerHTML = text;

// let numb = 5;
// let text = numb.toString();
// document.getElementById("demo").innerHTML = text.padStart(4,"0");

// let text = " HELLO WORLD! ";
// let result = text.repeat(3);

// document.getElementById("demo").innerHTML = result;

// let text = "a,b,c,d,e";
// const myArray = text.split(",");
// document.getElementById("demo").innerHTML = myArray[0];

// let text = "Please visit 'Microsoft!'";
// let index = text.search("Microsoft");
// document.getElementById("demo").innerHTML = index;

// let text = "Please locate where 'locate' occurs!";
// let index = text.search(/locate/);
// document.getElementById("demo").innerHTML = index;

// let text = "The rain in SPAIN stays mainly in the plain";
// const myArr = text.match(/ain/g);
// document.getElementById("demo").innerHTML = myArr.length + " " + myArr;

// let text = "Hello world, welcome to the universe.";
// document.getElementById("demo").innerHTML = text.includes("world", 12);

// JavaScript Numbers

// let x = 0.2 + 0.1;
// document.getElementById("demo").innerHTML = "0.2 + 0.1 = " + x;
// let y = (0.2*10 + 0.1*10) / 10;
// document.getElementById("demo").innerHTML = "0.2 + 0.1 = " + y;

// let myNumber = 2;
// let txt = "";
// while (myNumber != Infinity) {
//     myNumber = myNumber * myNumber;
//     txt = txt + myNumber + "<br>";
// }
// document.getElementById("demo").innerHTML = txt;

// let myNumber = 32;

// document.getElementById("demo").innerHTML =
// "Decimal 32 =" + "<br><br>" +
// "Hexatrigesimal (base 36): " + myNumber.toString(36) + "<br>" +
// "Duotrigesimal (base 32): " + myNumber.toString(32) + "<br>" +
// "Hexadecimal (base 16): " + myNumber.toString(16) + "<br>" +
// "Duodecimal (base 12): " + myNumber.toString(12) + "<br>" +
// "Decimal (base 10): " + myNumber.toString(10) + "<br>" +
// "Octal (base 8): " + myNumber.toString(8) + "<br>" +
// "Binary (base 2): " + myNumber.toString(2);

// let x = 123;
// let y = new Number(123);

// document.getElementById("demo").innerHTML = typeof x + "<br>" + typeof y;

// let x = new Number(500);
// let y = new Number(500);

// document.getElementById("demo").innerHTML = (x===y);

// let x = 123;
// document.getElementById("demo").innerHTML =
//   x.toString() + "<br>" +
//    (123).toString() + "<br>" +
//    (100 + 23).toString();

// let x = 123;
// let text = x.toString(2);
// document.getElementById("demo").innerHTML = text;

// let x = 9.656;
// document.getElementById("demo").innerHTML =
//     x.toExponential() + "<br>" +
//     x.toExponential(2) + "<br>" +
//     x.toExponential(4) + "<br>" +
//     x.toExponential(6);

// let x = 123;

// document.getElementById("demo").innerHTML =
//   x.valueOf() + "<br>" +
//   (123).valueOf() + "<br>" +
//   (100 + 23).valueOf();

// let x = new Date("1970-01-02");
// document.getElementById("demo").innerHTML = Number(x);

// JS Function

// function sayHello() {
//     return "Hello World!";
// }
// let greeting = sayHello();
// document.getElementById("demo").innerHTML = greeting;

// function multiply(a, b) {
//     return a * b;
// }
// let result = multiply(4, 3);
// document.getElementById("demo").innerHTML = "The Result is: " + result;

// function add (a, b) {
//     return a + b;
// }
// let sum1 = add(5, 10);
// let sum2 = add(20, 30);
// document.getElementById("demo").innerHTML = "The Sum of 5 and 10 is: " + sum1 + "<br>" +
// "The Sum of 20 and 30 is: " + sum2;

// let text = "Outside:" + typeof carName;
// document.getElementById("demo").innerHTML = text;

// function myFunction() {
//     let carName = "Volvo";
//     let text = "Inside: " + typeof carName;
//     document.getElementById("demo").innerHTML =  text;
// }

// let text = "The temperauture is " + toCelsius(77) + " Celsius";
// document.getElementById("demo").innerHTML = text;

// function toCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32);
// }

// function sayHello(){
//     return "Hello World!";
// }

// let greeting = sayHello();
// document.getElementById("demo").innerHTML = greeting;

// function myFunction() {
//     return "Hello World!";
// }

// let a = sayHello();
// let b = sayHello();
// let c = sayHello();

// function sayHello() {
//     return "Hello World!";
// }
// function sayHello() {
//     document.getElementById("demo").innerHTML = sayHello();
// }

// function sayHello() {
//   return "Hello World";
// }

// function showHello() {
//   document.getElementById("demo").innerHTML = sayHello();
// }

// function fullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }
// let name = fullName("John", "Doe");

// document.getElementById("demo").innerHTML = "The name is: " + name;

// function multiply(a, b) {
//     return "Done";

//     return a * b;
// }
// let result = multiply(4, 3);
// document.getElementById("demo").innerHTML = "The Result is: " + result;

// function checkAge(age) {
//     if (age < 18) {
//         return "Too young";
//     } else {
//         return "Old enough";
//     }
//     asnwer = checkAge(15);
//     document.getElementById("demo").innerHTML = answer;
// }

// function multiply(a, b) {
//     return a * b;
// }
// let result = multiply(4, 3);
// document.getElementById("demo").innerHTML = "The Result is: " + result;

// function findMax(){
//     let max = -Infinity;
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }

// document.getElementById("demo").innerHTML = "The Max Number is: " + findMax(5, 10, 15, 20, 25);

// function sumAll(){
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }

// document.getElementById("demo").innerHTML = "The Sum is: " + sumAll(5, 10, 15, 20, 25);

// function subtract(a, b) {
//   return a - b;
// }

// let x1 = subtract(10, 5);
// let x2 = subtract(5, 10);

// document.getElementById("demo").innerHTML = "The results are " + x1 + " and " + x2;

// function toCelsius(farenheit) {
//   return (5/9) * (farenheit-32);
// }

// let value = toCelsius("John");

// document.getElementById("demo").innerHTML = value;

// function myFunction(x, y) {
//   if (y === undefined) {
//     y = 2;
//   }
//   return x * y;
// }
// document.getElementById("demo").innerHTML = myFunction(4);

// function myFunction(x, y = 10) {
//   return x + y;
// }
// document.getElementById("demo").innerHTML = myFunction(5);

//  // 1. Define a function and use the rest parameter (...args) to gather all inputs into an array
// function calculateSum(...args) {
//   let sum = 0;

//   // 2. Loop through the array of arguments
//   for (let arg of args) {
//     sum += arg;
//   } // <-- 3. Added the missing closing bracket for the loop

//   // 4. Return the final total after the loop finishes
//   return sum;
// }

// // 5. Call the new function and pass in your numbers
// let x = calculateSum(4, 9, 16, 25, 29, 100, 66, 77);

// // Output the result to the HTML element
// document.getElementById("demo").innerHTML = x;

// const multiply = function(a, b) {return a * b};

// let result = multiply(4, 3);

// document.getElementById("demo").innerHTML = "The product is: " + result;

// const myFunction = (x, y) => { return x * y };

// let result = myFunction(5, 4);

// document.getElementById("demo").innerHTML = "The product is: " + result;

// const car = {
//   type:"Fiat",
//   model:"500",
//   color:"white"
// };

// // Display Data from the Object:
// document.getElementById("demo").innerHTML = "The car type is " + car.type;

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };

// document.getElementById("demo").innerHTML = person.fullName();

// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   age      :  50
// };

// let result = ("firstName" in person);

// document.getElementById("demo").innerHTML = result; /

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   getId: function() {
//     return this.id;
//   }
// };

// let number = person.getId();

// document.getElementById("demo").innerHTML = "The number is " + number;

// // Create an Object
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
// };

// // Add a Method
// person.name = function() {
//   return (this.firstName + " " + this.lastName).toUpperCase();
// };

// // Display Object Data
// document.getElementById("demo").innerHTML =
// "My father is " + person.name();

// const person1 = {
//   name: "John",
//   hello: function() {
//     return "Hello " + this.name;
//   }
// };

// const person2 = {
//   name: "Anna",
//   hello: function() {
//     return "Hello " + this.name;
//   }
// };

// document.getElementById("demo").innerHTML = person1.hello();

// let x = this;

// document.getElementById("demo").innerHTML = "This is: " + x;

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// // Display Object
// let text = person;

// document.getElementById("demo").innerHTML = text;

// Create an Object
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// // Build a Text
// let text = "";
// for (let x in person) {
//   text += person[x] + " ";
// };

// // Display the Text
// document.getElementById("demo").innerHTML = text;

// const fruits = {Bananas:300, Oranges:200, Apples:500};

// let text = "";
// for (let [fruit, amount] of Object.entries(fruits)) {
//   text += fruit + ": " + amount + "<br>";
// }

// document.getElementById("demo").innerHTML = text;

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// // Display JSON
// let text = JSON.stringify(person);

// document.getElementById("demo").innerHTML = text;

// // Constructor Function for Person objects
// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// // Create a Person object
// const myFather = new Person("John", "Doe", 50, "blue");

// // Display age
// document.getElementById("demo").innerHTML =
// "My father is " + myFather.age + ".";

// Constructor Function for Person objects
// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
//   this.fullName = function() {
//     return this.firstName + " " + this.lastName
//   };
// }

// // Create a Person object
// const myFather = new Person("John", "Doe", 50, "blue");

// // Display full name
// document.getElementById("demo").innerHTML =
// "My father is " + myFather.fullName();

// x = 5;
//  elem = document.getElementById("demo");
//  elem.innerHTML = "The value of x is: " + x;

//  var x;

// const cars = [ "Volvo", "BMW"];
// document.getElementById("demo").innerHTML = cars[0];

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLength = fruits.length;
// let text = "<ul>";
// for (let i = 0; i < fLength; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";
// document.getElementById("demo").innerHTML = text;

// const myArr = [1, 2, 3, 4, 5];
// const newArr = myArr.flatMap(x => [x, x * 10]);
// document.getElementById("demo").innerHTML = newArr;

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const spliced = months.toSpliced(0, 1);

// document.getElementById("demo").innerHTML = spliced;

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let myList = fruits.toString();
// document.getElementById("demo").innerHTML = myList;

// const numbers = [4, 9, 16, 25];
// let first = numbers.findIndex(myFunction);

// document.getElementById("demo").innerHTML = "First number over 18 is " + first ;
// function myFunction(value, index, array) {
//     return value > 18;
// }

// const temp = [27, 28, 30, 40, 42, 35, 30];
// let high = temp.findLast(x => x > 40);

// document.getElementById("demo").innerHTML = "The last high temperature over 40 was " + high;

// const points = [40, 100, 1, 5, 25, 10];
// document.getElementById("demo1").innerHTML = points;

// points.sort(function(a, b){return b - a});
// document.getElementById("demo2").innerHTML = points;

// const points = [40, 100, 1, 5, 25, 10];
// document.getElementById("demo").innerHTML = points;

// function myFunction1() {
//   points.sort();
//   document.getElementById("demo").innerHTML = points;
// }
// function myFunction2() {
//   points.sort(function(a, b){return a - b});
//   document.getElementById("demo").innerHTML = points;
// }

// const points = [40, 100, 1, 5, 25, 10];
// document.getElementById("demo").innerHTML = myArrayMin(points);

// function myArrayMin(arr) {
//   let len = arr.length;
//   let min = Infinity;
//   while (len--) {
//     if (arr[len] < min) {
//       min = arr[len];
//     }
//   }
//   return min;
// }

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);
// document.getElementById("demo").innerHTML = txt;

// function myFunction(value, index, array) {
//   txt += value + "<br>";
// }

// const number1 = [45, 4, 9, 16, 25];
// const number2 = number1.map(myFunction);

// document.getElementById("demo").innerHTML = JSON.stringify(number2);

// function myFunction(value,index,array){
//     return value * 2
// }

// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// document.getElementById("demo").innerHTML = over18;

// function myFunction(value) {
//   return value > 18;
// }

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// document.getElementById("demo").innerHTML = "The sum is " + sum;

// function myFunction(total, value) {
//   return total + value;
// }

// const letters = new Set(["a", "b", "c"]);

// let text = '';
// for (const x of letters){
//     text += x + "<br>";
// }

// document.getElementById("demo").innerHTML = text;

// const letter = new Set(["a", "b", "c"]);

// const iterator = letter.entries();

// let text = "";
// for (const entry of iterator){
//     text += entry + "<br>"
// }

// document.getElementById("demo").innerHTML = text;

// // Create a WeakSet
// let mySet = new WeakSet();

// // Create an Object
// let myObj = {fname:"John", lname:"Doe"};

// // Add then Object
// mySet.add(myObj);

// // Do I have myObj in the mySet?
// let answer = mySet.has(myObj);

// document.getElementById("demo").innerHTML = "Do I have myObj? is " + answer

// // Create a new Map
// const fruits = new Map();

// // Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);

// let numb = fruits.get("apples");

// document.getElementById("demo").innerHTML = "There are " + numb + " apples.";

// const fruits = new Map();

// // Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);

// let numb = fruits.get("apples");

// document.getElementById("demo").innerHTML = "There are " + numb + " apples.";

// function Dance(){
//     document.getElementById("demo").innerHTML = "Dance";
//     document.getElementById("demo").innerHTML = "Dance";
//     document.getElementById("demo").innerHTML = "Dance";
//     document.getElementById("demo").innerHTML = "Dance";
// }

// Dance();
// Dance();
// Dance();
// Dance();
// Dance();

// let dance = function(v1){
//     console.log(`${v1} nach rha hai`);
// }

// dance("ghoda");
// dance("hati");
// dance("bankai");
// dance("namsd");

// function abc(...val){
//     console.log(val)
// }

// abc(1,2,3,4,5,6,7,8,9);

// function abc(){
//     return 12;
// }

// let val = abc();
// console.log(val)
//     val();
// }

// abc(function(){
//     console.log("hey");
// });

// function abc(){
//     let a =12;
//     function def(){
//         let a = 15;
//         function ghi(){
//             let c = 19;
//         }
//     }
// }

// abc(a + b+ c);

// let multiply = (a, b) => {
//     return a * b;
// }

// let h1 = document.querySelector("h1")
// h1.innerHTML = "What up people"

// let h2 = document.createElement("h2")
// h2.textContent = "Kese ho aap log";

// document.body.append(h2);

// let h2 = document.createElement("h2")
// h2.textContent = "Kese ho aap log";

// document.body.append(h2);

// let p = document.querySelector("p");
// p.addEventListener("click", function(){
//     p.style.color = "green";
// });

// let count = 0;

// const display = document.getElementById("display");
// const decrementBtn = document.getElementById("decrement");
// const resetBtn = document.getElementById("reset");
// const incrementBtn = document.getElementById("increment");

// function updateDisplay() {
//   display.textContent = count;
// }

// incrementBtn.addEventListener("click", () => {
//   count++;
//   updateDisplay();
// });
// decrementBtn.addEventListener("click", () => {
//   count--;
//   updateDisplay();
// });
// resetBtn.addEventListener("click", () => {
//   count = 0;
//   updateDisplay();
// });

// let input = document.querySelector("input");

// let input = document.querySelector("input");

// input.addEventListener("input", function(evt){
//   if (evt.data !== null){
//     console.log(evt.data);
//   }
// })

// let select = document.querySelector("select")
// let device = document.querySelector("#device")

// select.addEventListener("change", function(evt) {
//   device.textContent = `${evt.target.value} select`
// })
// let h1 = document.querySelector("h1")

// window.addEventListener("keydown", function(evt){
//     if(evt.key === " "){
//       h1.textContent ="SPC";
//     }else{
//       h1.textContent = evt.key;
//     }
// })

// let btn = document.querySelector("#btn");
// let fileinp = document.querySelector("#fileinp");

// btn.addEventListener("click", function () {
//   fileinp.click();
//   // });

//   let from = document.querySelector("form");
//   let inputs = document.querySelectorAll("input")

//   from.addEventListener("submit", function(dets){
// dets.preventDefault();
//   })

// let abcd = document.querySelector("#abcd")

// abcd.addEventListener("mouseover", function(){
//   abcd.style.backgroundColor = "yellow";
// });

// abcd.addEventListener("mouseout", function(){
//   abcd.style.backgroundColor = "red";
// });
// let abcd = document.querySelector("#abcd");

// window.addEventListener("mousemove", function(dets){
//   abcd.style.top = dets.clientY + "px";
//   abcd.style.left = dets.clientX + "px";
// });

// let ul = document.querySelector("ul");

// ul.addEventListener("click", function(dets){
// dets.target.classList.toggle("lt");
// });

// let inp = document.querySelector("input");
// let span = document.querySelector("span");

// inp.addEventListener("input", function () {
//  span.textContent = inp.value.length;
// });

// let nm = document.querySelector("#name")
// let form = document.querySelector("#form")

// form.addEventListener("submit", function(dets){
//     dets.preventDefault();
// });

// let email = document.querySelector("#email");
// let password = document.querySelector("#password");
// let form = document.querySelector("form");

// form.addEventListener("submit", function (dets) {
//   dets.preventDefault();

//   document.querySelector("#emailError").textContent = " ";
//   document.querySelector("#passwordError").textContent = " ";

//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   const passwordRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   let emailans = emailRegex.test(email.value);
//   let passwordans = passwordRegex.test(password.value);

//   if (!emailans) {
//     document.querySelector("#emailError").textContent = "Email is incorrect";
//   }
//   if (!passwordans) {
//     document.querySelector("#passwordError").textContent =
//       "Password is incorrect";
//   }
// });
//  setInterval(function(){
// console.log("Hello");
//  },2000)

let count = 10;

let interval = setInterval(function(){
 if(count >= 1){
  count--;
 console.log(count);
} else clearInterval(interval);
}, 1000)