// Assigning an anonymous function to a variable
const myFunction = function() {
  console.log("Hello, world!");
};

function callFunction(func) {
  func();
}

callFunction(myFunction);

//var
function exampleVar() {
    var x = 10;
    if (true) {
      var x = 20;
      console.log(x); 
    }
    console.log(x); 
  }
  
  exampleVar();

//Let
function exampleLet() {
    let x = 10;
    if (true) {
      let x = 20;
      console.log(x);
    }
    console.log(x); 
  }
  
  exampleLet();

  //const
  function exampleConst() {
    const x = 10;
    if (true) {
      const x = 20;
      console.log(x);
    }
    console.log(x);
  }
  
  exampleConst();

  //shift & Unshift
  let fruits = ['apple', 'banana', 'cherry'];


let removedElement = fruits.shift();

console.log(fruits); 

fruits.unshift('kiwi');
console.log(fruits);

//Concatination
const input = "null" + "i27q54" + "jdshakh" + "*&$";
console.log(input);