// JavaScript syntax is the set of rules, how JavaScript programs are constructed.

/*      JAVASCRIPT VALUES
The JavaScript syntax defines two types of values:

1. Fixed values
    Fixed values are called Literals.
    a. Numbers are written with or without decimals:
        10.50 or 10

    b. Strings are text, written within double or single quotes:
        "Javascript" or 'Javascript'

2. Variable values
    Variable values are called Variables, variables are used to store data values. JavaScript uses the keywords var, let and const to declare variables.
    
*/
console.log(10);
console.log(10.50);
console.log("Javascript");
console.log('Javascript');


/*      JAVASCRIPT OPERATORS
JavaScript uses arithmetic operators ( + - * / ) to compute values.
JavaScript uses an assignment operator ( = ) to assign values to variables.
*/
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);

let x = 20;
console.log(x);

/*      JAVASCRIPT EXPRESSIONS
An expression is a combination of values, variables, and operators, which computes to a value.
The computation is called an evaluation.
*/

console.log(x + 10);


/*      CASE SENSITIVE
All JavaScript identifiers are case sensitive. name, and Name are two different variables. 

Programmers have used different ways of joining multiple words into one variable name:

1. Hyphens: first-name, last-name, master-card, inter-city.
Hyphens are not allowed in JavaScript. They are reserved for subtractions.

2. Underscore: first_name, last_name, master_card, inter_city.

3. Upper Camel Case (Pascal Case): FirstName, LastName, MasterCard, InterCity.

4. Lower Camel Case: JavaScript programmers tend to use camel case that starts with a lowercase letter:
        firstName, lastName, masterCard, interCity.

*/

let firstName = "Ameer", lastName = "Hamza";
console.log(firstName + ' ' + lastName);

let FirstName = "Hashir", LastName = "Ali";
console.log(FirstName + ' ' + LastName);