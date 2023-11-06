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
//array are special kind of objects

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

//Array Objects - represnts key value pair

const sumi = {
  firstname: "Sumitra",
  lastname: "Dawn",
  Age: 27,
  Occupation: "Software Developer",
  Friends: ["a", "b", "c"],
};

//Retrieve data from object

console.log(sumi);
console.log(sumi.lastname); //dot operator
console.log(sumi["lastname"]); //bracket operator

const namekey = "name";
console.log(sumi["first" + namekey]);
console.log(sumi["last" + namekey]);

//console.log(sumi.'last'+namekey) --- give error in case of dot only bracket will help in this case.

// const interestedIn = prompt(
//   "what do you want to know about jonas? choose  between firstname,lastname,age,job and friends"
// );

// console.log(sumi.interestedIn);

// if (sumi[interestedIn]) console.log(sumi[interestedIn]);
// else
//   console.log(
//     "wrong request! choose  between firstname,lastname,age,job and friends"
//   );

// How to use dot and bracket to add new member to object

sumi.location = "Asansol";
sumi["gmail"] = "sumi@gmailcom";
console.log(sumi);

//challenge

//'sumi has 3 friends, and her best friend is called a

console.log(
  `${sumi.firstname} has ${sumi.Friends.length} friends, and her best friend is called ${sumi.Friends[0]} `
);

//Object Methods

const sumitra = {
  firstname: "Sumitra",
  lastname: "Dawn",
  Saal: 1996,
  Occupation: "Software Developer",
  Friends: ["a", "b", "c"],
  hasDriverLicence: true,
  // calAge: function (Age) {
  //   //Any function attached to some object called method.
  //   return 2023 - Age;
  // },

  calAge: function () {
    //console.log(this);
    this.Age = 2023 - this.Saal;
    return this.Age;
  },

  getSummery: function () {
    return `${this.firstname} is a ${this.calAge()} years old ${
      this.Occupation
    }, and he has a ${this.hasDriverLicence ? "licence" : "no licence"}`;
  },
};

console.log(sumitra.calAge());

// console.log(sumitra["calAge"](1996));

//challenge
//"jonas is a 46 year teacher and he has a driver licence"

console.log(sumitra.getSummery());

//Loop

for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weights repetition ${rep}  🏋️`);
}

const sumitr = ["Sumitra", "Dawn", 1996, "Software Developer", ["a", "b", "c"]];

const types = [];

for (let i = 0; i < 5; i++) {
  console.log(sumitr[i], typeof sumitr[i]);

  //filling an array
  //types[i] = typeof sumitr[i];
  types.push(typeof sumitr[i]);
}
console.log(types);

//continue and break
console.log("------------------Only print string value---------------");
for (let i = 0; i < 5; i++) {
  if (typeof sumitr[i] !== "string") continue;
  else console.log(sumitr[i], typeof sumitr[i]);
}

console.log("------------------stop after number found---------------");

for (let i = 0; i < 5; i++) {
  if (typeof sumitr[i] === "number") break;
  else console.log(sumitr[i], typeof sumitr[i]);
}

//Backward looping🏋️
console.log("---------------Backward print---------------");
for (let i = sumitr.length - 1; i >= 0; i--) {
  console.log(i, sumitr[i]);
}

//while loop
let rep = 1;
while (rep <= 10) {
  console.log(`lift ${rep} 🏋️`);
  rep++;
}

//Roll a dice until we got 6

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`you roll ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
