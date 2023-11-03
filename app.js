//1.	Create a block of code that you can use several times. 
function calculate(number){
    return number * number;
}
const res1 = calculate(2);
const res2 = calculate(4);
const res3 = calculate(7);

console.log(res1, res2, res3);

//2.	Write a function that displays current date & time in your browser.
function currentDateTime(){
    const currentDate = new Date();
    const timeString = currentDate.toLocaleString();
    document.getElementById("datetime").innerHTML = timeString;
}
currentDateTime();
//3.	Write a function that takes first & last name and then it greets the user using his full name.
function greet(Shazme, Kalam) {
    const greeting = 'Hello, ' + fullName + '!';
    return greet;
}
const fullName = "Shazme" + ' ' + "Kalam";
// const userFirstName = 'Shazme';
// const userLastName = 'Kalam';
const greeting = greet(fullName);
console.log(greeting);

//4.	Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// function addTwoNumbers(num1, num2) {
//     const _num1 = +prompt('Enter the first number:');
//     const _num2 = +prompt('Enter the second number:');
// }
// if (_num1 || _num2) {
// //return ("Invalid input. Please enter valid numbers");
//      return _num1 + _num2;
// }
// const result2 = addTwoNumbers();
// console.log('The sum of the two numbers is: ' + result2);

//5.	 Calculator: 
//Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
function calculating(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
            case'-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
            case'/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Division by zero is not allowed.";
            }
            break;
            default:
                result = "Invalid operator. Please use +, -, *, or /";
        }
        return result;
    }
    const num1 = 3;
    const num2 = 4;
    const operator = '+';
    const _resultCalculating = (num1, num2, operator);
    console.log = `result: ${result}`;

//6.	 Write a function that squares its argument.
function squareNumber(number) {
    return number * number;
}
const _num = 5;
const reSult = squareNumber(_num);
console.log(`The square of ${_num} is: ${reSult}`);

//7.	 Write a function that computes factorial of a number.
function factorial(number) {
    if (number === 0) {
        return 1;
    } else if (number < 0) {
        return "Undefined";
    } else {
        return number * factorial(number - 1);
    }
}
const num = 5;
const result = factorial(num);
console.log(`The factorial of ${num} is: ${result}`);
//8.	Write a function that take start and end number as inputs & display counting in your browser.

        function countNumbers() {
            var start = parseInt(document.getElementById("startNumber").value);
            var end = parseInt(document.getElementById("endNumber").value);
            var result = "";

            if (isNaN(start) || isNaN(end)) {
                document.getElementById("countResult").innerHTML = "Please enter valid numbers.";
                return;
            }

            for (var i = start; i <= end; i++) {
                result += i + " ";
            }

            document.getElementById("countResult").innerHTML = "Counting: " + result;
        }


//9.Write a nested function that computes hypotenuse of a right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
        return x * x;
    }

    const baseSquared = calculateSquare(base);
    const perpendicularSquared = calculateSquare(perpendicular);
    const hypotenuseSquared = baseSquared + perpendicularSquared;
    const hypotenuse = Math.sqrt(hypotenuseSquared);

    return hypotenuse;
}

const base = 3; // Replace with your desired base length
const perpendicular = 4; // Replace with your desired perpendicular length

const rsult = calculateHypotenuse(base, perpendicular);
console.log(`The hypotenuse of the right-angle triangle is: ${rsult}`);

//10.	Write a function that writes variable length arguments list in your browser.
function displayArguments() {
    const argsInput = document.getElementById("argsInput").value;
    const args = argsInput.split(" "); // Assuming arguments are space-separated

    // Display the arguments in the browser
    const result = "Arguments: " + args.join(", ");
    document.getElementById("argumentsResult").textContent = result;
}

//11.	Write a function that accepts any number of arguments & find largest of the number.
function findLargest() {
    if (arguments.length === 0) {
        return "No arguments provided.";
    }

    let largest = arguments[0]; // Initialize largest with the first argument

    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] > largest) {
            largest = arguments[i];
        }
    }

    return "The largest number is: " + largest;
}

// Example usage:
const reslt = findLargest(5, 12, 8, 21, 15, 3);
console.log(reslt); // Output: The largest number is: 21


//12.	Write a function that calculates the area of a rectangle.
//   A = width * height
//   Pass width and height in following manner:
//   a.	Arguments as values
//   b.	Arguments as variables

      //   a.	Arguments as values

function calculateRectangleAreaByValues(width, height) {
    const area = width * height;
    return area;
}

// Example usage:
const widthValue = 5;
const heightValue = 8;
const areaByValues = calculateRectangleAreaByValues(widthValue, heightValue);
console.log("Area by values:", areaByValues);
//b.	Arguments as variables
function calculateRectangleAreaByVariables() {
    if (arguments.length !== 2) {
        return "Please provide two arguments: width and height.";
    }

    const width = arguments[0];
    const height = arguments[1];
    const area = width * height;
    return area;
}

// Example usage:
const widthVariable = 7;
const heightVariable = 10;
const areaByVariables = calculateRectangleAreaByVariables(widthVariable, heightVariable);
console.log("Area by variables:", areaByVariables);


//13.	Write a function that receives an array & returns the sorted array.
function sortArray(inputArray) {
    // Create a new array to avoid modifying the original array
    const sortedArray = [...inputArray];

    // Use the sort method to sort the elements
    sortedArray.sort(function (a, b) {
        return a - b; // For ascending order, use a - b; for descending, use b - a.
    });

    return sortedArray;
}

// Example usage:
const originalArray = [3, 1, 5, 2, 4];
const sortedArray = sortArray(originalArray);

console.log("Original Array:", originalArray);
console.log("Sorted Array:", sortedArray);


//14.	Write a function that takes numbers array, sums its elements & returns the sum.


//15.	Execute & monitor the output of following JS program:
var param = function inner() { 
      //     return typeof inner; 
}
alert(param()); 


//16.	Write a function that computes power of a number. E.g. 23 is 8.


//17.	Write a function that simulates a dice & returns a random dice value.


//18.	Write a JavaScript function that reverse a number. 
//Example x = 32243;
//EXPECTED OUTPUT : 34223


//19.	Write a JavaScript function that checks whether a passed string is palindrome or not?  
//A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.


//20.	Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
//EXAMPLE STRING : 'the quick brown fox' 
//EXPECTED OUTPUT : 'The Quick Brown Fox'


//21.	Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
//EXAMPLE STRING : 'Web Development Tutorial' 
//EXPECTED OUTPUT : 'Development'


//22.	Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 

//EXAMPLE STRING : 'The quick brown fox' 
//EXPECTED OUTPUT : 5


//23.	Write a JavaScript function which accepts an argument and returns the type. 
//Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.


//24.	Write a JavaScript function to extract unique characters from a string. 
//EXAMPLE STRING : "thequickbrownfoxjumpsoverthelazydog"
//EXPECTED OUTPUT : "thequickbrownfxjmpsvlazydg"


//25.	Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
//Sample arguments : 'JSResourceS.com', 'o' 
//EXPECTED OUTPUT : 2 


//26.	The Age Calculator
//Forgot how old you are? Calculate it!
//•	Write a function named calculateAge that:
//o	takes 2 arguments: birth year, current year.
//o	calculates the 2 possible ages based on those years.
//o	outputs the result to the screen like so: "You are either NN or NN"
//•	Call the function three times with different sets of values.
//•	Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

 


//27.	The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//•	Write a function named calculateSupply that:
//o	takes 2 arguments: age, amount per day.
//o	calculates the amount consumed for rest of the life (based on a constant max age).
//o	outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
//•	Call that function three times, passing in different values each time.
//•	Bonus: Accept floating point values for amount per day, and round the result to a round number.
 


//28.	The Geometrizer
//Create 2 functions that calculate properties of a circle, using the definitions here.
//Create a function called calcCircumference:
//•	Pass the radius to the function.
//•	Calculate the circumference based on the radius, and output "The circumference is NN".
//Create a function called calcArea:
//•	Pass the radius to the function.
//•	Calculate the area based on the radius, and output "The area is NN".


//29.	The Temperature Converter
//It's hot out! Let's make a converter based on the steps here.
//Create a function called celsiusToFahrenheit:
//•	Store a celsius temperature into a variable.
//•	Convert it to fahrenheit and output "NN°C is NN°F".
//Create a function called fahrenheitToCelsius:
//•	Now store a fahrenheit temperature into a variable.
//•	Convert it to celsius and output "NN°F is NN°C."

//-- END --
