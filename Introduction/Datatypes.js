/*      JAVASCRIPT DATATYPES

JavaScript can handle many types of data, but for now, just think of numbers and strings.
Strings are written inside double or single quotes. Numbers are written without quotes.
If you put a number in quotes, it will be treated as a text string.

*/

console.log(100);
console.log("Hello");
console.log("100");


/*      VARIABLE DECLARAION
You declare a JavaScript variable with the var or the let keyword.
    e.g. var carName or let carName
After the declaration, the variable has no value (technically it is undefined).
*/

var carName;
console.log(carName);


/* REDECLARING JAVASCRIPT VARIABLES

If you re-declare a JavaScript variable declared with var, it will not lose its value because var has global scope in the program.
    e.g. var carName = "Volvo";
         var carName;
he variable carName will still have the value "Volvo" after the execution of these statements.

You cannot re-declare a variable declared with let or const.
    e.g. let carName = "Volvo";
         let carName;
This will not work.

*/

var car = "Volvo";
var car;
console.log(car);

let car2 = "BMW";
//let car2;                   // This will give error that you can't redeclare a block scoped variable which means that this car2 variable is already declared in this block {} scope and can be declared in a nother block but not in this same block
console.log(car2);
/* JAVASCRIPT ARITHEMATIC



*/
let x = 5 + 2 + 3;
console.log(x);

let y = "John" + " " + "Doe";
console.log(y);

// If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
let z = "5" + 2 + 3;    // This is starting with string so it will contanete all upcoming values as strings
console.log(z);         // Output : 523

let a = 3 + 3 + "5";    // This is starting with literals so it will first perform operations and compute a value and then upcoming string is concatenated at suffix of this value
console.log(a);         // Output : 65


