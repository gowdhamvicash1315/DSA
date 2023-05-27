//Sum of array

const inputArray = [1, 2, 3, 4, 10, 11];

const numString = inputArray.join(" ");

const numArray = numString.split(" ").map(Number);

const sum = numArray.reduce((a, b) => a + b, 0);

console.log(sum);


//MinMaxSum

function miniMaxSum(arr) {
    let minSum = Infinity;
    let maxSum = 0;
    let totalSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
      totalSum += arr[i];
    }
    
    for (let i = 0; i < arr.length; i++) {
      let sum = totalSum - arr[i];
      
    
      if (sum < minSum) {
        minSum = sum;
      }
      
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
    
    console.log(minSum + " " + maxSum);
  }
  
  miniMaxSum([0, 2, 3, 4, 10]); 

  //Fibonacci

  function fibonacci(num) {
    let fib = [0, 1];
  
    for (let i = 2; i <= num; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  
    return fib;
  }

  let input = "20"; 
  
  let num = Number(input);
  
  if (isNaN(num) || !Number.isInteger(num) || num < 0) {
    console.log("Invalid input.");
  } else {
    console.log(fibonacci(num));
  }

  //primeNumber

  function isPrime(num) {
    if (num < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  
  function checkPrime(num) {
    if (isPrime(num)) {
      console.log(`${num} is a prime number.`);
    } else {
      console.log(`${num} is not a prime number.`);
    }
  }
  
  checkPrime(7); 
  checkPrime(277);

  //Divisible by 7 & 21

  for (let i = 10; i < 100; i++) {
    if (i % 7 === 0 && i % 21 === 0) {
      console.log(i);
    }
  }
  
  
  
  
  
  
  
  
  