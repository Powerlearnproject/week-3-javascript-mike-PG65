// Function to get input values
function getInputValues() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    return [num1, num2];
}

// Function to display the result
function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Result: ${result}`;
    resultDiv.classList.remove('hidden');
}

// Function to handle addition
function handleAdd() {
    const [num1, num2] = getInputValues();
    const result = add(num1, num2);
    displayResult(result);
}

// Function to handle subtraction
function handleSubtract() {
    const [num1, num2] = getInputValues();
    const result = subtract(num1, num2);
    displayResult(result);
}

// Function to handle multiplication
function handleMultiply() {
    const [num1, num2] = getInputValues();
    const result = multiply(num1, num2);
    displayResult(result);
}

// Function to handle division
function handleDivide() {
    const [num1, num2] = getInputValues();
    const result = divide(num1, num2);
    displayResult(result);
}

// Declare variables of different data types
let myString = "Hello, World!";
let myNumber = 42;
let myBoolean = true;

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract one number from another
function subtract(a, b) {
    return a - b;
}

// Function to divide one number by another
function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero is not allowed.");
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Add event listeners to buttons
document.getElementById('addBtn').addEventListener('click', handleAdd);
document.getElementById('subtractBtn').addEventListener('click', handleSubtract);
document.getElementById('multiplyBtn').addEventListener('click', handleMultiply);
document.getElementById('divideBtn').addEventListener('click', handleDivide);

// Initial console logs
console.log("Variables:");
console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);

console.log("\nFunction outputs:");
console.log("Add 5 + 3 =", add(5, 3));
console.log("Subtract 5 - 3 =", subtract(5, 3));
console.log("Divide 6 / 2 =", divide(6, 2));
console.log("Divide 6 / 0 =", divide(6, 0)); // This will trigger an error message
console.log("Multiply 5 * 3 =", multiply(5, 3));
