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
