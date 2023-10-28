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

console.log(typeof null); //error in javascript and never removed due to legacy issues. return object.

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

//Strings

const firstNamee = "sumitra";
const jobb = "software engineer";
const birthYearr = 1996;
const yearr = 2023;

const sumitra =
  "I'm" +
  " " +
  firstNamee +
  ", a" +
  " " +
  (yearr - birthYearr) +
  " " +
  "years old" +
  " " +
  jobb +
  "!";

console.log(sumitra);

//Template string of ES6

const sum = `I'm ${firstNamee}, a ${yearr - birthYearr} years old ${jobb}!`;
console.log(sum);

//backticks
console.log(`Sumitra Dawn`);

console.log(
  "String \n\
 sbdhh"
);

console.log(`string
multiple
lines`);

//Decision Making -IF else

const ageee = 15;
//const isOldEnough = ageee >= 18;

if (ageee >= 18 == true) {
  console.log(`Ratul can drive 🚗`);
} else {
  const yearLeft = 18 - ageee;
  console.log(
    `Ratul Can not drive, too young to drive ${yearLeft} years left to start`
  );
}

//Type Conversion
//Explicity convert from one type to another

const inputYear = "1996";
console.log(Number(inputYear));
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23); //Number shows in blue colour and string shows in white colour.

//Type Coercion

console.log("I am" + " " + 23 + " " + "years old"); //converted to string
console.log("I am" + " " + "23" + " " + "years old");

console.log("23" - "10" - "3"); // converted to number

console.log("23" + "10" + "3"); // converted to string and concatenate

console.log("23" * "2"); // converted to number

console.log("23" / "2"); // converted to number

let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - "2" + "5");

//Falsy and Truthy Values
//Falsy values - 0,' ' ,undefined , null , NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas")); //string with value
console.log(Boolean({})); //empty object
console.log(Boolean("")); //empty string
console.log(Boolean(NaN));

const money = 0;
if (money) {
  console.log("Don't spent money");
} else {
  console.log("get a job");
}

let height;
if (height) {
  ///if height is true this block will execute
  console.log("height is defined");
} else {
  console.log("not defined");
}

let height1 = 100;
if (height1) {
  ///if height is true this block will execute
  console.log("height is defined");
} else {
  console.log("not defined");
}

//Problem with the code is that even though it is defined with 0 it is showing undefined as '0' is undefined but this might be a prblm.

let height3 = 0;
if (height3) {
  ///if height is true this block will execute
  console.log("height is defined");
} else {
  console.log("not defined");
}

//Equality Operator
// const ageeee = 18;
// if (ageeee === 18) console.log("adult");

// if (ageeee == 18) console.log("adultt");

// const favr = Number(prompt("what is your fav number?"));
// console.log(favr);
// console.log(typeof favr);

// if (favr === 23) console.log("23 here!");

//Logical

const DL = true; //A
const GV = false; //B

console.log(DL && GV);

console.log(DL || GV);

console.log(!DL);

// wheaher sara should drive or not

const ShouldDrive = DL && GV;

if (ShouldDrive) {
  console.log("Can drive");
} else {
  console.log("Can't drive");
}

//Switch

const day = "monday";

switch (day) {
  case "monday": //day === 'monday'
    console.log("xyz monday");
    break;
  case "tuesday":
    console.log("tuesday");
    break;
}

//statement and expression

const me = "sumitra";
console.log(`The addition of 2 and 3 is ${2 + 3} -- ${me}`);
