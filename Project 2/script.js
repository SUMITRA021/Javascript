"use strict"; // to use strict mode - tgis is the first line of the code

//Functions

function logger() {
  console.log("My name is sumitra");
}

//calling /running / invoking / using function

logger();
logger();

function fruitProcessor(apples, organges) {
  //console.log(apples, organges);
  const juice = `juice with ${apples} apples and ${organges} oranges.`;

  return juice;
}

const appleJu = fruitProcessor(5, 0);
console.log(appleJu);

const apporg = fruitProcessor(6, 8);
console.log(apporg);

//Function declaration Vs expression

// Arrow function

const age4 = (birthYear) => 2023 - birthYear;
console.log(age4(1996));

const yearsuntilRetirement = (birthyeah, firstname) => {
  const age6 = 2023 - birthyeah;
  const retire = 60 - age6;
  return `${firstname} will retire in ${retire} years`;
};

console.log(yearsuntilRetirement(1996, "sumitra"));

//Function calling another function
//One function to cut fruits and another function taking that cut fruits and making juice

function cutFruit(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, organges) {
  const applePiece = cutFruit(apples);
  const orgPiece = cutFruit(organges);
  //console.log(apples, organges);
  const juice = `juice with ${applePiece} apples piece and ${orgPiece} orange piece.`;

  return juice;
}

console.log(fruitProcessor(2, 3));

//Array

const friend = ["archi", "snig", "subh", "mani"];
console.log(friend[0]);

const yr = new Array(1, 2, 2, 1, 2);
let i;
for (i = 0; i < friend.length; i++) {
  console.log(friend[i]);
}

const Me = ["Sumitra", "Dawn", 27, "Blue"];
for (i = 0; i < Me.length; i++) {
  console.log(Me[i]);
}

// basic array methods

//add element

const frr = ["a", "b", "c"];
frr.push("d"); //add at end
console.log(frr);

frr.unshift("S"); //add start
console.log(frr);

//remove element

frr.pop(); //remove last element
console.log(frr);

frr.shift(); //Remove first
console.log(frr);

console.log(frr.indexOf("c"));

console.log(frr.indexOf("d")); //return -1 if element is not there in the list

console.log(frr.includes("a")); //use strict rule  -- check if element is there or not

console.log(frr.includes("d"));
