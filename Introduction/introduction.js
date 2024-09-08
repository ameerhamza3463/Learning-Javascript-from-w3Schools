// JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.

/*              HOW TO USE JAVASCRIPT IN A PROJECT
Javascript can be used in three ways:
1. With script tag in head.
    e.g. 
    <!DOCTYPE html>
    <html>
    <head>
    <script>
    function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    }
    </script>
    </head>

2. With script tag in body.
    e.g.
    <body>
    <h2>Demo JavaScript in Body</h2>
    <p id="demo">A Paragraph</p>
    <button type="button" onclick="myFunction()">Try it</button>

    <script>
    function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    }
    </script>

    </body>

    NOTE: Placing scripts at the bottom of the <body> element improves the display speed, because script interpretation slows down the display.

3. External JS file.
    To use an external script, put the name of the script file in the src (source) attribute of a <script> tag:   e.g.  <script src="myScript.js"></script>
    You can place an external script reference in <head> or <body> as you like.

*/

/*          JAVASCRIPT OUTPUT
JavaScript can "display" data in different ways:

1. Writing into an HTML element, using innerHTML.
2. Writing into the HTML output using document.write(). Using document.write() after an HTML document is loaded, will delete all existing HTML:
3. Writing into an alert box, using window.alert().
4. Writing into the browser console, using console.log().


*/

console.log("Hello World");