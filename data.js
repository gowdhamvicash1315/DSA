// Arithmetic operations with numbers
let num1 = 10;
let num2 = 5;

let addition = num1 + num2;


console.log("Addition:", addition);


// Arithmetic operations with strings
let str1 = "Hello";
let str2 = "World";

let concatenation = str1 + " " + str2;

console.log("String Concatenation:", concatenation);

// Arithmetic operations with mixed types
let mixed1 = 10;
let mixed2 = "5";

let mixedAddition = mixed1 + mixed2;

console.log("Mixed Addition:", mixedAddition);


let numbers = [1, 2, 3, 4, 5];

// Accessing elements
console.log("Array:", numbers);
console.log("First element:", numbers[0]);
console.log("Length of the array:", numbers.length);

// Modifying elements
numbers[2] = 10;
console.log("Modified array:", numbers);

// Adding elements
numbers.push(6);
console.log("Array after push:", numbers);


let person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    hobbies: ["reading", "painting", "gaming"],
    greet: function () {
      console.log("Hello, my name is " + this.name);
    },
  };
  
  console.log("Name:", person.name);
  console.log("Age:", person.age);


  let number1 = 10;
let number2 = 5;

let isGreater = number1 > number2;

console.log("isGreater:", isGreater);

let num = 5
let name = "Gowdham"
let join = name % num
console.log(join)