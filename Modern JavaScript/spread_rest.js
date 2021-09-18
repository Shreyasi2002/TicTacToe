// ...rest and {...spread} operators

// Let's define an object

const person = {
  name: "Shreyasi",
  age: 18,
  hobby: "Singing",
};

const { age, ...otherElements } = person;

// ...otherElements creates a new object containing name and hobby.

console.log(otherElements);

/*
The output is -
{ name: 'Shreyasi', hobby: 'Singing' }
*/

// Now, let's define an array

const elements = ["I", "am", "learning", "React.JS"];

const [firstEl, , ...rest] = elements;

console.log(rest);

/*
We get the output -
[ 'learning', 'React.JS' ]
*/

// For functions,

function test(first, ...rest) {
  console.log(rest);
}

test(1, 2, 3, 4, 5, 6);

/*
We get the output -
[ 2, 3, 4, 5, 6 ] 
*/

// Spread Operator is almost same as Rest Operator

const extendedPerson = {
  ...person,
  nickname: "Tua",
};

/*
Here, ...person spreads the existing object to the new object. It can be placed 
anywhere.
In case we override the keys in the existing object, the new values will take over.
*/

console.log(extendedPerson);

/*
We get the output -
{ name: 'Shreyasi', age: 18, hobby: 'Singing', nickname: 'Tua' }
*/

// We can use spread operators to merge arrays and objects in any way we want.

const arr1 = [8, 9, "jug", "76"];
const arr2 = ["ooo", 6.0, "koala"];

const arr3 = ["Some", "Random", "Fun", ...arr1, "+", ...arr2, "...the end"];

console.log(arr3);

/*
The output will be -
[
  'Some',  'Random',
  'Fun',   8,
  9,       'jug',
  '76',    '+',
  'ooo',   6,
  'koala', '...the end'
]
*/
