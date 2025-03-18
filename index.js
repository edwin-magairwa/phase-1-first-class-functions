// This function takes a callback function as an argument and calls it.
function receivesAFunction(callback) {
  callback(); // Calls the function passed as an argument
}

// This function returns a named function.
function returnsANamedFunction() {
  function namedFunction() {
    console.log("I am a named function!");
  }
  return namedFunction; // Returning the named function
}

// This function returns an anonymous function.
function returnsAnAnonymousFunction() {
  return function () {
    console.log("I am an anonymous function!");
  };
}

// Testing Your Functions

// Test receivesAFunction
receivesAFunction(() => console.log("Callback function called!"));

// Test returnsANamedFunction
const namedFunc = returnsANamedFunction();
namedFunc(); // Logs: "I am a named function!"

// Test returnsAnAnonymousFunction
const anonFunc = returnsAnAnonymousFunction();
anonFunc(); // Logs: "I am an anonymous function!"