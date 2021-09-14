//* Let's define an array

const arr = [1, 2, 3, 4, 5];

/*
.map() method always returns a new array.
Let's create a new array...
*/

const newArr = arr.map(function (val) {
  return val * 2;
});

// console.log(arr);
// console.log(newArr);

/*
We get the output -
[ 1, 2, 3, 4, 5 ]
[ 2, 4, 6, 8, 10 ]

The above code can also be written as -
*/

const newArr1 = newArr.map((val) => {
  return val * 10;
});

console.log(arr);
console.log(newArr);
console.log(newArr1);

/*
We get the output -
[ 1, 2, 3, 4, 5 ]
[ 2, 4, 6, 8, 10 ]
[ 20, 40, 60, 80, 100 ]
*/
