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
let teste: 'algum valor'


// fucntion
function sum(a:number, b:number):number{
    return a+b
}

//function sem retorno
function logger(msg: string):void{
    console.log(msg)
}

logger('hello')

// optional parameter
function greeting(name:string,greet?: string):void{
    console.log(name, greet)
}

greeting('pri')
greeting('pri','Ms.')

//interfaces
interface MathFucntionParams{
    n1:number,
    n2:number
}

function sumNumbers(nums:MathFucntionParams){
    return nums.n1 + nums.n2
}

const someNumbers:MathFucntionParams={
    n1:4,
    n2:6
}

sumNumbers(someNumbers)

//narrowing

function doSomething(info:number | boolean){
    if(typeof info === 'number'){
        console.log(info)
        return
    }
    console.log("NaN")
}

//generics
function showArraysItems <T>(arr: T[]){
    arr.forEach((item)=>{
        console.log(item)
    })
}
const a1 = ['c','b', 'a']
const a2 = [1,2,3]
showArraysItems(a1)
showArraysItems(a2)


//classes

class User {
    name;
    role;
    isApproved;
    constructor(name:string, role:string, isApproved: boolean){
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
}

const cida = new User ('Cida', 'Mãe', true)
console.log(cida)

class Car  {
    name;
    model;
    constructor(name:string, model:string){
        this.name = name;
        this.model = model;
    }
}

const gol = new Car ('Volkswagen', 'Gol')
