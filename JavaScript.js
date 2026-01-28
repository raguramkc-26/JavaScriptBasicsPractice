//let a=8;  //assign 
//a=7; //Reassign
//console.log(a)

//const a=9;
//console.log(a)

//var a=10;
//var a="ten";
//console.log(a)

//const a = 10 + 10;
//console.log(a)

//DataType
//const age = 25;
//const isAdult = true;
//const word = `apple`;
//console.log(typeof age);
//console.log(typeof isAdult);
//console.log(typeof word);

//Array
//let hobbies = ["Painting" , "Planting" , "Washing"];
//console.log(hobbies);
//console.log(typeof hobbies);

//js Object or Json
//let person = {
  //  name: "KC RAGURAM",
  //  age:25,
  //  hobbies:["Painting" , "Planting" , "Washing"]
//};
//console.log(person);
//console.log(typeof person) 

//let age = 25;
//age++;
//console.log(age);

//console.log(5 == '5');

//Logical Operator concept is used to check magalir urimai thoogai scheme
//const age = 15;      //not a user friendly
//const hasAadhar = false;
//const hasIncomeCertificate = true;
//console.log(age >=21 && hasAadhar == true || hasIncomeCertificate == true);

//Logical Operator using conditional statement
//const age = 20;
//const hasAadhar = true;
//const hasIncomeCertificate = true;
//if(age >=21 && (hasAadhar == true || hasIncomeCertificate == true)) {
  //  console.log("Eligible for Scheme")
//}else {
  //  console.log("Not Eligible for Scheme")
//}

//if statement
//let number=-5;
//if (number < 0) {
  //  number = number *  -1;
//}
//console.log(number)

//if else statement
//let number = 5;
//if (number > 0) {
  //  console.log(number, 'is a positive number' )
//}
//else{
  //  console.log(number, 'is a negative number')
//}

//nested if else statement
//let number = 6;
//if (number > 0) {
 //number > 0
//console.log(number, 'is a positive number');
//} else {
 //number > 0 
 //either number < 0 or number == 0
    // the number can either be a 0 or a negative number
     // decision statement??
  //   if (number == 0) {
  //       console.log(number, 'is a zero');
  //   } else {
    //     console.log(number, 'is a negative number');
    // }
 //}

 //multiple if else if else condition
 //let number = 0 
 //if (number > 0){ 
//console.log(number, "is a Positive Number");
// } else if(number < 0) {
//console.log(number, "is a Negative Number");
// } else {
//  console.log(number, "is a Zero");
// } 

//Switch Case condition
//let number = 2;
//switch(number) {
//  case 1:
//    console.log("one");
//    break;
//  case 2:
//    console.log("two");
//    break;
//  case 3:
//    console.log("three");
//    break;
//  case 4:
//    console.log("four");
//    break;
//  default:
//    console.log("only 1-4 numbers are allowed");
//    break;
//}

//Ternary operator
// let number = 6;
// // ternary operator
// // ?:
// number > 0 ? console.log(number, 'is a positive number') : number < 0 ? console.log(number, 'is a negative number') : console.log(number, 'is a zero');

//Looping Statement
//if condition is true -> loops runs
//if condition is false -> loops stops

//While loop
//let count = 0;
//while(count < 3) {     //using less than Relational operator 
  //console.log('Hello');
  //count ++;
//}

//let count = 1;
//while(count !=4) { //Using Not Operator
  //console.log("Hello");
  //count ++;
//}

//for loop -> elegant syntax
//for(let count = 0; count < 3; count ++) {
//console.log("Hello");
//}

//do...while loop
//let count = 0;
//do {
 // console.log("Hello");
 // count ++;
//} while (count <3);

//Functions
//let maxValue = Math.max(4, 3, 500, 7, 3, 3, 4, 60);
//console.log(maxValue);

//named function
//function sayHello() {
 // console.log("Hello");
//}
//sayHello(); //called one 

//nameless function
//const sayHello = function() {
  //console.log("Hello")
//}
//sayHello(); //called one

//Arrow function
//const sayHello = () => console.log("Hello") 
//sayHello(); //called one

//IIFE:Immediately invoked function expression
//(() => {
  //console.log("Hello");
//})();

// function without arguments and without return value
// function sayHello() {
//     console.log('hello');
// }

// sayHello();

// function with argument and without return value
// function sayHello(name) {
//     console.log('hello', name);
// }

// // sathish -> argument/parameter
// // passed from the function call to the function definition
// sayHello('sathish');

// function with argument and with return value
// the return keyword breaks the function immediately
// function sayHello(name) {
//     return 'hello' + ' ' + name;
// }

// // sathish -> argument/parameter
// // passed from the function call to the function definition

// console.log(sayHello('sathish'));

// named function
//isPositive(3);
//function isPositive(number) {
  //   if (number > 0) {
  //       console.log(number, 'is positive');
  //   } else if (number < 0) {
  //       console.log(number, 'is negative');
  //   } else {
  //       console.log(number, 'is a zero');
  //   }
// }

// isPositive(5);

// nameless function
// const isPositive = function (number) {
//     if (number > 0) {
//         console.log(number, 'is positive');
//     } else if (number < 0) {
//         console.log(number, 'is negative');
//     } else {
//         console.log(number, 'is a zero');
//     }
// }

// isPositive(5);

// arrow function
// const isPositive = (number) => {
//     if (number > 0) {
//         console.log(number, 'is positive');
//     } else if (number < 0) {
//         console.log(number, 'is negative');
//     } else {
//         console.log(number, 'is a zero');
//     }
// }

// isPositive(5);

// IIFE
// ((number) => {
//     if (number > 0) {
//         console.log(number, 'is positive');
//     } else if (number < 0) {
//         console.log(number, 'is negative');
//     } else {
//         console.log(number, 'is a zero');
//     }
// })(5);

// recursive function: a function that calls itself.

// function main() {
//     console.log('hello');
//     main();
// }

// main();

//Arrays
//let numbers = [4, 5, 3, 1, 2];

// let fruits = ['mango', 'orange', 'apple', 'grapes', 'banana'];

// let branch = ['coimbatore', 250, 120000, 200000, 0.25, true];

// prints the entire array
// console.log(branch);

// indexing
//console.log(numbers[0]);

// accessing a particular element
// console.log(fruits[3]);

// updating a value at an index
// mutables -> changeables
// numbers[2] = 6;

// console.log(numbers);

// functions that are applicable to only a particular object created from a class -> methods
// class -> collection of objects or blue print or a template
// object -> instance of a class
// console.log(numbers);

let numbers = [3, 2, 1, 5, 4];
//let numbers = new Array(3, 2, 1, 5, 4);

// array methods -> functions that are pre-written

// push -> inserts values to the end of the array
//numbers.push(6);
//console.log(numbers)
//numbers.push(10, 7);
//console.log(numbers)

// length is a property and not a method
//console.log(numbers.length);

// pop -> removes a value from the end of the array
//numbers.pop();
//console.log(numbers)
// numbers.pop();

// unshift -> inserts a value or more values at the beginning of the array
// numbers.unshift(11, 24);

// shift -> removes one element from the beginning of the array
// numbers.shift();
// numbers.shift();

// to insert or delete an element in either beginning or end or anywhere in the array -> splice

// insert: element: 7
// between 1 and 5
// index: 3
// numbers.splice(3, 0, 7);

// numbers.splice(5, 1);

// console.log(numbers);

//numbers = 0xfae12af
// 300 301 302 303 304 305 306 307
// numbers = 300

// we cannot re-assign a value
//const numbers = [3, 5, 2, 1, 4];
//              300 304 308 312 316
// numbers -> 300 (get all values starting from address 300)
// numbers[0] -> numbers + 0 * (size of the number) => 300 => 3
// numbers[2] -> 308 -> 2

// numbers[0] = 13;
// numbers = [13, 5, 2, 1, 4];

//numbers.push(7);

//console.log(numbers);

let number=[3 , 5 , 7 , 6 , 1 , 4 , 2];
number.sort()
console.log(number)