// Let's define an array

const arr = [1, 2, 3, 4, 5];

/*
.reduce() basically reduces all the array elements / squeezes the array 
to only one value. This method produces a new value.
*/

const sumOfElements = arr.reduce(function (acc, val) {
  return acc + val;
}, 0);

console.log(arr);
console.log(sumOfElements);

/*
We get the output -
[ 1, 2, 3, 4, 5 ]
15

Let's break down line 10 - 12 ...
In line 10, 'function' is callback function, 'acc' is the previousValue.
Note that previousValue is often called as 'accumulator'.
'val' is the currentValue.

In line 12, '0' is the initialValue -> means the 'accumulator' is set to
the value at 0th index when the iteration through the array begins.

1st iteration => acc = 1 (0th index)
                 val = 2
                 1 + 2 = 3
2nd iteration => acc = 3
                 val = 3
                 3 + 3 = 6
3rd iteration => acc = 6
                 val = 4
                 6 + 4 = 10
4th iteration => acc = 10
                 val = 5
                 10 + 5 = 15   
                 
                 
The above code can also be written as -
*/

const sumOfElements = arr.reduce((acc, val) => {
  return acc + val;
}, 0);
