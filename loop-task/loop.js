// function findPrimesInRange(start, end) {
//   // Validate input range
//   if (start < 2 || end < 2 || start > end) {
//     console.log("Invalid range. Prime numbers start from 2.");
//     return;
//   }

//   console.log(`Prime numbers between ${start} and ${end}:`);

//   // Iterate through the range
//   for (let number = start; number <= end; number++) {
//     if (isPrime(number)) {
//       console.log(number);
//     }
//   }
// }

// function isPrime(number) {
//   // Handle special cases: 0, 1, and negative numbers are not prime
//   if (number <= 1) {
//     return false;
//   }

//   // Check for divisibility from 2 to the square root of the number
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       // If the number is divisible by any other number, it's not prime
//       return false;
//     }
//   }

//   // If no divisors are found, the number is prime
//   return true;
// }

// // Example usage:
// // findPrimesInRange(2, 50);

// console.log(Math.sqrt(30));
// console.log(Math.pow(5, 8));

// ================= for loop ===============
// "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

// for (let i = 1; i <= 60; i++) {
//   console.log(
//     "I will invest at least 6 hrs every single day for next 60 days!",
//     i
//   );
// }

// ---------  Find all the odd numbers from 61 to 100.
// for (let i = 61; i <= 100; i += 2) {
//   console.log(i);
// }

// ------------ Find all the even numbers from 78 to 98.
// for (let i = 78; i <= 98; i += 2) {
//   console.log(i);
// }

// Display sum of all the odd numbers from 91 to 129.
// let oddSum = 0;
// for (let i = 91; i <= 129; i += 2) {
//   oddSum += i;
//     console.log(oddSum);
// }
// console.log(oddSum);

// Display sum of all the even numbers from 51 to 85.
// let evenSum = 0;
// for (let i = 51; i <= 85; i++) {
//   if (i % 2 === 0) {
//     evenSum += i;
//   }
// }
// console.log(evenSum);

// Generate a multiplication table for number 9
// for (let i = 1; i <= 10; i++) {
//   console.log(`9 * ${i} = ${9 * i}`);
// }

// Implement a countdown timer that counts down from 81 to 65.
// for (let i = 85; i >= 65; i--) {
//   console.log(i);
// }

// ================= while loop ===============
// "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
// let commit = 1;
// while (commit <= 60) {
//   console.log(
//     "I will invest at least 6 hrs every single day for next 60 days!",
//     commit
//   );
//   commit++;
// }

// ---------  Find all the odd numbers from 61 to 100.
// let oddNum = 61;
// while (oddNum <= 100) {
//   console.log(oddNum);
//   oddNum += 2;
// }

// ------------ Find all the even numbers from 78 to 98.
// let evenNum = 78;
// while (evenNum <= 98) {
//   console.log(evenNum);
//   evenNum += 2;
// }

// Display sum of all the odd numbers from 91 to 129.
// let oddNum = 91;
// let oddSum = 0;
// while (oddNum <= 129) {
//   oddSum += oddNum;
//   oddNum += 2;
// }
// console.log(oddSum);

// Display sum of all the even numbers from 51 to 85.
// let evenNum = 51;
// let evenSum = 0;
// while (evenNum <= 85) {
//   if (evenNum % 2 === 0) {
//     evenSum += evenNum;
//   }
//   evenNum++;
// }
// console.log(evenSum);

// Generate a multiplication table for number 9
let nineTable = 1;
while (nineTable <= 10) {
  console.log(`9 * ${nineTable} = ${9 * nineTable}`);
  nineTable++;
}

// Implement a countdown timer that counts down from 81 to 65.
// for (let i = 85; i >= 65; i--) {
//   console.log(i);
// }

// let you = 85;
// while (you >= 65) {
//   console.log(you);
//   you--;
// }
