//log on console
console.log("=-=-=-=-=-=-[ First Part ]-=-=-=-=-=-=");

//create a function with a parameter
function greeter(name) {
    console.log("Hello " + name + ", ");
}

//call the function with a parameter
greeter("Hassan");

//another function
function sum(x, y) {
    let result = x + y;
    console.log("The sum is: " + result);
}

//another call
sum(3,1)

//Create a variable
let ta = "Waleed :D";

// print the variable
console.log(ta);

//other variables and printing
let x = 7;
let y = 8;
console.log(x+y);

//decalre an object
let amazingPerson = {
    name: "Ali Ramadan",
    age: 22,
    major: "CE",
    level: -1 //-1 is MAX
};

// print info from the last object
console.log(
    "Name: " + amazingPerson.name
    + "\nAge: " + amazingPerson.age
    + "\nMajor: " + amazingPerson.major
);

console.log("=-=-=-=-=-=-[ Second Part ]-=-=-=-=-=-=");

//define an array
let names = [
    "Ali", 
    "Mohammad", 
    "Sarah", 
    "Hassan",
    "Reem", 
    "Sheikha", 
    "Waleed", 
    "Rahaf"
];

// print the third item in the array
console.log("Element 1: " + names[0]);
console.log("Element 3: " + names[2]);
console.log("Element 8: " + names[7]);

//array of objects
let ali = {
    name: "Ali Ramadan",
    age: 22,
    major: "CE",
    level: -1, //-1 is MAX
    likes: ["programming", "Being VP"]

};

let hassan = {
    name: "Hassan Khalaf",
    age: 19,
    major: "CS",
    level: -1, //-1 is MAX
    likes: ["programming", "Writing"]
};

let personsArr = [ali, hassan];

// print info
console.log("personsArr[0] : " + personsArr[0]);
// console.log(personsArr[0]);
console.log("personsArr[0].name : " + personsArr[0].name);
console.log("personsArr[1].likes[1] : " + personsArr[1].likes[1]);


// =-=-=- Check File testingOne.js -=-=-=

console.log("=-=-=-=-=-=-[ Third Part ]-=-=-=-=-=-=");

// map function w/ Arrays
let primes = [1,3,5,7,9];
let sumOfPrimes = 0;

//map the primes array and apply print function written down
primes.map(print);

//this is the print function with single parameter
function print(x) {
    console.log(x);
    sumOfPrimes += x;
}

console.log("Sum of primes: " + sumOfPrimes)


