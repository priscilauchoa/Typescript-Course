"use strict";
let age = 29;
let firstName = 'Priscila';
const isAdmin = true;
console.log('x->', age);
const myNumbers = [1, 2, 3];
//tuplas
let myTuple;
myTuple = [3, 'f', ['e']];
//object literals -> {porp: value}
const user = {
    nameE: 'Pri',
    ageE: 29.7
};
//union type
let id = "10";
const userId = 10;
// enum
var Size;
(function (Size) {
    Size["p"] = "pequeno";
    Size["m"] = "medio";
    Size["g"] = "grande";
})(Size || (Size = {}));
const camisa = {
    name: 'Polo',
    size: Size.p
};
console.log(camisa);
// literal types 
let teste;
// fucntion
function sum(a, b) {
    return a + b;
}
//function sem retorno
function logger(msg) {
    console.log(msg);
}
logger('hello');
// optional parameter
function greeting(name, greet) {
    console.log(name, greet);
}
greeting('pri');
greeting('pri', 'Ms.');
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
const someNumbers = {
    n1: 4,
    n2: 6
};
sumNumbers(someNumbers);
//narrowing
function doSomething(info) {
    if (typeof info === 'number') {
        console.log(info);
        return;
    }
    console.log("NaN");
}
//generics
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(item);
    });
}
const a1 = ['c', 'b', 'a'];
const a2 = [1, 2, 3];
showArraysItems(a1);
showArraysItems(a2);
//classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
}
const cida = new User('Cida', 'Mãe', true);
console.log(cida);
