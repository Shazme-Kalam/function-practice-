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

function greetUser() {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");

    if (firstName && lastName) {
        const fullName = `${firstName} ${lastName}`;
        alert(`Hello, ${fullName}! Welcome!`);
    } else {
        alert("Please enter both your first and last names.");
    }
}

greetUser();


//4.	Write a function that adds two numbers (input by user) and returns the sum of two numbers.

function addTwoNumbers() {
    const firstNumber = parseFloat(prompt("Enter the first number:"));
    const secondNumber = parseFloat(prompt("Enter the second number:"));

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        const sum = firstNumber + secondNumber;
        return sum;
    } else {
        return "Please enter valid numbers.";
    }
}

const _result = addTwoNumbers();
if (typeof _result === 'number') {
    alert(`The sum of the two numbers is: ${_result}`);
} else {
    alert(_result);
}


//5.	 Calculator: 
//Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
function calculating(num1, num2, operator) {
    let rezlt;
    switch (operator) {
        case '+':
            rezlt = num1 + num2;
            break;
            case'-':
            rezlt = num1 - num2;
            break;
        case '*':
            rezlt = num1 * num2;
            break;
            case'/':
            if (num2 !== 0) {
                rezlt = num1 / num2;
            } else {
                rezlt = "Division by zero is not allowed.";
            }
            break;
            default:
                rezlt = "Invalid operator. Please use +, -, *, or /";
        }
        return rezlt;
    }
    const num1 = 3;
    const num2 = 4;
    const operator = '+';
    const _resultCalculating = (num1, num2, operator);
    console.log(`rezlt: ${_resultCalculating}`)

//6.	 Write a function that squares its argument.
function squareNumber(number) {
    return number * number;
}
const _num = 5;
const resUlt = squareNumber(_num);
console.log(`The square of ${_num} is: ${resUlt}`);

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

function sumArrayElements(numbers) {
    if (!Array.isArray(numbers)) {
      return "Input is not an array.";
    }
  
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] !== 'number') {
        return "Array contains non-numeric values.";
      }
      sum += numbers[i];
    }
  
    return sum;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  const rEsult = sumArrayElements(numbers);
  console.log(rEsult); // Output: 15
  
//15.	Execute & monitor the output of following JS program:
//var param = function inner() { 
      //     return typeof inner; 
//}
//alert(param()); 

var param = function inner() {
    return typeof inner;
  }
  
  alert(param("what happening guys")); // This will display an alert with the message "function"
  

//16.	Write a function that computes power of a number. E.g. 23 is 8.
function customPower(bAse, exponent) {
    if (exponent === 0) {
      return 1;
    }
  
    let resuLt = 1;
    for (let i = 1; i <= exponent; i++) {
      resuLt *= bAse;
    }
  
    return resuLt;
  }
  
  const bAse = 2;
  const exponent = 3;
  const resuLt = customPower(bAse, exponent);
  console.log(`${base}^${exponent} = ${resuLt}`);
  

//17.	Write a function that simulates a dice & returns a random dice value.

function rollDice() {
    // Generate a random number between 1 and 6
    const min = 1;
    const max = 6;
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomValue;
  }
  
  // Example usage:
  const diceValue = rollDice();
  console.log(`You rolled a ${diceValue}`);
  
//18.	Write a JavaScript function that reverse a number. 
//Example x = 32243;
//EXPECTED OUTPUT : 34223

function reverseNumber(x) {
    // Convert the number to a string, reverse the string, and convert it back to a number
    const reversedString = x.toString().split('').reverse().join('');
    const reversedNumber = parseInt(reversedString, 10);
    
    return reversedNumber;
  }
  
  // Example usage:
  const x = 32243;
  const reversedX = reverseNumber(x);
  console.log(`Original number: ${x}`);
  console.log(`Reversed number: ${reversedX}`);
  

//19.	Write a JavaScript function that checks whether a passed string is palindrome or not?  
//A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare the clean string with its reverse
    const reversedStr = cleanStr.split('').reverse().join('');
    
    return cleanStr === reversedStr;
  }
  
  // Example usage:
  const palindromeString = "madam";
  const nonPalindromeString = "hello";
  
  console.log(isPalindrome(palindromeString)); // Output: true
  console.log(isPalindrome(nonPalindromeString)); // Output: false
  

//20.	Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
//EXAMPLE STRING : 'the quick brown fox' 
//EXPECTED OUTPUT : 'The Quick Brown Fox'

function capitalizeWords(str) {
    const words = str.split(' '); // Split the string into words
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    // Capitalize the first letter of each word
    const result = capitalizedWords.join(' '); // Join the words back together
    return result;
  }
  
  // Example usage:
  const inputString = 'the quick brown fox';
  const capitalizedString = capitalizeWords(inputString);
  console.log(capitalizedString); // Output: 'The Quick Brown Fox'
  

//21.	Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
//EXAMPLE STRING : 'Web Development Tutorial' 
//EXPECTED OUTPUT : 'Development'

function findLongestWord(str) {
    const words = str.split(' '); // Split the string into words
    let longestWord = '';
  
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  
  // Example usage:
  const inPutString = 'Web Development Tutorial';
  const longestWord = findLongestWord(inPutString);
  console.log(longestWord); // Output: 'Development'
  
//22.	Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 

//EXAMPLE STRING : 'The quick brown fox' 
//EXPECTED OUTPUT : 5

function countVowels(str) {
    // Convert the input string to lowercase to handle both uppercase and lowercase vowels
    str = str.toLowerCase();
  
    // Define a variable to keep track of the count of vowels
    let vowelCount = 0;
  
    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      // Check if the character is a vowel
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  // Example usage:
  const inputsTring = 'The quick brown fox';
  const r_slt = countVowels(inputsTring);
  console.log(r_slt); // Output: 5
  

//23.	Write a JavaScript function which accepts an argument and returns the type. 
//Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function getType(value) {
    return typeof value;
  }
  
  // Example usage:
  console.log(getType({}));        // Output: "object"
  console.log(getType(true));      // Output: "boolean"
  console.log(getType(function () {})); // Output: "function"
  console.log(getType(42));        // Output: "number"
  console.log(getType("Hello"));   // Output: "string"
  console.log(getType(undefined));  // Output: "undefined"
  
//24.	Write a JavaScript function to extract unique characters from a string. 
//EXAMPLE STRING : "thequickbrownfoxjumpsoverthelazydog"
//EXPECTED OUTPUT : "thequickbrownfxjmpsvlazydg"

function extractUniqueCharacters(inputStrng) {
    let uniqueCharacters = '';
    const charSet = new Set(); // Use a Set to store unique characters
  
    for (let char of inputStrng) {
      if (!charSet.has(char)) {
        charSet.add(char);
        uniqueCharacters += char;
      }
    }
  
    return uniqueCharacters;
  }
  
  // Example usage:
  const inputStrng = "thequickbrownfoxjumpsoverthelazydog";
  const rslt = extractUniqueCharacters(inputStrng);
  console.log(rslt); // Output: "thequickbrownfxjmpsvlazydg"
  

//25.	Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
//Sample arguments : 'JSResourceS.com', 'o' 
//EXPECTED OUTPUT : 2 

function countOccurrences(string, letter) {
    let count = 0;
    
    for (let i = 0; i < string.length; i++) {
      if (string[i] === letter) {
        count++;
      }
    }
    
    return count;
  }
  
  // Example usage:
  const inptString = 'JSResourceS.com';
  const letterToCount = 'o';
  const rexult = countOccurrences(inptString, letterToCount);
  console.log(rexult); // Output: 2
  
//26.	The Age Calculator
//Forgot how old you are? Calculate it!
//•	Write a function named calculateAge that:
//o	takes 2 arguments: birth year, current year.
//o	calculates the 2 possible ages based on those years.
//o	outputs the result to the screen like so: "You are either NN or NN"
//•	Call the function three times with different sets of values.
//•	Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(birthYear, currentYear) {
    const age1 = currentYear - birthYear;
    const age2 = age1 - 1; // The person hasn't had their birthday this year yet
  
    return `You are either ${age1} or ${age2}`;
  }
  
  // Get the current year using the Date object
  const currentYear = new Date().getFullYear();
  
  // Example usage:
  const birthYear1 = 1990;
  console.log(calculateAge(birthYear1, currentYear));
  
  const birthYear2 = 1985;
  console.log(calculateAge(birthYear2, currentYear));
  
  const birthYear3 = 2000;
  console.log(calculateAge(birthYear3, currentYear));
  


//27.	The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//•	Write a function named calculateSupply that:
//o	takes 2 arguments: age, amount per day.
//o	calculates the amount consumed for rest of the life (based on a constant max age).
//o	outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
//•	Call that function three times, passing in different values each time.
//•	Bonus: Accept floating point values for amount per day, and round the result to a round number.
 

function calculateSupply(age, amountPerDay) {
  const maxAge = 100; // Maximum age
  const amountPerYear = amountPerDay * 365.25; // Account for leap years
  const yearsRemaining = maxAge - age;
  const amountNeeded = Math.round(yearsRemaining * amountPerYear);

  return `You will need ${amountNeeded} to last you until the ripe old age of ${maxAge}`;
}

// Example usage:
console.log(calculateSupply(30, 2)); // Output: "You will need 54750 to last you until the ripe old age of 100"
console.log(calculateSupply(40, 1.5)); // Output: "You will need 32962 to last you until the ripe old age of 100"
console.log(calculateSupply(25, 3)); // Output: "You will need 68337 to last you until the ripe old age of 100"

//28.	The Geometrizer
//Create 2 functions that calculate properties of a circle, using the definitions here.
//Create a function called calcCircumference:
//•	Pass the radius to the function.
//•	Calculate the circumference based on the radius, and output "The circumference is NN".
//Create a function called calcArea:
//•	Pass the radius to the function.
//•	Calculate the area based on the radius, and output "The area is NN".

function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    return `The circumference is ${circumference}`;
  }
  
  function calcArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    return `The area is ${area}`;
  }
  
  // Example usage:
  const radius = 5;
  console.log(calcCircumference(radius)); // Output: "The circumference is 31.41592653589793"
  console.log(calcArea(radius)); // Output: "The area is 78.53981633974483"
  
//29.	The Temperature Converter
//It's hot out! Let's make a converter based on the steps here.
//Create a function called celsiusToFahrenheit:
//•	Store a celsius temperature into a variable.
//•	Convert it to fahrenheit and output "NN°C is NN°F".
//Create a function called fahrenheitToCelsius:
//•	Now store a fahrenheit temperature into a variable.
//•	Convert it to celsius and output "NN°F is NN°C."

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return `${celsius}°C is ${fahrenheit}°F`;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    return `${fahrenheit}°F is ${celsius}°C`;
  }
  
  // Example usage:
  const celsiusTemp = 25;
  console.log(celsiusToFahrenheit(celsiusTemp)); // Output: "25°C is 77°F"
  
  const fahrenheitTemp = 68;
  console.log(fahrenheitToCelsius(fahrenheitTemp)); // Output: "68°F is 20°C"
  
//                              -- END --
