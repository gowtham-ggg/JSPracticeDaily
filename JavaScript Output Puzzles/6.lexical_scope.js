/**                          Lexical Scope                            
 
Defines the scope of variables and functions based on their position in the code 
 */


function outer() {
    let counter = 0; // counter is part of outer's lexical scope
    
    return function inner() {
      counter++;  // inner can access and modify counter from outer
      console.log(counter);
    };
  }
  
  const increment = outer(); // outer() is called, returning inner() as a closure
  increment(); // 1
  increment(); // 2
  increment(); // 3
  