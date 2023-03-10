//! DO NOT REMOVE 
const prompt = require('prompt-sync')({sigint: true});

/**
  Example usage to prompt a user: 
  const name = prompt('What is your name?');
  console.log(`Hey there ${name}`);

  All user input will be read as a String, so in order to treat user input as numbers, you’ll need to convert the input:
*/

// 1.Write a loop the prints the even numbers from 20 - 100

// for(number = 20; number <= 100; number += 2){
//   console.log(number)
// }

// 2.Write a loop that prints out the odd numbers from 1 to 15.

// for(number = 1;number <= 15; number++){
//   console.log(number)
// }

// 3.n to m : Same as the previous problem, except you will prompt the user for the number to start on and the number to end on. Example session

// let number = prompt('pick a number')
// let secondNumber = prompt('pick a larger number')

// for(i = number; i <= secondNumber; i++) {
//   console.log(i)
// }

//4.Write a loop that calculates the sum of the numbers from 1 to 100.

// for(number = 1; number <= 100; number++){
//   console.log(number)
// }
// numberSum(number)

//5.Write a loop that calculates the factorial of a number.

// var inputNumber = prompt('Please enter an integer');
// var total = 1;

// for (i = 0; i < inputNumber; i++){
//     total = total * (inputNumber - i);
// }

// console.log(inputNumber + '! = ' + total);

//6.Write a loop that prints out the Fibonacci sequence up to a certain number of terms.



//7..Print a 5x5 square of * characters.
// function square(num){
//   for(i = 0; i < num; i++){
//       for(j = 0; j < num; j++){
//           console.log("*");
//       }
//       console.log(" ");
//   }
//   }square(2);