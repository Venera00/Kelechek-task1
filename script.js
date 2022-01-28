// 1. Простое сообщение: сохраните текстовое сообщение в переменной и выведите его в браузере

let text = "Hello World!";
document.write(text);

/* 2. Простые сообщения: сохраните сообщение в переменной и выведите это сообщение.
  Затем замените значение переменной другим сообщением и выведите новое сообщение */

let text2 = "First message";

text2 = "Updated message";
console.log(text2);

// 3. Напишите несколько строк кода, выводящих на экран ваше имя и почтовый адрес.
let myName = "Venera";
let myEmail = "venera.omurzakkyzy.kk@gmail.com";
document.write(
  "<br />" + "Name:" + myName + "<br />" + "Email:" + myEmail + "<br />"
);

/*Интернет-магазин занимается продажей различных сувениров и безделушек.
 Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, 
запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.*/
let souvenir = 75;
let bauble = 112;
let question = prompt("How many souvenirs do you wanna buy: ");
let question_two = prompt("How many baubles do you wanna buy: ");
document.write(
  `The total weight of your purchase: ${
    souvenir * question + question_two * bauble
  }`
);

/*5. Создайте программу, которая запрашивает у пользователя два целых числа **a** и **b**, после чего выводит на экран результаты следующих математических операций: 

    - сумма a и b; 
    
    - разница между a и b;
    
    - произведение a и b; 
    
    - частное от деления a на b; 
    
    - остаток от деления a на b;  
    
    - результат возведения числа a в степень b*/

let a = Number(prompt("Введите первое число: "));
let b = Number(prompt("Введите второе число: "));
document.write("<br />" + (a + b));
document.write("<br />" + a - b);
document.write("<br />" + a * b);
document.write("<br />" + a / b);
document.write("<br />" + (a % b));
document.write("<br />" + a ** b);
