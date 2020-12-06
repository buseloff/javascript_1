"use strict";
/*/*    1. запросить имя пользователя и вывести приветственное 
сообщение*/
let userName;
userName = prompt("Enter your name", "Alex");
alert(`Hello, ${userName} `);

/* 2. объявить переменную Х. умножить ее на 30 и вычесть 100. 
    полученный результат вывести в консоль
    */
let x = 50;
console.log(`Result, ${x * 30 - 100} `);

/*3. объявите переменные необходимые для вычисления площади 
    прямоугольника и выполните вычисление*/
let a, b;
a = 30;
b = 50;
console.log(`Square =  ${a * b} `);

/*4. * объявите переменные необходимые для вычисления 
    дохода по вкладу. выполните вычисление*/
let percentPerMonth, initialSum, income, countMonth;
countMonth = 15;
percentPerMonth = 0.5;
initialSum = parseFloat(prompt("Enter initial sum", 1000.0));

income =
  initialSum * Math.pow(1 + percentPerMonth / 100, countMonth) - initialSum;
console.log(`Your income = ${income}`);

/*5. объявить константу, которая соответствует текущему году.
     вывести в консоль значения прошлого и следующего года*/
const current_year = 2020;
console.log(`Last year = ${current_year - 1}`);
console.log(`Next year = ${current_year + 1}`);

/*6. * Запросите у пользователя год. определить является ли год 
    високосным?*/
let year;
year = parseInt(prompt("Enter year", 2020));
if (year % 4 == 0) {
  console.log(`Год високосный`);
} else {
  console.log(`Год не високосный`);
}

/*
    7. решите уравнение a*x + b = с . найдите х и выведите значение 
    в консоль*/
let c;
a = 5;
b = 10;
c = 68;
x = (c - b) / a;
console.log(`X =  ${x} `);

/*8. запросите у пользователя значение в часах и переведите в
    минуты а потом в секунды*/
let h;
h = parseFloat(prompt("Enter hours", 20));
console.log(`In minutes = ${h * 60}`);
console.log(`In seconds = ${h * 60 * 60}`);

/*9. вычислите объем и площадь шара v=¾  * pi * r3 , 
    s = 4*pi*r2*/
const PI = 3.1415;
let v, s, r;
r = parseFloat(prompt("Enter radius", 10));
v = (3 / 4) * PI * r ** 3;
s = 4 * PI * r ** 2;
console.log(`v = ${v}`);
console.log(`s = ${s}`);

/*10. вычислите стоимость покупки , которая состоит из 
    N тетрадей и  M ручек*/
let priceN, priceM, qN, qM, sales;
qN = parseInt(prompt("Enter notebooks", 20));
qM = parseInt(prompt("Enter pens", 20));
priceM = 10;
priceN = 15;
sales = qM * priceM + qN * priceN;
console.log(`You should pay ${sales}`);

/*11. * решите задачу 10 с учетом скидки 2% если сумма 
    покупки превысит 500 грн*/
let discount = 2.0;
if (sales >= 500) {
  console.log(
    `Your discount = ${(sales * discount) / 100}, You should pay ${
      sales * (1 - discount / 100)
    }`
  );
} else {
  console.log(`You should pay ${sales}`);
}

/*
    12. напишите программу которая по введенному числу 
    прописывает сумму в гривнах и копейках. например, 120.75 
     вернет строку “120 грн. 75 коп.”*/
/* 13. *запросите стоимость покупки (N штук товара по цене P).
     начислить 2% скидки если сумма больше 500 грн и 3% если 
     сумма больше 700грн*/
let N = parseInt(prompt("Enter quantity", 20));
let price = parseFloat(prompt("Enter price", 5));
sales = N * price;
let discount1 = 2,
  discount2 = 3;
if (sales >= 500 && sales < 700) {
  console.log(
    `Your discount = ${(sales * discount1) / 100}, You should pay ${
      sales * (1 - discount1 / 100)
    }`
  );
} else if (sales >= 700) {
  console.log(
    `Your discount = ${(sales * discount2) / 100}, You should pay ${
      sales * (1 - discount2 / 100)
    }`
  );
} else {
  console.log(`You should pay ${sales}`);
}

/*14. Напишите программу которая проверяет правильно ли 
    пользователь вычислил “2+2”*/
let answer;
answer = parseInt(prompt("2 +2 = ?", 20));
if (answer == 4) {
  alert(`Right answer`);
} else {
  alert(`Wrong answer`);
}

/*15. *Напишите программу которая проверяет правильно 
    ли пользователь вычислил умножение двух чисел которые 
    запрашиваются у пользователя*/

let number1, number2, answer_user, answer_comp;
number1 = parseInt(prompt("First number", 20));
number2 = parseInt(prompt("Second number", 20));
answer_comp = number1 * number2;
answer_user = prompt("Your answer");
if (answer_user == answer_comp) {
  alert(`Right answer`);
} else {
  alert(`Wrong answer`);
}
*/
/*
    16. фокус с числом на угадывание. попросите пользователя 
    задумать двузначное число и проделать следующие действия: 
    умножить число его десятков на 2, прибавить потом 5, 
    умножить на 5, прибавить 10, прибавить число единиц 
    задуманного числа. Теперь вы можете вывести число 
    которое задумал пользователь если вычтите 35.*/
let guess, des, ed;

number1 = parseInt(prompt("Enter 2 digit number"));
ed = number1 % 10;
des = (number1- ed)/10;
guess = ((des) * 2 + 5) * 5 + 10 + ed - 35;
console.log(`Number = ${guess}`);
