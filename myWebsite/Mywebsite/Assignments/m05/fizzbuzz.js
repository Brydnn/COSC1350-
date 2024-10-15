
/*  Name Brydnn Killpack
   10/2/2024
    fizzBuzz.js
    COSC 1350 NT
*/


// Declare Variables
let message = "";    // declare message variable and assign it a blank value
let index = 0        // declare looping variable and assign it a 0 value

// Print all the numbers from 1 to 100, with two exceptions
for (index = 1; index <= 100; index++) {
    // For numbers divisible by 3, messge equals "Fizz" 
    if ((index) % 3 == 0) {
        message = "fizz"
    // For numbers divisible by 5 (and not 3), messge equals "Buzz" instead
    } else if ((index) % 5 == 0){ 
        message = "Buzz";
    // messge equals the number
    } else {message = index}
    
    // use console.log to print
    console.log(message)
}
// end program