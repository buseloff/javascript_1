"use strict";
/*
x = parseInt(prompt("Enter number", 20));
if (x % 2 == 0 && x >= 100) {
  x = x / 2;
  alert(x);
} else {
  x = x * 3;
  alert(x);
}

x = parseInt(prompt("Enter number", 20));
if (x % 2 == 0 && x >= 100) {
  x = x / 2;
  alert(x);
} else if (x % 2 == 0 && x < 100) {
  x = x - 20;
  alert(x);
} else {
  x = x * 3;
  alert(x);
}*/
/*let x;
let sum = 0;
for (x = 2; x <= 100; x = x + 2) {
  sum += x;
}
console.log(sum);

sum = 0;
for (x = 1; x <= 100; x = x + 2) {
  sum += x;
}
console.log(sum);

for (x = 1; x <= 10; x++) {
  console.log("*");
}
let number, qNull, str;
str = "";
number = parseInt(prompt("Enter number", 20));
qNull = parseInt(prompt("Enter number of zero", 5));
if (number < 0) {
  str += "-";
  number *= -1;
}
for (x = 1; x <= qNull; x++) {
  str += "0";
}
str += number;
console.log(str);

number = parseInt(prompt("Enter number", 20));
console.log("Table multiply");
for (x = 0; x <= 9; x++) {
  console.log(`${x} * ${number} = ${number * x}`);
}*/

let i,
  N = 10,
  sum = 0;

for (i = 1; i <= N; i++) {
  console.log(`${1 / i}`);
  sum += 1 / i;
}
console.log(sum);
sum = 0;
N = 30;
for (i = 1; i <= N; i = i * 2) {
  console.log(`${1 / i}`);
  sum += 1 / i;
}
console.log(sum);
