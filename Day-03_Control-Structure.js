// Day 03   :- Control Structure

// Activity 1 :- if-Else Statements

// Task 01 :- Write a program to check if a number is +ve, -ve or zero, and log the result to the console.

let num = -5

if(num>0)
    console.log("Positive");
else if(num<0)
    console.log("Negative");
else
    console.log("Zero");

// Task 02 :- Write a program to check if a person is eligible to vote (age>=18) and log the result to the console

let age = 18

if(age>=18)
    console.log("Person Eligible to Vote");
else
    console.log("Person Not-Eligible to Vote");

// Activity 2 : Nested If-else Statement

// Task 03 :- Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 5
let num2 = 8
let num3 = 9

if(num1>num2)
{
    if(num1 > num3)
    {
        console.log(num1);
    }
    else
    {
        console.log(num3);
    }
}
else
{
    if(num2>num3)
    {
        console.log(num2);
    }
    else
    {
        console.log(num3);
    }
}

// Activity 3 : Switch Case

// Task 4 : Write a program that uses a switch case to determine the dat of the week based on a number (1-7) and kig the day name to the console

let  day = 5

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    
    case 2:
        console.log("Monday");
        break;
    
    case 3:
        console.log("Tuesday");
        break;
    
    case 4:
        console.log("Wednesday");
        break;
    
    case 5:
        console.log("Thursday");
        break;
    
    case 6:
        console.log("Friday");
        break;
    
    case 7:
        console.log("Saturday");
        break;
    
    default:
        console.log("Enter correct day betwn (1-7)");
        break;
}

// Task 05 : Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console.

let mark = 97

switch (true) {
    case (mark >= 90 && mark <= 100):
        console.log("GRADE-A");
        break;
    
    case (mark >= 80 && mark <= 89):
        console.log("GRADE-B");
        break
    
    case (mark >= 70 && mark <= 79):
            console.log("GRADE-C");
            break

    case (mark >= 60 && mark <= 69):
            console.log("GRADE-D");
            break

    case (mark >= 0 && mark <= 50):
            console.log("GRADE-F");
            break

    default:
        console.log("Enter +ve Marks");
        break;
}

// Activity 4: Conditional (Ternary) Operator

// Task 6 : Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let checknum = 6

let result = checknum%2==0 ? `Even number: ${checknum}` : `Odd number: ${checknum}`

console.log(result);

// Activity 5 : Combining Conditions

// Task 7 : Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2024


if( (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 )
    console.log(`${year} is a leap year.`);
else
    console.log(`${year} is not a leap year.`);
