// Primitive
// 7 types : String, number, boolean, null, undefined, symbol, bigint

const score = 10
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null    // datatype - object
let userEmail;              // datatype - undefined

const id = Symbol('123')        // datatype - symbol
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 356353635363563n   // datatype - bigint


// Reference (non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // datatype - object

let myObj = {                   // datatype - object
    name : "Abhinav",
    age : 22
}

const myFunction = function(){  // datatype - function
    console.log("Hello World");
}

// console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++ memory +++++++++++++++++++++++++++++


// Stack (primitive) - we get a copy in stack 
// Heap(non- primitive) - we get reference in heap

let myYoutubename = "hiteshchaudharydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anothername);

let userone = {
    email : "user@google.com",
    upi : "user@ybl"
}

let usertwo = userone
usertwo.email = "abhinav@google.com"

// console.log(usertwo.email);
// console.log(userone.email);







