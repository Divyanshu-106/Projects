// JavaScript String Methods

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