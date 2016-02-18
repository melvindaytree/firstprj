/** https://jsfiddle.net/cv37xt0s/93/
/**
*
* Exercises 1-5 require you to write functions. Do NOT call the functions yet (except to test).
*
**/
function fancyLog(text){
  var theText = document.createTextNode(text);
  var theP = document.createElement("p");
  theP.appendChild(theText);
  document.querySelector('#intro').appendChild(theP);
}
/**
*
* 1) Write a function that calculates the average of three numbers AND RETURNS IT
*
**/
function calc(num1,num2,num3) {
  var avg = (num1 + num2 + num3)/3;

  return avg;
};

/**
*
* 2) Write a function that converts a string to lower-case AND LOGS IT to the console
*
**/
function lower(string) {
  console.log(string.toLowerCase());
  fancyLog(string.toLowerCase());
};

/**
*
* 3) Write a function that will HIDE the HTML element of the ID passed to it
*
**/

function hide() {
  document.getElementById("intro").style.visibility = 'hidden';
};



/**
*
* 4) Write a function that uses SWITCHES to acccept a LETTER GRADE: A,B,C,D,F and RETURN a string that will 
* be the message:
*
* - If it's an A: "An A? Great work! Pretty good grade, cheater."
* - If it's a B: "Not bad at all! You got a B."
* - If it's a C: "Yawn. P average, bruh."
* - If it's a D: "Below average! Not impressed!"
* - If it's an F: "Fail."
* - If it's anything else: "Invalid grade."
**/
function useSwitch(grade) {
  switch (grade) {
    case "A":
    return "An A? Great work! Pretty good grade, cheater.";
    break;
    
    case "B":
    return "Not bad at all! You got a B.";
    break;
    
    case "C":
    return "Yawn. P average, bruh.";
    break;
    
    case "D":
    return "Below average! Not impressed!";
    break;
    
    case "F":
    return "Fail.";
    break;
    
    default:
    return "Invalid grade.";
    break;
};
}

/**
*
* 5) Write a function that accepts a parameter, color, and changes the background color of the page to the 
* color that is passed to it. USE AN IF STATEMENT to accomplish the following: if the background color is
* red, blue, or black, change the font color of the body to white.
*
**/
function colorChange(color) {
  document.body.style.backgroundColor = color;
  
  if (color == "red" || "blue" || "black") {
    document.body.style.color = "white";
  }
};



/**
*
* 6) Now that you've created the functions above, let's do some HTML.
* a) First, create (and label!) three text inputs in a form: Age 1, Age 2, Age 3. Add a button to
* that form and make it say "calculate the average." Write some javascript that will call the function you
* wrote above, and display, in that form, some text that says "The average is + {average}" when the button is 
* clicked.
**/
function calculate() {
  var firstNum = parseInt(document.getElementById("age1").value);
  var secondNum = parseInt(document.getElementById("age2").value);
  var thirdNum = parseInt(document.getElementById("age3").value);
  var avg = calc(firstNum,secondNum,thirdNum);
  fancyLog("The average is " + avg);
};
/**
* b) Make another form with a text input. Write a button that will take that text and send it to the 
* function you wrote above to convert it to lower case.
**/
function convert() {
  var ltext = document.getElementById("thing").value;
  lower(ltext);
}
/**
* c) Create a button that, when clicked, will hide the "intro" pararaph, using the function you wrote above.
*
*
* d) Create ANOTHER form that will take a user's LETTER GRADE, and when a button is clicked, the letter grade * should be passed to the function you wrote above. Write some additional javascript that will spit out the 
* response from your function in some text beneath this new form.
*
**/


function getGrade() {
  var graded = document.getElementById("switch").value;
  var result = useSwitch(graded);
  fancyLog(result);

}
/**
* e) Finally, make ANOTHER form that allows me to type a hex value or word value for a color, and when I 
* click a button, it should call that function you wrote above and change the background or text color 
* appropriately.
*
**/

function getHex() {
  var hexVal = document.getElementById("hex").value;
  var colors = colorChange(hexVal);
} 