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
