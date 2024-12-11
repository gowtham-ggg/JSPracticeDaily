/*Function currying in JavaScript is a programming technique that transforms a function with multiple arguments into a series of functions,
 each taking a single argument*/


 function multiply(a) {
    return function(b) {
      return function(c) {
        return a * b * c;
      };
    };
  }
  
  const result = multiply(2)(3)(4);  // 2 * 3 * 4 = 24
  console.log(result);

  
  //USing arrow function

    const multiply = a => b => c => a * b * c;
    console.log(multiply(2)(3)(4)); // 24


    //Infinite curry

    function infiniteCurry(a) {
        // If the argument is undefined, end the currying
        if (a === undefined) {
          return 0;  // Terminating condition, returns the sum so far
        }
      
        // Otherwise, return a function that takes another argument
        return function(b) {
          if (b === undefined) {
            return a; // Return the value when there's no argument
          }
          return infiniteCurry(a + b); // Keep currying
        };
      }
      
      console.log(infiniteCurry(1)(2)(3)(4)()); // Output: 10
      