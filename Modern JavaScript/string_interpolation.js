const myName = "Shreyasi";
const age = 18;

// Use of '+' operator to concatenate strings...

const concatStrings = "I am " + myName + ". My age is " + age;
console.log(concatStrings);

/*
Note that String Interpolation is available only within back-ticks (`)
It is widely used nowadays.
*/

const interpolString = `I am ${myName} and I am ${age} years old.`;
console.log(interpolString);

const getPlace = () => "South Korea";

const place = `I want to go to ${getPlace()}.`;
console.log(place);

/*
We get the output -
I am Shreyasi. My age is 18
I am Shreyasi and I am 18 years old.
I want to go to South Korea.
*/
