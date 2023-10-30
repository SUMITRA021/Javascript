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
