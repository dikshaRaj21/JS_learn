// Data types - 2 type
// 1.  Primitive 

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n


// 2. Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "diksha",
    age: 21,

}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/***************** Stack and Heap Memory ****************/ 

// Stack (Primitive), Heap (Non-primitive)


// Stack

let myYoutubeName = "Diksha does"

let anotherName = myYoutubeName
anotherName = "Dikshasees"

console.log(myYoutubeName);
console.log(anotherName);

// Heap

let user1 = {
    email: "user.gmail.com",
    upi: "user@ybl"
}

let user2 = user1
user2.email = "newone.gmail.com"

console.log(user1.email);
console.log(user2.email);