/* 
Write code that will go through each number from 1 to 100 and:

For each number that is a multiple of 3, print "Fizz"
For each number that is a multiple of 5, print "Buzz"
For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
All other numbers should just print normally
*/

/* pseudocode prep
* for loop from 1 to 100 
* % 3 = 0 will answer isMultOf3
* % 5 = 0 will answer isMultOf5
* do both first to check isMultOf3And5, otherwise it will satisfy on of the other conditions first
* else, print the actual number
* I'll write this as a function for fun
*/

// function fizzBuzz(start,end) {
//     //using start and end params so this can work for other ranges besides just 1 to 100
//     for (var i=start;i<=end;i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         }
//         else if (i % 3 === 0) {
//             console.log("Fizz");
//             }
//         else if (i % 5 === 0) {
//             console.log("Buzz");
//         }
//         else {
//             console.log(i)
//         }

//     }
// }

// fizzBuzz(1,100);

//just the for loop

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i)
    }
}

//expected output is "1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', etc."
//this patern of "n, n, Fizz, n, Buzz, Fizz, n, n, Fizz, Buzz, n, Fizz, n, n, FizzBuzz" keeps repeating