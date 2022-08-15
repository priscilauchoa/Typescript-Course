let age : number = 29
let firstName : string = 'Priscila'
const isAdmin : boolean = true

console.log('x->', age)

const myNumbers : number[] = [1,2,3]

//tuplas
let myTuple : [number, string, string[]]

myTuple = [3,'f',['e']]

//object literals -> {porp: value}

const user: { nameE: string, ageE: number} = {
    nameE: 'Pri',
    ageE: 29.7
}

//union type

let id : string | number = "10"


// type alias

type myIdType = number |string
const userId: myIdType = 10;


// enum

enum Size {
    p = 'pequeno',
    m = 'medio',
    g = 'grande'
}

const camisa = {
    name: 'Polo',
    size: Size.p
}

console.log(camisa)

// literal types 

