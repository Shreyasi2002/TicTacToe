//* Use of 'var', 'let' and 'const' keywords

//* Using 'var' keyword

function test() {
  if (true) {
    if (true) {
      var myVar = "Hello ^_^";
      console.log(myVar);
    }
    console.log(myVar);
  }
  console.log(myVar);
}

//* test();

/* 
When 'var' keyword is used, we get the output -
Hello ^_^
Hello ^_^
Hello ^_^

This shows that the scope of the variable is not so well-defined. 
The scope of any variable defined with 'var' keyword is basically 
the whole function.
We rarely use 'var' nowadays for this reason.
*/

//* Using 'let' keyword

function test_1() {
  if (true) {
    if (true) {
      let myVar = "Hello ^_^";
      console.log(myVar);
    }
    console.log(myVar);
  }
  console.log(myVar);
}

//* test_1();

/*
When 'let' keyword is used, we get the output - 
Hello ^_^
/Users/shreyasi/Desktop/React/Modern JavaScript/var_let_const.js:38
    console.log(myVar);
                ^

ReferenceError: myVar is not defined
    at test_1 (/Users/shreyasi/Desktop/React/Modern JavaScript/var_let_const.js:38:17)
    at Object.<anonymous> (/Users/shreyasi/Desktop/React/Modern JavaScript/var_let_const.js:43:1)
    at Module._compile (internal/modules/cjs/loader.js:1072:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
    at Module.load (internal/modules/cjs/loader.js:937:32)
    at Function.Module._load (internal/modules/cjs/loader.js:778:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47


We can clearly see that the code gives us error after executing line 36, sayinng
that the variable 'myVar' is not defined -- meaning that we are trying to access 
something which is not in its scope.

Now, let's do the same with 'const' keyword.
*/

//* Using 'const' keyword

function test_2() {
  if (true) {
    if (true) {
      const myVar = "Hello ^_^";
      console.log(myVar);
    }
    console.log(myVar);
  }
  console.log(myVar);
}

//* test_2();

/*
We get the same output as with 'let' keyword.
The only difference between 'let' and 'const' keyword is that when we assign
'const' to any variable, we can't reassign it, however we can modify it's 
properties if it is an object.
*/

const var1 = "Hello";
//* var1 = 2;

/*
We get the output -
var1 = 2;
     ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (/Users/shreyasi/Desktop/React/Modern JavaScript/var_let_const.js:94:6)
    at Module._compile (internal/modules/cjs/loader.js:1072:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
    at Module.load (internal/modules/cjs/loader.js:937:32)
    at Function.Module._load (internal/modules/cjs/loader.js:778:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47

*/
