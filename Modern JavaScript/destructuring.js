// {object} and [array] destructuring

// Let's define an object

const person = {
  name: "Shreyasi",
  age: 18,
  hobby: "Singing",
};

// Now, we can use referencing.
/*
const name = person.name;
const age = person.age;
const hobby = person.hobby;
*/

// However, a better way of doing this is by destructuring

const { name, age, hobby } = person;

/* 
Line 19 is equivalent to lines 13 - 15.

However, let's assume that we want to give some other name to the variable 
in place of the 'key' names. Let's see what happens.
*/

const { myName, myAge, myHobby } = person;

console.log(myAge, myHobby, myName);

/*
We get the output -
undefined undefined undefined

This happens because JS can't recognize the keys.

We can make it possible using the code given below -
*/

const { name: myName, age: myAge, hobby: myHobby } = person;

console.log(myAge, myHobby, myName);

/*
We get the output -
18 Singing Shreyasi
*/

// Now, let's define an array

const elements = ["I", "am", "learning", "React.JS"];

// Now we can use indexing to refer to a particular element

const first = elements[0];

/* 
Remember, while destructuring, the order in which you want the elements to be 
should be exactly the same.
*/

const [firstEl, secondEl, , fourthEl] = elements;

// We have omitted the third element by using space.

console.log(firstEl, secondEl, fourthEl);

/*
We get the output -
I am React.JS
*/

// Using functions

function destructure({ name } = {}, [firstElement] = []) {
  console.log(name, firstElement);
}

destructure(person, elements);

/*
It's necessary to specify callback value / default value while specifying 
arguments, in case -
  destructure()
  
Let's see the output -
Shreyasi I
*/
