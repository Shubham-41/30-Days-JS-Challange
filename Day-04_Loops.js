// Day 04 :- Loops

// Activity 1 :- For Loop

// Task 01 :- Write a program to print the numbers from 1 to 10 using a for loop

function printnum1_10()
{
    for(let i=1 ; i<=10 ; i++)
    {
        console.log(i);
        // console.log("\n");
    }
}

// printnum1_10()  // Printing first 10 natural numbers using function  --- Function Call

// console.log(printnum1_10());   // Printing first 10 natural numbers using function


for(let i=1 ; i<=10 ; i++)
    {
        console.log(i);
        // console.log("\n");
    }

// Task 02  :- Write a program to print the multiplication table of 5 using a for loop

console.log("Multiplication Table of 5 :- \n");

for(let i = 1 ;  i <= 10 ; i++ )
{
    console.log(5*i);
}

// Activity 02 : While Loop

// Task 03 : Write a program to calculate the sum of numbers from 1 to 10 using a while loop


let sum = 0 ;

function sum_n(num)
{
    let i = 0 ;
    
    while(i<=num)
    {
        sum = sum + i ;
        i++;
    }

    console.log(`Sum of first ${num} natural number  = ${sum}`);

}

sum_n(10);

// Task 04 : Write a program to print numbers from 10 to 1 using a while loop

function rev10_1()
{
    let i = 10 ;

    while(i>=1)
    {
        console.log(i);
        i--;
    }
}

rev10_1();  // Function call to print numbers from 10 to 1

// Activity 3 : Do While Loop

// Task 05 :  Write a program to print numbers from 1 to  using a do...while loop

let i = 1 ;
do {
    console.log(i);
    i++;
} while (i<=5);

// Task 06 :    Write a program to calculate the factorial of number using a do...while loop.



function factorial(num)
{   
    let fact = 1 ;
    let j = 1 ;
    do{
        fact = fact * j ;
        j++;
    }while(j<=num)

    console.log(`Factorial of ${num} = ${fact}`);
}

factorial(5);

// Activity 04 :- Nested Loops

// Tasl 07: Write a program to print a pattern using nested for loops   :-

/*
*
*   *
*   *   *
*   *   *   *
*   *   *   *   *
*/

/*
function printpattern(num)
{
    for(let i = 0 ; i < num ; i++ )
    {
        for(let j = 0 ; j <= i ; j++ )
        {
            console.log("*");
        }
    }
}

printpattern(5)

There always new line gets added after the execution of the statement console.log()
So we have to make a variable which will store the entire line row by row
and then we print before going to next row
after executing console.log 
first row will be printed and curser will move to the next row
*/

console.log("Printing Pattern");

for(let i = 0 ; i < 5 ; i++)
{
    let pattern = "";

    for(let j = 0 ; j <= i ; j++ )
    {
        pattern = pattern + "*\t";
    }

    console.log(pattern);
}

// Activity 05 :- Loop Control Statements

// Task 08 :- Write a program to print the numbers from 1 to 10, but skip the number 5 using the continue statement.

console.log("Use of Continue Statement");

for(let num = 1 ; num <= 10 ; num++)
{
    if(num==5)
        continue;

    console.log(num);
}


// Task 09 :- Write a program to print the numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

console.log("Use of Break Statement");

for(let num = 1 ; num <= 10 ; num++)
    {
        if(num==7)
            break;
    
        console.log(num);
    }

