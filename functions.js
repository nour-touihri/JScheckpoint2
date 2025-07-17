//String Manipulation Functions
// 1-Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

// 2-Count Characters
function countCharacters(str) {
  return str.length;
}

// 3-Capitalize Words
function capitalizeWords(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


// Array Functions
//1-find the maximum and minimum values in an array of numbers
function findMinMax(arr) {
  let min = Math.min(...arr); // find minimum
  let max = Math.max(...arr); // find maximum
  return [min, max];
}

//2-calculates the sum of all elements in an array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

//3-filters out elements from an array based on a given condition
function filterEvenNumbers(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}




// Mathematical Functions
//1-Factorial
function factorial(a) {
  if (a < 0) return "Factorial is not defined for negative numbers.";
  let result = 1;
  for (let i = 2; i <= a; i++) {
    result *= i;
  }
  return result;
}

//1--Prime check
function isPrime(a) {
  if (a < 2) return false;
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) return false;
  }
  return true;
}

//1-Fibonacci sequence up to n terms
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}