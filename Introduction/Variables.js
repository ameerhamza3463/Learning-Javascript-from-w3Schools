/*  JAVASCRIPT VARIABLES

Variables are Containers for Storing Data.
JavaScript Variables can be declared in 4 ways:

1. Automatically/ Undeclared 
    e.g. x = 5;
         y = 6;
         z = x + y;
        x, y, and z are undeclared variables.

2. Using var: The var keyword was used in all JavaScript code from 1995 to 2015. The var keyword should only be used in code written for older browsers.
    e.g. var x = 5;
         var y = 6;
         var z = x + y;
         
3. Using let: The let and const keywords were added to JavaScript in 2015.
    e.g. let x = 5;
         let y = 6;
         let z = x + y;

4. Using const
    e.g. const x = 5;
         const y = 6;
         const z = x + y;
*/
var x = 5;
let y = 6;
const z = x + y;

console.log(x);
console.log(y);
console.log(z);


/*
When to Use var, let, or const?

1. Always declare variables.
2. Always use const if the value should not be changed.
3. Always use const if the type should not be changed (Arrays and Objects).
4. Only use let if you can't use const.
5. Only use var if you MUST support old browsers.

*/