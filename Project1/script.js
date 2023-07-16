/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Sumitra");
console.log(23);
console.log("sm" + 98);

let firstName = "subho";
console.log(firstName);
console.log(firstName);

let _function = 29;
let $function = 29;

let PI = 3.14;

//variable
let myFirstJob = "student";
let myCurrentJob = "developer";

console.log(myFirstJob);

console.log(3 + "3");
console.log(3 + +"3");

console.log([2] === [2]);
*/

//Datatype
//Boolean, string, number
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "sumitra");

javascriptIsFun = 87;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

//Undefined

let year;
console.log(year);
console.log(typeof year);

console.log(typeof null); //error in javascript and never removed sue to legacy issues. return object.

//Declare variable

let age = 30;
age = 31;

const birthYear = 1996;

//const birthYear ---not allowed.

var job = "programmer";
job = "teacher";

//Even work without declaring but not a good approach
// lastName = "Dawn";
// console.log(lastName);

//Operator

//Mathermatical - arithematic
const now = 2023;
const ageDawn = now - 1996;
const ageSubho = now - 1993;
console.log(ageDawn, ageSubho);

console.log(ageDawn * 2, ageDawn / 3, 2 ** 3);

const firstName = "sumitra";
const lastName = "Dawn";
console.log(firstName + " " + lastName);

// Assignment operator

let x = 10 + 5; //15
x += 10; //x=x+10=25
x *= 2; //x=x*2=50
x++; //x=x+1
x--; //x=x-1
console.log(x);

// Compersion operator
let agee = ageDawn > ageSubho;
console.log(agee); // >, <, >=, <=

console.log(ageDawn >= 23);

//Precedence of Operator
