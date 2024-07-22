// Functions
// Block of Code, Perform Some Task
// Create Once, Use Many Times

// DRY - Don't Repeat Yourself

// Define a Function

// Functions names - camelCase
// It can only contain letters, digits, underscores, and dollar signs.

function learning(){
    console.log("Learning JavaScript");
}

// Call a Function, Invoke a Function
// learning()

// Function with Parameters

// function sayHii(name, name1="Javascript"){
//     console.log(name);
//     console.log(name1);
// }

// // Arguments
// sayHii(["Puran", 25, 97093837], "Muskaan");


// Function always return a value;

// function add(num1, num2){
//     return num1*num2
// }

// let result = add(2,3);
// console.log(result,"result");

// map
// forEach
// for loop

// Push - Add Element at the End of Array
// Pop - Remove Element from the End of Array
// Shift - Remove Element from the Start of Array
// Unshift - Add Element at the Start of Array


// function printNames(names){
//     let myNames = [];
//     for(let i=0;i<names.length;i++){
//         myNames.push(names[i]);
//     }
//     return myNames;
// }

// let results = printNames(["Muskan" ,"Vikash", "Punam", "Chhotu"]);

// console.log(results);

// Function expression
// Functions are called First Class Citizens in JavaScript
// Function can be stored in a variable
// Function can be passed as an argument to another function
// Function can be returned from another function

// Function Expression - function is stored in a variable

// console.log(multiplication(4,5));

// function multiplication(a,b){
//     return a*b;
// }


// multiplication()

// console.log(multiplication(4,5));

// let multiplication = function(a,b){
//     return a*b;
// }


// Hoisting - 
// Temporal Dead Zone

// let, const - reference error - temporal dead zone
// var - undefined


// Function Declaration are hoisted
// Function Expression are not hoisted

// Arrow Function - ES6 

// One line, not using return keyword - Implicit Return
// multiple lines, using return keyword - Explicit Return

// let multiplication = (a,b)=>a * b;

// multiplication(4,5);

// IIFE - Immediately Invoked Function Expression
// Self Invoking Function

// (function(name){
//       return name;
// }("Puran"));


const add = (a,b) => a+b;

const calculator = (a, val1, val2)=>{
    console.log("Calculator", a(val1, val2));
}


calculator(add, 4, 6)
// add- 
// callback fucntions are those functions that are passed as an argument to another function
// calculator - 
// higher order function - those functions that accept another function as an argument

// Factaory Function
// Constructor Function
// Recursion

// Class
// Selectors
// Customize




















