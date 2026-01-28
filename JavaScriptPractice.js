//Section 1
//let age = 25;
//age = 26;  //Reassignment
//console.log(age)

//const a=45;
//const isActive=true;
//const name="Poona";
//console.log(typeof a);   //number
//console.log(typeof isActive);  //boolean
//console.log(typeof name);   //string

//const name = "Yana";
//console.log(name); //Store name in a variable

//const { PI }=Math;
//console.log(PI)    //constant PI

//Section 2
//const a = 20;
//const b = 10;
//console.log(a+b);  //Addition
//console.log(a-b);  //Subtraction
//console.log(a*b);  //Multiplication
//console.log(a/b);  //Quotient
//console.log(a%b);  //Remainder
  
//let a=10;
//a++;  //Increment
//a--;  //Decrement
//console.log(a);

//console.log(5 == "5");
//console.log(5 === "5");

//const a = 30;
//const b = 10;
//console.log( a > b);

//const a = 20;
//const b = 10;
//const c = 30;
//const allPositives = a > 0 && b > 0 && c > 0;
//console.log(allPositives);

//Section 3
//let a=-6;
//if (a<0) {
//console.log('a', 'is a negative Number');
//}

//let a = 7;
//if (a>0) {
//console.log('a', 'is a positive Number');
//} else {
//console.log('a', 'is a Negative Number');
//}

//let age = 18;
//if(age >= 18) {
  //  console.log('Eligible to Vote');
//} else {
  //  console.log('not Eligible to Vote');
//}

//const age = 18;
//const hasAadhar = true;
//const hasVoterId = false;
//if(age >=18 && (hasAadhar == true || hasVoterId == true)) {
//console.log("Eligible to vote");
//}else {
//console.log("Not Eligible to Vote");
//}

//const a=3;
//if( a % 2 === 0) {
  //  console.log("Number is even Number");
//} else {
  //  console.log("Number is odd Number");
//}

//const a=50;
//const b=30;
//const c=100;
//if (a>=b && a>=c) {
//console.log(" a is the largest Number")
//} else if (b>=a && b>=c) {
//console.log("b is the largest Number")
//} else {
//console.log("c is the largest Number")
//}

//Section 4
//for (let number = 1; number <= 7; number++) {
//  let dayName;
//  switch (number) {
//    case 1:
//      dayName = "Monday";
//      break;
//    case 2:
//      dayName = "Tuesday";
//      break;
//   case 3:
//      dayName = "Wednesday";
//      break;
//    case 4:
//      dayName = "Thursday";
//      break;
//    case 5:
//      dayName = "Friday";
//      break;
//    case 6:
//      dayName = "Saturday";
//      break;
//    case 7:
//      dayName = "Sunday";
//      break;
//    default:
//      dayName = "Unknown Day";
//  }
//  console.log(`Number ${number} is ${dayName}`);
//}

//for (let number = 1; number <=12; number++) { 
//  let monthName;
//  switch(number) {
//    case 1:
//      monthName = "January";
//      break;
//    case 2:
//      monthName = "February";
//      break;
//    case 3:
//      monthName = "March";
//      break;
//    case 4:
//      monthName = "April";
//      break;
//    case 5:
//      monthName = "May";
//      break;
//    case 6:
//      monthName = "June";
//      break;
//    case 7:
//      monthName = "July";
//      break;
//    case 8:
//      monthName = "August";
//      break;
//    case 9:
//      monthName = "September";
//      break;
//    case 10:
//      monthName = "October";
//      break;
//    case 11:
//      monthName = "November";
//      break;
//    case 12:
//      monthName = "December";
//      break;
//    default:
//      monthName = "unknown month"
//  }
//  console.log(`Number ${number} is ${monthName}`);
//}

//let character = "a";
//let result;
//switch(character) { 
// case "a":
// case "e":
// case "i":
// case "o":
// case "u": 
//  result = "vowels"
//  break;
//    default:
//     result = "Not a vowels";
//  }
//  console.log(`Character ${character} is ${result}`); 

//let a = 10;
//let b = 20;
//let operator = "+";
//let result;

//switch (operator) {
//  case "+":
//    result = a + b;
//    break;
//  case "-":
//    result = a - b;
 //   break;
//  case "*":
//    result = a * b;
//    break;
//  case "/":
//    result = a / b;
//    break;
//  default:
//    result = "Invalid operator";
//}
//console.log(`Result of ${a} ${operator} ${b} is ${result}`);

//Section 5
//for(let i = 1; i <=10; i ++) {
//console.log(i);
//}

//for(let i = 10; i >=1; i --) {
 // console.log(i);
//}

//for(let i = 2; i <=50; i+=2) {
//  console.log(i)
//}

//for(let i = 5; i <= 50; i += 5) {
//  console.log(i);
//}

//let sum = 0;
//for (let i = 1; i <= 100; i++) {
//sum += i;
//}
//console.log("Sum from 1 to 100 is:", sum);   

//let N = 12345;
//let count = 0;
//let temp = N;
//if (temp === 0) {
 // count = 1;
//} else {
 // while (temp !== 0) {
 //   temp = Math.floor(temp / 10);
  //  count++;
 // }
//}
//console.log("Number of digits:", count);

//let N = 1234;
//let reverse = 0;
//let temp = N;
//while (temp !== 0) {
 // let digit = temp % 10;
 // reverse = reverse * 10 + digit;
 // temp = Math.floor(temp / 10);
//}
//console.log("Reversed number:", reverse);

//let N = 121;
//let original = N;
//let reverse = 0;
//while (N !== 0) {
 // let digit = N % 10;
 // reverse = reverse * 10 + digit;
 // N = Math.floor(N / 10);
//}
//if (reverse === original) {
 // console.log("Palindrome");
//} else {
//  console.log("Not a Palindrome");
//}

//Section 6
//function checkNumberSign(num) {
//  if (num > 0) {
//    return "positive";
//  } else if (num < 0) {
//    return "negative";
//  } else {
//    return "zero";
//  }
//} 
//console.log(`The number 5 is ${checkNumberSign(5)}.`);
//console.log(`The number -10 is ${checkNumberSign(-10)}.`);
//console.log(`The number 0 is ${checkNumberSign(0)}.`);

//const a = 30;
//const b = 20;
//function findLargestNumber(num1, num2) {
//  if (num1 > num2) {
//    return num1;
//  } else {
//    return num2;
//  }
//}
//console.log(findLargestNumber(a, b));

//const squareNumber = (num) => num*num
//console.log(squareNumber(20));

//const cubeNumber = (num) => num*num*num
//console.log(cubeNumber(30));

//const a=70;
//function isEven(num) {
//  if (num % 2 === 0) {
//    return true;
//  } else {
//    return false;
//  }
//}
//console.log(isEven(a));

//function sayHello() {
//  console.log("Poona");
//}
//sayHello();

//const addNumber = (a,b) => a+b
//console.log(addNumber(30,20));

//(() => {
 // console.log("Welcome");
//})(); 

//Section 7
const array = [20, 30, 40, 50, 60]
//console.log(array)
//console.log("First Element:",array[0])
//console.log("Last Element:",array[array.length-1])
//let sum = 0;
//for (let i = 0; i < array.length; i++) {
//  sum += array[i];
//}
//console.log("Sum of array:", sum);

let evenCount = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    evenCount++;
  }
}
console.log("Even numbers count:", evenCount);

let reversed = [];
for (let i = array.length - 1; i >= 0; i--) {
  reversed.push(array[i]);
}
console.log("Reversed array:", reversed);

array.push(99);
console.log("After push:", array);

array.pop();
console.log("After pop:", array);

array.unshift(5);
console.log("After unshift:", array);

array.shift();
console.log("After shift:", array);

