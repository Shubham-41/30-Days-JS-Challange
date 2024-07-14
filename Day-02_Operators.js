// Day 02   :- Operators

// Activity 01: Arithmetic Operations

// Task 01 :- Write a program to add two numbers and log the result to the console.

let num1 = 52

let num2 = 25

let ans = num1 + num2

console.log(ans);   // Printing Addition of two numbers

// Task 02 :- Write a program to subtract two numbers and log the result to the console 

ans = num2 - num1

console.log(ans);   // Printing Subtraction of two numbers

// Task 03 :- Write a program to multiply two numbers and log the result to the console

ans = num1 * num2 

console.log(ans);

// Task 04 :- Write a program to divide two numbers and log the result to the console.

ans = num1 / num2 

console.log(ans);

// Task 05 :- Write a program to find the remainder when one number is divided by another and log the result to the console.

ans = num1 % num2

console.log(ans);

// Activity 02: Assignment Operators

// Task 06 :- Use the += operator to add a number to a variable and log the result to the console.

ans += num1  // ans = ans + num

console.log(ans);

// Task 07 :- Use the -= operator to subtract a number from a variable and log the result to the console.

ans -= num2 

console.log(ans);

// Activity 03: Comparison Operators

// Task 08 :- Write a program to compare two numbers using > and < and log the result to the console.

ans = num1 > num2

console.log(ans);

ans = num1 < num2

console.log(ans);

// Task 09 :- Write a program to compare two numbers using >= and <= and log the result to the console.

ans = num1 >= num2

console.log(ans);

ans = num1 <= num2

console.log(ans);

// Task 10 :- Write a program to compare two numbers using == and === and log the result to the console.

ans = num1 == num2 

console.log(ans);

ans = num1 === num2 

console.log(ans);


// Activity 04: Logical Operators

// Task 11 :- Write a program that uses the && operator to combine two conditions and log the result to the console.

ans = (num1>=25 && num2<=100)

console.log(ans);

// Task 12 :- Write a program that uses the || operator to combine two conditions and log the result to the console 

ans = (num1>=25 || num2<=100)

// Task 13 :-  Write a program that uses the ! operator to negate a condition and log the result to the console.

ans = !(num1>=25 || num2<=100)

console.log(ans);


ans = num1>=0? console.log("Positive") : console.log("Negative")

console.log(ans);


/*  Output 

77
-27
1300
2.08
2
54
29
true
false
true
false
false
false
true
false
Positive

*/
