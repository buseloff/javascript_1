"use strict";
/*let x;
let user = "Vasya";
x = "Hello";
let y, z;
y = 5;
alert("Hello!");
console.log(user);
console.log(x, y, z);
x = "world";
console.log(x);
x = 100;
console.log(x);
console.log(x + y);
x = "hello ";
console.log(x + user);
let _ = 100;
let $ = 28.45;
console.log($);
let x1 = 110,
  x2 = 200;

console.log(x1 + " " + x2);
x1 = x2;
console.log(x1 + " " + x2);
let x3 = "5000";
x1 = x3;
console.log(x1 + " " + x3);
const MY_COLOR = "RED";
console.log(`x1=${x1}`);
let user_name;
user_name = prompt("Enter your name");
alert(`Hello, ${user_name} !`);

let x5;
x5 = prompt("Enter number");
alert(`Your number, ${x5} `);*/
let z1, z2, result;
z1 = 20;
z2 = 69;
result = z1 - z2;
console.log(result);
result = z1 + z2;
console.log(result);
result = z1 / z2;
console.log(result);
result = z1 * z2;
console.log(result);
result = z1 + 5;
console.log(result);
result = result + 598;
console.log(result);
result *= 10;
console.log(result);
result++;
console.log(result);

/*let userNumber;
userNumber = prompt("Enter number");
result = Math.pow(userNumber, 2);
console.log(result);
alert(`Your number in square, ${result} `);
let userNumber1, userNumber2;
userNumber1 = prompt("Enter number1");
userNumber2 = prompt("Enter number2");
result = (userNumber1 + userNumber2) / 2;
alert(`Average of numbers, ${result} `);

let userRadius;
const PI = 3.1415;
userRadius = prompt("Enter radius");
result = PI * Math.pow(userRadius, 2);
alert(`Square of circle, ${result} `);

let hello = "Hello User",
  x1 = 10,
  x_b = true;
const PI = 3.1415;
console.log(hello);
console.log(x1);
console.log(x_b);
console.log(PI);

let valueOfSales;
valueOfSales = prompt("Enter value of sales");
console.log(`In a month value of sales will be, ${valueOfSales * 1.1} `);

let userNumber, sum;
userNumber = parseInt(prompt("Enter 3-digits number"));
result = userNumber % 10;
console.log(`Last digit, ${result} `);

sum = result;
userNumber = (userNumber - result) / 10;

result = userNumber % 10;
sum += result;

userNumber = (userNumber - result) / 10;
sum += result;
console.log(`Sum of digits, ${sum} `);

let x;
x = prompt("Enter number");
if (x >= 10) {
  console.log("Number greater than or equal 10");
} else {
  console.log("Number less than 10");
}

x = parseInt(prompt("Enter number"));
if (x % 2 == 0) {
  console.log("Even number");
} else {
  console.log("Odd number");}*/

let valueOfSales;
valueOfSales = parseFloat(prompt("Enter value of sales"));
if (valueOfSales >= 500) {
  console.log(`Bonus, ${valueOfSales * 0.1} `);
} else {
  console.log(`No bonus`);
}

let valueOfPurchase1, valueOfPurchase2;
let price1 = 10,
  price2 = 15;
let limit = 200;
let discount = 0.05;
valueOfPurchase1 = parseInt(prompt("Enter number of good1"));
valueOfPurchase2 = parseInt(prompt("Enter number of good2"));
valueOfSales = valueOfPurchase1 * price1 + valueOfPurchase2 * price2;
if (valueOfSales >= limit) {
  console.log(
    `Discount = ${valueOfSales * discount}, You should pay ${
      valueOfSales * (1 - discount)
    }`
  );
} else {
  console.log(`No discount, You should pay, ${valueOfSales}`);
}
