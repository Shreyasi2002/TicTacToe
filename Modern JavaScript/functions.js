// Function Declaration

funcDeclaration();

function funcDeclaration() {
  const f = 5;
}

/*
The above code will not give any errors.
*/

// Function Expression

funcExpression();

const funcExpression = function () {
  const t = 5;
};

/*
However, this code gives an error - 
funcExpression();
^

ReferenceError: Cannot access 'funcExpression' before initialization
    at Object.<anonymous> (/Users/shreyasi/Desktop/React/Modern JavaScript/functions.js:15:1)
    at Module._compile (internal/modules/cjs/loader.js:1072:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
    at Module.load (internal/modules/cjs/loader.js:937:32)
    at Function.Module._load (internal/modules/cjs/loader.js:778:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47

When we use function expressions, JavaScript sees it as a normal variable. The
situation is similar as - 

  console.log(variable);

  const variable = 5;

Thus, function expressions do not work the same as function declarations. This
is due to a phenomenon called "Hoisting".

In JavaScript, "Hoisting" is the default behavior of moving all the declarations 
at the top of the scope before code execution. Basically, it gives us an advantage 
that no matter where functions and variables are declared, they are moved to the 
top of their scope regardless of whether their scope is global or local.
*/
